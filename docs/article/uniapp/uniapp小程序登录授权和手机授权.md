

# :mushroom: uniapp小程序登录授权和手机授权



>在日常小程序开发中，肯定会涉及到uniapp小程序登录授权和获取用户手机号授权的功能业务，以下代码便可实现此业务功能，一起看看吧....

#### 1.首先在页面上设计一个按钮button 登录授权如下
```html
<button class="bottom" type='primary' @click="getUserProfile">
  微信登录授权
</button>
```
#### 2.以下是这个按钮的JS代码部分

```javascript
getUserProfile:(function() {
  var that = this
  // #ifdef MP-WEIXIN
  uni.getProvider({
    service: 'oauth',
    success: function(res) {
      if (~res.provider.indexOf('weixin')) {
        wx.login({
          success: (res) => {
            // 获取code
            that.code = res.code
            console.log('获取信息code', res.code);
          }
        })
        uni.getUserProfile({
          desc: '登录',
          success: async (res) => {
            console.log('获取信息getUserProfile', res);
            uni.setStorageSync('userInfo', res.userInfo);
          },
          fail: (res) => {
            console.log(res, '获取用户信息失败的响应数据')
          }
        });
      } else {
        uni.showToast({
          title: '请先安装微信或升级版本',
          icon: "none"
        });
      }
    }
  });
  //#endif
			}),
```

#### 3.获取手机号码授权 先在页面创建一个按钮并且设置按钮的type
```html
<button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="PhoneNumber">
  点击授权手机登录
</button>
```

#### 4.以下是获取手机号码授权的JS代码

```javascript
PhoneNumber(e) {
  let that = this;
  // 用户拒绝手机授权
  if (e.detail.errMsg !== "getPhoneNumber:ok") {
    uni.showToast({
      title: '建议完成手机授权哦!',
      icon: 'none',
      duration: 1500
    })
    return;
  } else {
    const postData = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      code: that.code
    };
    API.requestPost(loginApi, {
      edata: Encry.aesUtil.encrypt(postData, API.key), // 请求参数加密
      timestamp: new Date().valueOf(), // 时间戳
      sign: this.$md5(JSON.stringify(postData) + (new Date().valueOf()) + API.signKey), // 签名
    }, res => {
      uni.setStorageSync('openId', res.data.data.openId);
      uni.setStorageSync('seesionKey', res.data.data.seesionKey);
      // 解密获取data获取用户手机
      let pc = new WXBizDataCrypt(API.appId, res.data.data
                                  .seesionKey);
      let data = pc.decryptData(e.detail.encryptedData, e.detail.iv);
      uni.setStorageSync('phone', data.phoneNumber)
      console.log(data.phoneNumber, '手机号')
      uni.showLoading({
        title: '登陆中...'
      });
      setTimeout(function() {
        uni.hideLoading();
        uni.reLaunch({
          url: '../mine/mine'
        });
      }, 500)
    }, err => {
      console.log(err, '请求失败了')
    })
  }
			},
```


#### 5.uniapp检查用户登录状态 使用checkSession

```javascript
uni.checkSession({
  success: function(res) {
    // sessionKey一般适用于后端用户保存用户首次登录注册后的唯一id(首次登录注册用户，登录过去只是登录账号不注册用户)
    console.log("处于登录状态,判断是否获取到sessionKey",uni.getStorageSync('seesionKey'));
    if (uni.getStorageSync('seesionKey')) {
      this.isCanUse = false;// 你的登录逻辑，比如登录页或者调起登录授权
      uni.showLoading({
        title: 'Loading...'
      });
      setTimeout(function() {
        uni.hideLoading();
        uni.switchTab({
          url: '../mine/mine'
        });
      }, 500)
    } else {
      this.isCanUse = true; // 跳转到你的登录逻辑，比如登录页或者调起登录授权
    }
  },
  fail: function(res) {
    console.log("需要重新登录,请登录");
    this.isCanUse = true;
  }
})

// 使用uni.checkSession可以判断用户登录是否过期，success的回调是没有过期，而fail的回调是过期

```


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸