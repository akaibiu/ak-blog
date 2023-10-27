

# :hibiscus: uniapp-H5使用微信登录



>在日常小程序开发中，也许会遇到H5使用微信登录的情况，其实我也不熟练，还没涉及过H5微信登录，一起看看吧....

>



```javascript
async getLoginState() {
				let that = this;
				if (uni.getStorageSync('YZstrUserInfo')) { //如果本地存在用户信息
					var userInfo = JSON.parse(uni.getStorageSync('YZstrUserInfo'));
					that.userInfo = userInfo;
				} else { //如果本地不存在用户信息
					let url = window.location.href;
					var sceneParams = decodeURIComponent(url.split('?')[1]);
					if (sceneParams.indexOf('code') != -1) {
						sceneParams = sceneParams.split('&');
						if (sceneParams.length) {
							sceneParams.forEach(item => {
								if (item.indexOf('code') != -1) { //url里存在code
									that.getUserInfo(item.split('=')[1]); //利用code获取用户信息
								}
							});
						}
					} else { //url里不存在code
						var newUrl =
							`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx778c7ad88c2d766d&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect`;
						location.href = newUrl;
						去微信公众号H5授权页
					}
				}
			}

```





* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸