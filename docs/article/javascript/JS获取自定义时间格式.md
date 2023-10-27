# :hibiscus: JS获取自定义时间格式



>在日常小程序开发中，获取时间格式必不可少，如何获取自定义时间格式呢，接下来一起看看吧....


```javascript
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
let date = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
let mm = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes() + 1;
let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
// this.nowDate = year + ":" + month + ":" + date + "";  // 年月日
// this.nowTime = hh + ":" + mm ;  // 时分
let_time = year + "-" + month + "-" + date + " " + hh + ":" + mm;
			let newTime=year + ":" + month + ":" + date + ""+hh + ":" + mm;

```

<font color="#dd00dd">时间格式示例 2023:02:2216:45</font><br />




* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸