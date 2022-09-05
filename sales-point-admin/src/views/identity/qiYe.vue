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
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="多合一营业执照*">
            <div style="display:flex;">
              <div style="width: 150px;height: 100px;background: #1c84c6">
                <img src="" alt="">

              </div>
              <div style="margin-left: 10px;font-size: 12px;">
                <div style="line-height: 15px;margin: 10px 0 20px 10px">组织机构等非企业单位，请上传登记执照<br>
                  支持 .jpg .jpeg .png 格式，大小不超过2M</div>

                <div style="background: #1c84c6;width: 80px;color: white;text-align: center;margin-left: 20px;border-radius: 5px">选择文件</div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="组织类型*">
            <el-radio-group v-model="form.resource">
              <el-radio label="企业/个体工商户"></el-radio>
              <el-radio label="政府/事业单位"></el-radio>
              <el-radio label="其他组织"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="企业名称*">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码*">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="法定代表人姓名*">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证号*">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: center;margin-top: 40px">
          <el-button @click="back">上一步</el-button>
          <el-button style="background: #1c84c6;color: white" @click="next">提交</el-button>
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
      active: 1,
      checked: false,
      radio1: '支付宝',
      form: {
        name: ''

      }
    }
  },

  methods: {
    next() {
        this.$router.push('./finish')
    },
    back(){
      this.$router.push('./business')
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


</style>
