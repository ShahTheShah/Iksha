import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { global_scss } from './config.js';

// Custom Tasks
import font_generator from './kernel/tasks/font_generator.js';
import sprite_generator from './kernel/tasks/sprite_generator.js';


/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        sveltekit(),
        sprite_generator({
            folderIn: path.resolve('./static/icons'),
            // dest: path.resolve('./static/icons'),
            fileName: 'sprite.svg',
            log: true
        }),
        font_generator({
            fontsDir: path.resolve('./static/fonts'),
            fontsStyleInlcude: path.resolve(`./src/lib/vendors/_fonts.scss`)
        })
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: global_scss,
            },
        },
    },
    build: {
        minify: true,
        cssMinify: true,
    }
});
