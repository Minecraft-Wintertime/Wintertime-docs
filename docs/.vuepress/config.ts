import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import {
    navbarRu,
    sidebarRu,
} from './config/index.js'

export default defineUserConfig({
    lang: 'ru-RU',
    title: 'Minecraft Wintertime',
    description: 'В разработке',


    theme: defaultTheme({
        logo: null,
        repo: null,
        docsRepo: 'Minecraft-Wintertime/Wintertime-docs',
        docsBranch: 'master',
        docsDir: 'docs',

        // theme-level locales config
        locales: {
            '/': {
                // navbar
                navbar: navbarRu,
                // sidebar
                sidebar: sidebarRu,
                // page meta
                editLinkText: 'Редактировать эту страницу в GitHub',
                contributorsText: 'Авторы',
                lastUpdatedText: 'Последнее изменение'
            }
        },
    })
})