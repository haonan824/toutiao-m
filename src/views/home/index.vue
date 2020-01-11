<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <van-tabs v-model="active">
      <van-tab :title='item.name' v-for="item in userChannels" :key='item.id' :name='item.id'>
        <ArticleList :channel='item'></ArticleList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { userchannel } from '../../api/article'
import ArticleList from './content/article-list'
export default {
  name: 'home',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0,
      userChannels: [] // 用户频道列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getchannel()
  },
  mounted () {},
  methods: {
    async getchannel () {
      const { data } = await userchannel()
      // console.log(data)
      this.userChannels = data.data.channels
    }
  }
}
</script>

<style lang="less" scoped>
</style>
