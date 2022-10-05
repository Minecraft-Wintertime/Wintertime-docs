import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarRu: NavbarConfig = [
  {
    text: 'Игры',
    link: '/guide/',
  },
  {
    text: 'Разработчикам',
    children: [
      {
        text: 'VuePress',
        children: [
          '/dev/components.md',
          '/dev/plugin-api.md',
          '/dev/theme-api.md',
          '/dev/client-api.md',
          '/dev/node-api.md',
        ],
      },
    ]
  }
]