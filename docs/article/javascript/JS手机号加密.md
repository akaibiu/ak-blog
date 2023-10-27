# :hatching_chick: JS手机号加密




* 大家上班好，我是亲爱的小邱果咩纳塞! 今天天气阴沉沉的，没有太阳全是雾霾☁️，正如我写这篇文章的时候没有感情全是技巧。于是我悄悄的记录下了我的第一篇正式不正经的文章。



>在前端开发工作或者学习中，难免会遇到一些对于手机号的操作，例如在一些订单中需要对手机号部分进行隐藏。
>> 但是这种非主流方法仅仅适用于前端页面展示，最优办法就是让后端处理手机号加密，前端处理手机号加密是给外行看的。根本作用其实不大。



* 加密中间四位数字
<font color="#0000dd">1.首先创建一个用于接收电话号码的变量；</font><br />
<font color="#0000dd">2.创建一个接收正则表达式的变量；</font><br />
<font color="#0000dd">3.使用JS的replace方法去替换掉phone中间四位数字</font><br />
<font color="#0000dd">4.`phoneStr`就是加密后的手机号</font><br />
> $1就是代表正则里面的第一个括号括起来的内容 $2就是第二个括号括起来的内容
> string.repeat(重复次数) 代表重复一个字符串多少次，举个栗子
`'我喜欢你'.repeat(520)`
> 将会打印520次'我喜欢你'

```javascript
let phone="18856237821";
let reg=/^(\d{3})\d{4}(\d{4})$/;
const phoneStr=phone.replace(reg,'$1****$2');
console.log(phoneStr)
// phoneStr在浏览器打印出来为 188****7821
```



* 加密前面七位数字
<font color="#00dddd">1.首先创建一个用于接收电话号码的变量；</font><br />
<font color="#00dddd">2.创建一个接收正则表达式的变量；</font><br />
<font color="#00dddd">3.使用JS的replace方法去替换掉phone中间四位数字</font><br />
<font color="#00dddd">4.`phoneStr`就是加密后的手机号</font><br />


```javascript
let phone="18856237821";
let reg=/^\d{7}(\d{4})$/;
const phoneStr=phone.replace(reg,`${'*'.repeat(7)}$1`);
console.log(phoneStr)
// phoneStr在浏览器打印出来为 *******7821
```



* 加密中间八位数字
<font color="#dd00dd">1.首先创建一个用于接收电话号码的变量；</font><br />
<font color="#dd00dd">2.创建一个接收正则表达式的变量；</font><br />
<font color="#dd00dd">3.使用JS的replace方法去替换掉phone中间四位数字</font><br />
<font color="#dd00dd">4.`phoneStr`就是加密后的手机号</font><br />


```javascript
let phone="18856237821";
let reg=/^(\d{1})\d{8}(\d{2})$/;
const phoneStr=phone.replace(reg,`$1${'*'.repeat(8)}$2`);
console.log(phoneStr)
// phoneStr在浏览器打印出来为 1********07
```



* 好了，以上的总结就到此为止了，我也要下班了，如果`有疑问可以不问`也可以联系作者。还是那句话，`不建议前端做加密`，如同虚设。咱们下期再见! Good bye! 🌸