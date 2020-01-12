<template>
  <div class="login">
    <van-nav-bar title="登录/注册">
      <van-icon name="cross"  @click="$router.push('/')" slot="left"/>
    </van-nav-bar>
    <ValidationObserver ref="form">
      <ValidationProvider name="手机号" rules="required|mobile" immediate>
      <van-field v-model="user.mobile" clearable left-icon="graphic" placeholder="请输入手机号"></van-field>
      </ValidationProvider>
      <ValidationProvider name="验证码" rules="required|code" immediate>
      <van-field v-model="user.code" center left-icon='smile-comment-o' placeholder="请输入短信验证码">
      <van-count-down v-if="phoneCode" @finish='phoneCode=false' slot="button" :time="1000 * 60" format="ss s"/>
      <van-button v-else @click="onclick" slot="button" size="small" round type="primary">发送验证码</van-button>
      </van-field>
      </ValidationProvider>
    </ValidationObserver>
    <div class="butlogindiv">
      <van-button class="butlogin" @click="register" type="info">登录</van-button>
    </div>
    <div class="img">
      <img src="../../assets/2020-01-08_195351.png" alt="">
    </div>
    <p>微信关注公众号:楠欲上青天<span>有惊喜</span></p>
  </div>
</template>

<script>
import { login, gaincode } from '@/api/user.js'
import { validate } from 'vee-validate'
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
    async register () { // 验证手机号及验证码
      const succeed = await this.$refs.form.validate()
      // console.log(succeed)
      if (!succeed) {
        const errors = this.$refs.form.errors
        for (let key in errors) {
          const tiem = errors[key]
          // console.log(tiem)
          if (tiem[0]) {
            this.$toast(tiem[0])
            return
          }
        }
      }
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        const res = await login(this.user)// 登录
        // console.log(res)
        this.$store.commit('settoken', res.data.data)
        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (err) {
        // console.log('登录失败', err)
        this.$toast.fail('登录失败')
      }
    },
    async onclick () {
      try {
        const { mobile } = this.user
        const verification = await validate(mobile, 'required|mobile', {
          name: '手机号'
        })// 验证手机号
        // console.log(verification.valid)
        if (!verification.valid) {
          this.$toast(verification.errors[0])
          return
        }
        this.phoneCode = true
        await gaincode(mobile)// 验证码
        this.$toast.success('获取成功,请等候')
      } catch (err) {
        // console.log('获取失败', err)
        this.phoneCode = false
        if (err.response.status === 429) {
          this.$toast('请勿频繁发送')
          return
        }
        this.$toast('发送失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.butlogindiv{
  padding: 20px;
  .butlogin{
  background-color: #6DB4FA;
  font-size: 15px;
  height:44px;
  width: 100%;
}
}
.img{
  width: 100%;
  padding-top:130px;
  img{
    width: 100%;
    // height: 100%;
  }
}
p{
  margin-top: 80px;
  text-align: center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  color: #666;
  span{
    color:tomato;
  }
}
</style>
