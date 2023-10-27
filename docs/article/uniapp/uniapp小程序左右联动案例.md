# :kiwi_fruit: uniapp小程序左右联动案例




>在日常开发中，难免会遇到一些左右联动或者购物车的业务功能，下面这个小案例带您玩转左右联动!一起来看看吧....




```vue
<template>
  <view class="content">
    <scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'" :scroll-top="scrollLeftTop"
      scroll-with-animation>
      <view class="nav-left-item" @click="categoryClickMain(index)" :key="index"
        :class="index==categoryActive?'active':''" v-for="(item,index) in classifyData">
        {{item.name}}
      </view>
    </scroll-view>
    <scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'"
      scroll-with-animation>
      <view v-for="(sub,index) in classifyData" :key="index" class="box">
        <view class="flex-between" style="padding: 24rpx 0;">
          <view class=" text-sm">{{sub.name}}</view>
          <view class="flex-between">
            <text class="text-desc text-xs" @click="cart(sub.id,0)">全部资料</text>
            <tui-icon name="arrowright" :size="20"></tui-icon>
          </view>
        </view>
        <view :id="i == 0 ? 'first' : '' " class="nav-right-item text-cut" v-for="(item,i) in sub.subs" :key="i"
          @click="cart(item.id,i)">
          <!-- <image :src="item.cover" /> -->
          <view>{{item.name}}</view>
        </view>

      </view>

    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        height: 0,
        categoryActive: 0,
        scrollTop: 0,
        scrollLeftTop: 0,
        classifyData: [],
        arr: [0], //初始值，后边计算会根据手机适配覆盖
        leftItemHeight: 51, //49行会计算出新值进行覆盖
        navLeftHeight: 0, //左边scroll-view 内层nav的总高度
        diff: 0, //左边scroll-view 内层nav的总高度与视口之差
        tabBarHeight: 0, //如果此页面为Tab页面，自己改变高度值,,一般tab高度为51
      }
    },
    created() {
      //如果你的分类数据为后台异步获取请	将下方代码放置你的数据回调中
      // this.$nextTick(()=>{
      // 	this.getHeightList();
      // })
    },
    onLoad: function() {
      uni.getSystemInfo({
        success: res => {
          this.height = res.windowHeight - this.tabBarHeight;
          this.gets();
        }
      });
    },
    methods: {
      // Get Computer Wallpaper Type's List Fn
      async getComputerWallpaperTypeListFn() {
        const param = {
          adult: false,
          first: 0,
        };
        await getDeskWallpaperTypeListApi(param).then(res => {
          switch (res.code) {
            case 0:
              const {
                category
              } = res.res;
              this.fixedList = category;
              this.fixedList.forEach(item => {
                delete item.count;
              });
              this.typeId = category[0].id; // 分类ID初始化
              this.getWallpaperListByTypeFn(); // 获取图片列表初始化
              break;
            default:
              this.tool.toastTip("服务器开小差了,请稍后重试!", 'none', 1500);
              break;
          }
        }).catch(err => {
          this.tool.toastTip("服务器开小差了,请稍后重试!", 'none', 1500);
        })
      },
      previewImg(photoImg) {
        let imgsArray = [];
        imgsArray[0] = photoImg;
        uni.previewImage({
          current: 0,
          urls: imgsArray,
          longPressActions: {
            itemList: ['发送给朋友', '保存图片', '收藏'],
            success: function(data) {
              this.tool.toastTip('操作成功', 'none', 1000);
            },
            fail: function(err) {
              console.log(err.errMsg);
            }
          }
        });
      },
      // 获取分类
      gets() {
        let arr = [];
        for (let i = 0; i < 30; i++) {
             let newItem = {
             name: `二哈指人${i}`,
             id: (i + 1),
             pid: 0,
             sub: []
             }
             for (let j = 0; j < 10; j++) {
             newItem.sub.push({
             name: `二哈指人${i}`,
             id: (i + '-' + j + 1),
             pid: i + 1
             })
             }
             arr.push(newItem)
             }
             this.classifyData = arr;
             this.$nextTick(() => {
             this.getHeightList();
             })
             },
             getHeightList() {
             let _this = this;
             let selectorQuery = uni.createSelectorQuery();
             selectorQuery.selectAll('.nav-left-item').boundingClientRect(function(rects) {
             _this.leftItemHeight = rects[0].height;
             _this.navLeftHeight = _this.leftItemHeight * this.classifyData.length;
             _this.diff = _this.navLeftHeight - _this.height;
             });
             selectorQuery.selectAll('.box').boundingClientRect(function(rects) {
             let arr = [0];
             let top = 0;
             rects.forEach(function(rect) {
             top += rect.height;
             arr.push(top)
             })
             _this.arr = arr
             }).exec()
             },
             scroll(e) {
             let _this = this
             if (this.timeoutId) {
             clearTimeout(this.timeoutId);
             }
             this.timeoutId = setTimeout(function() { //节流
             // _this.scrollHeight = e.detail.scrollTop + 1 + _this.height / 2;
             _this.scrollHeight = e.detail.scrollTop + 1;
             //+1不要删除，解决最后一项某种情况下翻到底部，左边按钮并不会切换至最后一个
             //若想使切换参考线为屏幕顶部请删除 _this.height/2
             for (let i = 0; i < _this.arr.length; i++) {
             let height1 = _this.arr[i];
             let height2 = _this.arr[i + 1];
             if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
             _this.categoryActive = i;
             (_this.diff > 0) && (_this.scrollLeftTop = Math.round((_this.categoryActive * _this
             .diff) / (this.classifyData.length - 1)));
             return false;
             }
             }
             _this.categoryActive = 0;
             _this.timeoutId = undefined;
             }, 10)
             },
             categoryClickMain(index) {
             this.categoryActive = index;
             this.scrollTop == this.arr[index] ? this.scrollTop = this.scrollTop + 1 : this.scrollTop = this.arr[
             index] //防止两次相等造成点击不触发滚动时间
             },
             cart(cate, index) {
             uni.tool.go('/pages/index/list?cate=' + cate + '&current=' + index);
             }
             }
             }
             </script>

             <style lang="scss" scoped>
             .content {
             display: flex;
             }
             .page-body {
             display: flex;
             background: #fff;
             overflow: hidden;
             }
             .nav {
             display: flex;
             width: 100%;
             }
             .nav-left {
             width: 25%;
             background: #f7faff;
             }
             .nav-left-item {
             /* height: 100upx; */
             padding: 25rpx 10rpx;
             border-right: solid 1rpx #ebf0ff;
             border-bottom: solid 1rpx #ebf0ff;
             font-size: 30upx;
             display: flex;
             align-items: center;
             justify-content: center;
             }
             .nav-left-item:last-child {
             border-bottom: none;
             }
             .nav-right {
             width: 75%;
             padding: 0 2.5%;
             }
             .box {
             display: block;
             overflow: hidden;
             /* border-bottom: 20upx solid #e3eefd; */
             /* margin-bottom: 10rpx; */
             /* min-height: 100vh; */
             /*若您的子分类过少想使得每个子分类占满屏请放开上边注视 */
             }
             .nav-right-item {
             width: 47.2%;
             margin: 0 2.5% 2.5% 0;
             float: left;
             text-align: center;
             padding: 20rpx 20rpx;
             font-size: 24upx;
             border-radius: 8rpx;
             background: #fafafa;
             }
             .nav-right-item:active {
             background-color: #ebf0ff;
             }
             .nav-right-item image {
             width: 50upx;
             height: 50upx;
             }
             .active {
             color: var(--xiong-color-blue);
             font-weight: bold;
             background: #fff;
             border-right: 0;
             }
             ::-webkit-scrollbar {
             /*取消小程序的默认导航条样式*/
             width: 0;
             height: 0;
             color: transparent;
             }
             </style>

```


![alt 示例图片](/img/study/uniapp/uniapp小程序左右联动案例/demo.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸