# :banana: uniapp小程序使用flex实现完美布局

### 完美flex布局实现(上-左-右以及每个项目之间的间距一样)


>在日常小程序开发中，布局常常不可或缺，不想用grid那就看看我的案例吧，下面这个小案例带您演示flex完美布局!一起来看看吧....



#### 1.view视图层代码
```vue
<template>
  <view class="wrap">
    <block v-for="(item,index) in 11" :key="index">
      <view class="wrap-item">
        {{index}}
      </view>
    </block>
  </view>
</template>

```

#### 2.style样式代码

```scss
<style lang="scss" scoped>
    .wrap {
        /**
         * 最外层的盒子
         * padding值中的第二个参数(6rpx)是右边距，为什么是6呢？
         * 因为盒子的左边距的值是(30rpx)，然后盒子的右边距的值要与子元素中的左右间距的值(24rpx)相减，最后得到6rpx，这样看起来的效果 盒子左右两边的间距就是一样的了
         */
        // padding: 20rpx 6rpx 20rpx 30rpx;
				padding-left: 30rpx;
        margin-top:30rpx;
        width: 100%;
				box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .wrap-item {
            /**
             * 部分关键代码说明
             * 1、margin-right的值(24rpx) 和 width中的值(24rpx) 要设置成一样值，这是每个子元素的左右间距
             * 2、每个子元素的宽度是动态计算的，如果你的列是3列，那么width中最后两个的值也像这deme一样设置成3，如果是4列，那就修改成4... 
             * 3、margin-bottom是每个子元素的上下间距
             */
            margin-right: 30rpx;
            width: calc((100% - 30rpx * 4) / 4);
            margin-bottom: 30rpx;
            /* 底下这部分不是很关键 */
            height: 140rpx;
			background: plum;
            border-radius: 10rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    // 给最外层的盒子添加伪元素，列不满则左对齐
    .wrap:after {
        content: "";
        flex: auto;
    }
</style>
```

![alt 示例图片](/img/study/uniapp/uniapp小程序使用flex完美布局/demo.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸