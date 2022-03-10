module.exports = {
    title: '两仪',
    description: '一个轻量级的 Android 容器',
    themeConfig: {
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
          }
        },
        '/zh/': {
          selectText: '选择语言',
          label: '简体中文',
          editLinkText: '在 GitHub 上编辑此页',
    
          nav: [
            { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
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
        { text: 'Introduction', link: '/guide/' },
        { text: 'Getting started', link: '/guide/getting-started' },
        { text: 'Customizing ROM', link: '/guide/customize-rootfs' },
        { text: 'Manage files', link: '/guide/manage-files' },
        { text: 'Contact me', link: '/guide/contact' },
        { text: 'FAQ', link: '/guide/faq' },
        { text: 'My Apps', link: '/guide/myapp' },
        { text: 'Sponsor', link: '/guide/sponsor' }
      ]
}

function getZHGuideSidebar() {
  return [
        { text: '什么是两仪', link: '/guide/' },
        { text: '开始使用', link: '/guide/getting-started' },
        { text: '制作 ROM', link: '/guide/customize-rootfs' },
        { text: '管理文件', link: '/guide/manage-files' },
        { text: '联系我', link: '/guide/contact' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '其他作品', link: '/guide/myapp' },
        { text: '赞助', link: '/guide/sponsor' }
      ]
}