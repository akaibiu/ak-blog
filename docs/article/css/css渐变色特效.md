# :strawberry: css渐变色特效

>接下来这个案例给大家展示一下css渐变色特效，此篇文章若有疑惑不解之处，欢迎打扰 作者联系微信 Akaibiu (烦请备注说明来意，谢谢)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @keyframes tip {
            to {
              
                color: #fff;
                text-shadow: 1px 0 2px #fff;
            }

            from {
                color: #e09a30;
                text-shadow: 1px 0 2px #e09a30;
            }
        }
        .wrap{
            width: 80%;
            margin-left: 10%;
            min-height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #373737;
        }
        .wrap span {
            font-size: 24px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #e09a30;
            line-height: 37px;
            margin-top: 5px;
            flex-direction: row !important;
            justify-content: center !important;
        }

        span {
            animation: tip 2s ease-in-out infinite alternate;
            color: #e1be8b;
        }

        span:nth-child(n) {
            animation-delay: 0.2s;
        }

        span:nth-child(n+1) {
            animation-delay: 0.4s;
        }

        span:nth-child(n+2) {
            animation-delay: 0.6s;
        }

        span:nth-child(n+3) {
            animation-delay: 0.8s;
        }

        span:nth-child(n+4) {
            animation-delay: 1.0s;
            margin-right: 3px;
        }

        span:nth-child(n+5) {
            animation-delay: 1.2s;
        }

        span:nth-child(n+6) {
            animation-delay: 1.4s;
        }

        span:nth-child(n+7) {
            animation-delay: 1.6s;
        }

        span:nth-child(n+8) {
            animation-delay: 1.8s;
        }

        span:nth-child(n+9) {
            animation-delay: 2.0s;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
    </div>
</body>

</html>
```
![alt 示例图片](/img/study/css/css渐变色特效/demo.png)

* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸