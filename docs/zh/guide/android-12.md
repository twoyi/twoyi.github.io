# Android 12 操作指南

由于 Android 12 上，Google 引入的 [phantom processes](https://cs.android.com/android/_/android/platform/frameworks/base/+/157550849f0430181fa53c8e1b63112c59c6937b) 机制会影响两仪的运行，需要使用 ADB 来解除此限制；请按照如下指南操作：

<iframe src="//player.bilibili.com/player.html?aid=680784467&bvid=BV1LS4y177bG&cid=488098186&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500" high_quality="1" danmaku="1"> </iframe>

[去 B 站观看](https://www.bilibili.com/video/BV1LS4y177bG?share_source=copy_web)

视频中的 ADB 指令：

> /system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647

如果你不再使用两仪，并且想恢复上述指令的影响，可以执行如下指令恢复：

> /system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 32

如果你使用的是 Android 13 或更高系统，可以使用如下命令来解除限制：

> settings put global settings_enable_monitor_phantom_procs false

Android 13 的恢复指令：

> settings put global settings_enable_monitor_phantom_procs true

说明：

1. 如果有 root 权限，可以直接用 root 权限执行上述命令；无需 ADB。
2. 执行完这个命令以后，相应的辅助 App（如视频中的黑阈）可以卸载。
3. Android 13 以上两种指令都可以，推荐第二种。
