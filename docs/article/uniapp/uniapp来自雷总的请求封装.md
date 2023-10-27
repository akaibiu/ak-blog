# :sunglasses: uniapp来自雷总的请求封装

>接下来这篇请求封装来自作者朋友，一位很厉害的武汉前端developer,他的请求封装和作者自己的相比有异曲同工之妙却又更胜一筹。作者在经过细致的研读之后发现还是很棒的。
>为了方便大家的阅读和使用，我对原文章略有删减但是增加了很多注解注释。以下是删减后的源码，一起看看吧....
>>此篇文章若有疑惑不解之处，欢迎打扰 作者联系微信 Akaibiu 或者联系此篇文章作者 lbnice1121 (烦请备注说明来意，谢谢)



```javascript
import store from '../store/index.js'; // 使用vuex来做token的存取
import md5 from 'js-md5'; // 导入雷总对token的md5加密方法
var appleturl = 'http://192.168.1.65:8581'; //本地测试请求url
var appleturl = 'https://xxxxxxxxxxx.com'; //线上环境请求url
export default appleturl; // 暴露url
// #ifdef MP-WEIXIN
// #endif
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params, header = {}) {
	var token = store.getters.gettoken; // 取vuex的token
	var refreshToken = md5(token); // 此处雷总使用了加密后的token作为refreshToken
	var heads = {
		'token': token || '',
		'refresh-token': refreshToken || '',
	};
	Object.assign(header, heads);
	return new Promise((resolve, reject) => {
		uni.request({
			method: 'GET',
			url: appleturl + url,
			data: params,
			header: header,
			dataType: 'json',
		}).then((response) => {
			let [error, res] = response; // 解构响应的res或者error 很规格 
			let {
				header,
				statusCode
			} = res;
			if (statusCode == 500) {
				uni.showToast({
					title: '服务器内部错误',
					icon: 'error',
					duration: 2000
				});
				return;
			}
			if (header.token && header.token != token) {
				store.commit('SET_TOKEN', header.token);
			}
			let {
				data,
				msg,
				errCode
			} = res.data;
			if (errCode != 200 && errCode) {
				if (msg == '请先登录') {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
				if (msg) {
					uni.showToast({
						title: msg,
						icon: 'none', //错误
						duration: 2000
					});
				}
				return;
			}
			resolve(res.data);
		}).catch((error) => {
			let [err, res] = error;
			reject(err)
		})
	});
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params, header = {}) {
	var token = store.getters.gettoken;
	var city = store.getters.getusercity;
	// console.log(location,'*************')
	var refreshToken = md5(token)
	var heads = {
		'token': token || '',
		'refresh-token': refreshToken || '',
	};
	Object.assign(header, heads);
	return new Promise((resolve, reject) => {
		uni.request({
			method: 'POST',
			url: appleturl + url,
			data: params,
			header,
			dataType: 'json',
		}).then((response) => {
			let [error, res] = response;
			let {
				header,
				statusCode
			} = res;
			// console.log(statusCode)
			if (statusCode == 500) {
				uni.showToast({
					title: '服务器内部错误',
					icon: 'error',
					duration: 2000
				});
				return;
			}

			if (header.token && header.token != token) {
				store.commit('SET_TOKEN', header.token);
			}

			let {
				data,
				msg,
				errCode
			} = res.data;
			if (errCode != 200 && errCode) {
				if (msg == '请先登录') {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
				if (msg) {
					uni.showToast({
						title: msg,
						icon: 'none', //错误
						duration: 2000
					});
				}
				return;
			}
			// else if(errCode == 0){
			// 	uni.showToast({
			// 		title: msg,
			// 		icon: 'none',
			// 		duration: 2000
			// 	});
			// }
			resolve(res.data);
		}).catch((error) => {
			let [err, res] = error;
			reject(err)
		})
	});
}

/** 
 * upload方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {File} filePath [文件路径] 
 * @param {String} name [文件名称] 
 */
export function upload(url, filePath = '', name = 'file', header = {}) {
	var token = store.getters.gettoken;
	if (!token) token = uni.getStorageSync('token');
	var refreshToken = md5(token)
	var heads = {
		'token': token || '',
		'refresh-token': refreshToken || '',
	};
	Object.assign(header, heads);
	return new Promise((resolve, reject) => {
		var uper = uni.uploadFile({
			url: appleturl + url,
			filePath,
			name,
			header,
		}).then((response) => {
			let [error, res] = response;
			console.log(res)
			res.data = JSON.parse(res.data);
			let {
				data,
				msg,
				errCode
			} = res.data;
			if (errCode != 200 && errCode) {
				if (msg) {
					uni.showToast({
						title: msg,
						icon: 'none', //错误
						duration: 2000
					});
				}
				return;
			}
			resolve(res.data);
		}).catch((error) => {
			let [err, res] = error;
			reject(err)
		})
	})
}


```



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸