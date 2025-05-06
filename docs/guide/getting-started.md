---
sidebarDepth: 2
---

# Installation Guide

This guide will walk you through the process of installing and setting up Twoyi on your Android device.

## System Requirements

Before installing Twoyi, ensure your device meets the following requirements:

- Android version 8.1 or higher (up to Android 12)
- 64-bit architecture support
- At least 1GB of free storage space
- Minimum 3GB RAM recommended

## Download Twoyi

You can download the latest version of Twoyi from the following sources:

1. **GitHub Releases**: [https://github.com/twoyi/twoyi/releases](https://github.com/twoyi/twoyi/releases)
   - This is the official source and contains the latest stable releases
   - Download the APK file that matches your device architecture (arm64-v8a recommended)

2. **Alternative Download Sources**:
   - [F-Droid](https://f-droid.org/) (Coming soon)
   - [Google Play Store](https://play.google.com/) (Coming soon)

## Installation Steps

### Step 1: Enable Installation from Unknown Sources

If you're installing Twoyi from GitHub or other non-Play Store sources, you'll need to enable installation from unknown sources:

1. Open your device's **Settings**
2. Navigate to **Security** or **Privacy**
3. Enable **Install from Unknown Sources** or **Install Unknown Apps**
   - On Android 8.0+, you may need to enable this permission specifically for your browser or file manager

### Step 2: Install the APK

1. Locate the downloaded APK file using your file manager
2. Tap on the APK file to begin installation
3. Review the permissions and tap **Install**
4. Wait for the installation to complete

### Step 3: First Launch

1. Open Twoyi from your app drawer
2. Grant the necessary permissions when prompted
   - Storage permission is required for managing files within the container
   - Other permissions may be requested based on your device and Android version
3. Wait for the initial setup to complete
   - This may take a few minutes as Twoyi extracts and sets up the internal Android system
   - Subsequent launches will be much faster (typically around 3 seconds)

## Post-Installation Setup

After installing Twoyi, you'll want to:

1. **Import Applications**: Learn how to [import your favorite apps](/guide/basic-usage#importing-applications) into the Twoyi container
2. **Configure Settings**: Explore the [available settings](/guide/basic-usage#configuring-settings) to customize your Twoyi experience
3. **Manage Files**: Understand how to [transfer files](/guide/manage-files) between your device and the Twoyi container

## Troubleshooting Installation Issues

If you encounter issues during installation, check the following:

### Common Problems and Solutions

| Problem | Possible Solution |
|---------|------------------|
| "App not installed" error | Ensure you have enough storage space and are using the correct APK for your device architecture |
| Crashes on first launch | Check that your device meets the minimum requirements and try restarting your device |
| Permissions issues | Make sure you've granted all necessary permissions to Twoyi |
| Slow initial setup | The first launch requires extracting the ROM files. This is normal and only happens once |

For more detailed troubleshooting, visit our [Troubleshooting Guide](/guide/troubleshooting) or [FAQ](/guide/faq) section.

## Updating Twoyi

To update Twoyi to the latest version:

1. Download the latest APK from [GitHub Releases](https://github.com/twoyi/twoyi/releases)
2. Install the new APK over the existing installation
3. Your data and settings will be preserved during the update

Alternatively, enable update notifications in Twoyi settings to be alerted when new versions are available.

## Next Steps

Now that you've successfully installed Twoyi, proceed to the [First Boot](/guide/first-boot) guide to learn how to set up and use your new Android container.