---
sidebarDepth: 2
---

# Troubleshooting

This guide addresses common issues you might encounter when using Twoyi and provides solutions to help you resolve them.

## Installation Issues

### App Not Installing

**Symptoms:**
- "App not installed" error message
- Installation process fails to complete

**Possible Causes and Solutions:**

1. **Insufficient Storage Space**
   - Check your device's available storage by going to Settings > Storage
   - Free up space by removing unused apps or files
   - Try installing Twoyi again

2. **Incompatible Architecture**
   - Ensure you're downloading the correct APK for your device architecture (arm64-v8a)
   - Twoyi only supports 64-bit ARM devices
   - Use a system information app like "CPU-Z" to verify your device architecture

3. **Corrupted APK File**
   - Re-download the APK file from the official source
   - Verify the file integrity by checking the SHA256 hash if available

4. **Installation Blocked by Security Settings**
   - Ensure "Install from Unknown Sources" is enabled for your browser or file manager
   - On Android 8.0+, go to Settings > Apps > Special access > Install unknown apps

### Installation Stuck

**Symptoms:**
- Installation progress bar doesn't complete
- "Installing..." message displays for an extended period

**Solutions:**

1. Cancel the installation and try again
2. Restart your device and attempt the installation again
3. Clear the cache of the Google Play Store or the file manager you're using to install the APK
4. Try installing in safe mode to rule out interference from other apps

## First Launch Issues

### Crash on First Launch

**Symptoms:**
- Twoyi closes immediately after opening
- Error message about the app stopping

**Solutions:**

1. **Check System Requirements**
   - Verify your device meets the [minimum requirements](/guide/requirements)
   - Ensure you have sufficient free storage and RAM

2. **Clear App Data and Cache**
   - Go to Settings > Apps > Twoyi > Storage
   - Tap "Clear Data" and "Clear Cache"
   - Try launching Twoyi again

3. **Reinstall the Application**
   - Uninstall Twoyi completely
   - Restart your device
   - Install Twoyi again from the official source

### Stuck on Initialization

**Symptoms:**
- Initialization process doesn't complete
- Loading screen displays for an extended period

**Solutions:**

1. **Wait Longer for First Launch**
   - The first launch can take several minutes depending on your device
   - Be patient during the initial ROM extraction process

2. **Check Storage Permissions**
   - Ensure Twoyi has storage permissions granted
   - Go to Settings > Apps > Twoyi > Permissions > Storage

3. **Force Stop and Restart**
   - Go to Settings > Apps > Twoyi
   - Tap "Force Stop"
   - Launch Twoyi again

## Performance Issues

### Slow Performance

**Symptoms:**
- Laggy interface within Twoyi
- Applications within the container run slowly

**Solutions:**

1. **Close Background Applications**
   - Close unnecessary apps running on your device
   - Use your device's recent apps menu to close background apps

2. **Limit Container Applications**
   - Reduce the number of applications running simultaneously within Twoyi
   - Close applications within Twoyi when not in use

3. **Restart Twoyi**
   - Shut down and restart the Twoyi container
   - This can help free up resources and improve performance

4. **Check for Resource-Intensive Apps**
   - Some applications within Twoyi may be consuming excessive resources
   - Identify and remove or limit the use of these applications

### Battery Drain

**Symptoms:**
- Faster than normal battery depletion when using Twoyi
- Device heating up during Twoyi usage

**Solutions:**

1. **Limit Background Processes**
   - Close applications within Twoyi when not in use
   - Use the Twoyi settings to optimize performance

2. **Reduce Screen Brightness**
   - Lower your device's screen brightness when using Twoyi
   - Enable auto-brightness if available

3. **Update Twoyi**
   - Ensure you're using the latest version of Twoyi
   - Updates often include performance improvements and battery optimizations

## Application Issues

### Applications Not Importing

**Symptoms:**
- Error message when trying to import applications
- Import process fails to complete

**Solutions:**

1. **Check Application Compatibility**
   - Ensure the application is compatible with Android 8.1
   - Verify the application supports 64-bit architecture (arm64-v8a)

2. **Check Storage Space**
   - Ensure sufficient storage space is available within the Twoyi container
   - Use the file manager to check available space

3. **Try Alternative Import Method**
   - If importing from your device fails, try installing the APK directly
   - Download the APK file and use the Twoyi file manager to install it

### Applications Crashing

**Symptoms:**
- Applications within Twoyi close unexpectedly
- Error messages about applications stopping

**Solutions:**

1. **Clear Application Cache**
   - Open Settings within Twoyi
   - Go to Apps & Notifications > [App Name] > Storage
   - Tap "Clear Cache"

2. **Check for Updates**
   - Ensure the application is up to date
   - Update the application within Twoyi if updates are available

3. **Reinstall the Application**
   - Uninstall the application from within Twoyi
   - Import or install the application again

4. **Check Google Services Dependency**
   - Some applications require Google Mobile Services
   - If the app depends on GMS, follow the [Google Mobile Services guide](/guide/gms)

## System Issues

### Container Won't Boot

**Symptoms:**
- Twoyi starts but the internal Android system doesn't boot
- Black screen or stuck on boot animation

**Solutions:**

1. **Restart Twoyi**
   - Force close Twoyi from your device's settings
   - Launch Twoyi again

2. **Factory Reset**
   - Open Twoyi settings
   - Tap "Factory Reset" to reset to the official internal ROM
   - Note: This preserves your data but resets system settings

3. **Wipe All Data**
   - As a last resort, use the "Wipe All Data" option in Twoyi settings
   - Note: This will erase all data within the container

### Network Connectivity Issues

**Symptoms:**
- Applications within Twoyi can't connect to the internet
- Wi-Fi shows connected but no internet access

**Solutions:**

1. **Check Host Device Connectivity**
   - Ensure your device has a working internet connection
   - Try accessing websites outside of Twoyi

2. **Reset Network Settings**
   - Open Settings within Twoyi
   - Go to Network & Internet > Reset Wi-Fi, mobile & Bluetooth

3. **Check VPN Interference**
   - If you're using a VPN on your host device, try disabling it
   - Some VPNs may interfere with Twoyi's network connectivity

## Advanced Troubleshooting

### Collecting Logs

If you're experiencing persistent issues, collecting logs can help diagnose the problem:

1. Enable Developer Options within Twoyi:
   - Open Settings within Twoyi
   - Go to System > About phone
   - Tap "Build number" seven times

2. Enable USB Debugging:
   - Go to System > Developer options
   - Enable "USB debugging"

3. Connect to a computer and use ADB to collect logs:
   ```
   adb logcat > twoyi_log.txt
   ```

4. Share these logs when seeking support

### Reporting Issues

If you encounter issues not covered in this guide:

1. Check the [GitHub Issues](https://github.com/twoyi/twoyi/issues) to see if the problem has been reported
2. If not, create a new issue with:
   - A detailed description of the problem
   - Steps to reproduce the issue
   - Your device information (model, Android version)
   - Logs if available

## Getting Help

If you need additional assistance:

- Join the [Twoyi Community](/guide/community) for support from other users
- Contact the developers directly through the [Contact](/guide/contact) page
- Check the [FAQ](/guide/faq) for answers to common questions
