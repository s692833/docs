import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repository?.endsWith('.github.io')
const base = process.env.GITHUB_REPOSITORY
  ? isUserOrOrgPage
    ? '/'
    : `/${repository}/`
  : '/'

export default defineConfig({
  title: '我的技術筆記',
  description: '前端與後端學習筆記',
  base,
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '前端筆記', link: '/frontend/javascript-basics' },
      { text: '後端筆記', link: '/backend/nodejs-basics' }
    ],
    sidebar: [
      {
        text: '前端筆記',
        items: [
          { text: 'JavaScript 基礎', link: '/frontend/javascript-basics' }
        ]
      },
      {
        text: '後端筆記',
        items: [
          { text: 'Node.js 基礎', link: '/backend/nodejs-basics' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
