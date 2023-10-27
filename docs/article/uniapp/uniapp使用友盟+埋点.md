# :ear_of_rice: uniapp使用友盟+埋点



>在日常小程序开发中，也许会用到埋点来统计用户操作反馈的，我用过友盟+平台的埋点数据处理，接下来看看我是怎么使用的，想要一起看看吧....

#### 使用uniapp打包的H5页面做埋点(使用第三方平台 友盟+)  
[友盟官网](https://mp.umeng.com/analysis/62b9873d88ccdf4b7eaee1b1/conversion/custom-event)
[H5接入SDK文档](Link: https://developer.umeng.com/docs/147615/detail/290919)

* 1.0 在当前的vue页面加入代码
![alt 示例图片](/img/study/uniapp/uniapp使用友盟+埋点/必要代码.jpg)



```javascript
(function(w, d, s, q, i) {
		w[q] = w[q] || [];
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s);
		j.async = true;
		j.id = 'beacon-aplus';
		j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'aplus_queue', '203467608');
	
	//集成应用的appKey
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['appKey', '62b9873d88ccdf4b7eaee1b1']
	});
	aplus_queue.push({
	 action: 'aplus.sendPV',
	  arguments: [{is_auto: false}]
	});
	var pageEventConfig = {
		is_auto: true
	};
	//是否开启调试模式 
	aplus_queue.push({
		action: 'aplus.setMetaInfo',
		arguments: ['DEBUG', true]
	});
	/******************************************************************/

```

* 2.0使用自定义事件
![alt 示例图片](/img/study/uniapp/uniapp使用友盟+埋点/事件.jpg)

```javascript
onHide() {
			let that=this;
			// <--------友盟+ 用户关闭退出页面 自定义事件---------->
			const {aplus_queue} = window;
			aplus_queue.push({
			 action: 'aplus.record',
			  arguments: ['schaoka_event_endPage']
			});
		},
```


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸