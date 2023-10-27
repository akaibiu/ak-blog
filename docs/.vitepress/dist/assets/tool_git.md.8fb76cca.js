import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6e551575.js";const C=JSON.parse('{"title":"☃️Git 命令","description":"","frontmatter":{},"headers":[],"relativePath":"tool/git.md","filePath":"tool/git.md"}'),o={name:"tool/git.md"},p=l(`<h1 id="git-命令" tabindex="-1">☃️Git 命令 <a class="header-anchor" href="#git-命令" aria-label="Permalink to &quot;:snowman_with_snow:Git 命令&quot;">​</a></h1><p><strong>常用命令:</strong></p><blockquote><p>第一天进入公司时候需要拉取公司代码</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">项目地址</span></span></code></pre></div><blockquote><p>编写代码之后准备做提交-提交至本地仓库(第一步骤)</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><blockquote><p>填写提交日志(第二步骤)</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">填写commit说明</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><blockquote><p>拉取仓库最新代码(第三步骤)</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div><blockquote><p>提交代码到远程仓库(第四步骤)</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div><blockquote><p>第二天从仓库拉取最新代码(次日更新代码之后便可开始工作-之后就是add commit等)</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span></span></code></pre></div><p><strong>基础命令：</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span><span style="color:#BABED8;">                                                  </span><span style="color:#676E95;font-style:italic;"># 初始化本地git仓库（创建新仓库）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">                       </span><span style="color:#676E95;font-style:italic;"># 配置用户名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx@xxx.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">              </span><span style="color:#676E95;font-style:italic;"># 配置邮件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">color.ui</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span><span style="color:#BABED8;">                         </span><span style="color:#676E95;font-style:italic;"># git status等命令自动着色</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">color.status</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">auto</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">color.diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">auto</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">color.branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">auto</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">color.interactive</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">auto</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git+ssh://git@000.000.00.000/VT.git</span><span style="color:#BABED8;">             </span><span style="color:#676E95;font-style:italic;"># clone远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">status</span><span style="color:#BABED8;">                                                </span><span style="color:#676E95;font-style:italic;"># 查看当前版本状态（是否修改）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xyz</span><span style="color:#BABED8;">                                               </span><span style="color:#676E95;font-style:italic;"># 添加xyz文件至index</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;">                                                 </span><span style="color:#676E95;font-style:italic;"># 增加当前子目录下所有更改过的文件至index</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">                                       </span><span style="color:#676E95;font-style:italic;"># 提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">                               </span><span style="color:#676E95;font-style:italic;"># 合并上一次提交（用于反复修改）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-am</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">                                      </span><span style="color:#676E95;font-style:italic;"># 将add和commit合为一步</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#BABED8;">                                                </span><span style="color:#676E95;font-style:italic;"># 删除index中的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;">*</span><span style="color:#BABED8;">                                               </span><span style="color:#676E95;font-style:italic;"># 递归删除</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;">                                                   </span><span style="color:#676E95;font-style:italic;"># 显示提交日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-1</span><span style="color:#BABED8;">                                                </span><span style="color:#676E95;font-style:italic;"># 显示1行日志 -n为n行</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-5</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--stat</span><span style="color:#BABED8;">                                            </span><span style="color:#676E95;font-style:italic;"># 显示提交日志及相关变动文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dfb02e6e4f2f7b573337763e5c0013802e392818</span><span style="color:#BABED8;">         </span><span style="color:#676E95;font-style:italic;"># 显示某个提交的详细内容</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dfb02</span><span style="color:#BABED8;">                                            </span><span style="color:#676E95;font-style:italic;"># 可只用commitid的前几位</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#BABED8;">                                             </span><span style="color:#676E95;font-style:italic;"># 显示HEAD提交日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD^</span><span style="color:#BABED8;">                                            </span><span style="color:#676E95;font-style:italic;"># 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#BABED8;">                                                   </span><span style="color:#676E95;font-style:italic;"># 显示已存在的tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v2.0</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">                                  </span><span style="color:#676E95;font-style:italic;"># 增加v2.0的tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v2.0</span><span style="color:#BABED8;">                                             </span><span style="color:#676E95;font-style:italic;"># 显示v2.0的日志及详细内容</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v2.0</span><span style="color:#BABED8;">                                              </span><span style="color:#676E95;font-style:italic;"># 显示v2.0的日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;">                                                  </span><span style="color:#676E95;font-style:italic;"># 显示所有未添加至index的变更</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#BABED8;">                                         </span><span style="color:#676E95;font-style:italic;"># 显示所有已添加index但还未commit的变更</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD^</span><span style="color:#BABED8;">                                            </span><span style="color:#676E95;font-style:italic;"># 比较与上一个版本的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./lib</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 比较与HEAD版本lib目录的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin/master..master</span><span style="color:#BABED8;">                            </span><span style="color:#676E95;font-style:italic;"># 比较远程分支master上有本地分支master上没有的</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin/master..master</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--stat</span><span style="color:#BABED8;">                     </span><span style="color:#676E95;font-style:italic;"># 只显示差异的文件，不显示具体内容</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git+ssh://git@192.168.53.168/VT.git</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 增加远程定义（用于push/pull/fetch）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;">                                                </span><span style="color:#676E95;font-style:italic;"># 显示本地分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--contains</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">50089</span><span style="color:#BABED8;">                               </span><span style="color:#676E95;font-style:italic;"># 显示包含提交50089的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#BABED8;">                                             </span><span style="color:#676E95;font-style:italic;"># 显示所有分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#BABED8;">                                             </span><span style="color:#676E95;font-style:italic;"># 显示所有原创分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--merged</span><span style="color:#BABED8;">                                       </span><span style="color:#676E95;font-style:italic;"># 显示所有已合并到当前分支的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--no-merged</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 显示所有未合并到当前分支的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master_copy</span><span style="color:#BABED8;">                          </span><span style="color:#676E95;font-style:italic;"># 本地分支改名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master_copy</span><span style="color:#BABED8;">                               </span><span style="color:#676E95;font-style:italic;"># 从当前分支创建新分支master_copy并检出</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master_copy</span><span style="color:#BABED8;">                        </span><span style="color:#676E95;font-style:italic;"># 上面的完整版</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">features/performance</span><span style="color:#BABED8;">                         </span><span style="color:#676E95;font-style:italic;"># 检出已存在的features/performance分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--track</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hotfixes/BJVEP933</span><span style="color:#BABED8;">                    </span><span style="color:#676E95;font-style:italic;"># 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v2.0</span><span style="color:#BABED8;">                                         </span><span style="color:#676E95;font-style:italic;"># 检出版本v2.0</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">devel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin/develop</span><span style="color:#BABED8;">                      </span><span style="color:#676E95;font-style:italic;"># 从远程分支develop创建新本地分支devel并检出</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">README</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 检出head版本的README文件（可用于修改错误回退）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin/master</span><span style="color:#BABED8;">                                   </span><span style="color:#676E95;font-style:italic;"># 合并远程master分支至当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ff44785404a8e</span><span style="color:#BABED8;">                             </span><span style="color:#676E95;font-style:italic;"># 合并提交ff44785404a8e的修改</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 将当前分支push到远程master分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">:hotfixes/BJVEP933</span><span style="color:#BABED8;">                        </span><span style="color:#676E95;font-style:italic;"># 删除远程仓库的hotfixes/BJVEP933分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--tags</span><span style="color:#BABED8;">                                           </span><span style="color:#676E95;font-style:italic;"># 把所有tag推送到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#BABED8;">                                                 </span><span style="color:#676E95;font-style:italic;"># 获取所有远程分支（不更新本地分支，另需merge）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--prune</span><span style="color:#BABED8;">                                         </span><span style="color:#676E95;font-style:italic;"># 获取所有原创分支并清除服务器上已删掉的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 获取远程分支master并merge到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">README</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">README2</span><span style="color:#BABED8;">                                     </span><span style="color:#676E95;font-style:italic;"># 重命名文件README为README2</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#BABED8;">                                     </span><span style="color:#676E95;font-style:italic;"># 将当前版本重置为HEAD（通常用于merge失败回退）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rebase</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hotfixes/BJVEP933</span><span style="color:#BABED8;">                           </span><span style="color:#676E95;font-style:italic;"># 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hotfixes/BJVEP933</span><span style="color:#BABED8;">                           </span><span style="color:#676E95;font-style:italic;"># 强制删除分支hotfixes/BJVEP933</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls-files</span><span style="color:#BABED8;">                                              </span><span style="color:#676E95;font-style:italic;"># 列出git index包含的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show-branch</span><span style="color:#BABED8;">                                           </span><span style="color:#676E95;font-style:italic;"># 图示当前分支历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show-branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--all</span><span style="color:#BABED8;">                                     </span><span style="color:#676E95;font-style:italic;"># 图示所有分支历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">whatchanged</span><span style="color:#BABED8;">                                           </span><span style="color:#676E95;font-style:italic;"># 显示提交历史对应的文件修改</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dfb02e6e4f2f7b573337763e5c0013802e392818</span><span style="color:#BABED8;">       </span><span style="color:#676E95;font-style:italic;"># 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls-tree</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#BABED8;">                                          </span><span style="color:#676E95;font-style:italic;"># 内部命令：显示某个git对象</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rev-parse</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v2.0</span><span style="color:#BABED8;">                                        </span><span style="color:#676E95;font-style:italic;"># 内部命令：显示某个ref对于的SHA1 HASH</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reflog</span><span style="color:#BABED8;">                                                </span><span style="color:#676E95;font-style:italic;"># 显示所有提交，包括孤立节点</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD@{</span><span style="color:#F78C6C;">5</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">master@{yesterday}</span><span style="color:#BABED8;">                               </span><span style="color:#676E95;font-style:italic;"># 显示master分支昨天的状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--pretty=format:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%h %s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--graph</span><span style="color:#BABED8;">                   </span><span style="color:#676E95;font-style:italic;"># 图示提交日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD~3</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--pretty=raw</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">be7fcb476</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;">                                                 </span><span style="color:#676E95;font-style:italic;"># 暂存当前修改，将所有至为HEAD状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span><span style="color:#BABED8;">                                            </span><span style="color:#676E95;font-style:italic;"># 查看所有暂存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash@{</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">}</span><span style="color:#BABED8;">                               </span><span style="color:#676E95;font-style:italic;"># 参考第一次暂存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apply</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash@{</span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">}</span><span style="color:#BABED8;">                                 </span><span style="color:#676E95;font-style:italic;"># 应用第一次暂存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">delete from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">                                    </span><span style="color:#676E95;font-style:italic;"># 文件中搜索文本“delete from”</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#define</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--and</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">SORT_DIRENT</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">gc</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fsck</span></span></code></pre></div>`,16),t=[p];function e(c,r,y,B,E,D){return a(),n("div",null,t)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};