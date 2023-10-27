



# :baguette_bread: uniapp小程序设置动态样式



>在日常小程序开发中，如何给元素额设置动态样式呢？接下来看看吧，还有很多种哦，一起看看吧....

>



```vue
<template>
    <view>
		<view class="" :style="{'background': data.avatar == ''? 
		  'url(' + defaultImg + ')'
		  :'url(' + data.avatar + ')',

			'background-repeat':'no-repeat',
			'background-size':'100%',
			'width':'200rpx',
			'height':'200rpx',
		  }">
			
		</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				data:{
					avatar:'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1661311317595-assets/web-upload/d0effa8c-78f5-477f-b070-481840860bfe.jpeg?x-oss-process=image%2Fresize%2Cw_220'
				},
				defaultImg:'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1661311316649-assets/web-upload/4de21afc-9abe-4c2a-b9fb-919d5537eb88.jpeg?x-oss-process=image%2Fresize%2Cw_220'
            }
        },
        methods: {
            
        }
    }
</script>

```


![alt 示例图片](/img/study/uniapp/uniapp小程序设置动态样式/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸