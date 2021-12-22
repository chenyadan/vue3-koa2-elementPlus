/*
 * @Author: xiazhi
 * @Date: 2021-12-22 15:41:22
 * @LastEditors: xiazhi
 * @LastEditTime: 2021-12-22 17:22:54
 * @Descripttion: 文件名称
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from './config/index.js'
console.log('环境变量=>', import.meta.env)
const app = createApp(App)

axios.get(config.mockApi + '/login').then(res => {
  console.log(res)
})

app.use(router).use(ElementPlus).mount('#app')
