# :kiwi_fruit: css星空效果


>在日常开发学习中，经常会看到一些炫酷的效果，例如星空效果，以下是代码整理。灵感来自于Tuniao-Ui,让我们一起看看吧....



```javascript
<template>
	<view class="discovery tn-safe-area-inset-bottom">
		<view class="template-ranking">
			<!-- 流星-->
			<view class="tn-satr">
				<view class="sky"></view>
				<view class="stars">
					<view class="falling-stars">
						<view class="star-fall"></view>
						<view class="star-fall"></view>
						<view class="star-fall"></view>
						<view class="star-fall"></view>
					</view>
					<view class="small-stars">
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
					</view>
					<view class="medium-stars">
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
						<view class="star"></view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.discovery {
		max-height: 100vh;
	}
	/* 背景*/
	.template-ranking {
		margin: 0;
		width: 100vw;
		height: 100vh;
		/* background: linear-gradient(-120deg, #5969f6, #0976ea, #01BEFF, #00F5D4); */
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		/* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
	}
	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}
	.discover-fixed {
		position: fixed;
		// background-color: rgba(255,255,255,0.4);
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		bottom: calc(300rpx + env(safe-area-inset-bottom) / 2);
		width: calc(100vw - 60rpx);
		transition: all 0.25s ease-out;
		z-index: 100;
		border-radius: 10rpx;
	}
	/* 图标容器1 start */
	.icon1 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;
			&--icon {
				width: 90rpx;
				height: 90rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
				}
			}
		}
	}
	/* 流星*/
	.tn-satr {
		position: fixed;
		width: 100%;
		height: 600px;
		overflow: hidden;
		flex-shrink: 0;
		z-index: 999;
	}
	.stars {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 400px;
	}
	.star {
		border-radius: 50%;
		background: #ffffff;
		box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.8);
	}
	.small-stars .star {
		position: absolute;
		width: 3px;
		height: 3px;
	}
	.small-stars .star:nth-child(2n) {
		opacity: 0;
		-webkit-animation: star-blink 1.2s linear infinite alternate;
		animation: star-blink 1.2s linear infinite alternate;
	}
	.small-stars .star:nth-child(1) {
		left: 40px;
		bottom: 50px;
	}
	.small-stars .star:nth-child(2) {
		left: 200px;
		bottom: 40px;
	}
	.small-stars .star:nth-child(3) {
		left: 60px;
		bottom: 120px;
	}
	.small-stars .star:nth-child(4) {
		left: 140px;
		bottom: 250px;
	}
	.small-stars .star:nth-child(5) {
		left: 400px;
		bottom: 300px;
	}
	.small-stars .star:nth-child(6) {
		left: 170px;
		bottom: 80px;
	}
	.small-stars .star:nth-child(7) {
		left: 200px;
		bottom: 360px;
		-webkit-animation-delay: .2s;
		animation-delay: .2s;
	}
	.small-stars .star:nth-child(8) {
		left: 250px;
		bottom: 320px;
	}
	.small-stars .star:nth-child(9) {
		left: 300px;
		bottom: 340px;
	}
	.small-stars .star:nth-child(10) {
		left: 130px;
		bottom: 320px;
		-webkit-animation-delay: .5s;
		animation-delay: .5s;
	}
	.small-stars .star:nth-child(11) {
		left: 230px;
		bottom: 330px;
		-webkit-animation-delay: 7s;
		animation-delay: 7s;
	}
	.small-stars .star:nth-child(12) {
		left: 300px;
		bottom: 360px;
		-webkit-animation-delay: .3s;
		animation-delay: .3s;
	}
	@-webkit-keyframes star-blink {
		50% {
			width: 3px;
			height: 3px;
			opacity: 1;
		}
	}
	@keyframes star-blink {
		50% {
			width: 3px;
			height: 3px;
			opacity: 1;
		}
	}
	.medium-stars .star {
		position: absolute;
		width: 3px;
		height: 3px;
		opacity: 0;
		-webkit-animation: star-blink 1.2s ease-in infinite alternate;
		animation: star-blink 1.2s ease-in infinite alternate;
	}
	.medium-stars .star:nth-child(1) {
		left: 300px;
		bottom: 50px;
	}
	.medium-stars .star:nth-child(2) {
		left: 400px;
		bottom: 40px;
		-webkit-animation-delay: .4s;
		animation-delay: .4s;
	}
	.medium-stars .star:nth-child(3) {
		left: 330px;
		bottom: 300px;
		-webkit-animation-delay: .2s;
		animation-delay: .2s;
	}
	.medium-stars .star:nth-child(4) {
		left: 460px;
		bottom: 300px;
		-webkit-animation-delay: .9s;
		animation-delay: .9s;
	}
	.medium-stars .star:nth-child(5) {
		left: 300px;
		bottom: 150px;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}
	.medium-stars .star:nth-child(6) {
		left: 440px;
		bottom: 120px;
		-webkit-animation-delay: 1s;
		animation-delay: 1s;
	}
	.medium-stars .star:nth-child(7) {
		left: 200px;
		bottom: 140px;
		-webkit-animation-delay: .8s;
		animation-delay: .8s;
	}
	.medium-stars .star:nth-child(8) {
		left: 30px;
		bottom: 480px;
		-webkit-animation-delay: .3s;
		animation-delay: .3s;
	}
	.medium-stars .star:nth-child(9) {
		left: 460px;
		bottom: 400px;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}
	.medium-stars .star:nth-child(10) {
		left: 150px;
		bottom: 10px;
		-webkit-animation-delay: 1s;
		animation-delay: 1s;
	}
	.medium-stars .star:nth-child(11) {
		left: 420px;
		bottom: 450px;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}
	.medium-stars .star:nth-child(12) {
		left: 340px;
		bottom: 180px;
		-webkit-animation-delay: 1.1s;
		animation-delay: 1.1s;
	}
	@keyframes star-blink {
		50% {
			width: 4px;
			height: 4px;
			opacity: 1;
		}
	}
	.star-fall {
		position: relative;
		border-radius: 2px;
		width: 80px;
		height: 2px;
		overflow: hidden;
		-webkit-transform: rotate(-20deg);
		transform: rotate(-20deg);
	}
	.star-fall:after {
		content: "";
		position: absolute;
		width: 50px;
		height: 2px;
		background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), to(rgba(255, 255, 255, 0.4)));
		background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.4) 100%);
		left: 100%;
		-webkit-animation: star-fall 3.6s linear infinite;
		animation: star-fall 3.6s linear infinite;
	}
	.star-fall:nth-child(1) {
		left: 80px;
		bottom: -100px;
	}
	.star-fall:nth-child(1):after {
		-webkit-animation-delay: 2.4s;
		animation-delay: 2.4s;
	}
	.star-fall:nth-child(2) {
		left: 200px;
		bottom: -200px;
	}
	.star-fall:nth-child(2):after {
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
	}
	.star-fall:nth-child(3) {
		left: 430px;
		bottom: -50px;
	}
	.star-fall:nth-child(3):after {
		-webkit-animation-delay: 3.6s;
		animation-delay: 3.6s;
	}
	.star-fall:nth-child(4) {
		left: 400px;
		bottom: 100px;
	}
	.star-fall:nth-child(4):after {
		-webkit-animation-delay: .2s;
		animation-delay: .2s;
	}
	@-webkit-keyframes star-fall {
		20% {
			left: -100%;
		}
		100% {
			left: -100%;
		}
	}
	@keyframes star-fall {
		20% {
			left: -100%;
		}
		100% {
			left: -100%;
		}
	}
</style>

```


![alt 示例图片](/img/study/css/css星空效果/demo.jpg)



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸
