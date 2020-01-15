<template>
  <div class="post-comment">
    <van-field
      class="post-field"
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="优质评论将会被优先展示"
      show-word-limit
    />
    <van-button class="post-btn" type="primary" @click="onComments" size="small">发布</van-button>
  </div>
</template>

<script>
import { onComment } from '../../../api/comments'
import eventBus from '../../../utils/eventBus'
export default {
  name: 'PostComment',
  components: {},
  props: {
    articleId: {
      type: [Object, Number, String],
      required: true
    }
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onComments () {
      try {
        const res = await onComment({
          target: this.articleId,
          content: this.message
        })
        eventBus.$emit('iscomment')
        console.log(res)
        this.message = ''
      } catch (err) {
        console.log(err)
        this.$toast.fail('评论失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.post-comment {
  display: flex;
  padding: 15px;
  align-items: center;
  .post-field {
    background: #f5f7f9;
  }
  .post-btn {
    margin-left: 10px;
  }
}
</style>
