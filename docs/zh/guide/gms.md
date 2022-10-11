# 在两仪内安装谷歌服务

这里是两仪内谷歌服务框架的官方仓库: https://github.com/twoyi/GApps

## 直接在两仪 App 内部安装

进入两仪设置，然后点击“谷歌服务”按钮，等待完成即可。

> 如果你的网络无法顺畅地访问 Github，那么在 App 内部安装可能会失败；此时你需要科学上网，或者使用下面的手动安装。

## 手动安装

1. 首先去官网的发布页面下载谷歌服务一体包。 [下载地址](https://github.com/twoyi/GApps/releases)
2. 下载完毕以后，解压缩你下载好的压缩包，你会在解压缩后的目录看到如下文件夹： `com.google.android.gms`, `com.android.vending`, `com.google.android.gsf`.
3. 将解压后的文件夹内部的所有文件复制到两仪内部系统中的 `/system/priv-app` 目录。

> 注意不要复制解压缩后那个整个目录，要复制解压缩后那个文件夹里面的子目录。
