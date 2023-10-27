# :octopus: JS生成sign案例



>在日常开发学习中，会用到sign验签的业务，以下是常见案例整理，一起看看吧....

<font color="#dd00dd">sign一般是有md5加密等操作</font><br />

```javascript

    const testData = {
        name: '阿凯',
        age: 22,
        height: 111,
    }
    function getData(oldData) {
        let newData = {};
        let signStr = ""; // 签名
        Object.keys(oldData).sort().forEach(function (key) {
            newData[key] = oldData[key];
            if (key.toLowerCase() !== 'sign' && oldData[key]) {
                signStr += '&' + key + '=' + oldData[key];
            };

        });
        signStr = signStr.slice(1, signStr.length)
        console.log(signStr, '签名原串')
        // newData.sign = Md5(signStr + toolApi.commonConfig.qunayi_appSign);
        return newData
    };
    console.log(getData(testData))


```
<font color="#dd00dd">sign一般是有md5加密等操作</font><br />

```javascript

    const obj={
        name: '阿凯',
        age: 22,
        height: 111,
    }
    function getSign(oldData){
        let newData = {};
        let str = "";
        delete oldData.sign;
        Object.keys(oldData).sort().forEach(key => {
            newData[key] = oldData[key];
            // if(key&&oldData[key] != null && oldData[key] != "" && oldData[key] != undefined){
            // 	str+="&"+key.toLowerCase()+'='+oldData[key]
            // }
            if (key && oldData[key]) {
                str += "&" + key.toLowerCase() + '=' + oldData[key]
            }
        });
        str = str.slice(1, str.length);

        console.log(str)
        // console.log(newData,'传递参数');
        // newData.sign = Md5(str + config.commonConfig.Md5Key);
        // console.log(str + config.commonConfig.Md5Key,'签名原串');
        // this.$set(newData,'sign',Md5(str + config.commonConfig.Md5Key));
        return newData
    }
    console.log(getSign(obj));

```




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸