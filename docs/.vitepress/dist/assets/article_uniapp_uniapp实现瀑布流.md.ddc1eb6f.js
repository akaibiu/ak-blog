import{_ as s,o as n,c as a,V as l}from"./chunks/framework.ed8632ae.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/uniapp/uniapp实现瀑布流.md","filePath":"article/uniapp/uniapp实现瀑布流.md"}'),p={name:"article/uniapp/uniapp实现瀑布流.md"},o=l(`<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		&lt;!-- 瀑布流布局列表 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pubuBox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pubuItem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item-masonry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item, index) in comList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">					&lt;image :src=&quot;item.img&quot; </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">widthFix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">listtitle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> &lt;!-- 这是没有高度的父盒子（下半部分） --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">listtitle1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#BABED8;"> item.name </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">listtitle2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">							</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">listtitle2son</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">￥</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">							</span><span style="color:#89DDFF;">{{</span><span style="color:#BABED8;"> item.commdityPrice </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#BABED8;">						</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">listtitle3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">							来自莫成尘的旗舰店</span></span>
<span class="line"><span style="color:#BABED8;">						</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">				</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#BABED8;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#82AAFF;">data</span><span style="color:#BABED8;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">			return </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#FFCB6B;">comList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						img</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">商品的名称，可以很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						commdityPrice</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						img</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">商品名称会在超出两行时候自动折叠</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						commdityPrice</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						img</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">只有一行标题时高度为39</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						commdityPrice</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						img</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">具体样式您可以自定义</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						commdityPrice</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						img</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue的H5页面也是如此使用</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						commdityPrice</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//商品列表</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#82AAFF;">onShow</span><span style="color:#BABED8;">() </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#82AAFF;">onLoad</span><span style="color:#BABED8;">() </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#BABED8;">		methods: </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scoped</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	//瀑布流</span></span>
<span class="line"><span style="color:#BABED8;">	page </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		background</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">color: #eee;</span></span>
<span class="line"><span style="color:#BABED8;">		height: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.pubuBox </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		padding: 22rpx;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.pubuItem </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		column</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">count: </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">		column</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">gap: 20rpx;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.item-masonry </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		box</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">sizing: border</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">box;</span></span>
<span class="line"><span style="color:#BABED8;">		border</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">radius: 15rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		overflow: hidden;</span></span>
<span class="line"><span style="color:#BABED8;">		background</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">color: #fff;</span></span>
<span class="line"><span style="color:#BABED8;">		break</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">inside: avoid;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#676E95;font-style:italic;">/*避免在元素内部插入分页符*/</span></span>
<span class="line"><span style="color:#BABED8;">		box</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">sizing: border</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">box;</span></span>
<span class="line"><span style="color:#BABED8;">		margin</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">bottom: 20rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		box</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">shadow: 0px 0px 28rpx 1rpx </span><span style="color:#82AAFF;">rgba</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">78</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">101</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">153</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#BABED8;">);</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.item-masonry image </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		width: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.listtitle </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		padding</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">left: 22rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		font</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">size: 24rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		padding</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">bottom: 22rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">listtitle1 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">			line-</span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> 39rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			text</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">overflow: </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">o</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">ellipsis</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">lastline;</span></span>
<span class="line"><span style="color:#BABED8;">			overflow: hidden;</span></span>
<span class="line"><span style="color:#BABED8;">			text</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">overflow: ellipsis;</span></span>
<span class="line"><span style="color:#BABED8;">			display: </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">box;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">line</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">clamp: </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">			line</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">clamp: </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">webkit</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">box</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">orient: vertical;</span></span>
<span class="line"><span style="color:#BABED8;">			min</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">height: 39rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			max</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">height: 78rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">listtitle2 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> #ff0000;</span></span>
<span class="line"><span style="color:#BABED8;">			font</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">size: 32rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			line</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">height: 32rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			font</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">weight: bold;</span></span>
<span class="line"><span style="color:#BABED8;">			padding</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">top: 22rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">listtitle2son </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">				font-</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> 32rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">listtitle3 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">			font-</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> 28rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			color: #</span><span style="color:#F78C6C;">909399</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">			line</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">height: 32rpx;</span></span>
<span class="line"><span style="color:#BABED8;">			padding</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">top: 22rpx;</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">	.Index </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		width: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">		height: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1),t=[o];function e(c,D,r,F,y,B){return n(),a("div",null,t)}const A=s(p,[["render",e]]);export{E as __pageData,A as default};
