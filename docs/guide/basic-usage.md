---
sidebarDepth: 2
---

# Basic Usage

This guide covers the fundamental operations and features of Twoyi, helping you get the most out of your Android container.

## Launching Twoyi

After the [initial setup](/guide/first-boot), launching Twoyi is straightforward:

1. Tap the **Twoyi** icon in your device's app drawer
2. Wait for the container to boot (typically around 3 seconds)
3. You'll be presented with the Twoyi home screen or welcome interface

## Home Screen Navigation

The Twoyi home screen provides access to all installed applications and system functions:

![Twoyi Home Screen](/images/home-screen.png)

### Key Elements

- **App Icons**: Tap to launch applications installed within the container
- **App Drawer**: Access all installed applications
- **Search Bar**: Search for applications or content within the container
- **Status Bar**: View system status, time, and notifications
- **Navigation Bar**: Navigate between screens and applications

## Importing Applications

One of the primary functions of Twoyi is running applications within the container. Here's how to import applications:

### From Your Device

1. From the Twoyi welcome screen or settings, tap **Import App**
2. Browse the list of applications installed on your device
3. Tap the application you want to import
4. Confirm the import by tapping **OK**
5. Wait for the import process to complete
6. The imported application will appear on the home screen

### From APK Files

1. Copy the APK file to a location accessible by Twoyi (e.g., using the File Manager)
2. Open the File Manager within Twoyi
3. Navigate to the location of the APK file
4. Tap the APK file to begin installation
5. Follow the on-screen prompts to complete the installation
6. The installed application will appear on the home screen

### Application Compatibility

Not all applications will work perfectly within the Twoyi container. Compatibility depends on several factors:

- **Architecture Support**: Twoyi only supports 64-bit (arm64-v8a) applications
- **API Requirements**: Applications must be compatible with Android 8.1 (API level 27)
- **Google Services**: Some applications may require Google Mobile Services (GMS)
- **Hardware Features**: Applications requiring specific hardware features may have limited functionality

## Managing Applications

### Launching Applications

To launch an application within Twoyi:

1. Tap the application icon on the home screen or in the app drawer
2. The application will open within the Twoyi container
3. Use the navigation bar to switch between applications or return to the home screen

### Updating Applications

To update applications within Twoyi:

1. Import the updated version of the application using the same process as the initial import
2. The existing application will be updated while preserving its data

### Uninstalling Applications

To uninstall an application from Twoyi:

1. Long-press the application icon on the home screen
2. Drag the icon to the "Uninstall" option that appears
3. Confirm the uninstallation when prompted

Alternatively:

1. Open the **Settings** app within Twoyi
2. Tap **Apps & Notifications**
3. Tap the application you want to uninstall
4. Tap **Uninstall**
5. Confirm the uninstallation when prompted

## Configuring Settings

Twoyi provides two levels of settings:

### Twoyi Container Settings

These settings control the Twoyi container itself:

1. From the Twoyi welcome screen, tap **Settings**
2. Available options include:
   - **Import App**: Import applications from your device
   - **File Manager**: Manage files within the container
   - **Replace ROM**: Boot Twoyi with a custom ROM
   - **Factory Reset**: Reset to the official internal ROM (data preserved)
   - **Wipe All Data**: Erase all data in the container
   - **Shutdown**: Shut down the container
   - **Reboot**: Restart the container

### Internal Android Settings

These settings control the Android environment within Twoyi:

1. Open the **Settings** app from the Twoyi home screen
2. Browse through standard Android settings categories:
   - **Network & Internet**: Configure Wi-Fi and other network settings
   - **Apps & Notifications**: Manage applications and their notifications
   - **Battery**: View battery usage statistics
   - **Display**: Adjust display settings
   - **Storage**: View storage usage and manage files
   - **System**: Access advanced system settings

## File Management

Twoyi provides a built-in file manager for handling files within the container:

### Accessing the File Manager

1. From the Twoyi welcome screen or settings, tap **File Manager**
2. Browse through the file system using the intuitive interface

### Key Directories

- **/sdcard**: The main storage area for user files
- **/system**: The system files (read-only)
- **/data**: Application data and settings

### File Operations

The file manager supports standard operations:

- **Copy/Cut/Paste**: Transfer files between locations
- **Delete**: Remove files or directories
- **Rename**: Change file or directory names
- **Create Folder**: Create new directories
- **Properties**: View file or directory details

### Transferring Files

To transfer files between your device and the Twoyi container:

1. Open the File Manager within Twoyi
2. Navigate to the desired location
3. Use the **Import** option to copy files from your device to the container
4. Use the **Export** option to copy files from the container to your device

For more detailed information on file management, see the [Managing Files](/guide/manage-files) guide.

## Network Connectivity

Twoyi shares the network connection of your host device:

### Wi-Fi Configuration

1. Open the **Settings** app within Twoyi
2. Tap **Network & Internet**
3. Tap **Wi-Fi**
4. The Wi-Fi networks available to your device will be listed
5. Tap a network to connect

### Data Usage

Twoyi's network traffic counts toward your device's data usage. To monitor data usage:

1. Open the **Settings** app within Twoyi
2. Tap **Network & Internet**
3. Tap **Data Usage**
4. View data usage statistics for applications within the container

## Performance Considerations

To ensure optimal performance when using Twoyi:

- **Limit Background Apps**: Close applications you're not actively using
- **Manage Storage**: Regularly clean up unnecessary files
- **Update Twoyi**: Keep Twoyi updated to the latest version for performance improvements
- **Device Resources**: Be mindful that Twoyi shares resources with your host device

## Next Steps

Now that you're familiar with the basic usage of Twoyi, you can explore more advanced features:

- [Customizing the ROM](/guide/customize-rootfs) to add additional features
- Setting up [Google Mobile Services](/guide/gms) for applications that require them
- Using [Taichi](/guide/taichi) for Xposed modules without unlocking your bootloader
- Exploring [advanced features](/guide/advanced-features) like virtual hardware components
