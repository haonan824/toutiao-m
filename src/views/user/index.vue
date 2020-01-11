<template>
  <div class="user-container">
    <van-nav-bar :title="user.name" left-arrow @click-left="$router.back()" />
    <div class="user-info-container">
      <div class="row1">
        <van-image class="col1" fit="cover" round :src="user.photo" />
        <div class="col2">
          <div class="row1">
            <div class="item">
              <div class="count">{{user.art_count}}</div>
              <div class="text">发布</div>
            </div>
            <div class="item">
              <div class="count">{{user.follow_count}}</div>
              <div class="text">关注</div>
            </div>
            <div class="item">
              <div class="count">{{user.fans_count}}</div>
              <div class="text">粉丝</div>
            </div>
            <div class="item">
              <div class="count">{{user.like_count}}</div>
              <div class="text">获赞</div>
            </div>
          </div>
          <div class="action">
            <van-button type="primary" size="small">私信</van-button>
            <van-button type="info" size="small">关注</van-button>
            <!-- <van-button type="default" size="small">编辑资料</van-button> -->
          </div>
        </div>
      </div>
      <div class="intro-wrap">
        <div>
          <span>认证：</span>
          <span>{{user.certi}}</span>
        </div>
        <div>
          <span>简介：</span>
          <span>{{user.intro}}</span>
        </div>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in list" :key="index">
        <lists :lists='item'></lists>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getuserId } from '../../api/user'
import { getIdArticles } from '../../api/article'
import lists from '../list/list'
export default {
  name: 'user-container',
  components: {
    lists
  },
  props: {},
  data () {
    return {
      user: {}, // 用户信息
      list: [], // 文章列表
      loading: false, // 控制上拉加载更多的
      finished: false, // 控制是否加载结束了
      page: 1
    }
  },
  computed: {},
  watch: {},
  created () {
    this.onuserId()
  },
  mounted () {},
  methods: {
    async onLoad () {
      // // 1. 请求获取数据
      const { data } = await getIdArticles(this.$route.params.userId, {
        page: this.page,
        per_page: 20
      })
      // 2. 把数据添加到列表中
      const { results } = data.data
      // console.log(results)
      this.list.push(...results)
      // list []
      // data.data.results []
      // 3. 加载状态结束
      this.loading = false
      // 4. 判断数据是否全部加载完毕
      if (results.length) {
        this.page++
      } else {
        this.finished = true
      }
    },
    async onuserId () {
      const res = await getuserId(this.$route.params.userId)
      // console.log(res.data)
      this.user = res.data.data
    }
  }
}
</script>

<style lang='less' scoped>
.user-container {
  font-size: 14px;
  .user-info-container {
    padding: 12px;
    background-color: #fff;
    margin-bottom: 10px;
    > .row1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .item {
        text-align: center;
        .text {
          font-size: 12px;
        }
      }
      > .col1 {
        width: 80px;
        height: 80px;
      }
      > .col2 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
        height: 80px;
        padding: 0 12px;
        > .row1 {
          display: flex;
          justify-content: space-between;
        }
        .action {
          display: flex;
          justify-content: space-between;
          .van-button {
            width: 45%;
          }
        }
      }
    }
  }
}
</style>
