<template>
  <div class="sendContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布</span>
      </div>
      <div class="text item">
        <el-steps style="width: 800px;margin: 0 auto" :active="active" finish-status="success">
          <el-step title="批量交案"></el-step>
          <el-step title="支付费用"></el-step>
          <el-step title="完成方案"></el-step>
        </el-steps>
        <div style="text-align: center">
          <div style="margin: 40px 0">

            <span style="color: #333333;font-size: 18px;font-weight: bold;margin-right: 20px">合同类型:</span>
            <el-radio v-model="radio" label="1">平台合同</el-radio>
            <el-radio v-model="radio" label="2">其他合同</el-radio>
          </div>
          <div class="download">下载模板</div>
          <el-checkbox v-model="checked" style="margin: 20px auto"></el-checkbox> <span style="margin-left: 10px">我已认真阅读....</span>
<!--            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
          <div style="">
            <el-button style="width: 280px;background: #1c84c6;border: none;color: white" @click="toPay">导入案件</el-button>
          </div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "send",
  data() {
    return {
      active: 0,
      radio: '2',
      checked: false
    };
  },

  methods: {

    toPay(){
      this.$router.push('./pay')
    }
  }
}
</script>

<style scoped>
.sendContent {
  margin: 0 auto;

}
.download{
  width: 200px;
  height: 30px;
  line-height: 30px;
  background: white;
  border: 1px solid #cccccc;
  margin: 20px auto;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
