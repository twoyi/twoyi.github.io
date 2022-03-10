# 制作自己的 ROM

两仪在 `0.5.0` 版本及以上支持导入自定义的 ROM 并引导系统，以下是制作自定义 ROM 的操作方法。

两仪的 ROM 是一个 `7z` 格式的压缩文件；因此您需要先下载 `7z` 压缩工具；这里有[下载地址](https://www.7-zip.org/download.html)

## 获取原始 rootfs

首先我们需要一个原始的 rootfs 文件来进行修改，这里推荐使用官方发布的安装包中自带的 rootfs；您可以在两仪 [官网](https://twoyi.io) 下载最新的两仪安装包文件；然后使用 zip 工具解压缩此安装包；在解压缩后的目录 `assets` 中存在一个 `rootfs.7z` 的文件；

![rootfs](/rootfs.png)

然后使用 `7z` 工具解压缩此文件，我们可以得到一个文件夹，这个文件夹为两仪的 rootfs.7z。

![rootfs-file-tree](/rootfs_folder.jpg)

## 修改 rootfs

通过你熟悉的方式修改 rootfs 中的文件；如添加内置的系统应用，修改资源文件，修改字体等等；请注意：请不要轻易删除两仪 rootfs 中的二进制和库文件，否则可能会导致无法开机。

PS. 目前不支持替换 Launcher，请不要尝试替换自定义 Launcher。

## 添加作者信息和描述

修改完毕 rootfs 之后，建议添加作者以及 ROM 相关信息；在 rootfs 目录下有一个 `rom.ini` 文件；此文件格式如下：

```ini
author=作者名字
code=12344 #数字版本号
version=1.0.0-first # 版本名
desc=这是一个demo ROM
```

## 导入 rootfs

修改完毕以后，通过 `7z` 工具将此目录压缩为 7z 文件；然后进入两仪，打开设置-替换ROM 选择您制作的 ROM 即可。