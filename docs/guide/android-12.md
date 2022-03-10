# Android 12 User Guide

Since the [phantom processes](https://cs.android.com/android/_/android/platform/frameworks/base/+/157550849f0430181fa53c8e1b63112c59c6937b) mechanism introduced by Google on Android 12 affects the operation of Twoyi, you need to use ADB to remove this restriction; please follow these guidelines.

<iframe src="//player.bilibili.com/player.html?aid=680784467&bvid=BV1LS4y177bG&cid=488098186&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500" high_quality="1" danmaku="1"> </iframe>

The ADB instructions in video：

> /system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647

If you no longer use the Twoyi and want to restore the impact of the above command, you can restore it by executing the following command:

> /system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 20

Attention:

1. If you have root privileges, you can execute the above command directly with root privileges; no ADB is required.
2. After executing this command, the corresponding auxiliary app (such as the Black Threshold in the video) can be uninstalled.