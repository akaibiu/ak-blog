# :frog: JS操作对象的案例



>在日常开发学习中，经常会对对象一顿操作，以下是常见案例整理，一起看看吧....

1. JavaScript根据对象某个属性排序（promise 案例）

```javascript
    var arr = [
        { name: '阿凯', money: 10 },
        { name: '阿包', money: 15 },
        { name: '阿毅', money: 13 },
    ];
    function arrSortByObjectAttr(arr, key) {
        let result = arr.sort((a, b) => {
            return a[key] - b[key];
        });
        return result;
    };
    console.log(arrSortByObjectAttr(arr, 'money'));


```
![alt 示例图片](/img/study/javascript/JS操作对象的案例/JS对象某个属性排序.jpg)

2. JavaScript根据某个对象属性排序
```javascript
    var newArr = [
        { name: '阿凯', money: 10 },
        { name: '阿包', money: 15 },
        { name: '阿毅', money: 13 },
    ];
    function sortBy(attr, isReverse = false) {
        isReverse = isReverse ? 1 : -1
        return function (a, b) {
            a = a[attr];
            b = b[attr];
            if (a > b) {
                return isReverse * 1
            } else if (a < b) {
                return isReverse * -1
            }
            return 0
        }
    };
    console.log(newArr.sort(sortBy('money', true)));
```
![alt 示例图片](/img/study/javascript/JS操作对象的案例/JS根据某个对象属性排序二.jpg)
3. JavaScript根据对象属性排序 
```javascript
    var arr=[
        {name:'阿凯',money:10},
        {name:'阿包',money:15},
        {name:'阿毅',money:13},
    ];
    function arrSortByObjectAttr(arr,key){
        let result=arr.sort((a,b)=>{
            return a[key]-b[key];
        });
        return result;
    };
    console.log(arrSortByObjectAttr(arr,'对象根据字段排序'));
    var mydate = [
        {
            name: "李四",
            age: 15
        }, {
            name: "七七",
            age: 26
        }, {
            name: "李红",
            age: 7
        }, {
            name: "赵红",
            age: 12
        }
    ];
    function sortBy(attr, rev = false) {
        rev = rev ? 1 : -1
        return function (a, b) {
            a = a[attr];
            b = b[attr];
            if (a > b) {
                return rev * 1
            } else if (a < b) {
                return rev * -1
            }
            return 0
        }
    };
    mydate.sort(sortBy('age',true))
    console.log(mydate,'对象根据字段排序')
```
![alt 示例图片](/img/study/javascript/JS操作对象的案例/JS根据某个对象排序三.png)

4. 对象解构 
   1. {name: 'ats', pailiang: '2.0T', qudong: '前驱'} 输出代码示例
```javascript
    const res={
        arr:[1,3,4,6,7,5],
        time:'234244',
        age:244,
        ats:{
            name:'ats',
            pailiang:'2.0T',
            qudong:'前驱'
        }
    }
    const {ats}=res;
    console.log(ats,'解构');
```
5. 获取对象键名的数组
   1. ['arr', 'time', 'age', 'ats'] 输出代码示例
```javascript
    const res={
        arr:[1,3,4,6,7,5],
        time:'234244',
        age:244,
        ats:{
            name:'ats',
            pailiang:'2.0T',
            qudong:'前驱'
        }
    }
    function operationObject(obj){
        return Object.keys(obj)
    };
    console.log(operationObject(res));
```
6. 复杂对象解构
    1. {name: 'hhhhh', age: 2322, r: 9}
```javascript
    const ct={
        ats:{
            name:'hh',
            age:30,
            p:'fs'
        },
        data:{
            code:00,
            sta:1,
            xts:{
                name:'hhhhh',
                age:2322,
                r:09
            }
        }
    };
    const {xts}=ct.data;
    console.log(xts,'解构');
```

1. 对象转数组
   
![alt 示例图片](/img/study/javascript/JS操作对象的案例/对象转数组.jpg)
   


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸