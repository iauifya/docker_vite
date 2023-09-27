import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

/**
 * @param newFilename {string}
 * @returns {import('vite').Plugin}
 */
const renameIndexPlugin = newFilename => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
    },
  }
}


export default ({ mode, command }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    // console.log('process.env.VITE_API_ENV ', process.env.VITE_API_ENV );
    return defineConfig({
        base: process.env.VITE_BASE_URL, // 專案路徑
        plugins: [
          vue(),
          renameIndexPlugin('index.asp'),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            devSourcemap: true,
        },
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                  drop_console: command === "build" && process.env.VITE_API_ENV === "prod",
                  drop_debugger: command === "build" && process.env.VITE_API_ENV === "prod",
                },
            },
            // outDir:'public',   //指定输出路径
            // assetsDir: "wap", //指定生成静态资源的存放路径
        },
        define: {
            'process.env': {},
        },
    })
}
