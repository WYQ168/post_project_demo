<template>
  <div class="sendContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布</span>
      </div>
      <div class="text item">
        <div>所选套餐：{{mealData.name}}- {{mealData.copies}}份合同 - ¥{{mealData.price}}</div>
        <div class="pay">
          支付方式:
          <el-radio-group v-model="radio1">
            <el-button class="button" label="支付宝" border @click="goZFBPay">支付宝</el-button>
            <el-button class="button" label="微信" border>微信</el-button>
          </el-radio-group>

        </div>

        <div id="zfbDiv"></div>

        <div class="ewm">
          <div>
            <div style="text-align: center;margin-bottom: 10px">支付宝扫码，支付{{mealData.price}}元</div>
            <div class="ewmImg">
              <img src="" alt="">
            </div>
            <el-checkbox v-model="checked" style="margin: 20px auto"></el-checkbox>
            我已阅读并理解<span style="color: #1c84c6">《用户充值协议》</span>
            <div class="paySuccess">支付完成</div>
          </div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
  import {goAliPay} from '../../api/orders'

  export default {
    name: "send",
    data() {
      return {
        active: 1,
        radio: '2',
        checked: false,
        radio1: '支付宝',
        testHtml:'',
        mealData:{}
      };
    },
    mounted() {
      this.mealData=JSON.parse(this.$route.query.mealData)

    },
    methods: {
      goZFBPay(){
        goAliPay(
          {
            userType:2,
            orderId:'c84067fcb9bfcef722ebbdd6db0ffe0f'
          }
        ).then(res=>{
          this.testHtml=res.data
          let divForm = document.getElementsByTagName('divform')
          if (divForm.length) {
            document.body.removeChild(divForm[0])
          }
          const div=document.createElement('divform');
          div.innerHTML=res.data;
          document.body.appendChild(div);
          document.forms[0].setAttribute('target', '_blank')
          document.forms[0].submit();
        })
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

  }

  .ewm {
    display: flex;

    margin: 20px 0;

    .ewmImg {
      margin: 0 auto;
      width: 150px;
      height: 150px;
      background: #1c84c6;
    }

    .paySuccess {
      width: 230px;
      height: 40px;
      color: white;
      line-height: 40px;
      text-align: center;
      background: #1c84c6;
    }
  }
</style>
