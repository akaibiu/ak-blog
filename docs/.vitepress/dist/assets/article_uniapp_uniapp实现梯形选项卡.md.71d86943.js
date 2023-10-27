import{_ as l,H as p,o,c as t,J as e,E as c,V as D,C as s,a as n}from"./chunks/framework.6e551575.js";const r="/img/study/uniapp/uniapp实现梯形选项卡/demo.jpg",b=JSON.parse('{"title":"🚣 uniapp实现梯形选项卡","description":"","frontmatter":{},"headers":[],"relativePath":"article/uniapp/uniapp实现梯形选项卡.md","filePath":"article/uniapp/uniapp实现梯形选项卡.md"}'),F={name:"article/uniapp/uniapp实现梯形选项卡.md"},y=D(`<h1 id="uniapp实现梯形选项卡" tabindex="-1">🚣 uniapp实现梯形选项卡 <a class="header-anchor" href="#uniapp实现梯形选项卡" aria-label="Permalink to &quot;:rowboat: uniapp实现梯形选项卡&quot;">​</a></h1><blockquote><p>在日常开发学习中，可能会需要用uniapp去实现一些奇怪的选项卡样式，比如接下来这个梯形选项卡，此文章由图鸟UI群友(小俊)提供，我仅做收录以下是案例代码整理，一起看看吧....</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tab</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">optionValue=!optionValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">optionValue?&#39;active&#39;:&#39;&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">选项卡1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!optionValue?&#39;active&#39;:&#39;&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">选项卡2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				optionValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex-end</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">eee</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">list-style</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">45px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">66caff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">first-child</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">66caff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">-5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">skew</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">first-child</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">last-child</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">66caff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">-5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">skew</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-10deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">tab</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">last-child</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,3),B=s("br",null,null,-1),i=s("p",null,[s("img",{src:r,alt:"alt 示例图片"})],-1),C=s("ul",null,[s("li",null,[n("好了，以上的总结就到此为止了，如果"),s("code",null,"有疑问可以不问"),n("也可以联系作者。咱们下期再见! Good bye! 🌸")])],-1);function E(A,u,d,_,f,g){const a=p("font");return o(),t("div",null,[y,e(a,{color:"#dd00dd"},{default:c(()=>[n("若您需要在原生使用仅需更改部分标签即可")]),_:1}),B,i,C])}const m=l(F,[["render",E]]);export{b as __pageData,m as default};
