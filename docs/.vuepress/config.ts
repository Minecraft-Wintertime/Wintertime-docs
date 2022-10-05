import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import {
    navbarRu,
} from './config/index.js'

export default defineUserConfig({
    lang: 'ru-RU',
    title: 'Minecraft Wintertime',
    description: 'В разработке',


    theme: defaultTheme({
        logo: null,
        repo: 'Minecraft-Wintertime/Wintertime-docs',
        docsBranch: 'master',
        docsDir: 'docs',

        // theme-level locales config
        locales: {
            /**
             * English locale config
             *
             * As the default locale of @vuepress/theme-default is English,
             * we don't need to set all of the locale fields
             */
            '/': {
                // navbar
                navbar: navbarRu,
                // sidebar
                // sidebar: sidebarRu,
                // page meta
                editLinkText: 'Редактировать эту страницу в GitHub',
            }
        },
    })
})