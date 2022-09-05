<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>上传印章文件</span>
      </div>
      <div class="text item">
        <!--        <div class="itemLoad al-center">-->
        <!--          印章名称-->
        <!--          <el-input style="width: 350px" v-model="input" placeholder="请输入内容"></el-input>-->
        <!--        </div>-->
        <div class="itemLoad">
          印章文件
          <el-upload
            class="upload-demo"
            drag
            :action="importFileUrl"
            :data="upLoadData"
            name="importfile"
            :onError="uploadError"
            :onSuccess="uploadSuccess"
            :beforeUpload="beforeAvatarUpload"
            :limit="1"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip">仅支持.png格式，文件大小≤2MB，长、宽均166像素。必须上传背景透明的图，签章名称须与企业名称一致。</div>
          </el-upload>
        </div>

        <div class="keep" @click="uploadSealItem">提交</div>
      </div>
    </el-card>
  </div>
</template>

<script>

  import {uploadSealList} from "@/api/seal";

  export default {
    name: "addStamp",
    data() {
      return {
        input: '',
        importFileUrl: 'http://192.168.0.108:8080/​system/sealInfo​/uploadSealFile',
        upLoadData: {
          cpyId: this.id,
          userType:2
        }
      }
    },
    methods: {

      uploadSealItem() {
        uploadSealList(this.upLoadData).then(res=>{
          this.$message({
            type:'success',
            message:'添加成功'
          })
          // this.$router.push('./sealIndex')
        })

      }

    },
    mounted() {

    }
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

  .itemLoad {
    display: flex;
    margin-top: 20px;

    div {
      margin-left: 20px;
    }
  }

  .upload-demo {
    width: 250px;
  }

  .al-center {
    align-items: center;
  }


</style>
