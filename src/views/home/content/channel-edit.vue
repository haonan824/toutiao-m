<template>
  <div class="channel-edit">
    <van-cell title="我的频道" :border="false">
      <van-button size="mini" round type="danger" @click="open=!open" plain>{{ open ? "完成" : "编辑" }}</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="(channel,index) in userChannels" :key="channel.id"  @click="removeChannel(index)">
          <span slot="text" class="text" :class="{active:index === active}">
              {{channel.name}}
          </span>
        <van-icon v-show="open && index !== 0" slot="icon" name="close" />
      </van-grid-item>
    </van-grid>
    <van-cell title="推荐频道" :border="false" />
    <van-grid :gutter="10">
      <van-grid-item v-for="time in remainingChannels" :key="time.id" :text="time.name" @click="clickChannel(time)"/>
    </van-grid>
  </div>
</template>

<script>
import { getAllChannel } from '@/api/article.js'
import { setItem } from '@/utils/storage'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    userChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [], // 我的频道
      open: false
    }
  },
  computed: {
    remainingChannels () {
      const { allChannels, userChannels } = this
      const channels = []
      allChannels.forEach(time => {
        if (!userChannels.find(a => a.id === time.id)) {
          channels.push(time)
        }
      })
      return channels
    }
  },

  watch: {
    userChannels (newval) {
      setItem('storage', newval)
    }
  },
  created () {
    this.onAll()
  },
  mounted () {},
  methods: {
    removeChannel (index) {
      if (this.open && index !== 0) {
        this.userChannels.splice(index, 1)
      } else {
        // console.log(index)
        this.$emit('switch', index)
      }
    },
    clickChannel (time) {
      this.userChannels.push(time)
    },
    async onAll () {
      const { data } = await getAllChannel()
      //   console.log(data.data.channels)
      this.allChannels = data.data.channels
    }
  }
}
</script>

<style lang="less" scoped>
 /deep/ .van-grid-item__icon-wrapper{
position: absolute;
top: -8px;
right: -8px;
font-size: 16px;
}
.van-grid-item__text, .text {
      font-size: 14px;
      color: #222;
    }
.active {
    color: red;
}
</style>
