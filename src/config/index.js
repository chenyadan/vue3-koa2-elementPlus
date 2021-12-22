/*
 * @Author: xiazhi
 * @Date: 2021-12-22 17:13:43
 * @LastEditors: xiazhi
 * @LastEditTime: 2021-12-22 17:24:21
 * @Descripttion: 环境配置变量
 */
let env = import.meta.env.MODE || 'prod'

let EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi:'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env]
}
