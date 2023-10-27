# :peach: uniapp小程序使用vidio案例




>在日常开发中，也许会遇到视频播放的业务，下面这个小案例带您了解uniapp小程序内vidio标签使用以及弹幕的使用!一起来看看吧....




```vue
<template>
	<view class="page">
		<video id="myVideo" :src="vidioList[current].src"
		 @error="videoErrorCallback" :danmu-list="danmuList" :show-loading="true" enable-danmu danmu-btn controls :poster="posterSrc[current].src"></video>
		  <u--textarea v-model="danmuValue" placeholder="请输入弹幕内容!(例如:一天到晚在那儿嘿嘿嘿)" ></u--textarea>
		 <view class="btnList">
			 <u-button :throttleTime="1000" type="error" text="重新输入" @click="deleteValue"></u-button>
		 	 <u-button :throttleTime="1000" type="primary" text="发送弹幕" @click="sendDanmu"></u-button>
		 	 <u-button :throttleTime="1000" type="primary" text="播放" @click="startPlay"></u-button>
		 </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				danmuList: [
					{text: '遇见你后的每一秒都是心动瞬间❤️ ',color: '#ff0000',time: 1},
					{text: '喜欢你，笨拙而热烈，一无所有却又倾尽所有',color: '#ff00ff',time: 4},
					{text: '有机会耳机分你一个 然后开启心动模式',color: '#fff7ef',time: 7},
					{text: '我今晚会很忙，忙着跟你过日子',color: '#8eff59',time: 10},
					{text: '你走向我，我觉得一日不见如隔三秋；你朝我笑，我又觉得三秋未见不过一日',color: '#fff365',time: 13},
					{text: '你的嘴唇由我做主',color: '#ff54d2',time: 16},
					{text: '你真是个除了膨膨膨膨胀以外一无是处的小猪呢',color: '#ff00ff',time: 19},
					{text: '愿山野浓雾都有路灯风雨，漂泊都能归舟，你能伴我入眠。',color: '#ddffd0',time: 22},
					{text: '没有什么避风港 钞票才是梦想',color: '#4b7bff',time: 25},
					{text: '其实你也有超能力，怎么减都不瘦的能力。',color: '#ff00ff',time: 28},
					{text: '你是转角遇到爱，可你想过对方吗？他是转角遇到鬼呀。',color: '#6cecff',time: 31},
					{text: '我的意中人是个盖世英雄，总有一天他会踏着七彩祥云去娶别人。',color: '#ff00ff',time: 34},
					{text: '不要以为自己坚持不来，你一定会坚持熬夜玩手机。',color: '#ff1e47',time: 37},
					{text: '你以为今天是最糟的一天么，明天会让你改变这个看法的。',color: '#f6eeff',time: 40},
					{text: '别看我挣的少，但是我省的多，昨天法拉利又省下两百多万。',color: '#ff00ff',time: 43},
					{text: '我能想到最浪漫的事，就是和你一起吃吃吃，然后你付钱。',color: '#2298ff',time: 46},
					{text: '你要明白，不欺少年穷是对他们，你只是穷而已。',color: '#ff6739',time: 49},
					{text: '看着溅我一身水远去的大奔，劳资心想等我有钱了，一定买一套雨衣。',color: '#26ff34',time: 52},
					{text: '别问我失败了怎么办，说得好像你成功过一样。',color: '#ff00ff',time: 55},
					{text: 'CODE BY:AKAI-WX:Akaibiu',color: '#ff7640',time: 58},
					
				],
				danmuValue: '',
				posterSrc:[
					{src:'https://iconfont.alicdn.com/t/6d3f6cde-22da-48f7-af62-675e03c46644.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/9354d6a3-31f0-4c33-b0d8-a7db942e4b7a.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/bc432a9e-b50e-4525-9ddf-a756fa4c43c8.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/97f36b15-c8ce-4c2d-a08d-dc97a2ddbecc.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/6d3f6cde-22da-48f7-af62-675e03c46644.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/9354d6a3-31f0-4c33-b0d8-a7db942e4b7a.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/bc432a9e-b50e-4525-9ddf-a756fa4c43c8.png@500h_500w.png'},
					{src:'https://iconfont.alicdn.com/t/97f36b15-c8ce-4c2d-a08d-dc97a2ddbecc.png@500h_500w.png'},	
				],
				vidioList:[
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529827736779018242%E9%A9%B4%E5%B0%8F%E5%BC%9F%E5%8F%98%E7%9F%B3%E5%A4%B4%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E8%AE%B2%E8%A7%A3%E7%89%88%281%29.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529803567022526466%E8%B0%A2%E8%B0%A2%E4%BD%A0%EF%BC%8C%E9%98%BF%E5%AB%B2%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E5%B9%BF%E5%91%8A%E7%89%88.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529755236636348417%E5%B0%8F%E6%98%9F%E6%98%9F%E7%9A%84%E5%A4%A7%E6%9C%88%E9%A5%BC%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%29%E8%AE%B2%E8%A7%A3%E7%89%88.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529828314099798017%E9%A9%B4%E5%B0%8F%E5%BC%9F%E5%8F%98%E7%9F%B3%E5%A4%B4%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E6%95%85%E4%BA%8B%E7%89%88.mp4'},
					{src:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529827736779018242%E9%A9%B4%E5%B0%8F%E5%BC%9F%E5%8F%98%E7%9F%B3%E5%A4%B4%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E8%AE%B2%E8%A7%A3%E7%89%88%281%29.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529803567022526466%E8%B0%A2%E8%B0%A2%E4%BD%A0%EF%BC%8C%E9%98%BF%E5%AB%B2%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E5%B9%BF%E5%91%8A%E7%89%88.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529755236636348417%E5%B0%8F%E6%98%9F%E6%98%9F%E7%9A%84%E5%A4%A7%E6%9C%88%E9%A5%BC%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%29%E8%AE%B2%E8%A7%A3%E7%89%88.mp4'},
					{src:'https://bbkvideos.obs.cn-east-3.myhuaweicloud.com:443/1529828314099798017%E9%A9%B4%E5%B0%8F%E5%BC%9F%E5%8F%98%E7%9F%B3%E5%A4%B4%EF%BC%88%E4%B8%8A%E4%BC%A0%E7%89%88%EF%BC%89%E6%95%85%E4%BA%8B%E7%89%88.mp4'},
					{src:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v'}
				],
				current:null,
			}
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo');
		},
		onShow(){
			this.current=Math.round(Math.random()*10);
		},
		methods: {
			// 播放
			play(){
				console.log(1111);
			},
			// 暂停
			pause(){
				
			},
			// 安妮
			startPlay(){
				this.play()
			},
			// 发送弹幕
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor(),
				});
				this.danmuValue = '';
			},
			// 视频播放出错的回调函数
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			// 删除输入的弹幕
			deleteValue(){
				this.danmuValue="";
			},
			// 获取随机弹幕颜色
			getRandomColor: function() {
				// 设定颜色数组
				const rgb = [];
				for (let i = 0; i < 3; ++i) {
					// 生成随机颜色
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style lang="less" scoped>
	video {width: 100%;}
	/deep/.u-textarea{
		margin: 30rpx 10rpx !important;
		height: 220rpx;
	}
	/deep/.u-button{
		margin: 0rpx 20rpx;
	}
	.btnList{
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
```

![alt 示例图片](/img/study/uniapp/uniapp小程序使用vedio案例/vedio.png)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸