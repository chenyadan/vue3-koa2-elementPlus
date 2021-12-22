/*
 * @Author: xiazhi
 * @Date: 2021-12-22 15:41:22
 * @LastEditors: xiazhi
 * @LastEditTime: 2021-12-22 16:01:45
 * @Descripttion: 文件名称
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    proxy: {
    }
  },
  plugins: [vue()]
})
