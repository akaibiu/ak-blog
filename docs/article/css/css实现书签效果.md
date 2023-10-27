# :maple_leaf: css实现书签效果



>在日常工作开发中，偶尔回遇到一些花哨的UI设计，例如这个书签效果，一起看看吧....



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .tag {
            border-radius: 4px 4px 4px 0px;
            color: #fff;
            padding: 2px 6px;
            font-size: 10px;
            line-height: 16px;
            background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), transparent) var(--bg, #EA3447);
            background-blend-mode: soft-light;
            position: relative;
            width:40px;
        }

        .tag::before {
            content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            left: 0;
            bottom: -3px;
            background-color: inherit;
            filter: brightness(.7);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
    </style>
</head>

<body>
    <div class="tag">Akai</div>
</body>

</html>

```



![alt 示例图片](/img/study/css/css实现书签效果/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸