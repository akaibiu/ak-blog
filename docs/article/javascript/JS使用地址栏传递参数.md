# :mouse2: JS使用地址栏传递参数



>在日常开发学习中，难免会遇到地址栏传递参数的案例，一起看看吧....

1. apis封装代码（一般在于axios封装第二层）

```javascript
// 商家店铺入驻 used
export function shopSetInApi(params){
	return request({
		url:'food/shop_manage_api/registerShop'+'?'+params,
		headers:{
			isToken:false,
		},
		method:'post',
	})
}

```
 2. 页面请求代码(一般在于axios封装第三层)
   
```javascript
            // Check Message Code is Right
			async checkCode(){
				let that=this;
				var param={phone:17738531129,code:'honey XiaoZhou'};
				var paramArr=[];
				for(var key in param){
					paramArr.push(key + "=" + param[key]);
				};
				let str=paramArr.join('&');
				await shopSetInApi(str).then(res=>{
					switch (res.code){
						case 200:
							that.$t.message.toast(res.msg); // 此处框架弹窗由<Tuniao-Ui>提供
							break;
						default:
							that.$t.message.toast(res.msg); // 此处框架弹窗由<Tuniao-Ui>提供
							break;
					}
				}).catch(err=>{
					that.$t.message.toast(err.msg); // 此处框架弹窗由<Tuniao-Ui>提供
				})
			},
```



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸