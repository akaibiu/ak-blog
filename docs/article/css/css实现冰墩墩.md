# :wolf: css实现冰墩墩



>你会用css实现一个冰墩墩吗？别说不会，我教你啊，接下来就是实现代码，注释很详细，接下来一起看看吧....



```html

<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=0.2">
    <title>Document</title>
  </head>
  
  <body>
    <div class="wrap">
      <!-- ice dwen's body -->
      <div class="body"></div>
      <!-- ice dwen's ears -->
      <div class="ear"></div>
      <div class="ear rightEar"></div>
      <!-- ice dwen's hands -->
      <div class="leftHand"></div>
      <div class="rightHand"></div>
      <!-- ice dwen's foots -->
      <div class="leftFoot"></div>
      <div class="rightFoot"></div>
      <!-- my heart -->
      <div class="heart"></div>
      <!-- ice dwen's green face -->
      <div class="greenFace"></div>
      <!-- ice dwen's blue face -->
      <div class="blueFace"></div>
      <!-- ice dwen's pink face -->
      <div class="pinkFace"></div>
      <!-- ice dwen's yellow face -->
      <div class="yellowFace"></div>
      <!-- ice dwen's black face -->
      <div class="blackFace"></div>
      <!-- ice dwen's eyes -->
      <div class="leftEye"></div>
      <div class="rightEye"></div>
      <!-- ice dwen's nose -->
      <div class="nose"></div>
      <!-- ice dwen's mouth -->
      <div class="mouth"></div>
      <!-- ice dwen's chin -->
      <div class="chin"></div>
      <!-- ice dwen's belly -->
      <div class="belly">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0406%2F13a7569fp00qr5c3q00bec000tu00jkc.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648996526&t=8c61fa004d82ab9fd7fa9f7fd90572aa"
             alt="你真好看!花束">
      </div>
    </div>
    <style>
      body,
      html {
        /* 请求浏览器内外边距 */
        margin: 0;
        padding: 0;
        /* 设为怪异盒子模型 */
        box-sizing: border-box;
        transform: scale(0.65);
      }
      body {
        margin: 0px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
      }
      
      /* 放置冰墩墩的盒子 */
      .wrap {
        /* 绝对定位 */
        position: relative;
        margin-left: 279px;
        margin-top: 139px;
        height: 948px;
        width: 837px;
      }
      
      /* 椭圆身体 */
      .body {
        height: 100%;
        width: 100%;
        border: 16px solid #000;
        /* 使用相对定位 */
        position: absolute;
        /* border-radius属性可以绘制一个椭圆作为身体 */
        border-radius: 55% 55% 55% 55% / 50% 50% 60% 60%;
        top: 0;
        left: 0;
        background: #fff;
        /* 层级最高 让身体显示在耳朵上面 */
        z-index: 1;
      }
      
      /* 左耳 */
      .ear {
        width: 250px;
        height: 334px;
        /* 使用相对定位将耳朵放在正确位置 */
        position: absolute;
        top: 0;
        left: 55px;
        border: 16px solid #000;
        border-radius: 50% 60% 60% 50% / 50% 50% 50% 50%;
        background: #000;
        /* 堆叠层次 实现左耳 */
        z-index: 0;
        /* 使用旋转属性将耳朵放置正确位置 */
        transform: rotate(-20deg);
      }
      
      /* 右耳 */
      .rightEar {
        /* 右耳添加类名 同样属性 旋转角度调整 */
        right: 55px;
        left: auto;
        transform: rotateY(180deg) rotate(-20deg);
      }
      
      /* 左手 */
      .leftHand {
        position: absolute;
        z-index: 0;
        width: 223px;
        height: 362px;
        border-radius: 50%;
        background: #000;
        /* 左手定位  */
        top: 280px;
        left: -140px;
        /* 左手旋转到合适位置 */
        transform: rotate(-15deg);
      }
      
      .leftHand:after {
        position: absolute;
        top: 195px;
        content: '';
        width: 362px;
        height: 223px;
        background: #000;
        border-radius: 50%;
        transform: rotate(35deg);
      }
      
      /* 右手 */
      .rightHand {
        /* 右手定位 将右手定位到合适位置 */
        position: absolute;
        right: -210px;
        top: 470px;
        /* 设置堆叠层次 不淹没身体 */
        z-index: 0;
        height: 223px;
        width: 223px;
        border-radius: 50%;
        background: #000;
      }
      
      /* 右手设置样式 使用:after */
      .rightHand:after {
        /* 与左手同理 使用定位定到合适位置 */
        position: absolute;
        top: -66px;
        left: -70px;
        background: #000;
        width: 220px;
        height: 223px;
        content: '';
        transform: rotate(-47deg);
        border-radius: 0 0 0 80%;
      }
      
      /* 左脚 */
      .leftFoot {
        /* 将左脚定位到指定位置 */
        position: absolute;
        top: 840px;
        left: 80px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: #000;
      }
      
      .leftFoot:after {
        /* 将左脚定位到固定位置 这不是完整的左脚 */
        position: absolute;
        /* 设置堆叠层次 */
        z-index: 0;
        content: '';
        background: #000;
        height: 250px;
        width: 250px;
        left: 30px;
        top: -125px;
        /* 旋转10度到合适位置 */
        transform: rotate(10deg);
        /* 设置圆角属性 椭圆 */
        border-radius: 0% 50% 50% 0%;
      }
      
      /* 右脚 */
      .rightFoot {
        background: #000;
        width: 250px;
        height: 250px;
        /* 将有较定位到合适位置 */
        position: absolute;
        top: 840px;
        right: 80px;
        border-radius: 50%;
      }
      
      /* 右脚的腿杆 其实有点粗 是个柱子 */
      .rightFoot:after {
        content: '';
        /* 设置她的腿粗细 */
        width: 250px;
        height: 250px;
        /* 将这个柱子定位到合适位置 */
        position: absolute;
        top: -125px;
        right: 28px;
        z-index: 0;
        background: #000;
        transform: rotate(-12deg);
        border-radius: 0% 0% 0% 50%;
      }
      
      /* 把心给你 */
      .heart {
        width: 140px;
        height: 140px;
        /* 一定取消这个背景颜色  利用伪类设置背景颜色!!!!! */
        /* background: red;   */
        position: absolute;
        top: 350px;
        left: -90px;
        z-index: 2;
      }
      
      /* 实现爱心的重要步骤 */
      .heart:before,
      .heart:after {
        content: '';
        position: absolute;
        top: 0;
        width: 33px;
        height: 55px;
        background: red;
        border-radius: 55px 55px 0% 0%;
      }
      
      /* 使用transform */
      .heart:after {
        transform: rotate(45deg);
        right: 90px;
      }
      
      .heart:before {
        transform: rotate(-45deg);
        left: 0;
      }
      
      /* 脸上绿色的圈圈 */
      .greenFace {
        width: 661px;
        height: 517px;
        border: 10px solid #6cf078;
        /* 绿色是的脸已经可以了  */
        border-radius: 60% 60% 50% 50% /70% 70% 50% 50%;
        /* 接下来定位到脑壳中间去 */
        position: absolute;
        top: 95px;
        left: 83px;
        /* z-index: inherit; */
        z-index: 1;
        /*  */
      }
      
      /* 蓝色的脸 */
      .blueFace {
        width: 642px;
        height: 501px;
        border: 10px solid yellow;
        /* 蓝色是的脸已经可以了  */
        border-radius: 60% 60% 50% 50% /70% 70% 50% 50%;
        /* 接下来定位到脑壳中间去 */
        position: absolute;
        top: 103px;
        left: 92px;
        /* z-index: inherit; */
        z-index: 1;
        /*  */
      }
      
      /* 粉红色的脸 */
      .pinkFace {
        width: 619px;
        height: 480px;
        border: 10px solid red;
        /* 蓝色是的脸已经可以了  */
        border-radius: 60% 60% 50% 50% /70% 70% 50% 50%;
        /* 接下来定位到脑壳中间去 */
        position: absolute;
        top: 113px;
        left: 104px;
        /* z-index: inherit; */
        z-index: 1;
        /*  */
      }
      
      /* 黄色的脸 */
      .yellowFace {
        width: 591px;
        height: 451px;
        border: 13px solid #335fe6;
        /* 黄色是的脸已经可以了  */
        border-radius: 60% 60% 50% 50% /70% 70% 50% 50%;
        /* 接下来定位到脑壳中间去 */
        position: absolute;
        top: 125px;
        left: 115px;
        /* z-index: inherit; */
        z-index: 1;
        /*  */
      }
      
      /* 黑色的脸 */
      .blackFace {
        width: 567px;
        height: 422px;
        border: 13px solid #000;
        /* 黄色是的脸已经可以了  */
        border-radius: 60% 60% 50% 50% /70% 70% 50% 50%;
        /* 接下来定位到脑壳中间去 */
        position: absolute;
        top: 137px;
        left: 126px;
        /* z-index: inherit; */
        z-index: 1;
        /*  */
      }
      
      /* 左眼 */
      .leftEye {
        /* 设置眼睛大小 */
        width: 168px;
        height: 222px;
        background: #000;
        /* 设置堆叠层级，眼睛高于身体 */
        /* 先实现一个圆的眼睛 通过:after设置椭圆眼睛 */
        border-radius: 50%;
        z-index: 2;
        /* 将眼睛旋转45度 */
        transform: rotate(45deg);
        position: absolute;
        top: 222px;
        left: 180px;
      }
      
      /* 右眼 */
      .rightEye {
        /* 设置眼睛大小 */
        width: 168px;
        height: 222px;
        background: #000;
        /* 设置堆叠层级，眼睛高于身体 */
        /* 先实现一个圆的眼睛 通过:after设置椭圆眼睛 */
        border-radius: 50%;
        z-index: 2;
        /* 将眼睛旋转45度 右眼定位和旋转都与左眼相反 */
        transform: rotate(-45deg);
        /* 使用定位将眼睛放置合适位置 */
        position: absolute;
        top: 222px;
        right: 180px;
      }
      
      /* 眼球白色部分 */
      .rightEye:after,
      .leftEye:after {
        position: absolute;
        width: 84px;
        height: 84px;
        border: 8px solid #fff;
        border-radius: 50%;
        content: '';
        top: 28px;
        left: 35px;
      }
      
      /* 右眼 */
      .rightEye:after {
        left: auto;
        right: 35px;
      }
      
      /* 眼球白色部分 */
      .rightEye:before,
      .leftEye:before {
        position: absolute;
        top: 64px;
        left: 64px;
        background: #fff;
        border-radius: 50%;
        content: '';
        width: 28px;
        height: 28px;
      }
      
      /* 右眼 */
      .rightEye:before {
        left: 70px;
        top: 56px;
      }
      
      /* 鼻子 */
      .nose {
        width: 84px;
        height: 84px;
        background: #000;
        /* 将鼻子放置合适位置 */
        position: absolute;
        left: 50%;
        margin-left: -42px;
        top: 350px;
        /* 设置鼻子堆叠层数 不会被身体遮掩 */
        z-index: 1;
        border-radius: 30%;
        /* 使用旋转和斜切将鼻子放置合适位置 */
        transform: rotate(50deg) skewY(-10deg);
      }
      
      /* 接下来给鼻子做个手术吧 */
      .nose:after {
        content: '';
        /* 开始给鼻子做手术了 */
        width: 103px;
        height: 108px;
        border-radius: 50%;
        /* 设置上边框 */
        border-top: 28px solid #fff;
        /* 使用定位将鼻子啮合 */
        position: absolute;
        top: -17px;
        left: 0px;
        /* 使用斜切补鼻子 */
        transform: rotate(-45deg) skewY(0deg);
      }
      
      /* 嘴巴 */
      .mouth {
        width: 265px;
        height: 120px;
        border: 14px solid #000;
        /* 设置定位把嘴巴放置合适位置 */
        position: absolute;
        top: 400px;
        left: 50%;
        /* 设置嘴巴堆叠层次 防止被遮掩 */
        z-index: 1;
        /* 距离左边间隔 */
        margin-left: -140px;
        /* 设置嘴巴边框 形状 */
        border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
        /* 上边框为空 不要上边框 */
        border-top: none;
      }
      
      .mouth:after,
      .mouth:before {
        content: '';
        /* 使用定位将嘴巴放置合适位置 */
        position: absolute;
        width: 140px;
        height: 140px;
        background: #fff;
        top: -30px;
        /* 旋转角度 */
        transform: rotate(45deg);
      }
      
      .mouth:after {
        left: -60px;
      }
      
      .mouth:before {
        right: -60px;
      }
      
      /* 肚子上的图标 方丈图片吧 */
      .belly {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 72%;
        left: 45%;
        margin-left: -25px;
        z-index: 1;
      }
      
      .belly img {
        width: 150px;
        height: 150px;
      }
    </style>
    <script>
      /* 注：后续发现黄色的脸和蓝色的脸很奇怪，我把颜色改了 */
      (() => {
        "use strict";
        var i = {
          138: (i, t, s) => {
            class h {
              constructor(i = {}) {
                this.isRain = i.isRain || !1, this.el = null, this.dir = i.dir || "r", this
                  .width = 0, this.maxWidth = i.maxWidth || 80, this.minWidth = i
                  .minWidth || 2, this.opacity = 0, this.x = 0, this.y = 0, this.z = 0,
                  this.sx = 0, this.isSwing = !1, this.stepSx = .02, this.swingRadian = 1,
                  this.swingStep = .01, this.sy = 0, this.maxSpeed = i.maxSpeed || 4, this
                  .minSpeed = i.minSpeed || 1, this.quickMaxSpeed = i.quickMaxSpeed || 10,
                  this.quickMinSpeed = i.quickMinSpeed || 8, this.quickWidth = i
                  .quickWidth || 80, this.quickOpacity = i.quickOpacity || .2, this
                  .windowWidth = window.innerWidth, this.windowHeight = window
                  .innerHeight, this.init()
              }
              init(i) {
                let t = Math.random() > .8;
                this.isSwing = Math.random() > .8, this.width = t ? this.quickWidth : Math
                  .floor(Math.random() * this.maxWidth + this.minWidth), this.opacity =
                  t ? this.quickOpacity : Math.random(), this.x = Math.floor(Math
                                                                             .random() * (this.windowWidth - this.width)), this.y = Math.floor(
                  Math
                  .random() * (this.windowHeight - this.width)), i && Math.random() >
                  .8 ? this.x = -this.width : i && (this.y = -this.width), this.sy = t ?
                  Math.random() * this.quickMaxSpeed + this.quickMinSpeed : Math
                  .random() * this.maxSpeed + this.minSpeed, this.sx = "r" === this.dir ?
                  this
                  .sy : -this.sy, this.z = t ? 300 * Math.random() + 200 : 0, this
                  .swingStep = .01 * Math.random(), this.swingRadian = Math.random() * (
                  1.1 - .9) + .9
              }
              setStyle() {
                this.el.style.cssText =
                  `\n            position: fixed;\n            left: 0;\n            top: 0;\n            display: block;\n            width: ${this.isRain?1:this.width}px;\n            height: ${this.width}px;\n            opacity: ${this.opacity};\n            background-image: radial-gradient(#fff 0%, rgba(255, 255, 255, 0) 60%);\n            border-radius: 50%;\n            z-index: 9999999999999;\n            pointer-events: none;\n            transform: translate(${this.x}px, ${this.y}px) ${this.getRotate(this.sy,this.sx)};\n        `
              }
              render() {
                this.el = document.createElement("div"), this.setStyle(), document.body
                  .appendChild(this.el)
              }
              move() {
                this.isSwing ? ((this.swingRadian > 1.1 || this.swingRadian < .9) && (this
                                                                                      .swingStep = -this.swingStep), this.swingRadian += this
                                .swingStep, this.isRain ? this.x += this.sx : this.x += this.sx *
                                Math.sin(this.swingRadian * Math.PI), this.y -= this.sy * Math.cos(
                  this.swingRadian * Math.PI)) : (this.x += this.sx, this.y +=
                                                  this.sy), (this.x < -this.width || this.x > this.windowWidth || this
                                                             .y > this.windowHeight) && (this.init(!0), this.setStyle()), this.el
                  .style.transform =
                  `translate3d(${this.x}px, ${this.y}px, ${this.z}px) ${this.getRotate(this.sy,this.sx)}`
              }
              getRotate(i, t) {
                return this.isRain ?
                  `rotate(${0===t?0:90+Math.atan(i/t)*(180/Math.PI)}deg)` : ""
              }
            }
            class n {
              constructor(i = {}) {
                this.num = i.num || 100, this.opt = i, this.snowList = [], this
                  .createSnows(), this.moveSnow()
              }
              createSnows() {
                this.snowList = [];
                for (let i = 0; i < this.num; i++) {
                  let i = new h(this.opt);
                  i.render(), this.snowList.push(i)
                }
              }
              moveSnow() {
                window.requestAnimationFrame((() => {
                  this.snowList.forEach((i => {
                    i.move()
                  })), this.moveSnow()
                }))
              }
            }
            new n({
              isRain: !0,
              num: 300,
              maxSpeed: 15
            }), new n({
              isRain: !1,
              num: 150
            })
          }
        },
            t = {};
        
        function s(h) {
          if (t[h]) return t[h].exports;
          var n = t[h] = {
            exports: {}
          };
          return i[h](n, n.exports, s), n.exports
        }
        s.d = (i, t) => {
          for (var h in t) s.o(t, h) && !s.o(i, h) && Object.defineProperty(i, h, {
            enumerable: !0,
            get: t[h]
          })
        }, s.o = (i, t) => Object.prototype.hasOwnProperty.call(i, t), s(138)
      })();
    </script>
    <!-- 小邱  -->
  </body>
  
</html>

```


![alt 示例图片](/img/study/css/css实现冰墩墩/冰墩墩.jpg)


* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸