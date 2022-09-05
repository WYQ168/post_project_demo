<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>上传签约文件</span>
        </div>
        <div class="text item">
          <div class="itemLoad al-center">
            模板名称<el-input style="width: 350px" sv-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="itemLoad">
            模板文件
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" >只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
          <div class="itemLoad al-center">
            模板附件
            <div class="itemOnLoad"><i class="el-icon-upload"></i>上传附件</div>
          </div>
          <div class="keep">保存模板</div>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
name: "addStamp",
  data() {
    return {
      input: ''
    }
  },
}
</script>

<style scoped lang="scss">
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
  height: 630px;
}
.itemLoad{
  display: flex;
  margin-top: 20px;
  div{
      margin-left: 20px;
  }
}
.upload-demo{
  width: 250px;
}
.al-center{
  align-items: center;
}
.itemOnLoad{
  width: 100px;
  height: 35px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #1c84c6;
  cursor: pointer;
}
.keep{
  cursor: pointer;
  width: 100px;
  height: 35px;
  background: #1c84c6;
  color: white;
  text-align: center;
  line-height: 35px;
  margin: 60px auto;
}
</style>
