```javascript
<template>
	<view class="Index">
		<!-- 瀑布流布局列表 -->
		<view class="pubuBox">
			<view class="pubuItem">
				<view class="item-masonry" v-for="(item, index) in comList" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="listtitle"> <!-- 这是没有高度的父盒子（下半部分） -->
						<view class="listtitle1">{{ item.name }}</view>
						<view class="listtitle2">
							<text class="listtitle2son">￥</text>
							{{ item.commdityPrice }}
						</view>
						<view class="listtitle3">
							来自莫成尘的旗舰店
						</view>
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
				comList: [{
						img: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg",
						name: '商品的名称，可以很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
						commdityPrice: 100
					}, {
						img: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
						name: '商品名称会在超出两行时候自动折叠',
						commdityPrice: 100
					},
					{
						img: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						name: '只有一行标题时高度为39',
						commdityPrice: 100
					}, {
						img: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
						name: '具体样式您可以自定义',
						commdityPrice: 100
					}, {
						img: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
						name: 'vue的H5页面也是如此使用',
						commdityPrice: 100
					}
				], //商品列表
			};
		},
		onShow() {},
		onLoad() {},
		methods: {},

	};
</script>

<style scoped="scoped" lang="scss">
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}
</style>

```