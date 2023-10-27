# :cherry_blossom: JS生成随机颜色



>在日常开发中，如何使JS生成随机颜色呢，我收集了两种方法，接下啦一起看看吧....



```javascript
    function rgb() {//rgb颜色随机
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    function color16() {//十六进制颜色随机
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
        return color;
    }
    console.log(rgb());  // rgb(196,109,27)
    console.log(color16())  // #c3696

```


<!-- ![alt 示例图片](/img/study/javascript/JS生成随机颜色/demo.jpg) -->




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸