---
sidebarDepth: 2
---

# First Boot Guide

This guide will walk you through the process of setting up Twoyi after installation and launching it for the first time.

## Initial Launch

When you first launch Twoyi after installation, the app will need to perform some one-time setup tasks:

1. **ROM Extraction**: Twoyi will extract the internal Android 8.1 ROM files to your device's storage
2. **System Initialization**: The container environment will be prepared with the necessary file structure
3. **First Boot**: The internal Android system will boot for the first time

This initial setup process may take a few minutes depending on your device's performance. Subsequent launches will be much faster, typically taking only about three seconds.

## Welcome Screen

After the initial setup completes, you'll be greeted with the Twoyi welcome screen:

![Twoyi Welcome Screen](/images/welcome-screen.png)

The welcome screen provides access to the following options:

- **Home**: The main launcher interface for accessing installed applications
- **Settings**: Configure Twoyi settings and manage the container
- **Import App**: Import applications from your device into the Twoyi container
- **File Manager**: Manage files within the Twoyi container

## Navigating the Interface

### Home Screen

The home screen displays all applications installed within the Twoyi container. Initially, only a few system apps will be available:

- **Settings**: Configure the internal Android system settings
- **File Manager**: Browse and manage files within the container
- **Browser**: A simple web browser for accessing the internet

To access the home screen at any time, tap the home button at the bottom of the screen or use the navigation gestures if enabled.

### Status Bar

The status bar at the top of the screen displays information about the Twoyi container:

- **Time**: The current time within the container
- **Battery**: Your device's battery status
- **Network**: The current network connection status
- **Notifications**: Any pending notifications from apps within the container

### Navigation Bar

The navigation bar at the bottom of the screen provides standard Android navigation buttons:

- **Back**: Return to the previous screen
- **Home**: Return to the home screen
- **Recent Apps**: View and switch between recently used applications

## Basic Configuration

### System Settings

To configure the internal Android system settings:

1. Tap the **Settings** app on the home screen
2. Browse through the available settings categories:
   - **Network & Internet**: Configure Wi-Fi and other network settings
   - **Apps & Notifications**: Manage applications and their notifications
   - **Battery**: View battery usage statistics
   - **Display**: Adjust display settings
   - **Storage**: View storage usage and manage files
   - **System**: Access advanced system settings

### Twoyi Settings

To configure Twoyi-specific settings:

1. Tap the **Settings** icon in the Twoyi welcome screen
2. Browse through the available settings:
   - **Import App**: Import applications from your device
   - **File Manager**: Manage files within the container
   - **Replace ROM**: Boot Twoyi with a custom ROM
   - **Factory Reset**: Reset to the official internal ROM (data preserved)
   - **Wipe All Data**: Erase all data in the container
   - **Shutdown**: Shut down the container
   - **Reboot**: Restart the container

## Importing Your First App

To import an application from your device into the Twoyi container:

1. Tap the **Import App** option in the Twoyi welcome screen or settings
2. Browse through the list of applications installed on your device
3. Tap the application you want to import
4. Confirm the import by tapping **OK**
5. Wait for the import process to complete
6. The imported application will appear on the home screen

Note that not all applications will work properly within the Twoyi container. Some applications may require specific Google services or hardware features that are not available or fully supported in the container.

## Managing Files

To manage files within the Twoyi container:

1. Tap the **File Manager** option in the Twoyi welcome screen or settings
2. Browse through the file system:
   - **/sdcard**: The main storage area for user files
   - **/system**: The system files (read-only)
   - **/data**: Application data and settings
3. Use the file manager to:
   - Copy files between your device and the container
   - Create, rename, or delete files and folders
   - Install APK files directly within the container

## Shutting Down and Rebooting

To shut down or reboot the Twoyi container:

1. Tap the **Settings** icon in the Twoyi welcome screen
2. Tap **Shutdown** to close the container or **Reboot** to restart it
3. Confirm your choice when prompted

When you shut down the container, all running applications will be closed, but your data will be preserved for the next time you launch Twoyi.

## Next Steps

Now that you've completed the first boot and basic setup of Twoyi, you can:

1. [Import more applications](/guide/basic-usage#importing-applications) into the container
2. [Customize the ROM](/guide/customize-rootfs) to add additional features
3. [Set up Google Mobile Services](/guide/gms) if needed
4. [Explore advanced features](/guide/advanced-features) like virtual hardware components

For more detailed information on using specific features, refer to the corresponding guides in the documentation.
