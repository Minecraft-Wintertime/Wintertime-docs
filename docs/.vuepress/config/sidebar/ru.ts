import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
    '/games/': [
        {
            text: 'Мини-игры',
            children: [
                '/games/battleroyale.md',
                '/games/bedwars.md',
                '/games/boatrace.md',
                '/games/dropper.md',
                '/games/spleef.md',
            ],
        },
    ],
    '/guide/': [
        {
            text: 'Введение',
            children: [
                '/guide/README.md',
                '/guide/signup.md',
            ],
        },
    ],
    '/dev/': [
        '/dev/README.md',
        {
            text: 'Skript',
            collapsible: false,
            children: [
                '/dev/skript/README.md',
                '/dev/skript/references.md',
            ],
        },
    ],
}