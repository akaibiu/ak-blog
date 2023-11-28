import{_ as s,o as a,c as n,V as p}from"./chunks/framework.ed8632ae.js";const l="/img/study/uniapp/uniapp小程序设置动态样式/demo.jpg",_=JSON.parse('{"title":"🥖 uniapp小程序设置动态样式","description":"","frontmatter":{},"headers":[],"relativePath":"article/uniapp/uniapp小程序设置动态样式.md","filePath":"article/uniapp/uniapp小程序设置动态样式.md"}'),t={name:"article/uniapp/uniapp小程序设置动态样式.md"},o=p(`<h1 id="uniapp小程序设置动态样式" tabindex="-1">🥖 uniapp小程序设置动态样式 <a class="header-anchor" href="#uniapp小程序设置动态样式" aria-label="Permalink to &quot;:baguette_bread: uniapp小程序设置动态样式&quot;">​</a></h1><blockquote><p>在日常小程序开发中，如何给元素额设置动态样式呢？接下来看看吧，还有很多种哦，一起看看吧....</p></blockquote><blockquote></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{&#39;background&#39;: data.avatar == &#39;&#39;? </span></span>
<span class="line"><span style="color:#C3E88D;">		  &#39;url(&#39; + defaultImg + &#39;)&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">		  :&#39;url(&#39; + data.avatar + &#39;)&#39;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">			&#39;background-repeat&#39;:&#39;no-repeat&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">			&#39;background-size&#39;:&#39;100%&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">			&#39;width&#39;:&#39;200rpx&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">			&#39;height&#39;:&#39;200rpx&#39;,</span></span>
<span class="line"><span style="color:#C3E88D;">		  }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">			</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				data</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">					avatar</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1661311317595-assets/web-upload/d0effa8c-78f5-477f-b070-481840860bfe.jpeg?x-oss-process=image%2Fresize%2Cw_220</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">				defaultImg</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1661311316649-assets/web-upload/4de21afc-9abe-4c2a-b9fb-919d5537eb88.jpeg?x-oss-process=image%2Fresize%2Cw_220</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><img src="`+l+'" alt="alt 示例图片"></p><ul><li>好了，以上的总结就到此为止了，如果<code>有疑问可以不问</code>也可以联系作者。咱们下期再见! Good bye! 🌸</li></ul>',6),e=[o];function c(r,D,F,y,i,u){return a(),n("div",null,e)}const B=s(t,[["render",c]]);export{_ as __pageData,B as default};
