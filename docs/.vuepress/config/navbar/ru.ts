import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarRu: NavbarConfig = [
  {
    text: 'Главная',
    link: '/',
  },
  {
    text: 'Игры',
    children: [
      '/games/README.md',
      '/games/battleroyale.md',
      '/games/bedwars.md',
      '/games/boatrace.md',
      '/games/dropper.md',
      '/games/spleef.md'
    ]
  },
  {
    text: 'Разработчикам',
    children: [
      '/dev/README.md',
      {
        text: 'Skript',
        children: [
          '/dev/skript/README.md',
          '/dev/skript/references.md',
        ],
      },
    ]
  },
  {
    text: 'Discord',
    link: 'https://discord.gg/ude64dMX6y'
  }
]