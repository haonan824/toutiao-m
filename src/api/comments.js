import request from '@/utils/request'
export const getComment = params => { // 获取评论或评论回复
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params
  })
}
export const onComment = data => { // 添加评论或评论回复
  return request({
    method: 'POST',
    url: '/app/v1_0/comments',
    data
  })
}

export function addCommentLike (commentId) { // 对评论或评论回复点赞
  return request({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target: commentId
    }
  })
}

export function deleteCommentLike (commentId) { // 取消对评论或评论回复点赞
  return request({
    method: 'DELETE',
    url: `/app/v1_0/comment/likings/${commentId}`
  })
}
