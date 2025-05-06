---
sidebarDepth: 2
---

# Application Management

This page explains how Twoyi manages applications within the container environment, including importing, installing, updating, and running applications.

## Application Architecture

### Container vs. Host Applications

In Twoyi, there are two distinct application environments:

1. **Host Environment**: The Android system on your physical device
2. **Container Environment**: The Android 8.1 system running within Twoyi

Applications installed in the host environment are not automatically available in the container environment. They must be explicitly imported or installed within the container.

### Application Isolation

Applications within the Twoyi container:

- Have their own data directories isolated from the host system
- Run in a separate Android environment with its own permissions
- Cannot directly access data from host applications (unless explicitly shared)
- Have their own process space within the container

This isolation provides security and prevents conflicts between the host and container environments.

## Importing Applications

### Import Process Overview

When you import an application from your host device into the Twoyi container, the following process occurs:

1. **APK Extraction**: The APK file of the selected application is extracted from the host system
2. **Compatibility Check**: The APK is analyzed for compatibility with the container environment
3. **Installation**: The APK is installed within the container using the Package Manager
4. **Data Initialization**: Initial data directories are created for the application

### Technical Implementation

The import process involves several technical steps:

1. **Package Query**: Twoyi queries the host's PackageManager to get information about installed applications
2. **APK Location**: The location of the APK file is determined from the package information
3. **File Copy**: The APK file is copied to a temporary location within Twoyi's storage
4. **Package Installation**: The PackageManager within the container installs the APK
5. **Cleanup**: Temporary files are removed after successful installation

### Compatibility Considerations

Not all applications can be successfully imported into Twoyi. Compatibility depends on:

- **Architecture Support**: Twoyi only supports 64-bit (arm64-v8a) applications
- **API Requirements**: Applications must be compatible with Android 8.1 (API level 27)
- **Native Libraries**: Applications with architecture-specific native libraries must support arm64-v8a
- **System Dependencies**: Applications with dependencies on specific system components may have issues

## Installing Applications

### Direct Installation

Besides importing from the host system, you can install applications directly within Twoyi:

1. **APK Files**: Install applications from APK files using the File Manager
2. **App Stores**: Install applications from alternative app stores within the container
3. **Web Downloads**: Download and install APKs from websites using the browser

### Installation Process

The direct installation process involves:

1. **Package Parsing**: The APK file is parsed to extract package information
2. **Signature Verification**: The APK signature is verified for integrity
3. **Permission Checking**: Required permissions are checked and requested if necessary
4. **Installation**: The application is installed to the system
5. **Post-Installation Setup**: Any necessary post-installation tasks are performed

## Application Runtime

### Process Management

When an application runs within Twoyi:

1. **Process Creation**: The Zygote process forks to create a new process for the application
2. **Runtime Initialization**: The Android Runtime (ART) is initialized for the application
3. **Activity Launch**: The application's main activity is launched
4. **UI Rendering**: The application's UI is rendered to the container's virtual display

### Resource Allocation

Applications within Twoyi share the resources allocated to the Twoyi container:

- **Memory**: Memory is allocated from Twoyi's memory allocation
- **CPU**: Processing time is shared among all running applications
- **Storage**: Applications use storage within the container's file system
- **Network**: Network access is provided through the host system's connection

### Background Processing

Twoyi supports background processing for applications:

- **Services**: Applications can run background services
- **Broadcast Receivers**: Applications can receive system broadcasts
- **Content Providers**: Applications can provide and access content
- **Background Tasks**: Applications can schedule and execute background tasks

However, background processing may be more limited than on a standard Android system due to resource constraints and the containerized environment.

## Application Data Management

### Data Storage

Applications within Twoyi store their data in the container's file system:

- **Private Data**: Stored in `/data/data/[package_name]/`
- **External Storage**: Accessible through `/sdcard/`
- **Shared Storage**: Available in standard Android media directories

### Data Isolation

Each application's data is isolated from other applications, following Android's standard security model:

- Applications cannot access other applications' private data without permissions
- System permissions control access to shared resources
- The container environment provides an additional layer of isolation from the host system

### Data Backup and Restore

Twoyi provides mechanisms for backing up and restoring application data:

1. **Application Backup**: Export application data for backup
2. **Application Restore**: Import previously backed up data
3. **Container Backup**: Back up the entire container environment
4. **Container Restore**: Restore the container from a backup

## Application Updates

### Update Process

Applications within Twoyi can be updated through several methods:

1. **Re-Import**: Re-import the application from the host system
2. **Direct Update**: Install an updated APK directly within the container
3. **In-App Updates**: Some applications can update themselves

The update process preserves application data while replacing the application code.

### Technical Implementation

When updating an application:

1. **Version Comparison**: The new version is compared with the installed version
2. **Signature Verification**: The signature of the new version is verified against the installed version
3. **Update Installation**: The new version is installed, replacing the old version
4. **Data Migration**: Any necessary data migration is performed

## Application Removal

### Uninstallation Process

To remove an application from Twoyi:

1. **User Initiation**: The user initiates uninstallation through the UI
2. **Package Removal**: The PackageManager removes the application package
3. **Data Cleanup**: Application data is removed (if selected)
4. **Resource Reclamation**: Resources used by the application are freed

### Data Retention Options

When uninstalling an application, users can choose:

- **Remove App Only**: Keep application data for potential reinstallation
- **Remove App and Data**: Completely remove the application and all its data

## Application Permissions

### Permission Model

Twoyi implements Android's standard permission model:

- **Install-Time Permissions**: Granted automatically during installation
- **Runtime Permissions**: Requested from the user when needed
- **Special Permissions**: Require specific user action to grant

### Permission Management

Users can manage application permissions within Twoyi:

1. Open the **Settings** app within Twoyi
2. Tap **Apps & Notifications**
3. Select the application
4. Tap **Permissions**
5. Toggle permissions as desired

## Troubleshooting Application Issues

### Common Issues and Solutions

| Issue | Possible Solution |
|-------|------------------|
| Application won't import | Ensure the application supports 64-bit architecture |
| Application crashes on launch | Check for missing dependencies or incompatible API usage |
| Application can't access the internet | Verify network permissions and connectivity |
| Application performance issues | Close other applications to free up resources |
| Missing functionality | Check if the functionality depends on unavailable system components |

For more detailed troubleshooting, refer to the [Troubleshooting](/guide/troubleshooting) guide.
