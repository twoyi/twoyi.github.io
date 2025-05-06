---
sidebarDepth: 2
---

# Contributing to Twoyi

Thank you for your interest in contributing to Twoyi! This guide will help you get started with contributing to the project, whether you're interested in code contributions, documentation, testing, or other forms of contribution.

## Ways to Contribute

There are many ways to contribute to Twoyi, regardless of your technical skill level:

### Code Contributions

- Fix bugs in the existing codebase
- Implement new features
- Improve performance or stability
- Add support for new Android versions
- Enhance the user interface

### Documentation Contributions

- Improve existing documentation
- Add new guides or tutorials
- Translate documentation to other languages
- Fix errors or clarify instructions

### Testing and Quality Assurance

- Test new features and releases
- Report bugs and issues
- Verify bug fixes
- Test on different devices and Android versions

### Community Support

- Help answer questions from other users
- Share your knowledge and experiences
- Create tutorials or guides
- Promote Twoyi to others who might benefit from it

## Getting Started

### Prerequisites

Before you begin contributing to Twoyi, ensure you have:

1. **Git**: Install Git for version control
2. **Android Studio**: For code contributions
3. **Android SDK**: With appropriate API levels
4. **Java Development Kit (JDK)**: Version 8 or higher
5. **Rust Toolchain**: For native component development
6. **GitHub Account**: To submit contributions

### Development Setup

#### 1. Fork the Repository

1. Visit the [Twoyi GitHub repository](https://github.com/twoyi/twoyi)
2. Click the "Fork" button in the top-right corner
3. This creates a copy of the repository in your GitHub account

#### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/twoyi.git
cd twoyi
```

#### 3. Set Up Remote Repositories

```bash
git remote add upstream https://github.com/twoyi/twoyi.git
```

This allows you to keep your fork synchronized with the main repository.

#### 4. Create a Branch

Create a new branch for your contribution:

```bash
git checkout -b feature/your-feature-name
```

Use a descriptive branch name that reflects the changes you're making.

#### 5. Set Up the Development Environment

1. Open the project in Android Studio
2. Install any required dependencies
3. Set up the Rust toolchain if working on native components

```bash
cd app/rs
./build_rs.sh
```

#### 6. Make Your Changes

Implement your changes, following the [coding guidelines](#coding-guidelines).

#### 7. Test Your Changes

Thoroughly test your changes to ensure they work as expected and don't introduce new issues.

#### 8. Commit Your Changes

```bash
git add .
git commit -m "Brief description of your changes"
```

Write clear, concise commit messages that explain what your changes do and why.

#### 9. Push Your Changes

```bash
git push origin feature/your-feature-name
```

#### 10. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and provide a description of your changes
4. Submit the pull request

## Coding Guidelines

### Code Style

- Follow the existing code style in the project
- Use consistent indentation (4 spaces for Java, 4 spaces for Rust)
- Keep lines to a reasonable length (generally 100 characters)
- Use meaningful variable and function names
- Add comments for complex logic

### Java Guidelines

- Follow standard Java naming conventions
- Use camelCase for variables and methods
- Use PascalCase for class names
- Prefix interfaces with "I" (e.g., IRenderer)
- Use meaningful package names

### Rust Guidelines

- Follow the Rust style guide
- Use snake_case for variables and functions
- Use PascalCase for types and traits
- Document public APIs with rustdoc comments

### Commit Guidelines

- Make focused commits that address a single issue or feature
- Write descriptive commit messages
- Reference issue numbers in commit messages when applicable
- Keep commits logically separated

## Pull Request Process

### Before Submitting

1. Ensure your code follows the project's coding guidelines
2. Test your changes thoroughly
3. Update documentation if necessary
4. Ensure your branch is up to date with the main repository

### Pull Request Description

Include the following in your pull request description:

1. What changes you've made
2. Why you've made these changes
3. How to test the changes
4. Any related issues or pull requests
5. Screenshots or videos if applicable

### Review Process

After submitting your pull request:

1. Maintainers will review your code
2. Automated tests will run to verify your changes
3. You may be asked to make additional changes
4. Once approved, your changes will be merged

### After Merging

1. Delete your feature branch
2. Update your fork with the latest changes from the main repository
3. Celebrate your contribution!

## Documentation Contributions

### Documentation Guidelines

- Use clear, concise language
- Include examples where appropriate
- Use proper Markdown formatting
- Organize content logically
- Check for spelling and grammar errors

### Documentation Structure

- **Guides**: Step-by-step instructions for specific tasks
- **Reference**: Detailed information about features and components
- **Tutorials**: Comprehensive walkthroughs for beginners
- **FAQ**: Answers to common questions

### Submitting Documentation Changes

1. Fork the [documentation repository](https://github.com/twoyi/twoyi.github.io)
2. Make your changes
3. Submit a pull request with a clear description of your changes

## Issue Reporting

### Before Reporting

1. Check if the issue has already been reported
2. Verify if the issue is fixed in the latest version
3. Gather information about your environment

### What to Include

Include the following information in your issue report:

1. Twoyi version
2. Device model and Android version
3. Steps to reproduce the issue
4. Expected behavior
5. Actual behavior
6. Screenshots or videos if applicable
7. Logs if available

### Issue Templates

Use the provided issue templates on GitHub to ensure you include all necessary information.

## Community Guidelines

When participating in the Twoyi community:

1. **Be Respectful**: Treat all community members with respect and courtesy
2. **Stay On Topic**: Keep discussions relevant to Twoyi and related topics
3. **No Spam**: Avoid excessive self-promotion or off-topic links
4. **Help Others**: Share your knowledge and help others when you can
5. **Provide Context**: When asking for help, provide sufficient information
6. **Follow Platform Rules**: Adhere to the rules of each platform (GitHub, Telegram, Discord)

## Recognition

Contributors to Twoyi are recognized in several ways:

- **Contributors List**: Active contributors are listed in the project's README
- **Feature Credits**: Significant features include credits to their contributors
- **Community Highlights**: Outstanding contributions are highlighted in release notes

## Getting Help

If you need help with contributing to Twoyi:

- Join the [Telegram group](https://t.me/twoyi_group) or [Discord server](https://discord.gg/twoyi)
- Ask questions in the "Discussions" section on GitHub
- Contact the maintainers directly

Thank you for contributing to Twoyi and helping make it better for everyone!
