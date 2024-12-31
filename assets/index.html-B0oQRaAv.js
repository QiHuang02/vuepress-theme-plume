import{_ as t,c as a,a as s,o as i}from"./app-Cy8frGxT.js";const n={};function o(d,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>主题提供了开箱即用的配置，为 站点 启用 SEO 优化功能。 要启用它，需要进行以下配置：</p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://your_site_url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>如需要自定义 SEO 优化，可以通过 <code>plugins.seo</code> 配置来实现。</p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      seo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // ... seo 配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>完整配置请查看 <a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/config.html" target="_blank" rel="noopener noreferrer">文档</a></p><div class="hint-container note"><p class="hint-container-title">注</p><p>示例 Fork 自 <a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-seo</a>, 遵循 <a href="https://github.com/vuepress/ecosystem/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p></div><h2 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h2><p>主题会通过向网站 <code>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> 和 <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。 诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><h2 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑"><span>默认的 OGP 生成逻辑</span></a></h2><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code>autoDescription</code> 为 <code>true</code> 时)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>page.frontmatter.image</code> || 页面的第一张图片|| 插件选项的 <code>fallbackImage</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>siteData.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h2 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑"><span>默认的 JSON-LD 生成逻辑</span></a></h2><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">页面中的图片|| <code>options.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr></tbody></table><h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍"><span>SEO 介绍</span></a></h2><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站， 以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最 前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做 一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。 搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2><ul><li><p><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> (<strong>O</strong>pen <strong>G</strong>raph <strong>Pr</strong>otocal)</p><p>本插件完美支持该协议，会自动生成符合该协议的 <code>&lt;meta&gt;</code> 标签。</p></li><li><p><a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a></p><p>本插件会为文章类页面生成 NewsArticle 类标签。</p></li><li><p><a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a></p><p>RDFa 主要标记 HTML 结构。</p></li><li><p><a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.Org</a></p><p>结构标记的 Schema 定义站点</p></li></ul>`,18)]))}const l=t(n,[["render",o],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/guide/seo/","title":"SEO","lang":"zh-CN","frontmatter":{"title":"SEO","author":"pengzhanbo","icon":"tabler:seo","createTime":"2024/03/02 14:46:25","permalink":"/guide/seo/","description":"使用 主题提供了开箱即用的配置，为 站点 启用 SEO 优化功能。 要启用它，需要进行以下配置： 如需要自定义 SEO 优化，可以通过 plugins.seo 配置来实现。 完整配置请查看 文档 注 示例 Fork 自 @vuepress/plugin-seo, 遵循 MIT 许可证。 指南 主题会通过向网站 <head> 注入标签，让你的网站完全支持...","head":[["meta",{"property":"og:url","content":"https://theme-plume.vuejs.press/guide/seo/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"SEO"}],["meta",{"property":"og:description","content":"使用 主题提供了开箱即用的配置，为 站点 启用 SEO 优化功能。 要启用它，需要进行以下配置： 如需要自定义 SEO 优化，可以通过 plugins.seo 配置来实现。 完整配置请查看 文档 注 示例 Fork 自 @vuepress/plugin-seo, 遵循 MIT 许可证。 指南 主题会通过向网站 <head> 注入标签，让你的网站完全支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T23:41:07.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-11-21T23:41:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SEO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-21T23:41:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.5,"words":750},"git":{"updatedTime":1732232467000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":8,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"c56bae8d58941db05a5cb1faad45be2178331db3","date":1709915848000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat: 全新的文档！","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/c56bae8d58941db05a5cb1faad45be2178331db3"},{"hash":"ca097146cf4473f9ebfb04fe9e61708dcfd6d464","date":1709917771000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/ca097146cf4473f9ebfb04fe9e61708dcfd6d464"},{"hash":"920d3d115723141dfa8a35ec376c8e372f188a53","date":1710362649000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/920d3d115723141dfa8a35ec376c8e372f188a53"},{"hash":"2fb3da074776629502acf70e60da06022aa06b61","date":1710691945000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update theme docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/2fb3da074776629502acf70e60da06022aa06b61"},{"hash":"822d861daef23a289c5e7720cdd7b0beb79b60c1","date":1711040997000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix md","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/822d861daef23a289c5e7720cdd7b0beb79b60c1"},{"hash":"3876c2d9081fde9d0b2e5d69d00150917a58566a","date":1714845601000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/3876c2d9081fde9d0b2e5d69d00150917a58566a"},{"hash":"c9d58bd41814468b3e892be7506c3d7db853a70b","date":1723744775000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/c9d58bd41814468b3e892be7506c3d7db853a70b"},{"hash":"f2f2730759f6359e795107b19bc004f8026710b5","date":1732232467000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat(theme): add support for seo &amp; sitemap plugin options (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/351\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#351</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/f2f2730759f6359e795107b19bc004f8026710b5"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/功能/seo.md","bulletin":false}');export{l as comp,c as data};
