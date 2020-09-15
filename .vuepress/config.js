const path = require("path");

module.exports = {
  base: "/rwind-storage/",
  dest: path.resolve(__dirname, "../docs"),
  title: "RWIND-STORAGE",
  description: "STORAGE document",
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  themeConfig: {
    nav: [
      { text: "Oracle", link: "/oracle/" },
      { text: "MySQL", link: "/mysql/" },
      { text: "Redis", link: "/redis/" },
      { text: "Kafka", link: "/kafka/" },
      { text: "Github", link: "https://github.com/jason6833/rwind-storage/" },
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: {
      "/oracle/": [
        {
          title: "介绍",
          children: ["./基本/概述"],
        },
      ],
      "/mysql/": [
        {
          title: "数据库基础",
          children: [
            "./数据库基础/1.概述",
            "./数据库基础/2.数据类型",
            "./数据库基础/3.数据表操作",
            "./数据库基础/4.记录操作",
            "./数据库基础/5.查询操作",
            "./数据库基础/6.函数",
            "./数据库基础/7.存储过程",
            "./数据库基础/8.存储引擎",
          ],
        },
        {
          title: "数据库设计",
          children: ["./数据库设计/1.概述"],
        },
      ],
    },
  },
};
