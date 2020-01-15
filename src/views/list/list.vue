<template>
  <div @click="$router.push(`/article/${lists.art_id}`)">
    <van-row>
      <van-col span="24" offset="1">
        <p>{{lists.title}}</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="23" offset="1">
        <van-image
          v-for="(item,index) in lists.cover.images" :key='index'
          :v-if="item.length"
          width="100px"
          height="100px"
          fit="cover"
          :src="item"
        />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="7" offset="1">
          <span>{{lists.aut_name}}</span>
      </van-col>
      <van-col span="4" offset="1">
          <span>评论{{lists.comm_count}}</span>
      </van-col>
       <van-col span="10" offset="1">
          <span>{{lists.pubdate | relativeTime}}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    lists: {
      required: true // 必填
    }
  },
  created () {
    // console.log(this.lists)
  }
}
</script>

<style lang="less" scoped>
img{
    border: 5px solid #666;
}
span{
    font-size: 12px;
    color: #999;
}
.van-list{
    .van-cell{
        border-bottom: 2px solid #000;
    }
}
</style>
