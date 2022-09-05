<template>
  <!--企业信息-->
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>企业信息</span>
      </div>
      <div class="text item">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="多合一营业执照*">
              <div style="width: 100px;height: 100px;background: #1c84c6">
                <img src="" alt="">
              </div>
          </el-form-item>
          <el-form-item label="组织类型*">
            <el-radio-group v-model="form.label">
              <el-radio label="企业/个体工商户"></el-radio>
              <el-radio label="政府/事业单位"></el-radio>
              <el-radio label="其他组织"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="企业名称*">
            <el-input :disabled="true" v-model="businessData.companyName" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码*">
            <el-input  :disabled="true" v-model="businessData.creditCode" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="法定代表人姓名*">
            <el-input :disabled="true"  v-model="businessData.legalPerson" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证号*">
            <el-input  :disabled="true" v-model="businessData.legalPersonCard" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="对公银行账号*">
            <el-input  :disabled="true" v-model="businessData.corporateBankAccount" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="开户银行*">
            <el-input  :disabled="true" v-model="businessData.depositBank" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="开户银行支行*">
            <el-input  :disabled="true" v-model="businessData.depositBankBranch" style="width: 400px"></el-input>
          </el-form-item>

          <el-form-item label="开户行所在城市*">
            <el-input  :disabled="true" v-model="businessData.companyAddress" style="width: 400px"></el-input>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getInfo } from '../../api/login'
import { getBussbiss } from '../../api/business'
export default {
  name: "business",
  data() {
    return {
      form: {
        name: '',
        userData:'',
        label:''
      },
      businessData:{}
    }
  },
  methods: {
     getuserId() {
      getInfo().then(res => {
        this.userData = res.data
        getBussbiss(res.data.id).then(res2 => {
          this.businessData = res2.data
        })
      })
    }
  },
  mounted(){
    this.getuserId()
  }
}
</script>

<style scoped>
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
  width: 100%;
}

</style>
