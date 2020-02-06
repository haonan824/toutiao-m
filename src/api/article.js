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
export const getArticleById = articleId => { // 文章详细
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}

export const addCollect = target => { // 收藏文章
  return request({
    method: 'POST',
    url: '/app/v1_0/article/collections',
    data: {
      target
    }
  })
}

export const deleteCollect = target => { // 取消收藏文章
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/collections/${target}`
  })
}
export const deletelike = target => { // 取消点赞文章
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/likings/${target}`
  })
}
export const addlike = target => { // 取消点赞文章
  return request({
    method: 'POST',
    url: '/app/v1_0/article/likings',
    data: { target }
  })
}
/**
 * 获取当前用户的文章列表
 */
export const getCurrentUserArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/articles',
    params
  })
}

/**
 * 获取用户的收藏列表
 */
export const getCollectArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/article/collections',
    params
  })
}

/**
 * 获取用户的历史记录
 */
export const getHistoryArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/histories',
    params
  })
}
