import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6e551575.js";const B=JSON.parse('{"title":"🐁 JS使用地址栏传递参数","description":"","frontmatter":{},"headers":[],"relativePath":"article/javascript/JS使用地址栏传递参数.md","filePath":"article/javascript/JS使用地址栏传递参数.md"}'),p={name:"article/javascript/JS使用地址栏传递参数.md"},o=l(`<h1 id="js使用地址栏传递参数" tabindex="-1">🐁 JS使用地址栏传递参数 <a class="header-anchor" href="#js使用地址栏传递参数" aria-label="Permalink to &quot;:mouse2: JS使用地址栏传递参数&quot;">​</a></h1><blockquote><p>在日常开发学习中，难免会遇到地址栏传递参数的案例，一起看看吧....</p></blockquote><ol><li>apis封装代码（一般在于axios封装第二层）</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 商家店铺入驻 used</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">shopSetInApi</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">params</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">food/shop_manage_api/registerShop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;">params</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		headers</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">			isToken</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		method</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>页面请求代码(一般在于axios封装第三层)</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Check Message Code is Right</span></span>
<span class="line"><span style="color:#BABED8;">			async </span><span style="color:#82AAFF;">checkCode</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">that</span><span style="color:#89DDFF;">=this;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">param</span><span style="color:#89DDFF;">={</span><span style="color:#F07178;">phone</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">17738531129</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">honey XiaoZhou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">paramArr</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">param</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#BABED8;">paramArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">param</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">key</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">str</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">paramArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&amp;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">shopSetInApi</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">str</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">code</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#BABED8;">that</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">$t</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toast</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">msg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 此处框架弹窗由&lt;Tuniao-Ui&gt;提供</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#BABED8;">that</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">$t</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toast</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">msg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 此处框架弹窗由&lt;Tuniao-Ui&gt;提供</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#BABED8;">that</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">$t</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toast</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">err</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">msg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 此处框架弹窗由&lt;Tuniao-Ui&gt;提供</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span></code></pre></div><ul><li>好了，以上的总结就到此为止了，如果<code>有疑问可以不问</code>也可以联系作者。咱们下期再见! Good bye! 🌸</li></ul>`,7),t=[o];function e(c,r,F,y,D,i){return a(),n("div",null,t)}const E=s(p,[["render",e]]);export{B as __pageData,E as default};
