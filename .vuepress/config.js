const path = require('path')

module.exports = {
  base: '/rwind-storage/',
  dest: path.resolve(__dirname, '../docs'),
  title: 'RWIND-STORAGE',
  description: 'STORAGE document',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Oracle', link: '/oracle/' },
      { text: 'MySQL', link: '/mysql/' },
      { text: 'Redis', link: '/redis/' },
      { text: 'Github', link: 'https://github.com/jason6833/rwind-storage/' }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: {
      "/oracle/": [
        {
          title: "介绍",
          children: [
            "./基本/概述"
          ]
        }
      ]
    }
  }
}
