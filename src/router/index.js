/*
 * @Author: xiazhi
 * @Date: 2021-12-22 16:12:37
 * @LastEditors: xiazhi
 * @LastEditTime: 2021-12-22 16:23:37
 * @Descripttion: 文件名称
 */
import { createRouter, createMemoryHistory } from "vue-router";
import Home from './../components/Home.vue'
import Welcome from './../components/welcome.vue'
import Login from './../components/login.vue'
const routes = [{
  name: 'home',
  path: '/',
  component: Home,
  redirect: '/welcome',
  children: [{
    name: 'welcome',
    path: '/welcome',
    component: Welcome,
  },{
    name: 'login',
    path: '/login',
    component: Login,
  }]
}]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router