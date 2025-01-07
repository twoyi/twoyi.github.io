import{_ as i,a as t}from"./chunks/rootfs_folder.C3a5-Twr.js";import{_ as o,c as a,a0 as s,o as r}from"./chunks/framework.D5XSuxOt.js";const g=JSON.parse('{"title":"Customizing ROM","description":"","frontmatter":{},"headers":[],"relativePath":"guide/customize-rootfs.md","filePath":"guide/customize-rootfs.md"}'),n={name:"guide/customize-rootfs.md"};function d(l,e,h,c,p,f){return r(),a("div",null,e[0]||(e[0]=[s('<h1 id="customizing-rom" tabindex="-1">Customizing ROM <a class="header-anchor" href="#customizing-rom" aria-label="Permalink to &quot;Customizing ROM&quot;">​</a></h1><p>The Twoyi has added the feature to importing custom ROM and boot system in <code>0.5.1</code> version and above, here is the turtoial.</p><p>The ROM is a compressed file in <code>7z</code> format; so you need to download the <code>7z</code> compression tool first; here is the <a href="https://www.7-zip.org/download.html" target="_blank" rel="noreferrer">download address</a></p><h2 id="get-the-original-rootfs" tabindex="-1">Get the original rootfs <a class="header-anchor" href="#get-the-original-rootfs" aria-label="Permalink to &quot;Get the original rootfs&quot;">​</a></h2><p>First we need the original rootfs file, we recommend using the rootfs that comes with the official apk file; you can download the latest apk from the Twoyi <a href="https://twoyi.io" target="_blank" rel="noreferrer">official website</a>; then use the zip utility to extract the package; in the extracted directory <code>assets</code> there is a <code>rootfs.7z</code> file.</p><p><img src="'+i+'" alt="rootfs"></p><p>Then use the <code>7z</code> utility to extract this file and we can get a folder which is rootfs for Twoyi.</p><p><img src="'+t+`" alt="rootfs-file-tree"></p><h2 id="edit-rootfs" tabindex="-1">Edit rootfs <a class="header-anchor" href="#edit-rootfs" aria-label="Permalink to &quot;Edit rootfs&quot;">​</a></h2><p>Modify the files in the rootfs in a way you are familiar with; such as adding built-in system applications, modifying resource files, modifying fonts, etc.; please note: Please do not delete the binary and library files in the Twoyi rootfs easily, as this may result in a failure to boot.</p><p>PS. Replacement of Launcher is currently not supported, please do not try to replace the custom Launcher.</p><h2 id="adding-rom-ini" tabindex="-1">Adding rom.ini <a class="header-anchor" href="#adding-rom-ini" aria-label="Permalink to &quot;Adding rom.ini&quot;">​</a></h2><p>After modifying the rootfs, it is recommended to add author and ROM description; there is a <code>rom.ini</code> file in the rootfs directory; this file has the following format.</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=作者名字</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=12344 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#数字版本号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1.0.0-first </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=这是一个demo ROM</span></span></code></pre></div><h2 id="replace-rom-in-twoyi" tabindex="-1">Replace ROM in Twoyi <a class="header-anchor" href="#replace-rom-in-twoyi" aria-label="Permalink to &quot;Replace ROM in Twoyi&quot;">​</a></h2><p>After the modification, use the <code>7z</code> tool to compress this directory into a 7z file; then go to Twoyi, open <code>Settings - Replace ROM</code> and select the ROM you made.</p>`,16)]))}const k=o(n,[["render",d]]);export{g as __pageData,k as default};
