# :skull: uniapp小程序请求封装示例

>之前的请求代码模板尚未完善token功能，在开发的时候如果有携带token的话，`uniapp小程序请求封装案例`这篇文章足以够我们在日常开发的使用，但是接下来会有新的应用场景
>我司项目便加入了`无痛刷新token`的功能，接下来给大家上代码。如果您有更好的建议或意见也可加我微信与我沟通。
>>此篇文章若有疑惑不解之处，欢迎打扰 作者联系微信 Akaibiu (烦请备注说明来意，谢谢)

#### 1. 首先在项目根目录创建`utils`文件夹和`api`文件夹和`config`文件夹。
*    config: 项目公共配置文件夹,在此目录下创建`config.js`文件(写入常用的全局变量、项目请求地址等全局配置)
```javascript
module.exports = {
  baseUrl:process.env.NODE_ENV === 'development'?"http://192.168.87.00":"htpp://dev.lucklnk.com",   	// development本地环境  production 生产环境
  openid:'openid', 																						// 用户openid
  unionid:'unionid',    																				// 用户unionid
  version:"v1.0", 																						// uniapp version
  timestamp:'',																							// 时间戳
  AppId:'', 																							// RSA 加密所需参数 非小程序appid
  AppSecret:'',  																						// RSA 加密所需参数 
  PublicKey:``,																							// RSA 公钥
  sign: "",																								// request请求签名
  uniInfo: {
    name: "clerk",  																					// 应用名称(可不填)
	appid:'uniapp全局配置的appid', 																		 // APPID testing
    version: "1.0.0", 																					// 应用版本(可不填)
	code:'uni.login所使用的code', 																		 // 小程序code(可不填)
    logo: "uniapp小程序logo地址",									 									 // 应用logo(可不填)
    site_url: "xxxx", 																					// 官方网站(可不填)
    agreements: [{
        title: "隐私政策",
        url: "htttp://akaixz.com"
      },
    ]
  }
}

```

#### 2. 在`utils`文件夹内创建`request.js`文件。并且写入请求的常规配置文件
```javascript
/**
 *  @description 此处请求封装适用于普通request请求需要携带token并且需要无痛刷新token的应用场景
 *  @param config config 是全局的配置文件对象(包含url/appid等一些其他你项目需要用到的配置信息)
 *  @param getToken getToken 是获取本地存储token的方法
 *  @param setToken setToken 是设置本地存储token的方法
 *  @param tool tool 是封装的一些公共API适用方法(toast/confirm...)
 *  @param timeout timeout 设置请求超时时间 
 *  @param waitRequestList waitRequestList  请求等待队列数组
 *  @param isRefreshingToken isRefreshingToken  是否需要刷新token(默认为false不需要刷新token)
 *  @param refreshToken refreshToken 刷新token的请求函数
 *  @author Coding by Akai,Dear user,if you think this a litte uncertain,please add my WeChat to contact me;
 *  @description WeChat Akaibiu (添加时请备注来意,谢谢~!!!)
 *  @version 1.0.0 
 */
import config from '@/config/config.js';
import {getToken,setToken} from '@/utils/auth';
import tool from '@/utils/common.js';
import {refreshToken} from '@/apis/user.js';
let timeout = 10000; 
let waitRequestList = []; 
let isRefreshingToken = false;
const baseUrl = config.baseUrl;
const request = config => {
	/**
	 * @description  如果isToken为true的时候需要token(一般会在登录的时候存储token和token_type)  为false不需要token
	 * @description  config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token'); // token_type 一般情况下为'Bearer ' 切记有空格哦
	 * @description  config.header['Content-Type'] = 'application/x-www-form-urlencoded'; // 常规请求头配置
	 */
	const isToken = config.headers.isToken; 
	config.header = config.header || {};
	if (getToken() && isToken) {
		config.header['Authorization'] = uni.getStorageSync('token_type') + uni.getStorageSync('token');
	};
	/**
	 * @description  get请求映射params参数
	 */ 
	if (config.params) {
		let url = config.url + '?' + tool.tansParams(config.params);
		url = url.slice(0, -1)
		config.url = url
	}
	return new Promise((resolve, reject) => {
		uni.request({
			method: config.method || 'get',
			timeout: config.timeout || timeout,
			url: config.baseUrl || baseUrl + config.url,
			data: config.data,
			header: config.header,
			dataType: 'json',
			success(res) {
				switch (res.data.code) {
					case 401:
						/**
						 * @description 如果需要刷新token的时候,调用刷新token函数。此处!isRefreshingToken的值是true
						 */ 
						if (!isRefreshingToken) {
							/**
							 * @description 调用刷新token函数
							 */ 
							refreshTokenfn(); 
						}
						resolve(new Promise(reslove => {
							/**
							 * @description 将当前请求添加到请求队列中;等待刷新token函数执行后执行,实现无痛刷新。
							 */ 
							waitRequestList.push(() => {
								reslove(request(config))
							})
						}))
						break;
					case 500:
						tool.toastTip(res.data.msg, 'none', 1500);
						break;
					default:
						/* 默认执行操作 */
						break;
				}
				/**
				 * @description 请求成功返回的数据
				 */
				resolve(res.data) 
			},
			fail: (error) => {
				let {errMsg} = error
				if (errMsg === 'Network Error') {
					errMsg = '后端接口连接异常'
				} else if (errMsg.includes('timeout')) {
					errMsg = '系统接口请求超时'
				} else if (errMsg.includes('Request failed with status code')) {
					errMsg = '系统接口' + errMsg.substr(errMsg.length - 3) + '异常'
				}
				tool.toastTip(errMsg, 'none', 1500)
				/**
				 * @description 请求失败返回的消息
				 */
				reject(error) 
			},
			complete() {
				/**
				 * @description 请求完做的事
				 */
				uni.hideLoading() 
			}
		})
	})
}

/**
 * @description 刷新token功能函数
 * @param 		无需请求参数
 * @author      Code By Akai,if you think this a litte uncertain,Please add my WeChat to contact me;
 */
function refreshTokenfn() {
	isRefreshingToken = true; // 需要刷新token标识为true
	refreshToken().then(res => {
		if (res.data.code === 401 || res.data.code === 400) {
			/**
			 * @description 未登录,跳转到登录页
			 */
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return
		}
		/**
		 * @description 存储返回的token
		 * @description 是否需要刷新token为false
		 * @description 清空 waitRequestList请求等待队列
		 */
		setToken(res.data.token); 
		isRefreshingToken = false; 
		waitRequestList.map(ak => ak())
		waitRequestList = []
	})
}

/**
 *  @description 暴露出request请求供其他业务使用
 */

export default request

// 函数参数转换常用于get请求(在以上的 request 函数内会使用到)
function tansParams(params) {
    let result = ''
    for (const propName of Object.keys(params)) {
        const value = params[propName]
        var part = encodeURIComponent(propName) + "="
        if (value !== null && value !== "" && typeof (value) !== "undefined") {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                        let params = propName + '[' + key + ']'
                        var subPart = encodeURIComponent(params) + "="
                        result += subPart + encodeURIComponent(value[key]) + "&"
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + "&"
            }
        }
    }
    return result
}
export default request

```

#### 3.在`api`文件夹内创建`apis.js`文件，具体配置如下
```javascript
// 引入request文件夹内的request.js文件内暴露的request函数
import request from '@/request/request.js';	  // REQUEST FUNCTION
/**
 * @description 以下为version1.0版本所有请求功能函数封装代码
 */
// CLERK LOGIN API FUNCTION(登录>>>>>>)
export function loginApi(param) {
	return request({
    // 请求接口地址 在请求时会加上baseUrl,具体配置请鼠标上滑查看request.js文件封装内容
		url: '/api/clerk/login',
    // 请求头配置，isToken为true的时候需要携带token,isToken为false的时候不需要携带token
		headers: {
			isToken: false,
		},
    // 请求方法
		method: 'post',
    // 请求参数
		data: param
	})
}

// GET USERINFO API FUNCTION(获取用户信息>>>>>>)
export function getUserinfoApi(param) {
	return request({
		url: '/api/clerk/userInfo',
		headers: {
			isToken: true,
		},
		method: 'post',
		data: param
	})
}
```

#### 4.使用咱们封装的`request`请求具体示例代码如下所示(页面使用)

```javascript
// 首先在页面中的script标签内引入接口api函数
	import {loginApi} from '@/apis/api.js';
	export default {
		data() {
			return {}
		},
    onShow(){
      this.getLogin();
    },
		methods: {
			// 具体请求示例代码------------------------------------------------------------------------------------------
			getLogin() {
				let that = this;
				const postData = {param1: '参数1',param2: '参数2',param3: '参数3'};
				loginApi(postData).then(res => {
					const {data,code} = res;
					switch (code) {
						case 200:
							// 请求成功要执行的逻辑操作
							break;
						default:
							// 请求失败
							break;
					}
				}).catch(err => {
					// 请求失败
				})
			},
		}
	}


```

* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸