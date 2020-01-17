<template>
  <div class="article-comments">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <CommentItem :comment='itme' v-for="(itme,index) in list" :key='index'/>
    </van-list>
  </div>
</template>

<script>
import { getComment } from '@/api/comments'
import CommentItem from './comment-list'
export default {
  name: 'ArticleComment',
  components: {
    CommentItem
  },
  props: {
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      list: [], // 评论列表
      loading: false, // 上拉加载更多的 loading
      finished: false // 是否加载结束

    }
  },
  created () {
  },

  methods: {
    async onLoad () {
      // 请求获取数据
      const { data } = await getComment({
        type: 'a', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
        source: this.articleId, // 文章id或评论id
        offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
        limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
      })
      // 将数据添加到列表中
      const { results } = data.data
      this.list.push(...results)
      this.loading = false
      //   console.log(data.data.total_count)
      this.$emit('sum', data.data.total_count)
      if (results.length) {
        this.offset = data.data.last_id
      } else {
        this.finished = true
      }
    }
  }
}
</script>

<style scoped lang="less">
  .publish-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .van-list {
    margin-bottom: 45px;
  }
</style>
