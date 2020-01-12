<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item,index) in list" :key="index">
            <!-- {{item.title}} -->
          <lists :lists='item'></lists>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '../../../api/article'
import lists from '../../list/list'
export default {
  name: 'ArticleList',
  components: {
    lists
  },
  props: {
    // 频道对象，父组件提供
    channel: {
      type: Object, // 必须是对象
      required: true// 必填
    }

  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      isLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onRefresh () {
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道id
        timestamp: Date.now(), // 时间戳
        with_top: 1 // 页数
      })
      const { results } = data.data
      this.list.unshift(...results)
      this.isLoading = false
      this.$toast(`更新了${results.length}条数据`)
    },
    async onLoad () {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false

      //     // 数据全部加载完成
      //     if (this.list.length >= 40) {
      //       this.finished = true
      //     }
      //   }, 500)
      // 1.获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道id
        timestamp: this.timestamp || Date.now(), // 时间戳
        with_top: 1 // 页数
      })

      // 2. 把数据添加到列表中
      const { results } = data.data
      this.list.push(...results)
      //   console.log(data.data)

      // 3. 加载状态结束
      this.loading = false
      // 4. 判断数据是否全部加载完毕
      if (results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        // 没有数据了
        this.finished = true
      }
    }
  }
}
</script>

<style scoped></style>
