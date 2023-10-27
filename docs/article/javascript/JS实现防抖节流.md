# :panda_face: JS实现防抖节流



>在日常小程序开发中，需要用到防抖节流的业务可不少，举个栗子，一起看看吧....

1. 在pages目录之外定义一个utils文件目录，里面创建一个utill.js文件
```javascript
    //防抖函数 立即执行版本
    let debounceNow = function (func, wait) {
        let timeout
        let self = this   //为了保证下面箭头函数中的this指向不受影响
        let args = arguments;
        return function () {
            if (timeout) clearTimeout(timeout)
            var callNow = !timeout;
            console.log(callNow)
            if (callNow) func.apply(self, args)
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
        }
        //刚开始timeout为undefined，callNow值为true，进入了判断，执行了一次func，所以会执行第一次点击的函数，然后进入定时器，在定时器执行完之后timeout才会为null，否则timeout一直都有settimeout的值
        // callNow就为false，一直都进不去判断，一直都不执行函数,直到定时器执行完
    }
    //防抖函数 非立即执行
    let debounce = function (fn, time) {
        var timer = null;
        return function () {
            //清除上一次延时器
            clearTimeout(timer);
            //重新设置新的延时器，每次点击都会清空定时器，重启一个定时器，所以只会触发最后一次func函数
            timer = setTimeout(function () {
                console.log(this)
                fn.apply(this);//将传进的fn的this指向window，并执行fn
            }, time);
        }
    }


    //节流函数 时间戳版本
    function throttleDate(fn, time) {
        //初始化时间
        var lasttime = 0;
        return function () {
            //记录当前函数触发时间
            var nowtime = Date.now();
            if (nowtime - lasttime > time) {
                //如果当前函数触发时间 - 上一次函数触发时间 > 设定的时间
                fn.call(this);
                //同步函数时间
                lasttime = nowtime;
            }
        }
    }
    // 刚开始获取到上一次函数被触发时间，再拿到点击的时间戳，如果点击的时间戳 - 上一次函数触发时间 > 设定的时间 才会触发函数，实现了在N秒内多次点击只会执行一次的效果

    //节流函数 定时器版本
    function throttleSetTime(fn, time) {
        let canUse = true; // 设置一个开关
        return function () {
            if (!canUse) { return false } // 如果开关已经关掉了就不用往下了
            // if(canUse) fn.apply(this,arguments)//fn放这里是立即执行
            canUse = false  // 利用闭包刚进来的时候关闭开关
            setTimeout(() => {
                fn.apply(this, arguments)//fn放这里是非立即执行，定时器结束才执行
                canUse = true // 执行完才打开开关
            }, time)
        }
        // 刚开始canUse为true，不会进入return，然后将canUse重置为false,进入了定时器，在定时器的时间期限之后，才会将canUse重置为true,canUse为true之后，之后的点击才会生效
        // 在定时器的时间期限内，canUse还没有重置为true，会一直进入return，就实现了在N秒内多次点击只会执行一次的效果
    }

    module.pxports = {
        throttleSetTime,
        debounceNow
    }
```

2. 页面使用时候

```javascript
import utilFn from '@/utils/utils.js'
    // 在点击事件使用
    click:utilFn.debounceNow(function(){
    console.log('防抖节流')
})

```


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸