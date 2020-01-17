<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <van-nav-bar title="文章详情" left-arrow fixed @click-left="$router.back()"></van-nav-bar>
    <!-- /导航栏 -->

    <!-- 加载中 -->
    <van-loading class="loading" color="#1989fa" vertical v-if="loader">
      <slot>加载中...</slot>
    </van-loading>
    <!-- /加载中 -->

    <div class="detail" v-else-if="article.title">
      <h3 class="title">{{article.title}}</h3>
      <div class="author-wrap">
        <div class="base-info">
          <van-image class="avatar" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="text">
            <p class="name">{{article.aut_name}}</p>
            <p class="time">{{article.pubdate | relativeTime}}</p>
          </div>
        </div>
        <van-button
          v-if="!user || article.aut_id !== user.id"
          :loading="isFollowLoading"
          @click="attention"
          class="follow-btn"
          :type="article.is_followed ? 'default' : 'info'"
          size="small"
          round
        >{{ article.is_followed ? '已关注' : '+ 关注' }}</van-button>
      </div>
      <div class="markdown-body" v-html="article.content"></div>
          <comment ref="article-comment"
          :article-id="articleId" @click-reply="onReplyShow"/>
    </div>
    <!-- 加载失败提示 -->
    <div class="error" v-else>
      <img src="../../assets/no-network.png" alt="no-network" />
      <p class="text">亲，网络不给力哦~</p>
      <van-button class="btn" type="default" size="small" @click="getArticle">点击重试</van-button>
    </div>
    <!-- /加载失败提示 -->

    <!-- 底部区域 -->
    <div class="footer">
      <van-button
        class="write-btn"
        type="default"
        round
        size="small"
        @click="isPostShow = true"
      >写评论</van-button>
      <van-icon class="comment-icon" name="comment-o" :info="9" />
      <van-icon color="orange"
      :name="article.is_collected ? 'star' : 'star-o'"
       @click="onCollect" />
      <van-icon
        color="#e5645f"
        :name="article.attitude === 1 ? 'good-job' : 'good-job-o'"
        @click="onlike"
      />
      <van-icon class="share-icon" name="share" />
    </div>
    <!-- /底部区域 -->
      <van-popup
      v-model="isPostShow"
      position="bottom">
      <postcomment
      v-model="postMessage"
      @click-post="onPost" />
    </van-popup>
    <van-popup
      v-model="isReplyShow"
      position="bottom"
      style="height: 90%"
    >
      <commentreply :comment="currentComment" />
    </van-popup>
  </div>
</template>

<script>
import {
  getArticleById,
  addCollect,
  deleteCollect,
  deletelike,
  addlike
} from '../../api/article'
import { addFollow, deleteFollow } from '../../api/user'
import comment from '../article/components/comment'
import postcomment from '../article/components/post-comment'
import { mapState } from 'vuex'
import { onComment } from '../../api/comments.js'
import commentreply from '../article/components/comment-reply'
export default {
  name: 'ArticlePage',
  components: {
    comment,
    postcomment,
    commentreply
  },
  props: {
    // 路由参数会映射到这里
    articleId: {
      type: [Object, Number, String],
      required: true
    }
  },
  data () {
    return {
      article: {},
      loader: true,
      isFollowLoading: false,
      isPostShow: false, // 发布评论的弹层显示状态
      postMessage: '', // 发布评论内容
      isReplyShow: false, // 展示评论回复弹层
      currentComment: {} // 点击回复的那个评论项
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    // console.log(this.articleId)
    this.getArticle()
  },
  mounted () {},
  methods: {
    async getArticle () {
      const res = await getArticleById(this.articleId)
      // console.log(res.data)
      this.article = res.data.data
      this.loader = false
    },
    async onCollect () {
      console.log(this.article.is_collected)
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '操作中...',
        forbidClick: true // 是否禁止背景点击
      })
      try {
        console.log(this.article)
        // 如果已收藏，则取消收藏
        if (this.article.is_collected) {
          // console.log(this.article.is_collected)
          await deleteCollect(this.articleId)
          this.article.is_collected = false
          this.$toast.success('取消收藏')
        } else {
          // 添加收藏
          await addCollect(this.articleId)
          this.article.is_collected = true
          this.$toast.success('收藏成功')
        }
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
    },
    async onlike () {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '操作中...',
        forbidClick: true // 是否禁止背景点击
      })
      try {
        // 如果已点赞，则取消点赞
        if (this.article.attitude === 1) {
          await deletelike(this.articleId)
          this.article.attitude = -1
          this.$toast.success('取消点赞')
        } else {
          // 添加点赞
          await addlike(this.articleId)
          this.article.attitude = 1
          this.$toast.success('点赞成功')
        }
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
    },
    async attention () {
      this.isFollowLoading = true
      try {
        // 如果已关注，则取消关注
        const authorId = this.article.aut_id
        if (this.article.is_followed) {
          await deleteFollow(authorId)
        } else {
          // 否则添加关注
          await addFollow(authorId)
        }

        // 更新视图
        this.article.is_followed = !this.article.is_followed
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
      this.isFollowLoading = false
    },
    async onPost () {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '发布中...',
        forbidClick: true // 是否禁止背景点击
      })
      try {
        const { data } = await onComment({
          target: this.articleId,
          content: this.postMessage
        })
        // 清空文本框
        this.postMessage = ''
        // 关闭弹层
        this.isPostShow = false
        // 将数据添加到列表顶部
        this.$refs['article-comment'].list.unshift(data.data.new_obj)
        this.$toast.success('发布成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('发布失败')
      }
    },
    onReplyShow (comment) {
      // 将点击回复所在的评论对象记录起来
      this.currentComment = comment
      // 展示回复的弹层
      this.isReplyShow = true
    }
  }
}
</script>

<style scoped lang="less">
@import "./github-markdown.css";
.article-container {
  padding: 46px 20px 100px;
  background: #fff;
  .loading {
    padding-top: 100px;
    text-align: center;
  }
  .detail {
    .title {
      margin: 0;
      padding-top: 24px;
      font-size: 20px;
      color: #3a3a3a;
    }
    .author-wrap {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .base-info {
        display: flex;
        align-items: center;
        .avatar {
          width: 35px;
          height: 35px;
          margin-right: 5px;
        }
        .text {
          .name {
            margin: 0;
            font-size: 12px;
          }
          .time {
            margin: 0;
            font-size: 10px;
            color: #999;
          }
        }
      }
      .follow-btn {
        width: 85px;
      }
    }
  }
  .error {
    padding-top: 100px;
    text-align: center;
    .text {
      font-size: 15px;
    }
    .btn {
      width: 30%;
    }
  }
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;
    .write-btn {
      width: 160px;
    }
    .van-icon {
      font-size: 20px;
    }
    .comment-icon {
      bottom: -2px;
    }
    .share-icon {
      bottom: -2px;
    }
  }
}
</style>
