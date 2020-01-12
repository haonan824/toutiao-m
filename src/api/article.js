import request from '@/utils/request'
export const userchannel = () => {
  return request({ // 频道列表
    url: '/app/v1_0/user/channels',
    method: 'get'
  })
}
export const getIdArticles = (userId, params) => {
  return request({ // 获取指定用户文章列表
    url: `/app/v1_0/users/${userId}/articles`,
    method: 'get',
    params
  })
}
export const getArticles = (params) => {
  return request({ // 获取频道文章列表
    url: '/app/v1_1/articles',
    method: 'get',
    params
  })
}
export const getAllChannel = () => {
  return request({ // 获取全部频道
    url: '/app/v1_0/channels',
    method: 'get'
  })
}
