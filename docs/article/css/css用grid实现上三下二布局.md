# :fox_face: css用grid实现上三下二布局



>在日常开发学习中，，以下是常见案例整理，一起看看吧....



```javascript
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"> 
    <style>
    .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 创建3列网格布局 */
    grid-gap: 10px; /* 设置网格间距 */
    }
    .item {
    background-color: #ccc;
    padding: 20px;
    text-align: center;
    }
    .item-wide {
    grid-column: span 2; /* 占据两列 */
    }
    </style>
    </head>
    <body>
    <div class="grid-container">
    <div class="item">1</div>
    <div class="item ">2</div>
    <div class="item ">3</div>
    <div class="item item-wide">4</div>
    <div class="item">5</div>
    </div>
    </body>
    </html>
```
```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <style>
        .item1 {
            grid-area: header;
        }
        .item2 {
            grid-area: menu;
        }
        .item3 {
            grid-area: main;
        }
        .item4 {
            grid-area: right;
        }
        .item5 {
            grid-area: footer;
        }
        .grid-container {
            display: grid;
            grid-template-areas:
                'header menu main'
                'right right footer';
            grid-gap: 10px;
            background-color: #2196F3;
            padding: 10px;
        }
        .grid-container>div {
            background-color: rgba(255, 255, 255, 0.8);
            text-align: center;
            padding: 20px 0;
            font-size: 30px;
        }
    </style>
</head>

<body>
    <div class="grid-container">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>
        <div class="item4">Right</div>
        <div class="item5">Footer</div>
    </div>
</body>

</html>
```

![alt 示例图片](/img/study/css/css上三下二/demo.jpg)





* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸