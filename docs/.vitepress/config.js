module.exports = {
    title: '两仪',
    description: '一个轻量级的 Android 容器',
    themeConfig: {
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',

      nav: [
        { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
        {
          text: '下载',
          link: 'https://github.com/vuejs/vitepress/releases'
        }
      ],
  
      sidebar: {
        '/guide/': getGuideSidebar(),
        '/': getGuideSidebar()
      }
    }
  }

function getGuideSidebar() {
  return [
        { text: '什么是两仪', link: '/guide/' },
        { text: '开始使用', link: '/guide/getting-started' },
        { text: '联系我', link: '/guide/contact' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '赞助', link: '/guide/sponsor' }
      ]
}
