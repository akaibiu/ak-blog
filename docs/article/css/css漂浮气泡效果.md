# :maple_leaf: css气泡组件


>偶然间发现一个很有趣的组件，是在小程序平台上的，是那种漂浮的气泡组件，很炫酷，最近呢也是搞到了源码，下面直接展示代码...

* 1.首先咱们需要在components文件目录中定义一个bubble气泡组件
* 2.然后在需要用到的地方引入组件即可
* 3.温馨提示：需要注意层级奥，注意z-index的取值范围
  
>> 以下是组件代码整理

```javascript
<template>
  <view class="box">
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>
      <view class="bubble"></view>  
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
  
  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 111;
  }
  .bubble {
    animation-name: ascend;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    bottom: 60px;
    transform: translateY(100%);
    z-index: 1;
    background-size: 100% 100%;
    background-image: url('http://qny.wdsp666.com/%E7%A6%8F%E8%A2%8B%E8%83%8C%E6%99%AF%E5%9B%BE/xcx/bubbles-min.png');
  }

  @for $i from 0 through 20 { 
      .bubble:nth-child(#{$i}) {
          opacity: 1;
          border-radius: 100%;
          position: absolute;
          // background: #26b4f5;
          $width: random(60) + px;
          right: #{(random(100)) + '%'};
          bottom: #{(random(60))}px;
          width: $width;
          height: $width;
          animation: moveToTop #{(random(9500) + 3000) / 1000}s ease-in-out -#{random(9000)/2000}s infinite;
      }
  }
  @keyframes moveToTop {
      70% {
          opacity: 0.05;
      }
      100% {
          opacity: 0.01;
          transform: translate(-50%, -180px) scale(0.3);
      }
  }
  
</style>
```

>> 以下是在页面中使用示例代码,在script中引入组件并注册
```javascript
  import bubble from '@/components/bubble/bubble.vue'
  components:{bubble}
```
>> 然后在template中或者自己的view容器中使用组件`<bubble \>`

![alt 示例图片](/img/study/css/css漂浮气泡效果/demo.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸
