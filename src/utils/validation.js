import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { messages } from 'vee-validate/dist/locale/zh_CN.json'

import * as rules from 'vee-validate/dist/rules'
Vue.component('ValidationProvider', ValidationProvider) // 包单个
Vue.component('ValidationObserver', ValidationObserver) // 包整个表单

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

extend('mobile', {
  validate: value => {
    return /^1(3|5|6|7|8|9)\d{9}$/.test(value)
  },
  message: '手机号码格式错误'
})

extend('code', {
  validate: value => {
    return /^\d{6}$/.test(value)
  },
  message: '验证码格式错误'
})
