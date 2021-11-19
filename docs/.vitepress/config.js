module.exports = {
  title: 'doc template',
  base: "/", // 项目的根路径
  description: '基于vitepress的组件示例文档模板',
  keywords: 'vitepress 组件 模板',
  themeConfig: {
    sidebar: {
      // 侧边栏
      "/guide/": [
        {
          text: "介绍",
          children: [
            { text: "VitePress", link: "/guide/about" },
            { text: "开始使用", link: "/guide/start" },
            { text: "文件配置", link: "/guide/configuration" },
            { text: "路径配置", link: "/guide/path" },
          ],
        },
        {
          text: '组件',
          children: [
            { text: "传送门", link: "/components/" }
          ],
        }
      ],
      "/components/": [
        {
          text: '组件',
          children: [
            { text: '自定义头', link: '/components/customHead'},
            { text: '按钮', link: '/components/button'},
          ]
        }
      ]
    },
    nav: [
      // 顶部右侧导航栏
      { 
        text: "介绍", 
        link: "/guide/" 
      },
      // { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "组件",
        link: "/components/customHead",
      },
      {
        text: "vitepress",
        link: "https://vitepress.vuejs.org/",
      },
    ],
  },
  markdown: {
    lineNumbers: true, //显示行号
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}