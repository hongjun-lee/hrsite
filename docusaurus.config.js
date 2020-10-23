module.exports = {
  title: 'Nova人力资源管理系统文档',
  tagline: '企业员工全生命周期管理，将信息转化为洞察，帮助企业提高竞争力。',
  url: 'https://hongjun-lee.github.io',
  baseUrl: '/hrsite/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hongjun-lee', // Usually your GitHub org/user name.
  projectName: 'hrsite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '首页',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/hongjun-lee/hrsite/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '风格指南',
              to: 'docs/',
            },
            {
              label: '人力资源文档',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: '人力资源管理平台',
              href: 'http://202.107.77.158',
            },
            {
              label: '考勤管理系统',
              href: 'http://202.107.77.158',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hongjun-lee/hrsite/',
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} Nova人力资源项目组 `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hongjun-lee/hrsite/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hongjun-lee/hrsite/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
