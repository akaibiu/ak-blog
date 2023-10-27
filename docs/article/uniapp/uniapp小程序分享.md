

# :cherries: uniapp小程序分享到微信和朋友圈



>在日常小程序开发中，开发的小程序若涉及到了分享功能的话，以下这个我自己在工作中用到的分享案例分享给大家,一起看看吧....

> 如果你需要通过按钮分享的话，只是需要将`button`按钮上加一个`open-type="share"`
![alt 示例图片](/img/study/uniapp/uniapp小程序分享/代码.jpg)



![alt 示例图片](/img/study/uniapp/uniapp小程序分享/按钮分享.jpg)


```javascript
onLoad(){
	wx.showShareMenu({
		withShareTicket:true,
		//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
		menus:["shareAppMessage","shareTimeline"]
	})
},
//发送给朋友
onShareAppMessage(res) {
	// 此处的distSource为分享者的部分信息，需要传递给其他人
	let distSource = uni.getStorageSync('distSource');
	if (distSource) {
		return {
			title: '欢迎使用xxx商城',
			type: 0,
			path: '/pages/index/index?id=' + distSource,
			summary: "",
			imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
		}
	}
},
//分享到朋友圈
onShareTimeline(res) {
	let distSource = uni.getStorageSync('distSource');
	if (distSource) {
		return {
			title: '欢迎使用xxx商城',
			type: 0,
			query: 'id=' + distSource,
			summary: "",
			imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
		}
	}
},

```

![alt 示例图片](/img/study/uniapp/uniapp小程序分享/好友.jpg)
![alt 示例图片](/img/study/uniapp/uniapp小程序分享/朋友圈.jpg)





* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸