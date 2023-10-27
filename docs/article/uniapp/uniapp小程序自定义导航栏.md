# :peanuts: uniapp小程序自定义导航栏




>在日常小程序开发中，难免会遇到一些自定义导航栏的功能，下面这个小案例带您演示自定义导航栏!一起来看看吧....



#### 1.组件代码如下（在components文件夹下创建一个navTab.vue文件）
```vue
<template>
	<view class="uni-status-bar" v-if="navShow">
		<view class="statusBar" :style="{ height: statusBarHeight,background:statusBacColor}">
		</view>
		<view class="capsule" :style="{height:capsuleHeight,background:capsuleBackColor}">
			<view class="left">
				<u-icon name="arrow-left"  @tap="goBack" v-if="iconShow" :color="iconColor" size="26" ></u-icon>
			</view>
			<view class="middle">
				<view class="title" :style="{color:titleColor,fontSize:titleSize}">
					{{title}}
				</view>
			</view>
			<view class="right">
				<view class="rightTitle" v-if="rightShow" :style="{color:rightTitleColor}">
					{{rightTitle}}
				</view>
				<view class="icon" v-else>
					<u-icon name="arrow-left" color="#333" size="28" v-if="rightIconShow"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	/**
	 * @param OBJECT code by akaibiu@126.com
	*/ 
	// #ifdef MP-WEIXIN
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight+'px';
	var capsuleHeight=uni.getMenuButtonBoundingClientRect().top+'px';
	// #endif
	export default {
		name: 'UniStatusBar',
		props: {
			// 状态栏背景色(time electric)
			statusBacColor: {
				type: String,
				default: 'rgba(0,0,0,0.2)',
			},
			// 是否显示自定义导航栏或者沉浸式导航安
			navShow:{
				type:Boolean,
				default:false
			},
			// 标题文本(middle)
			title:{
				type:String,
				default:'ZCXF'
			},
			// 左边返回图标显示隐藏
			iconShow:{
				type:Boolean,
				default:true,
			},
			// 胶囊部分背景色
			capsuleBackColor:{
				type:String,
				default: 'rgba(0,0,0,0.2)',
			},
			// 标题颜色(middle)
			titleColor:{
				type:String,
				default:'#333'
			},
			// 返回图标颜色
			iconColor:{
				type:String,
				default:'#333'
			},
			// 标题大小
			titleSize:{
				type:String,
				default:"30rpx",
			},
			// 右边菜单
			rightShow:{
				type:Boolean,
				default:true
			},
			// 右边标题
			rightTitle:{
				type:String,
				default:''
			},
			// 右边标题颜色
			rightTitleColor:{
				type:String,
				default:'#333'
			},
			// 右边icon显示
			rightIconShow:{
				type:Boolean,
				default:false
			},	
		},
		data() {
			return {
				statusBarHeight: statusBarHeight,
				capsuleHeight:capsuleHeight,
			}
		},
		methods:{
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@font-face{
		font-family: 'akaiFont';
		src:url('https://admin.bbtedu03.com:444/iconfont.ttf')
	}
	.uni-status-bar {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	.statusBar{
		width: 100%;
		height: var(--status-bar-height);
	}
	.capsule{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rpx 15rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		.left{
			/deep/.u-icon__icon{
				color: #333 !important;
			}
			width: 10%;
			height: 100%;
			display: flex;
			align-items: center;
		}
		.middle{
			font-size: 26rpx;
			// font-weight: bold;
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.title{
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.right{
			font-size: 32rpx;
			font-weight: bold;
			width: 10%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>


```

#### 2.如何使用(在main.js引入并全局注册)

```javascript
import navTab from '@/components/nvaTab/navTab.vue';
Vue.component('navTab',navTab)
```

#### 3.在页面使用组件

```javascript
<navTab :title="title" :iconShow="iconShow" iconColor="#fff" titleColor="#fff" :statusBacColor="navBackColor" :capsuleBackColor="navBackColor" :navShow="navShow"></navTab>
```
#### 3.1 在页面需要定义的组件数据
```javascript
iconShow: false,
  navShow: true,
  title: '',
  navBackColor: 'linear-gradient(to right, #efb41f 0%, #ec8942 100%);',
  statusCapsuleHeight: (uni.getSystemInfoSync().statusBarHeight + uni.getMenuButtonBoundingClientRect().top) + 'px'
```

![alt 示例图片](/img/study/uniapp/uniapp小程序自定义导航栏/demo.png)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸