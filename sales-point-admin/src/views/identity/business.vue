<template>
  <div class="sendContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布</span>
      </div>
      <div class="text item">
        <el-steps style="margin: 0 auto" :active="active" finish-status="success">
          <el-step title="身份认证"></el-step>
          <el-step title="企业信息认证"></el-step>
          <el-step title="认证完成"></el-step>
        </el-steps>
        <div style="display:flex;justify-content: space-evenly;margin-top: 60px">
          <div>
            <div style="display:flex;" class="choose">
              <i class="el-icon-s-custom" style="font-size: 40px;color: #cccccc"></i>
              <div>
                <div>企业管理员实名认证</div>
                <div>进行企业实名认证前，请先扫码完成企业管理员实名认</div>
              </div>
            </div>
            <div class="choose">企业管理员姓名：<span class="spanColor">未实名/小许</span> </div>
            <div class="choose">企业管理员状态：<span class="spanColor">未激活（请扫描右侧二维码进行管理员个人认证）/已通过认证</span></div>
            <div  class="choose">
              企业管理员身份：
              <el-radio v-model="radio" label="1">企业法定代表人</el-radio>
              <el-radio v-model="radio" label="2">企业授权代理人</el-radio>
            </div>
          </div>
          <div style="">
            <div style="width: 200px;height: 200px;background: red;margin:0 auto;">
              <img src="" alt="">
            </div>
            <div class="saoMa">请用手机扫码进行企业管理员实名认证</div>
          </div>
        </div>
          <div class="next" @click="next">下一步</div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'send',
  data() {
    return {
      active: 0,
      radio: '2',
      checked: false,
      radio1: '支付宝'
    }
  },

  methods: {
    next() {
      this.$router.push('./qiYe')
    }
  }
}
</script>

<style scoped lang="scss">
.sendContent {
  margin: 0 auto;

}

.text {
  font-size: 14px;
}

.item {
  width: 800px;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  height: 650px;
}


.button {
  margin-right: 20px;
  /*border: 1px solid red;*/
}
.spanColor{
  color: red;
}
.choose {
  margin-top: 30px;

}
.saoMa{
  margin-top: 15px;
}
.next{
  width: 80px;
  height: 35px;
  background: #1c84c6;
  text-align: center;
  line-height: 35px;
  color: white;
  margin: 100px auto;
}
</style>
