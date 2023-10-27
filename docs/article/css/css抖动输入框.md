# :fox_face: css抖动输入框


>在日常开发学习中，会遇到一些输入框的样式调整，比如输入值不匹配需抖动输入框提醒用户，以下是案例整理，一起看看吧....


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @keyframes shake {
            10%,
            90% {
                transform: translate3d(-1px, 0 0);
            }

            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }

            30%,
            50%,
            70% {
                transform: translate3d(-4px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(4px, 0, 0);
            }
        }
        .apply-shake {
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        
    </style>
</head>

<body>
    <input type="text" class="apply-shake">
</body>

</html>
```

<font color="#dd00dd">大家也可将次案例应用在全局，然后通过动态数据去切换输入框的类名。(例如在vue中使用)</font><br />



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸

