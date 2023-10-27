# :hatched_chick: JS执行顺序案例



>在日常开发学习中，难免会用到promsie，接下来这个案例带大家看一下promsie的输出，以下是常见案例整理，一起看看吧....


<font color="#dd00dd">promise async await setTimeout 整合</font><br />


1. 第一个案例
```javascript
    function getNum(){
      return new Promise(function(resolve,reject){
          setTimeout(() => {
              resolve();
              console.log('哈哈');
          }, 3000);
      })
   };
   async function test(){
       const res=await getNum();
   };
   test()
   var res=new Promise(function(resolve,reject){
       console.log('A');
       resolve();
   }).then(()=>{
       console.log('B');
       return new Promise(function(resolve,reject){
           console.log('C');
           resolve();
       }).then(()=>{
           console.log('F');
           return new Promise(function(resolve,reject){
               console.log('I');
               resolve();
           }).then(()=>{
               console.log('G')
           }).then(()=>{
               console.log('H')
           })
       }).then(()=>{
           console.log('E')
       })
   }).then(()=>{
       console.log('D')
   });
   console.log(res)

```
![alt 示例图片](/img/study/javascript/JS执行顺序案例/执行顺序输出.jpg)

2. 第二个案例
```javascript
    const count = 10;
    // async 要和await配合使用 且: async await 后只能是函数Function
    async function test() {
        console.log('B');
        if (count >= 10) {
            // 3.调用这个函数(函数内部调用函数 闭包) 此处还是用await控制这个函数
            console.log('C');
            await awaitFn();
            //  0.创建一个变量接收函数的返回值
            var res;
            // 1.创建一个函数 这个函数用来给之前变量赋值
            console.log('D');
            setTimeout(() => {
                console.log('G');
            }, 2000);
            function awaitFn() {
                // 2.变量赋值
                res = Number(10).toFixed(2);
                setTimeout(() => {
                    console.log('F');
                }, 10);
                console.log('E');
            };
            console.log('A');
            console.log(res, 'res');
        } else {
            await errAwaitFn();
            var err;
            function errAwaitFn() {
                err = Number(-10).toFixed(2)
            };
            console.log(err, 'err');
        }
    };
    test();
```

![alt 示例图片](/img/study/javascript/JS执行顺序案例/控制执行顺序输出二.jpg)

3. 第三个案例 async和await 执行顺序

```javascript
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end')
    }
    async function async2() {
        console.log('async2')
    }
    console.log('script start');
    async1();
    console.log('script end')
```

![alt 示例图片](/img/study/javascript/JS执行顺序案例/async.jpg)


4. 第四个案例 async await 执行顺序

```javascript
    async function one() {
        console.log('第一个输出的');
        await two();
        console.log('第三个输出的');
    };
    async function two() {
        console.log('第二个输出的');
        await four();
        console.log('第五个输出的');
    };
    function four() {
        console.log('第四个输出的');
    };
    console.log(one());
```

![alt 示例图片](/img/study/javascript/JS执行顺序案例/await.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸