<template>
  <van-cell class="comment-item">
    <van-image
      slot="icon"
      class="avatar"
      round
      :src="comment.aut_photo"
    />
    <span style="color: #466b9d;" slot="title">{{ comment.aut_name }}</span>
    <div slot="label">
      <p style="color: #363636;">{{ comment.content }}</p>
      <p>
        <span style="margin-right: 10px;">{{ comment.pubdate | relativeTime }}</span>
        <van-button
          size="mini"
          type="default"
          @click="$emit('click-reply', comment)"
        >回复 {{ comment.reply_count }}</van-button>
      </p>
    </div>
    <div slot="right-icon" class="like-container" @click="onlike">
      <van-icon
        :color="comment.is_liking ? '#e5645f' : ''"
        :name="comment.is_liking ? 'good-job' : 'good-job-o'"
      />
      <span>{{ comment.like_count ? comment.like_count : '赞' }}</span>
    </div>
  </van-cell>
</template>

<script>
import { addCommentLike, deleteCommentLike } from '../../../api/comments'
export default {
  name: 'CommentItem',
  components: {},
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
  },
  created () {
    // console.log(this.comment)
  },
  methods: {
    async onlike () {
      if (this.comment.is_liking) {
        // console.log(this.comment.is_liking)
        const res = await deleteCommentLike(this.comment.com_id.toString())
        this.comment.is_liking = false
        this.comment.like_count--
        console.log(res)
      } else {
        // console.log(this.comment.is_liking)
        const res = await addCommentLike(this.comment.com_id.toString())
        this.comment.is_liking = true
        this.comment.like_count++
        console.log(res)
      }
    }
  }
}
</script>

<style scoped lang="less">
.comment-item {
  display: flex;
  align-items: flex-start;
  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .like-container {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
