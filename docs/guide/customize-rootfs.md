# Customizing ROM

The Twoyi has added the feature to importing custom ROM and boot system in `0.5.1` version and above, here is the turtoial.

The ROM is a compressed file in `7z` format; so you need to download the `7z` compression tool first; here is the [download address](https://www.7-zip.org/download.html)

## Get the original rootfs

First we need the original rootfs file, we recommend using the rootfs that comes with the official apk file; you can download the latest apk from the Twoyi [official website](https://twoyi.io); then use the zip utility to extract the package; in the extracted directory `assets` there is a `rootfs.7z` file.

![rootfs](/rootfs.png)

Then use the `7z` utility to extract this file and we can get a folder which is rootfs for Twoyi.

![rootfs-file-tree](/rootfs_folder.jpg)

## Edit rootfs

Modify the files in the rootfs in a way you are familiar with; such as adding built-in system applications, modifying resource files, modifying fonts, etc.; please note: Please do not delete the binary and library files in the Twoyi rootfs easily, as this may result in a failure to boot.

PS. Replacement of Launcher is currently not supported, please do not try to replace the custom Launcher.

## Adding rom.ini

After modifying the rootfs, it is recommended to add author and ROM description; there is a `rom.ini` file in the rootfs directory; this file has the following format.

```ini
author=作者名字
code=12344 #数字版本号
version=1.0.0-first # 版本名
desc=这是一个demo ROM
```

## Replace ROM in Twoyi

After the modification, use the `7z` tool to compress this directory into a 7z file; then go to Twoyi, open `Settings - Replace ROM` and select the ROM you made.