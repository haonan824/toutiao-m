<template>
  <div class="home">
    <van-nav-bar fixed>
      <van-button @click="$router.push('/search')" round icon='search' slot="title" type="info">搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-icon slot="nav-right" name="wap-nav" class="wap-nav" @click="isshow = true" />
      <van-tab :title="item.name" v-for="item in userChannels" :key="item.id">
        <ArticleList :channel="item"></ArticleList>
      </van-tab>
    </van-tabs>
    <van-popup
      v-model="isshow"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
    >
    <ChannelEdit :user-channels="userChannels"
    :active="active"
    @switch="onChannelSwitch"/>
    </van-popup>
  </div>
</template>

<script>
import { userchannel } from '../../api/article'
import ArticleList from './content/article-list'
import ChannelEdit from './content/channel-edit'
import { getItem } from '@/utils/storage'
export default {
  name: 'home',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0,
      userChannels: [], // 用户频道列表
      isshow: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getchannel()
  },
  mounted () {},
  methods: {
    onChannelSwitch (index) {
      this.active = index
      this.isshow = false
    },
    async getchannel () {
      let channels = []
      const localUserChannles = getItem('storage')
      if (localUserChannles) {
        channels = localUserChannles
      } else {
        const { data } = await userchannel()
        // console.log(data)
        channels = data.data.channels
      }
      this.userChannels = channels
    }
  }
}
</script>

<style lang="less" scoped>
.van-button{
  width: 220px;
  background:#5babfb;
}
/deep/ .van-tabs__wrap {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 2;
}
.home {
  .van-tabs {
    padding-top: 90px;
    padding-bottom: 50px;
  }
}
.wap-nav {
  position: fixed;
  right: 0;
  line-height: 44px;
  background: #fff;
  opacity: 0.8;
}
.channel-edit{
  padding-top: 45px;
}
</style>
