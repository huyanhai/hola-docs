import{_ as n,c as s,a,g as t}from"./app.a62b4d7f.js";const p='{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"按需加载","slug":"按需加载"}],"relativePath":"zh/guide/use.md","lastUpdated":1634176555561}',o={},e=[t('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><p>本节介绍如何在您的项目中使用 easi-packages-antd。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> antd <span class="token keyword">from</span> <span class="token string">&quot;ant-design-vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token constant">EASI</span> <span class="token keyword">from</span> <span class="token string">&quot;easi-packages-antd&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;ant-design-vue/dist/antd.css&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">EASI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="按需加载" tabindex="-1">按需加载 <a class="header-anchor" href="#按需加载" aria-hidden="true">#</a></h3><blockquote><p>webpack 项目</p></blockquote><ul><li>安装 babel-plugin-import 依赖</li></ul><div class="language-js"><pre><code>yarn add babel<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">-</span><span class="token constant">D</span>\n</code></pre></div><ul><li>配置 babel</li></ul><div class="language-js"><pre><code><span class="token comment">//babel.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        libraryName<span class="token operator">:</span> <span class="token string">&quot;easi-packages-antd&quot;</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">customName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">easi-packages-antd/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// EASIDirectives 指令 按需加载时使用</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> EASIButton<span class="token punctuation">,</span> EASIDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;easi-packages-antd&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// 工具函数</span>\n<span class="token keyword">import</span> EASIUtils <span class="token keyword">from</span> <span class="token string">&quot;easi-packages-antd/es/utils&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIButton<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIDirectives<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>vite 项目</p></blockquote><ul><li>安装 vite-plugin-importer 依赖</li></ul><div class="language-js"><pre><code>yarn add vite<span class="token operator">-</span>plugin<span class="token operator">-</span>importer <span class="token operator">-</span><span class="token constant">D</span>\n</code></pre></div><ul><li>配置 vite</li></ul><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> usePluginImport <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-importer&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// https://vitejs.dev/config/</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">usePluginImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      libraryName<span class="token operator">:</span> <span class="token string">&quot;easi-packages-antd&quot;</span><span class="token punctuation">,</span>\n      libraryDirectory<span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">customName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">easi-packages-antd/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// EASIDirectives 指令 按需加载时使用</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> EASIButton<span class="token punctuation">,</span> EASIDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;easi-packages-antd&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// 工具函数</span>\n<span class="token keyword">import</span> EASIUtils <span class="token keyword">from</span> <span class="token string">&quot;easi-packages-antd/es/utils&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIButton<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIDirectives<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',17)];var c=n(o,[["render",function(n,t,p,o,c,u){return a(),s("div",null,e)}]]);export{p as __pageData,c as default};
