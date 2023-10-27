# :watermelon: css实现三角形



>在日常开发学习中，有业务会用到三角形，我整理了一些画三角形的方法，以下是常见案例整理，一起看看吧....



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
            width: 0;
            height: 0;
            border: 100px solid;
            border-color: orangered skyblue gold yellowgreen; 
        }
        .box{
            width: 0;
            height: 0;
            border-top: 50px solid skyblue;
            border-right: 50px solid transparent;
            border-left: 50px solid transparent;
        }
        .box1{
            width: 0;
            height: 0;
            border-left: 50px solid skyblue;
            border-top: 50px solid transparent;
            border-bottom: 50px solid transparent;
        }
        .box2{
            width: 0;
            height: 0;
            border-top: 100px solid skyblue;
            border-right: 100px solid transparent;
        }
        .box3{
            width: 0;
            height: 0;
            border-left: 69px solid transparent;  
            border-right: 69px solid transparent;  
            border-bottom: 120px solid skyblue; 
        }
    </style>
</head>
<body>
    <div class="wrap">

    </div>
    <div class="box">

    </div>
    <div class="box1">

    </div>
    <div class="box2">

    </div>
    <div class="box3">
        
    </div>
</body>
</html>

```


![alt 示例图片](/img/study/css/css实现三角形/demo.jpg)




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸