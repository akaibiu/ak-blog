# :rowboat: JS浏览器跨窗口通信



>最近这段时间很火的浏览器跨窗口通信炫酷特效，案例整理于渡一袁老师。一起看看吧....


```javascript
   <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<div id="alert1" style="white-space:pre-wrap;"></div>
		<br />
		<div id="alert2" style="white-space:pre-wrap;"></div>
		<canvas id="canvas1" style="position:absolute;left:0;top:0;"></canvas>
		<script>
			const alert1 = document.getElementById('alert1');
			const alert2 = document.getElementById('alert2');
			const canvas1 = document.getElementById('canvas1');
			const ctx = canvas1.getContext('2d');
			
			const keys = getOtherKeys(); // 获取其它窗口的storage keys
			const key = keys.length == 0 ? 1 : keys.at(-1) + 1; // 自增最大的key序号，定义自己窗口storage key
			const color = ['red', 'blue', 'green'][key % 3]; // 获取圆颜色
			
			// 窗口关闭时删除自己窗口storage
			window.onunload = function () {
			    localStorage.removeItem(key);
			}
			
			function getOtherKeys() {
			    const keys = [];
			    for (let i = 0; i < localStorage.length; i++) {
			        const k = Number(localStorage.key(i));
			        !isNaN(k) && keys.push(k);
			    }
			    return keys.sort((a, b) => a - b);
			}
			
			function draw() {
			    const { clientWidth, clientHeight } = document.body; // 获取body高宽
			    const { screenX, screenY } = window; // 获取浏览器相对屏幕坐标
			    const barHeight = window.outerHeight - window.innerHeight; // 获取浏览器body顶部地址栏高度
			
			    // 记录log
			    alert1.textContent = JSON.stringify({ key, clientWidth, clientHeight, screenX, screenY, barHeight }, '', 2);
			
			    // 设置canvas为整个body高宽，铺满body
			    canvas1.width = clientWidth;
			    canvas1.height = clientHeight;
			
			    // 获取自己的圆心坐标，为body中心
			    const x = clientWidth / 2;
			    const y = clientHeight / 2;
			
			    // 画自己的圆
			    ctx.fillStyle = color;
			    ctx.beginPath();
			    ctx.arc(x, y, 15, 0, Math.PI * 2);
			    ctx.fill();
			
			    // 记录自己的position
			    const position = {
			        top: y + barHeight + screenY,
			        left: x + screenX,
			        color: color,
			    };
			    // 获取其它窗口position，并遍历
			    getOtherKeys().forEach(k => {
			        const position2 = JSON.parse(localStorage.getItem(k)); // 获取其中一个窗口的圆心position
			        const w = position2.left - position.left; // 获取相对自己圆心的横向间距
			        const h = position2.top - position.top; // 获取相对自己圆心的纵向间距
			
			        // 在自己的canvas上画出该圆
			        ctx.fillStyle = position2.color;
			        ctx.beginPath();
			        ctx.arc(x + w, y + h, 15, 0, Math.PI * 2);
			        ctx.fill();
			
			        // 画连接线
			        ctx.strokeStyle = "black";
			        ctx.beginPath();
			        ctx.moveTo(x, y);
			        ctx.lineTo(x + w, y + h);
			        ctx.stroke();
			    })
			
			    // 更新自己窗口的position
			    localStorage.setItem(key, JSON.stringify(position));
			
			    // 记录log
			    alert2.textContent = JSON.stringify(localStorage, '', 2);
			
			    window.requestAnimationFrame(draw);
			}
			window.requestAnimationFrame(draw);
		</script>
	</body>
</html>

```
![alt 示例图片](/img/study/javascript/JS浏览器跨窗口通信/demo.png)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸