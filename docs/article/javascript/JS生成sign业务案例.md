# :fox_face: JS生成sign业务案例



>我在做公司业务时，遇到需要一些请求参数加密的业务需求，这也是在我们工作中非常常见的业务。以下是常见案例整理，一起看看吧....
>> 我们需要根据请求参数去生成sign(生成规则便是 参数按照升序排序然后拼接成参数串，用串和MD5或者RSA或者AES加密)


* 具体业务需求需要对如下做删减

```javascript
    /**
     * @description 生成 sign 的规则函数
     * @description oldData 初始对象
     * @description str 返回的sign
     * @description config 公共配置的文件,AppSec是加密的secret
     * @description newData 返回的新对象,包含原始参数和生成的sign
    */
    getsign(oldData) {
        let signStr = '';
        let newData = {};
        Object.keys(oldData).sort().forEach(function (key) {
            newData[key] = oldData[key];
            if (key.toLowerCase() !== 'sign' && oldData[key] != null && oldData[key] != "" && oldData[
                key] != undefined) {
                signStr += '&' + key + '=' + oldData[key];
                // signStr += key + oldData[key];
            }
        });
        // signStr = signStr.slice(1, signStr.length)  如果串前面有&取消次行代码注释
        newData.sign = md5(config.AppSec + signStr).toUpperCase()
        return newData
    }

```


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸