---
sidebarDepth: 2
---

# What is Twoyi?

Twoyi (pronounced "two-yi") is **a lightweight Android container system** that enables running a nearly complete Android environment as a normal application without requiring root access. It provides system-level functionality that typically requires device modifications, but works as a standard application on Android 8.1 through 12.

![Twoyi Overview](/images/twoyi-overview.png)

## Why Twoyi?

Traditional methods of customizing Android or using advanced features often require:

- Unlocking the bootloader (which voids warranty on many devices)
- Rooting the device (which compromises security)
- Installing custom ROMs (which can be complex and risky)

Twoyi solves these problems by providing a containerized Android environment that:

- Runs as a normal app without special permissions
- Maintains isolation from your main system
- Boots in seconds
- Allows customization without modifying your actual device

## Key Capabilities

Twoyi enables several use cases that would typically require device modifications:

1. **Xposed Framework Support**: Use Taichi·Yang without unlocking the bootloader. Support for Xposed, EdXposed, and LSPosed is planned for future releases.

2. **Root Access**: Gain root functionality on non-rooted devices, allowing you to use apps that require root without actually rooting your main device.

3. **Magisk Module Support**: Many Magisk modules can be used within the Twoyi container, bringing their functionality without modifying your system.

4. **Virtual Hardware Components**: Implement additional system components such as virtual cameras by virtualizing the Hardware Abstraction Layer (HAL).

5. **Security Research**: Perform security testing and research in an isolated environment without risking your main system.

## Technical Features

### System Architecture

Twoyi implements a layered architecture with clear separation between:

- The host Android system (your device)
- The container application (Twoyi app)
- The virtualized Android environment (inside Twoyi)

### Core Components

1. **Rootless Container**: Twoyi is a rootless Android system-level container that runs a nearly complete Android system as a normal app, isolated from your main system.

2. **Android Version**: The internal Android version is currently Android 8.1, with Android 10 support planned for future releases.

3. **Fast Boot Time**: After initial setup, Twoyi boots in approximately three seconds, making it practical for daily use.

4. **Open Source**: Twoyi is fully open source, allowing for community contributions and transparency.

5. **Customizable System**: The internal system of Twoyi is fully customizable. Since its system is open source, you can fork the project to compile your own AOSP. You can also customize system components, such as the HAL layer to implement virtual cameras, virtual sensors, and other special features.

## System Requirements

- Host Android versions 8.1 through 12
- 64-bit architecture support
- At least 1GB of free storage space
- Minimum 3GB RAM recommended

Ready to get started? Check out our [installation guide](/guide/getting-started) to begin using Twoyi.