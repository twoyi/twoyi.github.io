---
sidebarDepth: 2
---

# Changelog

This page documents the version history of Twoyi, including new features, improvements, bug fixes, and other changes.

## Version 1.0.0 (2023-06-15)

### Major Features

- Initial public release of Twoyi
- Support for Android 8.1 through 12
- Rootless Android container system
- Fast boot time (approximately 3 seconds after initial setup)
- Built-in file manager
- Application import functionality
- Custom ROM support

### System Components

- Android 8.1 base system
- Customizable system components
- Virtual Hardware Abstraction Layer (HAL)
- Inter-process communication system
- Rendering engine for UI display

### User Interface

- Home screen launcher
- Settings interface
- Application management
- File management interface
- System control options (shutdown, reboot)

### Known Issues

- Limited support for 32-bit applications
- Some Google services require manual setup
- Occasional performance issues on devices with less than 4GB RAM
- Limited hardware virtualization for certain components

## Version 0.9.0 (2023-04-20) - Beta Release

### Major Features

- Beta release for testing
- Core container functionality
- Basic application support
- File system access
- Preliminary ROM customization

### Improvements

- Performance optimizations for faster boot time
- Reduced memory usage
- Improved application compatibility
- Enhanced file management

### Bug Fixes

- Fixed crash when importing certain applications
- Resolved file permission issues
- Fixed network connectivity problems
- Addressed UI rendering glitches

## Version 0.8.0 (2023-03-10) - Alpha Release

### Major Features

- Alpha release for early testing
- Basic container functionality
- Limited application support
- Experimental ROM customization

### Known Issues

- Unstable on some devices
- Limited application compatibility
- Performance issues
- Incomplete documentation

## Version 0.7.0 (2023-02-05) - Developer Preview

### Major Features

- Initial developer preview
- Core system architecture
- Basic rendering engine
- Proof-of-concept functionality

### Limitations

- For developer testing only
- Many features incomplete or non-functional
- Significant performance issues
- Limited device compatibility

## Upcoming Features

The following features are planned for future releases:

### Version 1.1.0 (Planned)

- Improved performance and stability
- Enhanced application compatibility
- Better Google services integration
- Additional virtual hardware components
- User interface improvements

### Version 1.2.0 (Planned)

- Support for Android 10 as the container OS
- Expanded Xposed framework support
- More comprehensive Magisk module support
- Advanced file management features
- Multi-user enhancements

### Long-term Roadmap

- Support for newer Android versions
- Enhanced performance optimizations
- Expanded hardware virtualization
- Improved developer tools
- Additional customization options

## Release Schedule

Twoyi follows an approximate release schedule:

- **Major Releases** (x.0.0): Every 6-12 months
- **Feature Releases** (x.y.0): Every 2-3 months
- **Bug Fix Releases** (x.y.z): As needed

Release dates are subject to change based on development progress and priorities.

## Versioning Policy

Twoyi follows semantic versioning (SemVer) with the format MAJOR.MINOR.PATCH:

- **MAJOR**: Incompatible API changes or significant new features
- **MINOR**: Backward-compatible new features and improvements
- **PATCH**: Backward-compatible bug fixes

## Reporting Issues

If you encounter issues with any version of Twoyi:

1. Check if the issue is already known (listed in the release notes)
2. Verify if the issue has been fixed in a newer version
3. Report the issue on [GitHub](https://github.com/twoyi/twoyi/issues) with:
   - Twoyi version
   - Device information
   - Steps to reproduce
   - Expected vs. actual behavior

## Contributing

We welcome contributions to help improve Twoyi:

- Bug fixes
- Feature implementations
- Documentation improvements
- Performance optimizations

See the [Contributing Guide](/guide/contributing) for more information on how to contribute to the project.
