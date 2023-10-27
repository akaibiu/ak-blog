# :avocado: uniapp小程序开发详解




>这篇文章将带领大家入门uniapp小程序开发，适合新手学习，如有疑惑，可加我微信 Akaibiu 沟通，我会为您答疑解惑，一起看看吧....

#### 1.技术栈及开发工具


>JavaScript,CSS,VUE(框架:uniapp,uView,Vant)(开发工具:HbuilderX,微信开发者工具)
> >[微信开发者工具下载](http://xz.fengbp.cn/soft/99162.html?wordId=261699205638)
> >[HbuilderX下载](http://xz.fengbp.cn/soft/99162.html?wordId=261699205638)
> >[使用visual Studio Cod](http://xz.fengbp.cn/soft/99162.html?wordId=261699205638)
> >[uniapp官网地址](https://uniapp.dcloud.io/)
> >[uVIew官网地址](https://www.uviewui.com/)
> >[微信公众平台](https://mp.weixin.qq.com/)
> >[小程序插件组件市场](https://ext.dcloud.net.cn/)
> >[万能网站工具](http://5cv.top/)
> >如果您已经有了一定uniapp小程序开发的经验阅历了，可移步使用框架模板快速开发[uniapp快速开发模板](https://ext.dcloud.net.cn/publisher?id=690316)

#### 2.起步
* 1.公司登录微信公众平台申请小程序开发，配置隐私条款。
* 2.后台配置小程序白名单，域名等基础隐私设置
* 3.前端开发人员使用HbuilderX快捷创建小程序项目。
* 4.项目创建
        4.1.打开HbuilderX,左上角'文件',选择'新建',选择'项目'
        ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/创建项目.jpg)<br />
        4.2.创建过后选择项目根目录，左上角选择'运行'，选择'运行到小程序模拟器'，选择'微信开发者工具'<br />
        4.3.注：如果项目运行不成功，请手动打开微信开发者工具，导入你上一步创建的项目，appid可使用测试号。<br />
            <font color="#dd00dd">注：如果项目运行不成功，请手动打开微信开发者工具，导入你上一步创建的项目，appid可使用测试号。</font><br />
            <font color="#dd00dd">1.打开过后选择左上角'设置'，选择'安全设置',开启服务端口</font><br />
            <font color="#dd00dd"> 2.右上角详情点击找到'appid'选项，用公司申请的正式appid替换掉你之前的测试appid(appid可登录微信公众平台获取)</font><br />
            ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/微信公众平台获取appid.jpg)<br />
        4.4.微信公众平台可查看小程序版本(体验版本，审核版本,线上版本)，开发设置可查看项目成员和域名白名单配置<br />
            <font color="#dd00dd">下方有账号设置，便可查看appid(前提你得是开发者或者管理人员)</font><br />
            ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/查看appid.jpg)<br />
        4.5 如果发现如下报错[查看文档:](https://www.jianshu.com/p/b70e4a4dc04a)<br />
            ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/app.json报错.jpg)<br />
        4.6 如果遇到 未找到 ["sitemapLocation"] 对应的 sitemap.json 文件<br />
            ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/sitemap报错.jpg)<br />
            <font color="#dd00dd">建议将项目停止运行重新编译运行即可</font><br />
        4.7 如果遇到 Cannot read property 'forceUpdate' of undefined<br />
            ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/forceUpdate.jpg)<br />
            <font color="#dd00dd">就是你的appid没有更换过来</font><br />
        4.8 如果遇到其他报错-<font color="#dd00dd">首先查看自己是否打开服务端口和更改appid！！！</font><br /><br />
####  3.了解uniapp项目文件配置
![alt 项目配置](/img/study/uniapp/uniapp小程序开发详解/项目配置.jpg)<br />
        3.1.hbuilderx 文件不用管(不建议删除，后果自负)<br />
        3.2.pages文件是存放页面文件(首页，我的，咨询页等)<br />
        3.3.static文件夹存储静态资源(image,svg也可存放reset.css--样式重置表)<br />
        3.4.app.vue项目启动页面（比如小车==小程序有公共样式可将css写入到app.vue里面）<br />
        3.5.index.html不做更改<br />
        3.6.main.js(公共组件引用，UI框架引入，vuex引入)<br />
        3.7.manifest.json是小程序的配置文件(蓝牙，定位权限，相机，三方插件，组件使用，分包等配置较多，自行查看)<br />
        3.8.pages.json(小程序管理页面的json文件)<br />
            pages:存放所有页面路径数组
            style属性里面写入 "navigationStyle": "custom" 可去除小程序导航栏(不包括胶囊按钮)
            globalStyle:全局样式，包含顶部导航栏，小程序原生导航预留	
            navigationBarTitleText：导航栏文字说明
            navigationBarTextStyle：导航栏文本颜色
            navigationBarBackgroundColor：导航栏背景颜色
            backgroundColor：整个小程序页面背景(一般都为#f8f8f8)
            ![alt 项目配置](/img/study/uniapp/uniapp小程序开发详解/page.json配置.jpg)
*  1.介绍小程序分包加载和tabbar配置
        <font color="#dd00dd">subpackages是和pages数组同级，必须按照以下样式填写</font><br />
        <font color="#dd00dd">需要在pages文件夹同级创建分包页面文件夹，在按照如下代码引入文件</font><br />
        <font color="#dd00dd">在manifest.json文件中找到'源码视图'选择'微信小程序'添加如下代码配置</font><br />
        ```
         "usingComponents" : true,
                    "optimization":{"subPackages":true}
        ```
        <font color="#dd00dd">重新编译启动项目便可完成小程序分包加载</font><br />
        <font color="#dd00dd">在微信开发工具右上角选择详情，选择'代码依赖分析'可查看小程序分包加载是否成功</font><br />
         ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/代码依赖.jpg)
         ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/源码视图配置.jpg)
         ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/tabbar.jpg)
*   2.小程序tabbar配置<br />
        1.大多数小程序下方都有四个菜单选项，便是我们的tabbar，一般可以官方的tabbar，也可自定义tabbar<br />
        2.[Uniapp官方tabbar使用链接](https://uniapp.dcloud.io/collocation/pages?id=tabbar)<br />
        3.示例代码如下<br />

        ```javascript
        "tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","
          list":[
          {"pagePath":"pages/component/index","iconPath":"static/image/icon_component.png","selectedIconPath":"static/image/icon_component_HL.png","text":"组件"},		        		  {"pagePath":"pages/API/index","iconPath":"static/image/icon_API.png","selectedIconPath":"static/image/icon_API_HL.png","text":"接口"}
        ]
        }
        
        ```
1. <font color="#dd00dd">pagePath为tabbar页面路径，iconpath为tabbar图标，selectedIconPath为tabbar选中激活的图标样式，text为tabbar文本说明(更过参数说明可在上方文档查看)</font><br />
         ![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/底部导航栏预览.jpg)
2. 使用UI框架uView-ui [查看uView文档地址](https://www.uviewui.com/)
#### 4. 小程序页面和组件创建
    1.在pages文件夹下选择创建页面，创建的时候勾选 '在pages.json中注册页面' 选项
    2.可在对应页面设置页面导航栏样式页面文本标题说明
    1. [创建小程序组件](https://blog.csdn.net/M_Eve/article/details/107484978)
![alt 示例图片](/img/study/uniapp/uniapp小程序开发详解/组件.jpg)
#### 5.uniapp小程序请求封装，详见文章-uniapp小程序请求封装案例

<font color="#dd00dd">如有疑问联系我 微信 Akaibiu</font><br />





* 好了，以上的总结就到此为止了，如果`有疑问可以不问`也可以联系作者。咱们下期再见! Good bye! 🌸