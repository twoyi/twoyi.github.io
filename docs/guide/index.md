---
sidebarDepth: 2
---

# Introduction

Twoyi is **a lightweight Android container**. It runs a nearly complete Android system as a normal app (no root required) on Android. Additionally, it supports Android 8.1 ~ 12.

## Capability

1. Using Taichi·Yang without unlocking the bootloader. Xposed, EdXposed and LSPosed will be supported later.
2. Using root on non-rooted devices.
3. Magisk modules will be partially supported.
4. Implementing additional system components such as virtual camera by virtualizing the HAL layer.
5. Doing security research such as shelling.

## Features

1. Twoyi is a rootless Android system-level container, which runs a nearly complete Android system as a normal app and is mostly isolated from the main system.
2. The internal Android version is Android 8.1 and Android 10 will be supported later.
3. Starting up Twoyi is very fast and the system can be booted in about three seconds except for the initialization.
4. Twoyi is an open source project.
5. The internal system of twoyi will be fully customizable. Because its system is open source, you can fork the project to compile your own AOSP. You can also customize the system components, such as the HAL layer to implement virtual cameras, virtual sensors and other special features.