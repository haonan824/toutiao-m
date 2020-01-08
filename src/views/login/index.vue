<template>
  <div class="login">
    <van-nav-bar title="登录/注册">
      <van-icon name="cross" slot="left"/>
    </van-nav-bar>
    <ValidationObserver>
      <ValidationProvider name="手机号" rules="required" v-slot="{ errors }">
      <van-field v-model="user.mobile" clearable left-icon="graphic" placeholder="请输入手机号"></van-field>
      </ValidationProvider>
      <van-field v-model="user.code" center left-icon='smile-comment-o' placeholder="请输入短信验证码">
      <van-count-down v-if="phoneCode" @finish='phoneCode=false' slot="button" :time="1000 * 60" format="ss s"/>
      <van-button v-else @click="onclick" slot="button" size="small" round type="primary">发送验证码</van-button>
      </van-field>
    </ValidationObserver>
    <div class="butlogindiv">
      <van-button class="butlogin" @click="register" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, gaincode } from '@/api/user.js'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 短信验证码
      },
      phoneCode: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async register () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        const res = await login(this.user)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败')
      }
    },
    async onclick () {
      try {
        this.phoneCode = true
        await gaincode(this.user.mobile)
        this.$toast.success('获取成功,请等候')
      } catch (err) {
        // console.log('获取失败', err)
        this.phoneCode = false
        this.$toast.fail('获取失败，请勿频繁操作')
      }
    }
  }
}
</script>

<style>
.butlogindiv{
  padding: 20px;
}
.butlogin{
  background-color: #6DB4FA;
  font-size: 15px;
  height:44px;
  width: 100%;
}
</style>
