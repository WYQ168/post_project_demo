<template>
  <div class="sendContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布</span>
      </div>
      <div class="text item">
        <el-steps style="margin: 0 auto" :active="active" finish-status="success">
          <el-step title="批量交案"></el-step>
          <el-step title="支付费用"></el-step>
          <el-step title="完成方案"></el-step>
        </el-steps>
        <div class="pay">
          支付方式:
          <el-radio-group v-model="radio1">
            <el-button class="button" label="支付宝" border>支付宝</el-button>
            <el-button class="button" label="微信" border>微信</el-button>
            <el-button class="button" label="银行卡" border>银行卡</el-button>
          </el-radio-group>

        </div>
        <div class="ewm">
          <div>
            <div class="ewmImg">
              <img src="" alt="">
            </div>
            <el-checkbox v-model="checked" style="margin: 20px auto"></el-checkbox>
            我已阅读并理解<span style="color: #1c84c6">《用户充值协议》</span>
            <div class="paySuccess">支付完成</div>
          </div>
          <div class="success">
            <i class="el-icon-success" style="font-size: 40px;color: #1c84c6;margin-bottom: 20px"></i>
            <div>请耐心等待0~2个工作日，我们将对汇入资金进行查证</div>
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
      active: 1,
      radio: '2',
      checked: false,
      radio1: '支付宝'
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
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

.pay {
  margin-top: 50px;
}

.button {
  margin-right: 20px;
  /*border: 1px solid red;*/
}

.success {
  width: 400px;
  height: 160px;
  border-radius: 15px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ewm {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 40px 0;

  .ewmImg {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background: #1c84c6;
  }
  .paySuccess{
    width: 230px;
    height: 40px;
    color: white;
    line-height: 40px;
    text-align: center;
    background: #1c84c6;
  }
}
</style>
