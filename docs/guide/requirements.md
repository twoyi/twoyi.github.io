---
sidebarDepth: 2
---

# System Requirements

Before installing and using Twoyi, it's important to ensure your device meets the necessary requirements. This page outlines the hardware and software requirements for running Twoyi effectively.

## Android Version Requirements

Twoyi is compatible with a range of Android versions:

| Requirement | Details |
|-------------|---------|
| **Minimum Android Version** | Android 8.1 (Oreo) |
| **Maximum Android Version** | Android 12 |
| **Recommended Android Version** | Android 10 or newer |

### Version-Specific Notes

- **Android 8.1-9**: Full compatibility with all core features
- **Android 10-11**: Improved performance and stability
- **Android 12**: Compatible with some minor limitations due to platform restrictions

## Hardware Requirements

Twoyi requires specific hardware capabilities to function properly:

### Processor Architecture

| Requirement | Details |
|-------------|---------|
| **Supported Architecture** | ARM64 (arm64-v8a) |
| **Unsupported Architecture** | 32-bit ARM (armeabi-v7a), x86, x86_64 |

Twoyi is designed specifically for 64-bit ARM processors, which are found in most modern Android devices. 32-bit devices are not supported.

### Memory (RAM)

| Requirement | Details |
|-------------|---------|
| **Minimum RAM** | 2GB |
| **Recommended RAM** | 4GB or more |

While Twoyi may run on devices with 2GB of RAM, performance may be limited. For optimal performance, especially when running multiple applications within the container, 4GB or more of RAM is recommended.

### Storage

| Requirement | Details |
|-------------|---------|
| **Minimum Free Space** | 1GB |
| **Recommended Free Space** | 3GB or more |

Twoyi requires approximately 1GB of storage for the base installation. Additional space is needed for applications installed within the container and their data.

### Processor Performance

| Requirement | Details |
|-------------|---------|
| **Minimum** | Mid-range processor (e.g., Snapdragon 660 or equivalent) |
| **Recommended** | High-performance processor (e.g., Snapdragon 845 or better) |

Twoyi runs a complete Android environment within an application, which requires significant processing power. Better processors will provide a smoother experience.

## Software Requirements

### Google Play Services

Twoyi does not require Google Play Services to function. However, some applications within the container may require Google services to work properly. See the [Google Mobile Services](/guide/gms) guide for information on setting up Google services within Twoyi.

### Permissions

Twoyi requires the following permissions to function properly:

- **Storage**: To store the container files and manage data
- **Internet**: For network connectivity within the container
- **Foreground Service**: To maintain the container while running in the background

## Device Compatibility

### Tested Devices

Twoyi has been tested and confirmed to work well on the following devices:

| Device | Android Version | Notes |
|--------|----------------|-------|
| Google Pixel 4 | Android 11 | Excellent performance |
| Samsung Galaxy S10 | Android 10 | Good performance |
| OnePlus 8 | Android 11 | Excellent performance |
| Xiaomi Mi 10 | Android 10 | Good performance |

This is not an exhaustive list. Twoyi should work on most devices that meet the requirements listed above.

### Known Incompatibilities

Twoyi may not work properly on the following:

- Devices with heavily customized Android versions (some manufacturer-specific features may not work)
- Devices with certain security features that restrict containerization
- Devices with limited RAM or processing power
- 32-bit only devices

## Performance Considerations

When running Twoyi, keep in mind the following performance considerations:

### Resource Usage

Twoyi runs a complete Android environment, which consumes significant system resources:

- **CPU Usage**: Expect increased CPU usage while Twoyi is running
- **RAM Usage**: Twoyi requires a substantial amount of RAM, especially when running multiple applications
- **Battery Impact**: Running Twoyi may increase battery consumption

### Optimization Tips

To optimize performance when using Twoyi:

1. **Close Background Apps**: Close unnecessary applications running on your device
2. **Manage Container Apps**: Limit the number of applications running simultaneously within Twoyi
3. **Storage Cleanup**: Regularly clean up unnecessary files within the container
4. **Update Twoyi**: Keep Twoyi updated to the latest version for performance improvements

## Checking Your Device Compatibility

To check if your device is compatible with Twoyi:

1. **Check Android Version**: Go to Settings > About Phone > Android Version
2. **Check Architecture**: Use a system information app like "CPU-Z" to verify your device has a 64-bit ARM processor
3. **Check Available Storage**: Go to Settings > Storage to verify you have at least 1GB of free space
4. **Check RAM**: Go to Settings > About Phone > Memory or use a system information app to check your device's RAM

If your device meets all the requirements listed on this page, it should be compatible with Twoyi.

## Next Steps

If your device meets the requirements, you're ready to [install Twoyi](/guide/getting-started) and start using it. If you encounter any issues during installation or use, check the [Troubleshooting](/guide/troubleshooting) guide for solutions.
