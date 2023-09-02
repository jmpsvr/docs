// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/docs/',
  title: 'Jump Server',
  lang: 'zh-CN',
  description: '优雅而开源的物联网堡垒机',
  head: createHead(),
  themeConfig: {
    repo: 'jmpsvr/jmpsvr',
    docsRepo: 'jmpsvr/docs',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'JiJi' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'jmpsvr, jump, server, docker',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'jmpsvr document' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: 'API 文档',
      link: 'https://docs.jmpsvr.com/api.html',
    },
    {
      text: '指南',
      link: '/guide/',
      items: [
        {
          text: '指南',
          link: '/guide/introduction',
        },
      ],
    },
    {
      text: '社区',
      items: [
        {
          text: 'Telegram',
          link: 'https://t.me/jmpsvr',
        },
        {
          text: 'Discord Chat',
          link: 'https://discord.gg/ehszBDcsbv',
        },
        {
          text: '赞助',
          link: '/other/donate',
        },
      ],
    },

  ];
}

function createSidebar() {
  return {
    '/': [
      {
        text: '指南',
        children: [
          {
            text: '介绍',
            link: '/guide/introduction',
          },
          {
            text: '开始',
            link: '/guide/',
          },
          {
            text: '手动构建镜像',
            link: '/guide/manual',
          },
        ],
      },
      {
        text: '使用',
        children: [
          {
            text: '用户管理',
            link: '/usage/users',
          },
          {
            text: '设备管理',
            link: '/usage/devices',
          },
          {
            text: '动作管理',
            link: '/usage/actions',
          },
        ],
      },
      {
        text: '开发',
        children: [
          {
            text: '设备开发',
            link: '/develop/common',
          },
        ],
      }
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
