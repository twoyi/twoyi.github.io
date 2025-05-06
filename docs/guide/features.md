---
sidebarDepth: 2
---

# Features & Capabilities

Twoyi offers a wide range of features and capabilities that make it a powerful tool for Android users. This page provides a comprehensive overview of what Twoyi can do.

## Core Features

### Rootless Android Container

Twoyi's primary feature is its ability to run a complete Android environment as a normal application without requiring root access:

- **No Root Required**: Twoyi works on non-rooted devices
- **No Bootloader Unlocking**: No need to unlock your bootloader, preserving warranty and security
- **System-Level Container**: Provides system-level functionality within a standard application

### Fast Boot Time

Twoyi is designed for efficiency and quick startup:

- **Initial Setup**: The first launch requires extracting the ROM files (may take a few minutes)
- **Subsequent Boots**: After initial setup, Twoyi boots in approximately three seconds
- **Optimized Performance**: The container is optimized for minimal resource usage

### Isolation from Host System

Twoyi maintains strong isolation between the container and your main system:

- **Separate Environment**: Applications within Twoyi run in a separate Android environment
- **Data Isolation**: Data within the container is isolated from your main system
- **Security Boundary**: Issues within the container don't affect your main system

### Customizable ROM

Twoyi supports both the built-in ROM and custom ROMs:

- **Built-in ROM**: Android 8.1 ROM included with Twoyi
- **Custom ROM Support**: Create and use your own custom ROMs
- **ROM Modification**: Modify system components to add custom functionality

## Advanced Capabilities

### Xposed Framework Support

Twoyi enables using Xposed modules without modifying your main system:

- **Taichi·Yang Support**: Use Taichi·Yang modules within the container
- **Future Support**: Xposed, EdXposed, and LSPosed support planned for future releases
- **Module Installation**: Install and manage Xposed modules within the container

### Root Access

Twoyi provides root functionality within the container:

- **Contained Root**: Root access is contained within the Twoyi environment
- **Root Applications**: Run applications that require root within the container
- **System Modifications**: Make system-level changes within the container

### Magisk Module Support

Many Magisk modules can be used within Twoyi:

- **Partial Support**: Many Magisk modules work within the container
- **Module Management**: Install and manage Magisk modules
- **System Modifications**: Apply system modifications through Magisk modules

### Virtual Hardware Abstraction Layer (HAL)

Twoyi allows virtualizing hardware components:

- **Virtual Camera**: Implement and use virtual cameras
- **Virtual Sensors**: Create virtual sensors for applications
- **Custom HAL Components**: Develop custom HAL components for specific needs

### Security Research

Twoyi provides a safe environment for security research:

- **Isolated Testing**: Test potentially risky applications in an isolated environment
- **System Analysis**: Analyze system behavior without risking your main device
- **Penetration Testing**: Perform security testing within the container

## User Features

### Application Management

Twoyi provides comprehensive application management:

- **App Import**: Import applications from your device
- **APK Installation**: Install applications from APK files
- **App Updates**: Update applications within the container
- **App Data Management**: Manage application data and settings

### File Management

Twoyi includes a built-in file manager:

- **File Browser**: Browse files within the container
- **File Operations**: Copy, move, rename, and delete files
- **Import/Export**: Transfer files between your device and the container
- **Storage Management**: Manage storage usage within the container

### Network Connectivity

Twoyi shares the network connection of your host device:

- **Wi-Fi Support**: Connect to Wi-Fi networks
- **Mobile Data**: Use mobile data when available
- **Network Configuration**: Configure network settings within the container

### Multi-User Support

Twoyi supports multiple user profiles:

- **User Creation**: Create additional user profiles within the container
- **User Switching**: Switch between user profiles
- **User Data Isolation**: Each user has their own isolated data

## Technical Features

### 64-bit Architecture Support

Twoyi is designed for modern 64-bit devices:

- **ARM64 Support**: Optimized for ARM64 (arm64-v8a) architecture
- **64-bit Applications**: Supports 64-bit applications
- **Performance Optimization**: Takes advantage of 64-bit architecture for better performance

### Android Version Compatibility

Twoyi works on a wide range of Android versions:

- **Host Compatibility**: Works on Android 8.1 through 12
- **Container Version**: Internal Android version is 8.1
- **Future Support**: Android 10 support planned for the container

### Open Source

Twoyi is fully open source:

- **Transparency**: All code is available for review
- **Community Contributions**: Community can contribute to development
- **Customization**: Users can modify the code for their specific needs

## Limitations

While Twoyi is powerful, it does have some limitations:

- **32-bit App Support**: 32-bit applications are not supported
- **Hardware Access**: Some hardware features may have limited functionality
- **Performance Overhead**: Running a container introduces some performance overhead
- **Google Services**: Some Google services may require additional setup

## Future Features

The Twoyi team is working on several exciting features for future releases:

- **Android 10 Container**: Upgrading the internal Android version to 10
- **Enhanced Xposed Support**: Adding support for more Xposed frameworks
- **Improved Performance**: Optimizing performance and resource usage
- **Expanded Hardware Virtualization**: Adding support for more virtual hardware components

For more detailed information on specific features, refer to the corresponding guides in the documentation.
