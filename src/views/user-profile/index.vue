<template>
   <div class="user-profile">
    <van-nav-bar
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
    />

    <van-cell-group>
      <van-cell is-link title="头像"  @click="onSelectFile">
        <van-image
          class="avatar"
          round
          :src="user.photo"
        />
      </van-cell>
       <input
        type="file"
        hidden
        ref="file"
        @change="onFileChange"
      >
      <van-cell is-link title="昵称"
      :value="user.name"
      @click="isEditNameShow = true"
      />
      <van-cell is-link title="介绍" value="内容" />
      <van-cell is-link title="性别"
      :value="user.gender === 0 ? '男' : '女'"
      @click="isEditGenderShow = true"
      />
       <van-cell
        is-link
        title="生日"
        :value="user.birthday"
        @click="isEditBirthdayShow = true"
      />
    </van-cell-group>
   <van-popup
      v-model="isEditNameShow"
      position="bottom"
    >
      <van-nav-bar
        title="编辑昵称"
        left-text="取消"
        right-text="确定"
        @click-left="isEditNameShow = false"
        @click-right="onUpdateName"
      />
      <div>
        <van-field
          :value="user.name"
          @input="inputName = $event"
          rows="2"
          autosize
          type="textarea"
          maxlength="20"
          placeholder="请输入昵称"
          show-word-limit
        />
      </div>
    </van-popup>
    <van-action-sheet
      v-model="isEditGenderShow"
      :actions="actions"
      cancel-text="取消"
      @cancel="isEditGenderShow = false"
      @select="onGenderSelect"
    />
     <van-popup
      v-model="isEditBirthdayShow"
      position="bottom"
    >
      <van-datetime-picker
        :value="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="isEditBirthdayShow = false"
        @confirm="onUpdateBirthday"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  getUserProfile,
  updateUserPhoto,
  updateUserProfile
} from '../../api/user'
import { ImagePreview } from 'vant'
import moment from 'moment'
export default {
  name: 'UserProfile',
  components: {},
  props: {},
  data () {
    return {
      user: {},
      isEditNameShow: false, // 昵称弹层
      inputName: '', // 昵称
      isEditGenderShow: false,
      actions: [
        // name 会显示出来，value 是我们自己添加的
        { name: '男', value: 1 },
        { name: '女', value: 0 }
      ],
      isEditBirthdayShow: false,
      minDate: new Date(1970, 0, 1),
      maxDate: new Date()
    }
  },
  computed: {
    file () {
      return this.$refs['file']
    },
    currentDate () {
      // 把字符串格式的日期转换为 JavaScript 日期对象，设置给 Vant 日期选择器
      return new Date(this.user.birthday)
    }
  },
  watch: {},
  created () {
    this.loadUserProfile()
  },
  mounted () {},
  methods: {

    async loadUserProfile () {
      try {
        const { data } = await getUserProfile()
        this.user = data.data
      } catch (err) {
        console.log(err)
        this.$toast.fail('获取数据失败')
      }
    },
    onSelectFile () {
      this.file.click()
    },
    onFileChange () {
      // 预览图片
      const fileObj = this.file.files[0]
      const fileData = URL.createObjectURL(fileObj)
      ImagePreview({
        images: [fileData], // 预览的图片列表
        onClose: this.savePhoto
      })
    },
    async savePhoto () {
      await this.$dialog.confirm({
        title: '头像选择',
        message: '确认使用该图片作为头像吗？'
      })
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '保存中...',
        forbidClick: true // 是否禁止背景点击
      })
      // 错误的写法
      // await updateUserPhoto({
      //   photo: 文件对象
      // })
      try {
        // 通过 file-input 获取文件对象
        const fileObj = this.file.files[0]
        // 构造包含文件的表单对象
        const fd = new FormData()
        fd.append('photo', fileObj)
        // 请求提交
        await updateUserPhoto(fd)
        // 更新视图
        this.user.photo = URL.createObjectURL(fileObj)
        // 提示成功
        this.$toast.success('保存成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('保存失败')
      }
    },
    async updateUserProfile (field, value) {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '更新中...',
        forbidClick: true // 是否禁止背景点击
      })
      try {
        await updateUserProfile({
          [field]: value // 注意属性名使用中括号包裹，否则会当做字符串来使用而不是变量
        })
        this.$toast.success('更新成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('更新失败')
      }
    },
    async onUpdateName () {
      // 请求提交表单
      await this.updateUserProfile('name', this.inputName)
      // 更新视图
      this.user.name = this.inputName
      // 关闭弹层
      this.isEditNameShow = false
    },
    async onGenderSelect (data) {
      // 请求提交
      await this.updateUserProfile('gender', data.value)
      // 更新视图展示
      this.user.gender = data.value
      // 关闭上拉菜单
      this.isEditGenderShow = false
    },
    async onUpdateBirthday (value) {
      // 使用 moment 把日期对象格式化为指定格式的字符串
      const date = moment(value).format('YYYY-MM-DD')
      // 请求提交
      await this.updateUserProfile('birthday', date)
      // 更新视图
      this.user.birthday = date
      // 关闭弹层
      this.isEditBirthdayShow = false
    }
  }
}
</script>

<style scoped lang="less">
.user-profile {
  .avatar {
    width: 30px;
    height: 30px;
  }
  /deep/ .van-image-preview__cover {
    top: unset;
    left: 0;
    right: 0;
    bottom: 0;
    .van-nav-bar {
      background: #000;
    }
  }
  .van-popup {
    /deep/ .van-nav-bar {
      background: #fff;
      .van-nav-bar__title {
        color: #323233;
      }
    }
  }
}
</style>
