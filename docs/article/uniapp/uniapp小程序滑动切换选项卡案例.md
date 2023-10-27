# :carrot: uniapp小程序滑动切换选项卡案例



>在日常小程序开发中，经常会遇到滑动切换选项卡的业务，接下来通过下面这个简单案例就可以实现滑动切换选项卡,一起看看吧....


```vue
<template>
	<view class="content">
		<view class="nav">
			<scroll-view scroll-x="true" class="scrollBox" scroll-with-animation :scroll-left="scrollLeft">
				<view class="tab">
					<view :class="isActive==index?'item active':'item'" v-for="(item,index) in tabList" :key="index" @tap="checkTab(index)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		<swiper @change="change" :current="isActive" class="swiperBox" :style="swiperHeight">
			<swiper-item v-for="(item,index) in tabList" :key="index">
				<scroll-view scroll-y style="height: 100%;">
					<view class="wrap" v-if="isActive==0">
						选项卡{{isActive}}页面
					</view>
					<view class="wrap" v-if="isActive==1">
						选项卡{{isActive}}页面
					</view>
					<view class="wrap"  v-if="isActive==2">
						选项卡{{isActive}}页面
					</view>
					<view class="wrap"  v-if="isActive==3">
						选项卡{{isActive}}页面
					</view>
					<view class="wrap"  v-if="isActive==4">
						选项卡{{isActive}}页面
					</view>
				</scroll-view>	
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
  export default {
data() {
  return {
    isActive:0,
    currentIndex:0,
    scrollLeft:0,// tab滚动条位置
    swiperHeight:0,// swiper高度
    tabList: [{
      name: 'One',
      id: 0
    },
              {
                name: 'Two',
                id: 1
              },
              {
                name: 'Three',
                id: 2
              },
              {
                name: 'Four',
                id: 3
              },
              {
                name: 'Five',
                id: 4
              },
             ]
  }
},
  mounted() {
    let that=this;
    uni.getSystemInfo({
      success(res) {
        that.swiperHeight="height:"+res.windowHeight+'px'
      }
    })
  },
    watch:{
      currentIndex(e){
        this.isActive=e;
        this.scrollLeft=0;
        for(let i=0;i<e-1;i++){
          this.scrollLeft+=this.tabList[i].width;
        }
      }
    },
      methods: {
        // 滑动
        change(e){
          const {current}=e.detail;
          this.currentIndex=current;
        },
          // 点击选项卡
          checkTab(index){
            this.isActive=index;
            this.scrollLeft=0;
            for(let i=0;i<index-1;i++){
              this.scrollLeft += this.tabList[i].width
            }
          }
      }
}
</script>
<style lang="less" scoped>
	.content {
		height: 100%;
		background: #FFFFFF;

		.nav {
			width: 100%;
			height: 80rpx;
			position: sticky;
			top: 0;
			left: 0;
			background: #f2f2f2;
			z-index: 99;

			.scrollBox {
				padding: 0rpx 15rpx;
				box-sizing: border-box;
				height: 100%;
				.tab {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100%;
					.item{
						width: 96%;
						height: 96%;
						border-bottom: 4rpx solid #ffe6d9;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						margin: 0rpx 20rpx 0rpx 0rpx;
						&.active{
							color: #007AFF;
							border-bottom: 4rpx solid #007AFF;
							background-color: #C8C7CC;
						}
					}
				}
			}
		}
		.swiperBox{
			flex: 1;
			.wrap{
				height: 100%;
				width: 100%;
				background-color: #f8f7f1;
			}
		}
	}
</style>

```

![alt 示例图片](/img/study/uniapp/uniapp小程序滑动选项卡案例/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸