import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { messages } from 'vee-validate/dist/locale/zh_CN.json'

import * as rules from 'vee-validate/dist/rules'
Vue.component('ValidationProvider', ValidationProvider) // 保单个
Vue.component('ValidationObserver', ValidationObserver) // 包表单

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
