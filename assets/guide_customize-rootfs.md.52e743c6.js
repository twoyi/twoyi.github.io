import{_ as e,c as a,o,d as t}from"./app.af6f326d.js";var s="/rootfs.png",r="/rootfs_folder.jpg";const k='{"title":"\u5236\u4F5C\u81EA\u5DF1\u7684 ROM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u539F\u59CB rootfs","slug":"\u83B7\u53D6\u539F\u59CB-rootfs"},{"level":2,"title":"\u4FEE\u6539 rootfs","slug":"\u4FEE\u6539-rootfs"},{"level":2,"title":"\u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F\u548C\u63CF\u8FF0","slug":"\u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F\u548C\u63CF\u8FF0"},{"level":2,"title":"\u5BFC\u5165 rootfs","slug":"\u5BFC\u5165-rootfs"}],"relativePath":"guide/customize-rootfs.md","lastUpdated":1646885345030}',n={},p=t('<h1 id="\u5236\u4F5C\u81EA\u5DF1\u7684-rom" tabindex="-1">\u5236\u4F5C\u81EA\u5DF1\u7684 ROM <a class="header-anchor" href="#\u5236\u4F5C\u81EA\u5DF1\u7684-rom" aria-hidden="true">#</a></h1><p>\u4E24\u4EEA\u5728 <code>0.5.0</code> \u7248\u672C\u53CA\u4EE5\u4E0A\u652F\u6301\u5BFC\u5165\u81EA\u5B9A\u4E49\u7684 ROM \u5E76\u5F15\u5BFC\u7CFB\u7EDF\uFF0C\u4EE5\u4E0B\u662F\u5236\u4F5C\u81EA\u5B9A\u4E49 ROM \u7684\u64CD\u4F5C\u65B9\u6CD5\u3002</p><p>\u4E24\u4EEA\u7684 ROM \u662F\u4E00\u4E2A <code>7z</code> \u683C\u5F0F\u7684\u538B\u7F29\u6587\u4EF6\uFF1B\u56E0\u6B64\u60A8\u9700\u8981\u5148\u4E0B\u8F7D <code>7z</code> \u538B\u7F29\u5DE5\u5177\uFF1B\u8FD9\u91CC\u6709<a href="https://www.7-zip.org/download.html" target="_blank" rel="noopener noreferrer">\u4E0B\u8F7D\u5730\u5740</a></p><h2 id="\u83B7\u53D6\u539F\u59CB-rootfs" tabindex="-1">\u83B7\u53D6\u539F\u59CB rootfs <a class="header-anchor" href="#\u83B7\u53D6\u539F\u59CB-rootfs" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u539F\u59CB\u7684 rootfs \u6587\u4EF6\u6765\u8FDB\u884C\u4FEE\u6539\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528\u5B98\u65B9\u53D1\u5E03\u7684\u5B89\u88C5\u5305\u4E2D\u81EA\u5E26\u7684 rootfs\uFF1B\u60A8\u53EF\u4EE5\u5728\u4E24\u4EEA <a href="https://twoyi.io" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a> \u4E0B\u8F7D\u6700\u65B0\u7684\u4E24\u4EEA\u5B89\u88C5\u5305\u6587\u4EF6\uFF1B\u7136\u540E\u4F7F\u7528 zip \u5DE5\u5177\u89E3\u538B\u7F29\u6B64\u5B89\u88C5\u5305\uFF1B\u5728\u89E3\u538B\u7F29\u540E\u7684\u76EE\u5F55 <code>assets</code> \u4E2D\u5B58\u5728\u4E00\u4E2A <code>rootfs.7z</code> \u7684\u6587\u4EF6\uFF1B</p><p><img src="'+s+'" alt="rootfs"></p><p>\u7136\u540E\u4F7F\u7528 <code>7z</code> \u5DE5\u5177\u89E3\u538B\u7F29\u6B64\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E3A\u4E24\u4EEA\u7684 rootfs.7z\u3002</p><p><img src="'+r+`" alt="rootfs-file-tree"></p><h2 id="\u4FEE\u6539-rootfs" tabindex="-1">\u4FEE\u6539 rootfs <a class="header-anchor" href="#\u4FEE\u6539-rootfs" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4F60\u719F\u6089\u7684\u65B9\u5F0F\u4FEE\u6539 rootfs \u4E2D\u7684\u6587\u4EF6\uFF1B\u5982\u6DFB\u52A0\u5185\u7F6E\u7684\u7CFB\u7EDF\u5E94\u7528\uFF0C\u4FEE\u6539\u8D44\u6E90\u6587\u4EF6\uFF0C\u4FEE\u6539\u5B57\u4F53\u7B49\u7B49\uFF1B\u8BF7\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981\u8F7B\u6613\u5220\u9664\u4E24\u4EEA rootfs \u4E2D\u7684\u4E8C\u8FDB\u5236\u548C\u5E93\u6587\u4EF6\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u5F00\u673A\u3002</p><p>PS. \u76EE\u524D\u4E0D\u652F\u6301\u66FF\u6362 Launcher\uFF0C\u8BF7\u4E0D\u8981\u5C1D\u8BD5\u66FF\u6362\u81EA\u5B9A\u4E49 Launcher\u3002</p><h2 id="\u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F\u548C\u63CF\u8FF0" tabindex="-1">\u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F\u548C\u63CF\u8FF0 <a class="header-anchor" href="#\u6DFB\u52A0\u4F5C\u8005\u4FE1\u606F\u548C\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u5B8C\u6BD5 rootfs \u4E4B\u540E\uFF0C\u5EFA\u8BAE\u6DFB\u52A0\u4F5C\u8005\u4EE5\u53CA ROM \u76F8\u5173\u4FE1\u606F\uFF1B\u5728 rootfs \u76EE\u5F55\u4E0B\u6709\u4E00\u4E2A <code>rom.ini</code> \u6587\u4EF6\uFF1B\u6B64\u6587\u4EF6\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-ini"><pre><code><span class="token key attr-name">author</span><span class="token punctuation">=</span><span class="token value attr-value">\u4F5C\u8005\u540D\u5B57</span>
<span class="token key attr-name">code</span><span class="token punctuation">=</span><span class="token value attr-value">12344 #\u6570\u5B57\u7248\u672C\u53F7</span>
<span class="token key attr-name">version</span><span class="token punctuation">=</span><span class="token value attr-value">1.0.0-first # \u7248\u672C\u540D</span>
<span class="token key attr-name">desc</span><span class="token punctuation">=</span><span class="token value attr-value">\u8FD9\u662F\u4E00\u4E2Ademo ROM</span>
</code></pre></div><h2 id="\u5BFC\u5165-rootfs" tabindex="-1">\u5BFC\u5165 rootfs <a class="header-anchor" href="#\u5BFC\u5165-rootfs" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u901A\u8FC7 <code>7z</code> \u5DE5\u5177\u5C06\u6B64\u76EE\u5F55\u538B\u7F29\u4E3A 7z \u6587\u4EF6\uFF1B\u7136\u540E\u8FDB\u5165\u4E24\u4EEA\uFF0C\u6253\u5F00\u8BBE\u7F6E-\u66FF\u6362ROM \u9009\u62E9\u60A8\u5236\u4F5C\u7684 ROM \u5373\u53EF\u3002</p>`,16),c=[p];function d(l,i,f,h,u,_){return o(),a("div",null,c)}var v=e(n,[["render",d]]);export{k as __pageData,v as default};
