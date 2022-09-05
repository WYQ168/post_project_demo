<template>
  <div class="sendContent">
    <el-card class="box-card">

      <div class="text item">
        <el-steps style="margin: 0 auto" :active="active" finish-status="success">
          <el-step title="身份认证"></el-step>
          <el-step title="企业信息认证"></el-step>
          <el-step title="认证完成"></el-step>
        </el-steps>
        <div style="text-align: center;margin-top: 80px">
          <div class="el-icon-success" style="font-size: 76px;color: #1c84c6;margin-bottom: 10px"></div>
          <div> 身份认证成功！</div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'send',
  data() {
    return {
      active: 2,
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


</style>
