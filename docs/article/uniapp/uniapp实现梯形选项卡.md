# :rowboat: uniapp实现梯形选项卡



>在日常开发学习中，可能会需要用uniapp去实现一些奇怪的选项卡样式，比如接下来这个梯形选项卡，此文章由图鸟UI群友(小俊)提供，我仅做收录以下是案例代码整理，一起看看吧....



```vue
<template>
	<view class="content">
		<view class="tab" @click="optionValue=!optionValue">
			<view class="item" :class="optionValue?'active':''">选项卡1</view>
			<view class="item" :class="!optionValue?'active':''">选项卡2</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				optionValue: false
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.tab {
		display: flex;
		width: 300px;
		align-items: flex-end;
	}
	.tab .item {
		flex: 1;
		height: 40px;
		background: #eee;
		border-radius: 5px 5px 0 0;
		position: relative;
		list-style: none;
		text-align: center;
	}
	.tab .item.active {
		height: 45px;
		background: #66caff;
	}
	.tab .item:first-child:before {
		content: '';
		display: none;
		width: 10px;
		height: 100%;
		background: #66caff;
		position: absolute;
		right: -5px;
		top: 0;
		z-index: 10;
		border-radius: 0 5px 0 0;
		transform: skew(10deg);
	}
	.tab .item:first-child.active:before {
		display: block;
	}
	.tab .item:last-child:before {
		content: '';
		display: none;
		width: 10px;
		height: 100%;
		background: #66caff;
		position: absolute;
		left: -5px;
		top: 0;
		z-index: 10;
		border-radius: 5px 0 0 0;
		transform: skew(-10deg);
	}
	.tab .item:last-child.active:before {
		display: block;
	}
</style>


```

<font color="#dd00dd">若您需要在原生使用仅需更改部分标签即可</font><br />


![alt 示例图片](/img/study/uniapp/uniapp实现梯形选项卡/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸