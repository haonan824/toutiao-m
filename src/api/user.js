import request from '@/utils/request'

export const login = data => {
  return request({// 点击登录
    method: 'post',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const gaincode = data => {
  return request({// 发送短信
    method: 'get',
    url: `/app/v1_0/sms/codes/${data}`
  })
}
export const getUserInfo = () => {
  return request({ // 获取个人信息
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
export const getuserId = (userId) => {
  return request({ // 获取用户信息
    url: `/app/v1_0/users/${userId}`,
    method: 'get'
  })
}
