
# :desert_island: uniapp小程序搜索框导航栏



>在日常开发学习中，难免会遇到一些自定义导航栏的设置，比如商城小程序的搜索框，记下来这个案例带大家了解一下如何使用自定义导航栏，学会这个后面有其他样式的只需要在上面做更改即可。一起看看吧....

<font color="#dd00dd">在使用自定义导航栏之前要先把你想使用导航栏的页面设置成沉浸式导航栏</font><br />

>将你的`page.json`里面该页面的`"style"`的json对象里面加上`"navigationStyle": "custom"`
>>以下是页面的完整代码

```vue
<template>
	<view class="container">
		<view class="navFixed">
			<!-- 这个地方是状态栏高度 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 这个地方是导航栏高度 按钮文字胶囊部分 -->
			<view class="navContent" :style="{height:navBarHeight+'px',width:searchBoxWidth+'px'}">
				<view class="navSearch">
					<view class="navSearchIcon">
						<!-- !!! 如果你不想使用uni-icon的话 请使用您自己的突变，然后将你自己的图标或者其他框架的icon放到这个地方 -->
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navSerach">
						<input class="navSearchText" type="text" v-model="val" placeholder-class="holderColor" placeholder="搜索企业名称" />
					</view>
				</view>
			</view>
		</view>
		<!-- 下面就是你开始操作的内容了哦.....开始开发吧 -->
		<view :style="{paddingTop: statusBarHeight+navBarHeight+'px'}" class="wrap">
			我是图图小淘气 面对世界很好奇
		</view>
	</view>
</template>
<script>
	/**
	 * @description authur This navTabbar was coded by Akai,If in doubt,you can contact my wechat!(Akaibiu)
	 */ 
	export default {
		data() {
			return {
				statusBarHeight: 0, // 状态栏高度
				navBarHeight: 0, // 导航栏高度(按钮部分导航栏-这个高度是除开状态栏的)
				searchBoxWidth: 0, // 搜索框宽度
				val: '', // 输入框的值
			}
		},
		onLoad(options) {
			// 获取手机系统信息(包括状态栏高度等等，但是info.capsuleHeight已经被废弃了 热烈的温 )
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight; // 状态栏高度
			this.searchBoxWidth = info.searchBoxWidth; // 视口宽度
			// 条件编译-以下仅作为微信小程序平台代码，其他平台代码是否有兼容我也不知道
			// #ifdef MP-WEIXIN
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect(); // 获取胶囊按钮部分高度，其实导航栏高度
			/**
			 * 显示模态弹窗
			 * @description navBarHeight 导航栏高度=胶囊按钮部分顶部到底部的距离减去-状态栏高度(电池电量信息等这个是状态栏高度)
			 */
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.searchBoxWidth = menuButtonInfo.left; // 胶囊按钮左边剩余部分，也就是搜索框所需要占用的宽度
			// #endif
		},
	}
</script>
<style lang="less" scoped>
	.dflex(){
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container {
		width: 100%;
		height: 100%;
		.navFixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1030;
			width: 100%;
			background-color: #f60;
			.navContent {
				.dflex();
				padding: 0 30rpx;
				height: 90rpx;
				box-sizing: border-box;
				.navSearch {
					.dflex();
					justify-content: flex-start;
					padding: 0 20rpx;
					width: 100%;
					height: 60rpx;
					border-radius: 60rpx;
					background-color: #fff;
					.navSearchIcon {
						margin-right: 20rpx;
					}
					/deep/.holderColor{
						font-size: 28rpx;
						color: #ccc !important; 
					}
				}
			}
		}
		.wrap{
			width: 100%;
			height: 100%;
			background-color: #f4f4f4;
		}
	}
</style>


```

![alt 示例图片](/img/study/uniapp/uniapp小程序搜索框导航栏/demo.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸