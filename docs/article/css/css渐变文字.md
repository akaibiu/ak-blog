# :rowboat: css渐变文字



>在日常开发学习中，可能会遇到一些渐变文字的业务，以下是案例是现代吗整理整理，一起看看吧....



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            background-image: -webkit-linear-gradient(10deg,yellow,purple,red);
            -webkit-background-clip: text;
            color: transparent;
        }
    </style>
</head>
<body>
    <div class="box">
        时间不在于你拥有多少，而在于你怎样使用。时间不在于你拥有多少，而在于你怎样使用。时间不在于你拥有多少，而在于你怎样使用。
    </div>
</body>
</html>

```

<font color="#dd00dd">根据业务需求调整代码</font><br />


![alt 示例图片](/img/study/css/css渐变文字/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸