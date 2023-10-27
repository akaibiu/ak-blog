# :walking_man: css放大镜特效

>接下来这个案例给大家展示一下css放大镜特效，此篇文章若有疑惑不解之处，欢迎打扰 作者联系微信 Akaibiu (烦请备注说明来意，谢谢)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文字特效</title>
    <style>
        @keyframes titleFrame {
            to {
              // 裁剪成一个圆圆
                clip-path: ellipse(32px 32px at 0% 50%);
            }
            from {
                clip-path: ellipse(32px 32px at 100% 50%);
            }
        }
        .page {
            text-align: center;
            background: #3c3c3c;
        }
        h1 {
            font-size: 48px;
            position: relative;
            display: inline-block;
        }
        h1::after {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            content:attr(title);
            color: #e1be8b;
            animation: titleFrame 3s ease-in-out infinite alternate;
        }
    </style>
</head>

<body>
    <div class="page">
        <h1 title="You share rose get lucky">You share rose get lucky</h1>
    </div>
</body>

</html>
```
![alt 示例图片](/img/study/css/css放大镜特效/demo.jpg)

* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸