import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import ElementPlus from 'unplugin-element-plus/vite'
import path from 'node:path'

import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

console.log(((import.meta.url)), loadEnv)
// console.log((new URL('./src', import.meta.url)))

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  command
  const rootUrl = 'src/views/' + process.env.ENTRY
  // console.log("=======", path.resolve(__dirname, rootUrl, 'main.js'))
  return  {
    root: path.resolve(__dirname, rootUrl), //项目根目录（index.html 文件所在的位置） 默认： process.cwd()
    base: './', //  开发或生产环境服务的公共基础路径：默认'/'   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）

    publicDir: path.resolve(__dirname, `./public`), //默认'public'  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)
    // assetsInclude: resolve(__dirname, './src/assets'), // 静态资源会处理

    build: {
        outDir: `${__dirname}/dist/${rootUrl}`, // 构建输出目录
        minify: true, // 是否压缩代码
        sourcemap: true, // 是否生成 source map
        rollupOptions: {
          input: {
              index: path.resolve(__dirname, rootUrl, 'index.html'),
          },
        },
        assetInclude: ['./src/lib/rem.js']
    },
    /******配置开发服务器******/
    server: {
      port: 8888,// 端口号
      open: true,// 启动时自动在浏览器打开
      // https: true,// 是否开启 https
      host: true, // 监听所有地址
      cors: false, //为开发服务器配置 CORS
      //配置自定义代理规则
      proxy: {
          '^/api': {
                target: import.meta.url,
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
          } 
      },
    },
    plugins: [
      vue(),
      vueJsx(), // options 参数将传给 @vue/babel-plugin-jsx
      visualizer(),
      ElementPlus({
        // options
      }),
    ],
    css: {
      // 预处理器配置项
      postcss: { // ⚠️关键代码
        plugins: [
            postCssPxToRem({ // 自适应，px>rem转换
                rootValue: 16, // 1rem的大小
                propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            }),
            autoprefixer({ // 自动添加前缀
                overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                    //'last 2 versions', // 所有主流浏览器最近2个版本
                ],
                grid: true
            })
        ]
    },

    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },
  } 
})
