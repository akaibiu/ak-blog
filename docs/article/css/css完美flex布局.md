# :fox_face: css完美flex布局



>在日常开发学习中，，以下是常见案例整理，一起看看吧....



```javascript

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        page,
        html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 1000px;
            border: 1px solid #000;
            padding: 15px 3px 0px 15px;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .item {
            margin-right: 15px;
            width: calc((100% - 15px * 3) / 3);
            margin-bottom: 15px;
            height: 200px;
            background: plum;
        }
        .container::after {
            content: "";
            flex: auto;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
    </div>
</body>

</html>
```

<font color="#dd00dd" face="楷体">建议将项目停止运行重新编译运行即可</font><br />

[小程序插件组件市场](https://ext.dcloud.net.cn/)

![alt 示例图片](/img/study/uniapp/uniapp小程序上传图片案例/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸