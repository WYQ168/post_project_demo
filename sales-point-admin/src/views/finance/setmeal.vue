<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>套餐列表</span>
    </div>
    <div  class="text item">

      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="套餐名称">
          <el-input v-model="sizeForm.name" placeholder="请输入套餐名称"></el-input>
        </el-form-item>
        <el-form-item label="*套餐价格">
          <el-input v-model="sizeForm.plice" placeholder="请输入套餐价格"></el-input>
        </el-form-item>
        <el-form-item label="*合同份数">
          <el-input v-model="sizeForm.num" placeholder="请输入合同份数"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </div>
  </el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      sizeForm: {
        name: '',
        plice:'',
        num:''

      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  width: 330px;
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
  height: 650px;
}
</style>
