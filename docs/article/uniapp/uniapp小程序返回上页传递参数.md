

# :desert_island: uniapp小程序返回上页传递参数



>在日常小程序开发中，难免会遇到从A->B页面去选择一些参数再返回到A页面，那么我们在A页面该如何接收到B页面选择的参数呢，接下来这个代码便可实现此功能业务，一起看看吧....



#### 1.以下是B页面的代码(选择了一些数据,e 就是选择的参数)
```javascript
checkLocation(e) {
  uni.$emit("handClick", { data: e });
  uni.navigateBack({
    delta: 1
 });

```


#### 2.以下是A页面的代码(从B选择了数据需要返回到A页面并接收，切记要在onShow钩子函数接收)

```javascript
onShow(){
  uni.$on("handClick", res => {
    console.log(res,'从B页面传递过来的数据')
    // 清除监听
    uni.$off("handClickXXX");
  });
}
```




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸