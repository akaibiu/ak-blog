

# :frog: uniapp中改变checkbox默认样式

> 在uniapp中使用checkbox的时候，我们常常发现默认的样式真的一言难尽，接下来教大家如何定义全局css，改变checkbox的样式。以下有作者代码示例，一起学习学习吧!
>> 温馨提示：在uniapp打包的H5中无效
* 1.首先第一步，我们需要App.vue文件中设置一样默认样式。
* 2.然后如果您要圆形或者方形的话，就设置checkbox.round或者checkbox.circle,然后圆形要设置radius属性，方形的话可以设置小一点。
* 3.给checkbox设置颜色，例如下面的示例代码是checkbox.yellos,所以这就是一个黄色的选择框
* 4.使用的话直接在用到的页面给checkbox标签加类名"round yellow"即可
```html
<style>
checkbox.round .wx-checkbox-input,
checkbox.round .uni-checkbox-input {
	border-radius: 100upx;
}
//设置背景色(例如我这里是黄色的checkbox,我就设置一个checkbox.yellow)
checkbox.yellow[checked] .wx-checkbox-input,
checkbox.yellow.checked .uni-checkbox-input{
	background-color: #ffca28 !important;
	border-color: #ffca28 !important;
	color: #ffffff !important;
}
</style>
```
* 使用代码如下
```html
<checkbox class="round yellow" :checked="item.checked" />
```
![alt 示例图片](/img/study/css/css设置checkbox默认样式/demo.jpg)

* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸