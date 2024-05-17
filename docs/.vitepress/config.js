import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `Sale-Phine`,
  description: '阿凯的个人博客网站！',
  // base: '/Sale-Phine/',
  head: [ // 网站图标
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  ],
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },
  themeConfig: {
    logo: '/logo.gif',
    // editLink: {
    //   pattern: 'https://github.com/akaibiu',
    //   text: 'Suggest changes to this page'
    // },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: 'github', link: 'https://github.com/akaibiu' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/AkaiBlog'
      },
      // 自定义icon
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: 'https://github.com/akaibiu'
      // }
    ],

    search: { // vitepress 内置 search
      provider: 'local'
    },
    // algolia: { // algolia 搜索服务 与 内置 search 可二选一
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },

    footer: {
      message: 'Released under the MIT License.',
      copyright:`Copyright ©2022-${new Date().getFullYear()} | 蜀ICP备2023003936号`
    },
    nav: [
      { text: '文章博客', link: '/article/README', activeMatch: '/article/' },
      { text: '笔记收录', link: '/book/README', activeMatch: '/book/' },
      { text: '工具整理', link: '/tool/README', activeMatch: '/tool/' },
      { text: '友情链接', link: '/friendly/info', activeMatch: '/friendly/' },
      { text: '插件说明', link: '/plugin-info/README', activeMatch: '/plugin-info/' },
      { text: '关于作者.｡o○', link: '/mine/README', activeMatch: '/mine/' },
      {
        text: '链接指引',
        items: [
          { text: 'My Github', link: 'https://github.com/akaibiu' },
          { text: 'My Gitee', link: 'https://gitee.com/AkaiBlog' },
          { text: 'My Plugin', link: 'https://ext.dcloud.net.cn/publisher?id=690316' },
          { text: 'My Csdn', link: 'https://blog.csdn.net/weixin_56083194?type=blog' },
          { text: 'My Yuque', link: 'https://www.yuque.com/u21729372/kwgz8c' },
        ]
      }
    ],

    sidebar: {
      '/article/': [
        {
          text: 'Css',
          items: [
            {
              text: 'css渐变色特效',
              link: '/article/css/css渐变色特效'
            },{
              text: 'css放大镜特效',
              link: '/article/css/css放大镜特效'
            },{
              text: 'css实现冰墩墩',
              link: '/article/css/css实现冰墩墩'
            },{
              text: 'css实现书签效果',
              link: '/article/css/css实现书签效果'
            },{
              text: 'css实现半圆',
              link: '/article/css/css实现半圆'
            },{
              text: 'css实现梯形',
              link: '/article/css/css实现梯形'
            },{
              text: 'css抖动输入框',
              link: '/article/css/css抖动输入框'
            },{
              text: 'css渐变文字',
              link: '/article/css/css渐变文字'
            },{
              text: 'css实现三角形',
              link: '/article/css/css实现三角形'
            },{
              text: 'css梯形选项卡',
              link: '/article/css/css梯形选项卡'
            },{
              text: 'css上三下二',
              link: '/article/css/css用grid实现上三下二布局'
            },{
              text: 'css星空效果',
              link: '/article/css/css星空效果'
            },{
              text: 'css漂浮气泡效果',
              link: '/article/css/css漂浮气泡效果'
            },{
              text: 'css满屏小星星效果',
              link: '/article/css/css满屏小星星效果'
            },{
              text:'css设置checkbox默认样式',
              link:'/article/css/css设置checkbox默认样式'
            }
          ]
        },{
          text: 'Html',
          items: [
            {
              text: '手机号输入自动调整格式',
              link: '/article/html/手机号输入自动调整格式'
            }, {
              text: 'H5手机号自动调整格式',
              link: '/article/html/H5手机号自动调整格式'
            }, {
              text: '简单的H5模块',
              link: '/article/html/简单的H5模块'
            }, {
              text: '可拖拽进度条',
              link: '/article/html/可拖拽进度条'
            }
          ]
        },{
          text: 'JavaScript',
          items: [
            {
              text: 'array',
              link: '/article/javascript/array'
            }, {
              text: 'es6',
              link: '/article/javascript/es6'
            }, {
              text: 'function',
              link: '/article/javascript/function'
            }, {
              text: 'object',
              link: '/article/javascript/object'
            }, {
              text: 'JS解决浮点数精度问题',
              link: '/article/javascript/JS解决浮点数精度问题'
            }, {
              text: 'JS操作数组的案例',
              link: '/article/javascript/JS操作数组的案例'
            }, {
              text: 'JS操作对象的案例',
              link: '/article/javascript/JS操作对象的案例'
            }, {
              text: 'JS分割地址栏参数',
              link: '/article/javascript/JS分割地址栏参数'
            }, {
              text: 'JS执行顺序案例',
              link: '/article/javascript/JS执行顺序案例'
            }, {
              text: 'JS生成sign案例',
              link: '/article/javascript/JS生成sign案例'
            }, {
              text: 'JS生成sign业务案例',
              link: '/article/javascript/JS生成sign业务案例'
            }, {
              text: 'JS传递参数加密',
              link: '/article/javascript/JS传递参数加密'
            }, {
              text: 'JS手机号加密',
              link: '/article/javascript/JS手机号加密'
            }, {
              text: 'JS使用地址栏传递参数',
              link: '/article/javascript/JS使用地址栏传递参数'
            }, {
              text: 'JS获取自定义时间格式',
              link: '/article/javascript/JS获取自定义时间格式'
            }, {
              text: 'JS实现防抖节流',
              link: '/article/javascript/JS实现防抖节流'
            }, {
              text: 'JS生成随机颜色',
              link: '/article/javascript/JS生成随机颜色'
            }, {
              text: 'JS浏览器跨窗口通信',
              link: '/article/javascript/JS浏览器跨窗口通信'
            }
          ]
        },{
          text: 'Uniapp',
          items: [
           {
              text: 'uniapp小程序开发详解',
              link: '/article/uniapp/uniapp小程序开发详解'
            },{
              text: 'uniapp小程序请求封装案例',
              link: '/article/uniapp/uniapp小程序请求封装案例'
            },{
              text: 'uniapp小程序完美请求封装',
              link: '/article/uniapp/uniapp小程序完美请求封装'
            },{
              text: 'uniapp来自雷总的请求封装',
              link: '/article/uniapp/uniapp来自雷总的请求封装'
            },{
              text: 'uniapp使用animate.css',
              link: '/article/uniapp/uniapp使用animate.css'
            },{
              text: 'uniapp小程序搜索框导航栏',
              link: '/article/uniapp/uniapp小程序搜索框导航栏'
            },{
              text: 'uniapp小程序自定义导航栏',
              link: '/article/uniapp/uniapp小程序自定义导航栏'
            },{
              text: 'uniapp小程序使用flex完美布局',
              link: '/article/uniapp/uniapp小程序使用flex完美布局'
            },{
              text: 'uniapp小程序单选多选案例',
              link: '/article/uniapp/uniapp小程序单选多选案例'
            },{
              text: 'uniapp小程序使用vedio案例',
              link: '/article/uniapp/uniapp小程序使用vedio案例'
            },{
              text: 'uniapp小程序左右联动案例',
              link: '/article/uniapp/uniapp小程序左右联动案例'
            },{
              text: 'uniapp小程序滑动切换选项卡案例',
              link: '/article/uniapp/uniapp小程序滑动切换选项卡案例'
            },{
              text: 'uniapp-H5授权微信登录',
              link: '/article/uniapp/uniapp-H5授权微信登录'
            },{
              text: 'uniapp小程序上传图片案例',
              link: '/article/uniapp/uniapp小程序上传图片案例'
            },{
              text:'uniapp小程序分享',
              link: '/article/uniapp/uniapp小程序分享'
            },{
              text:'uniapp使用友盟+埋点',
              link: '/article/uniapp/uniapp使用友盟+埋点'
            },{
              text:'uniapp小程序登录授权和手机授权',
              link: '/article/uniapp/uniapp小程序登录授权和手机授权'
            },{
              text:'uniapp小程序返回上页传递参数',
              link: '/article/uniapp/uniapp小程序返回上页传递参数'
            },{
              text:'uniapp配合HbuilderX使用',
              link: '/article/uniapp/uniapp配合HbuilderX使用'
            },{
              text:'uniapp小程序设置动态样式',
              link: '/article/uniapp/uniapp小程序设置动态样式'
            },{
              text:'uniapp实现梯形选项卡',
              link: '/article/uniapp/uniapp实现梯形选项卡'
            },{
              text:'uniapp中设置checkbox样式',
              link: '/article/uniapp/uniapp中设置checkbox样式'
            }
          ]
        },{
          text: 'Node',
          items: [
           
          ]
        },{
          text: 'React',
          items: [
           
          ]
        },{
          text: 'Vue',
          items: [
            {
              text: 'vue.config.js文件配置说明',
              link: '/article/vue/vue.config.js文件配置说明'
            }
          ]
        },{
          text: '小程序',
          items: [
           {
              text: '小程序反编译爬取源码',
              link: '/article/小程序/小程序反编译爬取源码'
            }
          ]
        }
      ],
      '/book/': [
        {
          text: 'Notes',
          items: [
            {
              text: 'About Module',
              link: '/book/README'
            }
          ]
        },
        {
          text: '分类列表',
          items: [
            {
              text: '每日一问',
              link: '/book/daily'
            }, {
              text: 'Css',
              link: '/book/css'
            }, {
              text: 'ECMAScript6',
              link: '/book/es6'
            }, {
              text: 'Html',
              link: '/book/html'
            }, {
              text: 'JavaScript',
              link: '/book/javascript'
            }, {
              text: 'Vue',
              link: '/book/vue'
            },  {
              text: 'React',
              link: '/book/react'
            }, {
              text: '面试大全',
              link: '/book/interview'
            },{
              text: '更多知识',
              link: '/book/more'
            },
          ]
        }
      ],
      '/mine/': [
        {
          text: '关于作者',
          items: [
            {
              text: 'About Me',
              link: '/mine/README'
            }
          ]
        },
        {
          text: '日常生活',
          items: [
            {
              text: '日常',
              link: '/mine/dairy'
            }, {
              text: '生活',
              link: '/mine/life'
            },
          ]
        }
      ],
      '/tool/': [
        {
          text: '工具整理',
          items: [
            {
              text: '模块说明',
              link: '/tool/README'
            }
          ]
        },
        {
          text: '快速上手',
          items: [
            {
              text: 'git 用法',
              link: '/tool/git'
            }, {
              text: 'markdown 介绍',
              link: '/tool/markdown'
            },
          ]
        }
      ], '/plugin-info/': [
        {
          text: '插件说明',
          items: [
            {
              text: 'Dcloud插件(即uniapp前端开发项目模板)',
              link: '/plugin-info/README'
            },{
              text: 'Akai-xz|仅Tuniao-Ui项目框架说明',
              link: '/plugin-info/Akai-xz使用说明文档'
            },{
              text: 'Akai-hy|仅uView-Ui项目框架说明)',
              link: '/plugin-info/Akai-hy使用说明文档'
            },{
              text: 'Akai-sy|含Tuniao-Ui和uView-Ui项目框架说明',
              link: '/plugin-info/Akai-sy使用说明文档'
            }
          ]
        }
      ]
    }
  }
})
