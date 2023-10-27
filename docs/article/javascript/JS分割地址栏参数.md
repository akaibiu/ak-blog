# :bear: JS分割地址栏参数



>在日常开发学子中，小伙伴儿们肯定会遇到截取地址栏参数的业务，接下来几个案例即可实现，一起看看吧....
1. 方法一
```javascript
    // 0.创建一个对象
    const obj = {};
    // 1.创建一个模拟url地址
    const url = "https://baidu.com?name=xiaoqiu&age=22&id=66";
    // 2.使用split分割字符串数组
    const dataArr = url.split('?');
    // 2.1 分割结果如下 ['https://baidu.com', 'name=xiaoqiu&age=22&id=66']
    // 2.2 dataArr[1] 获取结果如下 name=xiaoqiu&age=22&id=66
    const dataObj = dataArr[1];
    // 3 再将字符串分割成字符串数组
    const newDataArr = dataObj.split('&');
    // 3.1 dataObj.split('&')结果如下 ['name=xiaoqiu', 'age=22', 'id=66']
    // 3.2 循环遍历数组 不能用const 不能给常量重新赋值
    for (let i = 0; i < newDataArr.length; i++) {
        let a = newDataArr[i].split('=');
        // 循环数组分割后的 a ['name','xiaoqiu']
        // 赋值给对象 a[0]键 a[1]值
        obj[a[0]] = a[1]
    }
    console.log(obj);
        // obj:{name:'xiaoqiu',age:22,id:666}

```
![alt 示例图片](/img/study/javascript/JS分割地址栏参数/one.jpg)

2. 获取url参数对象数组
   
```javascript
     const url = "https://baidu.com?name=xiaoqiu&age=22&id=66";
    function splitStr(str) {
        // 转为obj
        const tansformObj = (str) => {
            if (str.includes("=")) {
            return { [str.split("=")[0]]: str.split("=")[1] };
            }
        };
        return str.split("?").map((item) => {
            if (item.includes("&")) {
            return item.split("&").map((b) => tansformObj(b));
            } else {
            return tansformObj(item) || item;
            }
        });
        }
    console.log(splitStr(url))
```
![alt 示例图片](/img/study/javascript/JS分割地址栏参数/two.jpg)


1. 获取url参数列表指定关键字对象

```javascript
    const url = "https://xxxx.xxxx.xxxx.com.cn/index.html?url=pars://pars.xxxx.com/open_url?type=x&url=http://xxxx.xxx.xxx.com/x/xxx?bannerid=123";
    function splitStr(str, key) {
      // 转为obj
      const tansformObj = (str) => {
        if (str.includes("=")) {
          return { [str.split("=")[0]]: str.split("=")[1] };
        }
      };
      let resulte = str.split("?").map((item) => {
        if (item.includes("&")) {
          return item.split("&").map((b) => tansformObj(b));
        } else {
          return tansformObj(item) || item;
        }
      });
      if (key) return resulte.filter((item) => item[key])[0];
      return resulte;
    }
    console.log(splitStr(url, "bannerid"));
```
![alt 示例图片](/img/study/javascript/JS分割地址栏参数/指定参数.jpg)


4. 获取url指定参数,参数对象需修改return返回值(---最适用的---)
   
```javascript
    const url = "https://baidu.com?name=xiaoqiu&age=22&id=66";
    function splitStr(str, key) {
        // 转为obj
        const tansformObj = (str) => {
            if (str.includes("=")) {
                return { [str.split("=")[0]]: str.split("=")[1] };
            }
        };
        let resulte = [];
        str.split("?").forEach((item) => {
            if (item.includes("&")) {
                resulte.push(...item.split("&").map((b) => tansformObj(b)));
            } else {
                resulte.push(tansformObj(item) || item);
            }
        });
        if (key) return resulte.filter((item) => item[key])[0];
        return resulte;
    }
    console.log(splitStr(url, "age"));
```
![alt 示例图片](/img/study/javascript/JS分割地址栏参数/最优.jpg)



* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸