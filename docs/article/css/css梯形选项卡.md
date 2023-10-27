# :kiwi_fruit: css梯形选项卡



>在日常开发学习中，有一些选项卡的样式案例设置，例如梯形选项卡。以下是常见案例整理，一起看看吧....



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
        .tab {
            display: flex;
            width: 300px;
            align-items: flex-end;
        }

        .tab .item {
            flex: 1;
            height: 40px;
            background: #eee;
            border-radius: 5px 5px 0 0;
            position: relative;
            list-style: none;
            text-align: center;
        }

        .tab .item.active {
            height: 45px;
            background: plum;
        }

        .tab .item:first-child:before {
            content: '';
            display: none;
            width: 10px;
            height: 100%;
            background: plum;
            position: absolute;
            right: -5px;
            top: 0;
            z-index: 10;
            border-radius: 0 5px 0 0;
            transform: skew(10deg);
        }

        .tab .item:first-child.active:before {
            display: block;
        }

        .tab .item:last-child:before {
            content: '';
            display: none;
            width: 10px;
            height: 100%;
            background: plum;
            position: absolute;
            left: -5px;
            top: 0;
            z-index: 10;
            border-radius: 5px 0 0 0;
            transform: skew(-10deg);
        }

        .tab .item:last-child.active:before {
            display: block;
        }
    </style>

</head>

<body>
    <div class="content">
        <div class="tab" @click="optionValue=!optionValue">
            <div class="item" :class="optionValue?'active':''">选项卡1</div>
            <div class="item" :class="!optionValue?'active':''">选项卡2</div>
        </div>
    </div>
</body>

</html>
<script>
    new Vue({
            el: '.content',
            data: {
                optionValue:false
            },
            methods: {

            }
        })
</script>

```


![alt 示例图片](/img/study/css/css梯形选项卡/demo.jpg)



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸

