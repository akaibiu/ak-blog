# :frog: css实现半圆

>如何使用css画一个半圆呢 接下来请看表演 复制代码试试吧

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrap{
            width: 200px;
            height: 140px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            margin: 10%;
            display: flex;
            align-items: center;
        }
        .wrap .halfCircle{
            width: 20px;
				height: 40px;
				border-radius: 0 20px 20px 0;
                background: rgba(149, 157, 165, 0.1);
        }
    </style>
</head>
<body>
   <div class="wrap">
     <div class="halfCircle">

    </div>
   </div>
</body>
</html>
```


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸