# :elephant: JS传递参数加密



>在日常开发学习中，肯定会或多或少用到参数加密，以下是我在工作中遇到的参数加密业务功能，一起看看吧....
1. uniapp参数加密(传输给后端参数加密)
   1. 1.使用npm install crypto 下载加密所需文件
   2. 2.在项目根目录下创建一个utils文件夹，创建一个encryption.js文件写入如下代码块
```javascript
let CryptoJS = require('crypto-js');
	// Crypto加密方法封装
 const aesUtil = {
 	// 加密函數
 	encrypt: (word, keyStr) => {
 		if (word instanceof Object) {
 			//JSON.stringify
 			word = JSON.stringify(word)
 		}
 		var key = CryptoJS.enc.Utf8.parse(keyStr)
 		var encryptedObj = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(word), key, {
 			mode: CryptoJS.mode.ECB,
 			padding: CryptoJS.pad.Pkcs7,
 		}, )
 		return encryptedObj.toString()
 	},
 	// 解密函數
 	decrypt: (word, keyStr) => {
 		let key = CryptoJS.enc.Utf8.parse(keyStr)
 		let decrypt = CryptoJS.AES.decrypt(word, key, {
 			mode: CryptoJS.mode.ECB,
 			padding: CryptoJS.pad.ZeroPadding,
 		}, )
 		let decString = CryptoJS.enc.Utf8.stringify(decrypt).toString();
 		return decString
 	}
 };
 module.exports={
	 aesUtil
 }

```
   3. 使用加密参数功能函数
      1. 在需要使用加密的页面引入encryption.js文件
         1. import Encry from '@/utils/encryption.js'
      2. 2.在使用的页面引入与后端约定的key(非常重要，可以挂载全局变量)，example: const key="cd10239350d94d639cba546a876c0daa"
   ```javascript
   //  初始化自定义参数
    const key="cd10239350d94d639cba546a876c0daa";  // 前端与后端约定的共同协议密匙key
    const postData={
    name:'小邱',
    age:21,
    height:175
    };
    console.log(Encry.aesUtil.encrypt(postData,key),'参数加密查看')
    console.log(Encry.aesUtil.decrypt(postData,key),'参数解密查看')
    uni.request({
    url:'fdfsdf',
    data: Encry.aesUtil.encrypt(postData, key), // 请求参数加密
    methods:'GET',
    header:{
        // 配置请求头信息
    },
    success(res){
        console.log(res)
    }
    })

   ```
2. 解密后端返回参数
   1. 在utils文件夹内创建一个WXBizDataCrypt.js文件，写入以下代码
```javascript
var crypto = require('crypto')

function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  var sessionKey = new Buffer(this.sessionKey, 'base64')
  encryptedData = new Buffer(encryptedData, 'base64')
  iv = new Buffer(iv, 'base64')

  try {
     // 解密
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true)
    var decoded = decipher.update(encryptedData, 'binary', 'utf8')
    decoded += decipher.final('utf8')
    
    decoded = JSON.parse(decoded)

  } catch (err) {
    throw new Error('Illegal Buffer')
  }

  if (decoded.watermark.appid !== this.appId) {
    throw new Error('Illegal Buffer')
  }

  return decoded
}

module.exports = WXBizDataCrypt

```
   2. 使用解密功能函数
      1. 在需要使用的页面引入该文件
         1. import WXBizDataCrypt from '@/utils/WXBizDataCrypt.js'
      2. 2.例如手机号授权的时候
```javascript
    // 1.首先通过uni.login获取到sessionKey并用变量保存
    // 2.通过手机号授权获取到encryptedData和iv
    // 3.接下来解密数据获取手机号
    const data={
    iv:iv,
    encryptedData:encryptedData,
    sessionKey:sessionKey
    },
    // 使用解密获取数据 openId为小程序的openId,sessionKey是通过uni.login获取到的sessionkey;
    let pc=new WXBizDataCrypt(openId,sesssionKey);
    // 获取data的两个参数都是通过手机授权获取到的参数
    const data=pc.decryptData(encryptedData,iv); 
    console.log(data.phoneNumber,'获取到的手机号码')
```
3. 前端使用md5加密
   1. 首先下载md5加密 
      1. 打开dos命令窗口 npm install js-md5 -D
      2. 在main.js文件里引入并挂载全局
         1. mport Md5 from 'js-md5'; //  引入
         2. Vue.prototype.$md5=Md5;
      3. 在需要使用md5加密的页面直接使用
         1. postData是请求参数 时间戳 signKey 预定的一个密钥
         2. let result=$md5(JSON.stringify(postData)+(newDate().valueOf()siginKey)
         3. result就是md5加密后的数据
4. 4.原生HTML使用AES加密

```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
  var aseKey = "12345678"     //秘钥必须为：8/16/32位
   var message = "13785624612";

//加密
var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
}).toString();
console.log(encrypt); 

//解密
var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
}).toString(CryptoJS.enc.Utf8);
console.log(decrypt);    //13785624612

```
1. 原色JS使用MD5加密生成验签sign

```javascript
	<script src="https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.19.0/js/md5.js"></script>
     // data 为原始参数对象  key为MD5验签的Key
     let sign=md5(JSON.stringify(data) + (new Date().valueOf()) + 'fdfdffsdfsf'),
```

<font color="#dd00dd">不想上图了，如有疑问咨询作者</font><br />



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸