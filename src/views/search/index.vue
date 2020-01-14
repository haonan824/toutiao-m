<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/" class="search-form">
      <van-search
        v-model="searchContent"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(searchContent)"
        @input="onisSearch"
        @focus="isResultShow = false"
      />
    </form>
    <!-- /搜索栏 -->
      <!-- 搜索结果 -->

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      v-if='isResultShow'
    >
      <van-cell
        v-for="(article, index) in list"
        :key="index"

      >
      <lists :lists='article'></lists>
      </van-cell>
    </van-list>
    <!-- /搜索结果 -->
    <!-- 联想建议 -->
    <van-cell-group v-else-if="searchContent">
      <van-cell @click="onSearch(itme)" icon="search" v-for="(itme,index) in lenovorecord" :key='index'>
        <div slot="title" v-html="highlight(itme)"></div>
      </van-cell>
    </van-cell-group>
    <!-- /联想建议 -->
    <!-- 历史记录 -->
     <van-cell-group v-else>
    <van-cell title="历史记录">
      <template v-if='isDeleteShow'>
         <span @click="historical = []">全部删除</span>
          &nbsp;&nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </template>
      <van-icon name="delete" @click="isDeleteShow = true" v-else/>
      </van-cell>
      <van-cell @click="onHistoryClick(itme, index)" v-for='(itme,index) in historical' :key="index" :title="itme">
        <van-icon name="close" v-show="isDeleteShow"></van-icon>
      </van-cell>
    </van-cell-group>
    <!-- /历史记录 -->
  </div>
</template>

<script>
import { getSuggestions, getSearch } from '../../api/serach'
import { getItem, setItem } from '@/utils/storage'
import { debounce } from 'lodash'
import lists from '../list/list'
export default {
  name: 'SearchPage',
  components: {
    lists
  },
  props: {},
  data () {
    return {
      searchContent: '', // 搜索内容
      list: [],
      loading: false,
      finished: false,
      isResultShow: false, // 历史显示
      historical: getItem('history') || [], // 历史记录
      lenovorecord: [], // 联想记录
      page: 1, // 页码
      perPage: 20, // 每页大小
      isDeleteShow: false // 删除历史记录的显示状态
    }
  },
  computed: {},
  watch: {
    historical (val) {
      setItem('history', val)
    }
  },
  created () {},
  mounted () {},
  methods: {
    highlight (str) {
      const reg = new RegExp(this.searchContent, 'gi')
      return str.replace(reg, `<span style="color: #3296fa">${this.searchContent}</span>`)
    },
    onisSearch: debounce(async function () {
      if (!this.searchContent) {
        // if (this.searchContent === '') {
        //   this.isResultShow = false
        // }
        return
      }
      const res = await getSuggestions(this.searchContent)
      this.lenovorecord = res.data.data.options
    }, 200),
    onSearch (q) {
      this.list = []
      this.searchContent = q
      const index = this.historical.indexOf(q)
      if (index !== -1) {
        this.historical.splice(index, 1)
      }
      this.historical.unshift(q)
      this.isResultShow = true
    },
    // onCancel () {
    //   console.log('onCancel')
    // },
    async onLoad () {
      // 1. 请求获取数据
      const { data } = await getSearch({
        page: this.page, // 页码
        per_page: this.perPage, // 每页大小
        q: this.searchContent // 查询参数
      })
      // 2. 将数据添加到列表
      const { results } = data.data
      this.list.push(...results)
      // 3. 关闭本次的 loading
      this.loading = false
      // 4. 判断是否还有数据
      if (results.length) {
        this.page++ // 更新获取下一页数据的页码
      } else {
        this.finished = true // 没有数据了，结束关闭加载更多
      }
      // 5. 模板绑定
    },
    onHistoryClick (item, index) {
      // 如果是删除状态，则执行删除操作
      if (this.isDeleteShow) {
        this.historical.splice(index, 1)
      } else {
        // 否则执行搜索操作
        this.onSearch(item)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.search-container {
  padding-top: 54px;
  // 让搜索栏固定在顶部
  .search-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .van-search__action {
    color: #fff;
  }
}
</style>
