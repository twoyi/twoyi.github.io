module.exports = {
    title: '两仪',
    description: '一个轻量级的 Android 容器 - 无需 Root 权限运行完整 Android 系统',
    head: [
        ['script', {
            async: 'async',
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2610070972052494',
            crossorigin: 'anonymous',
        }],
        ['meta', { name: 'author', content: 'Twoyi Team' }],
        ['meta', { name: 'keywords', content: 'Android, container, virtualization, rootless, Twoyi, 两仪, Android container, virtual environment' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Twoyi - A Rootless Lightweight Android Container' }],
        ['meta', { property: 'og:description', content: 'Run a complete Android system as a normal app without root access. Support for Android 8.1 through 12.' }],
        ['meta', { property: 'og:url', content: 'https://twoyi.github.io/' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
      logo: '/logo.png',
      repo: 'twoyi/twoyi',
      docsRepo: 'twoyi/twoyi.github.io',
      docsBranch: 'main',
      editLinks: true,
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          // label for this locale in the language dropdown
          label: 'English',
          // Aria Label for locale in the dropdown
          ariaLabel: 'Languages',
          editLinkText: 'Edit this page on GitHub',
          lastUpdated: 'Last Updated',

          nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            { text: 'Architecture', link: '/guide/architecture', activeMatch: '^/guide/architecture' },
            { text: 'FAQ', link: '/guide/faq', activeMatch: '^/guide/faq' },
            { text: 'Community', link: '/guide/community', activeMatch: '^/guide/community' },
            {
              text: 'Resources',
              items: [
                { text: 'Changelog', link: '/guide/changelog' },
                { text: 'Troubleshooting', link: '/guide/troubleshooting' },
                { text: 'Contributing', link: '/guide/contributing' }
              ]
            },
            {
              text: 'Github',
              link: 'https://github.com/twoyi/twoyi'
            },
            {
              text: 'Download',
              link: 'https://github.com/twoyi/twoyi/releases'
            }
          ],

          sidebar: {
            '/guide/': getGuideSidebar(),
            '/': getGuideSidebar()
          },

          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present Twoyi Team'
          }
        },
        '/zh/': {
          selectText: '选择语言',
          label: '简体中文',
          editLinkText: '在 GitHub 上编辑此页',
          lastUpdated: '上次更新',

          nav: [
            { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
            { text: '架构', link: '/guide/architecture', activeMatch: '^/guide/architecture' },
            { text: '常见问题', link: '/guide/faq', activeMatch: '^/guide/faq' },
            { text: '社区', link: '/guide/community', activeMatch: '^/guide/community' },
            {
              text: '资源',
              items: [
                { text: '更新日志', link: '/guide/changelog' },
                { text: '故障排除', link: '/guide/troubleshooting' },
                { text: '贡献指南', link: '/guide/contributing' }
              ]
            },
            {
              text: 'Github',
              link: 'https://github.com/twoyi/twoyi'
            },
            {
              text: '下载',
              link: 'https://github.com/twoyi/twoyi/releases'
            }
          ],

          sidebar: {
            '/guide/': getZHGuideSidebar(),
            '/': getZHGuideSidebar()
          },

          footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2021-至今 两仪团队'
          }
        }
      }
    },
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Twoyi',
        description: 'A Rootless lightweight Android container'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '两仪',
        description: '一个轻量级的免 ROOT Android 容器'
      }
    }
  }

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is Twoyi', link: '/guide/' },
        { text: 'Features & Capabilities', link: '/guide/features' },
        { text: 'System Requirements', link: '/guide/requirements' }
      ]
    },
    {
      text: 'Getting Started',
      children: [
        { text: 'Installation', link: '/guide/getting-started' },
        { text: 'First Boot', link: '/guide/first-boot' },
        { text: 'Basic Usage', link: '/guide/basic-usage' }
      ]
    },
    {
      text: 'Advanced Usage',
      children: [
        { text: 'Customizing ROM', link: '/guide/customize-rootfs' },
        { text: 'Managing Files', link: '/guide/manage-files' },
        { text: 'Google Mobile Service', link: '/guide/gms' },
        { text: 'Android 12 Support', link: '/guide/android-12' },
        { text: 'Taichi Integration', link: '/guide/taichi' }
      ]
    },
    {
      text: 'Technical Details',
      children: [
        { text: 'System Architecture', link: '/guide/architecture' },
        { text: 'Boot Process', link: '/guide/boot-process' },
        { text: 'Application Management', link: '/guide/app-management' },
        { text: 'Troubleshooting', link: '/guide/troubleshooting' }
      ]
    },
    {
      text: 'Community',
      children: [
        { text: 'Contributing', link: '/guide/contributing' },
        { text: 'Community Resources', link: '/guide/community' },
        { text: 'Changelog', link: '/guide/changelog' },
        { text: 'Contact', link: '/guide/contact' },
        { text: 'FAQ', link: '/guide/faq' },
        { text: 'My Apps', link: '/guide/myapp' },
        { text: 'Sponsor', link: '/guide/sponsor' }
      ]
    }
  ]
}

function getZHGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: '什么是两仪', link: '/guide/' },
        { text: '特性与功能', link: '/guide/features' },
        { text: '系统要求', link: '/guide/requirements' }
      ]
    },
    {
      text: '入门指南',
      children: [
        { text: '安装', link: '/guide/getting-started' },
        { text: '首次启动', link: '/guide/first-boot' },
        { text: '基本使用', link: '/guide/basic-usage' }
      ]
    },
    {
      text: '高级用法',
      children: [
        { text: '制作 ROM', link: '/guide/customize-rootfs' },
        { text: '管理文件', link: '/guide/manage-files' },
        { text: '谷歌服务', link: '/guide/gms' },
        { text: 'Android 12 支持', link: '/guide/android-12' },
        { text: '太极集成', link: '/guide/taichi' }
      ]
    },
    {
      text: '技术细节',
      children: [
        { text: '系统架构', link: '/guide/architecture' },
        { text: '启动流程', link: '/guide/boot-process' },
        { text: '应用管理', link: '/guide/app-management' },
        { text: '故障排除', link: '/guide/troubleshooting' }
      ]
    },
    {
      text: '社区',
      children: [
        { text: '贡献指南', link: '/guide/contributing' },
        { text: '社区资源', link: '/guide/community' },
        { text: '更新日志', link: '/guide/changelog' },
        { text: '联系我', link: '/guide/contact' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '其他作品', link: '/guide/myapp' },
        { text: '赞助', link: '/guide/sponsor' }
      ]
    }
  ]
}
