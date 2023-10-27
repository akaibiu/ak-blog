import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6e551575.js";const p="/img/study/uniapp/uniapp小程序使用flex完美布局/demo.jpg",A=JSON.parse('{"title":"🍌 uniapp小程序使用flex实现完美布局","description":"","frontmatter":{},"headers":[],"relativePath":"article/uniapp/uniapp小程序使用flex完美布局.md","filePath":"article/uniapp/uniapp小程序使用flex完美布局.md"}'),o={name:"article/uniapp/uniapp小程序使用flex完美布局.md"},e=l(`<h1 id="uniapp小程序使用flex实现完美布局" tabindex="-1">🍌 uniapp小程序使用flex实现完美布局 <a class="header-anchor" href="#uniapp小程序使用flex实现完美布局" aria-label="Permalink to &quot;:banana: uniapp小程序使用flex实现完美布局&quot;">​</a></h1><h3 id="完美flex布局实现-上-左-右以及每个项目之间的间距一样" tabindex="-1">完美flex布局实现(上-左-右以及每个项目之间的间距一样) <a class="header-anchor" href="#完美flex布局实现-上-左-右以及每个项目之间的间距一样" aria-label="Permalink to &quot;完美flex布局实现(上-左-右以及每个项目之间的间距一样)&quot;">​</a></h3><blockquote><p>在日常小程序开发中，布局常常不可或缺，不想用grid那就看看我的案例吧，下面这个小案例带您演示flex完美布局!一起来看看吧....</p></blockquote><h4 id="_1-view视图层代码" tabindex="-1">1.view视图层代码 <a class="header-anchor" href="#_1-view视图层代码" aria-label="Permalink to &quot;1.view视图层代码&quot;">​</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">block</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item,index) in 11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        {{index}}</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">block</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="_2-style样式代码" tabindex="-1">2.style样式代码 <a class="header-anchor" href="#_2-style样式代码" aria-label="Permalink to &quot;2.style样式代码&quot;">​</a></h4><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#BABED8;"> lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 最外层的盒子</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * padding值中的第二个参数(6rpx)是右边距，为什么是6呢？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 因为盒子的左边距的值是(30rpx)，然后盒子的右边距的值要与子元素中的左右间距的值(24rpx)相减，最后得到6rpx，这样看起来的效果 盒子左右两边的间距就是一样的了</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">// padding: 20rpx 6rpx 20rpx 30rpx;</span></span>
<span class="line"><span style="color:#BABED8;">				</span><span style="color:#B2CCD6;">padding-left</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">30</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">				</span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> space-between</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap-item</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">             * 部分关键代码说明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">             * 1、margin-right的值(24rpx) 和 width中的值(24rpx) 要设置成一样值，这是每个子元素的左右间距</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">             * 2、每个子元素的宽度是动态计算的，如果你的列是3列，那么width中最后两个的值也像这deme一样设置成3，如果是4列，那就修改成4... </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">             * 3、margin-bottom是每个子元素的上下间距</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">             */</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">100%</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30</span><span style="color:#BABED8;">rpx </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">margin-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#676E95;font-style:italic;">/* 底下这部分不是很关键 */</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">140</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> plum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">// 给最外层的盒子添加伪元素，列不满则左对齐</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#BABED8;">&gt;</span></span></code></pre></div><p><img src="`+p+'" alt="alt 示例图片"></p><ul><li>好了，以上的总结就到此为止了，如果<code>有疑问可以不问</code>也可以联系作者。咱们下期再见! Good bye! 🌸</li></ul>',9),t=[e];function c(r,D,y,F,i,B){return a(),n("div",null,t)}const C=s(o,[["render",c]]);export{A as __pageData,C as default};
