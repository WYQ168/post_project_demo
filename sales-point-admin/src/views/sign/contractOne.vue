<template>
  <div>
    <div>
        <p style="font-size:16px;margin: 0;">文件名称</p>
      </div>
      <div>
        <el-input v-model="fileName" placeholder="请输入文件名称" style="width: 80%;margin-top: 20px"></el-input>
      </div>

      <div style="display: flex;flex-direction: column;width: 100%;position: relative;bottom: -230%">
        <div>
          <el-button type="primary" style="width: 100%;  background-color: rgb(57,156,156)" @click="nextPage">下一步</el-button>
        </div>
        <div style="margin-top: 20px">
          <el-button style="width: 100%" @click="backPage">上一步</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"contracrOne",
  data() {
    return {
      fileName: ''
    }
  },
    methods:{
        backPage(){
        this.$router.go(-1);
      },
      nextPage(){
        this.$emit("event1",true)
      }
    }
}
</script>

<style>

</style>
