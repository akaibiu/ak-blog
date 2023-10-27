# :dolphin: JS操作数组的案例



>在日常开发学习中，难免会遇到数组的操作，以下是常见案例整理，一起看看吧....

1. JS判断数组是否相等
   1. false 输出
```javascript
    let arr1 = [1, 3, 5, 7, 9];
    let arr2 = [1, 3, 5, '7', 9];
    console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
```
2. JS操作数组复杂的(将name属性相同的对象的value数组按照对应索引相加)
   
```javascript

    var arr=[
        {
            name:'c',
            year:2017,
            value:[1,3,5],
        },
        {
            name:'a',
            year:2017,
            value:[4,6,11],
        },
        {
            name:'b',
            year:2017,
            value:[2,3,8],
        },
        {
            name:'c',
            year:2017,
            value:[7,2,3],
        },
        {
            name:'b',
            year:2017,
            value:[9,2,7],
        },
    ]
    function fn(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].name == arr[j].name) {
                    let arra = arr[i].value
                    let arrb = arr[j].value
                    arra.forEach((v, r) => {
                        arra[r] = arra[r] + arrb[r]
                    })
                    // arr[i].value.push.apply(arr[i].value,arr[j].value);
                    arr.splice(j, 1)
                }
            }
        }
        return arr
    }
    let obj = {}
    arr.forEach(v => obj[v.name] = obj[v.name] === undefined ? v.value : obj[v.name].map((o, index) => o += v.value[index]))
    let finallyAyy = Object.keys(obj).map(o => { return { "name": o, "value": obj[o] } })
    console.log(finallyAyy);
    console.log(fn(arr))


```
![alt 示例图片](/img/study/javascript/JS操作数组的案例/数组相同属性遍历.jpg)

<font color="#dd00dd">一维数组转二维数组几个小案例!!!</font><br />

3. 一维数组转二维数组
   1. 第一个案例 Code by whs

```javascript

    var arr = [
        { ID: 1, Name: "1" },
        { ID: 2, Name: "2" },
        { ID: 3, Name: "3" },
        { ID: 4, Name: "4" },
        { ID: 5, Name: "1_1" },
        { ID: 6, Name: "2_1" },
        { ID: 7, Name: "3_1" },
        { ID: 8, Name: "4_1" },
        { ID: 9, Name: "1_2" },
        { ID: 10, Name: "10" },
    ];
    const tansformArrayToTree = (arr) => {
        const parent = [];
        const children = [];
        for (iterator of arr) {
            iterator?.Name?.includes("_")
                ? children.push(iterator)
                : parent.push(iterator);
        }
        for (let i = 0; i < children.length; i++) {
            let key = children[i].Name.substr(0, children[i].Name.indexOf("_"));
            for (let j = 0; j < parent.length; j++) {
                if (parent[j].Name === key) {
                    parent[j].children
                        ? parent[j].children.push(children[i])
                        : (parent[j].children = [children[i]]);
                }
            }
        }
        return parent;
    };
    console.log(tansformArrayToTree(arr), "-----------一维数组------------");

```
![alt 示例图片](/img/study/javascript/JS操作数组的案例/whs.jpg)

   2. 第二个案例 Code by wx
   
```javascript

    var arr = [
        { ID: 1, Name: "1" },
        { ID: 2, Name: "2" },
        { ID: 3, Name: "3" },
        { ID: 4, Name: "4" },
        { ID: 5, Name: "1_1" },
        { ID: 6, Name: "2_1" },
        { ID: 7, Name: "3_1" },
        { ID: 8, Name: "4_1" },
        { ID: 9, Name: "1_2" },
        { ID: 10, Name: "10" },
    ];
    function getTreeArr(arr) {
        var newArr = [];
        //获取一级
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].Name.split("_").length == 1) {
                newArr.push(arr[i]);
            }
        }
        //给获取到的一级加子数组
        for (var x = 0; x < newArr.length; x++) {
            newArr[x]["children"] = [];
        }
        //获取根据_截取name长度大于1且截取的第零个等于一级中某项name的push到一级子数组
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < newArr.length; j++) {
                if (
                    arr[i].Name.split("_").length > 1 &&
                    arr[i].Name.split("_")[0] == newArr[j].Name
                ) {
                    newArr[j]["children"].push(arr[i]);
                }
            }
        }
        return newArr;
    }
    console.log(getTreeArr(arr), "---------一维数组--------");

```

![alt 示例图片](/img/study/javascript/JS操作数组的案例/wx.jpg)


   3. 第三个案例 一维数组转多维数组  <font color="#dd00dd">最最最牛的一个</font><br />
   
```javascript

    var nbArr = [
        { ID: 1, Name: "1" },
        { ID: 2, Name: "2" },
        { ID: 3, Name: "3" },
        { ID: 4, Name: "4" },
        { ID: 5, Name: "1_1" },
        { ID: 6, Name: "2_1" },
        { ID: 7, Name: "3_1" },
        { ID: 8, Name: "4_1" },
        { ID: 9, Name: "1_2" },
        { ID: 10, Name: "10" },
        { ID: 11, Name: "1_2_1" },
        { ID: 11, Name: "1_2_2" },
    ];
    let fn = nbArr.map((item) => ({
        id: item.Name,
        pid: item.Name.split("_").slice(0, item.Name.split("_").length - 1).join("_"),
        ...item,
    }));
    function listTree(list) {
        list.forEach((child) => {
            const pid = child.pid;
            if (pid) {
                list.forEach((parent) => {
                    if (parent.id === pid) {
                        parent.children = parent.children || [];
                        parent.children.push(child);
                    }
                });
            }
        });
        return list.filter((n) => !n.pid);
    }
    console.log(listTree(fn), '----------多维数组--------');

```
![alt 示例图片](/img/study/javascript/JS操作数组的案例/一转多.jpg)


4. 数组筛选案例
   
```javascript

    let dataMap = new Map([
      ["散装及托盘包装", "a"],
      ["捆包状包装", "b"],
      ["袋状包装", "c"],
      ["箱状包装", "d"],
      ["桶状包装", "e"],
      ["其他形状包装", "f"],
    ]);
    let input = "其他形状包装";
    let str1 = dataMap.get(input);
    console.log(str1,'hhhh');  
  
```
![alt 示例图片](/img/study/javascript/JS操作数组的案例/数组筛选.jpg)









* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸