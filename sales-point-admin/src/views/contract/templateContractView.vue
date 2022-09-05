<template>
  <div style="height: 100vh;width: 100%;display: flex;flex-direction: row;position: relative">
    <div style="width: 17%;height: 100%;background-color: #F6F6F6;display: flex;justify-content: center">
      <div style="margin-top: 25px;text-align: center">
        <el-image style="width: 100px; height: 100px" :src="require('../../../static/icons/pdfIcon.jpeg')" fit="fill">
        </el-image>
        <p style="font-size: 12px">{{ fileData.fileName }}</p>
      </div>
    </div>
    <div style="width: 40px;background-color: rgba(242, 242, 242, 1);">
      <div class="status" @click="drawer = true" type="primary" style="margin-left: 16px;">
        签 约 状 态 ^
      </div>

    </div>

    <el-drawer
      title="签约状态"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose">
      <div style="text-align:center">
        签约流程示意图
        <div class="Initiator" style="text-align:left;color: black;margin-top: 20px">
          <img src="../../assets/img/mine.png" alt="" style="width:30%;height:100%;vertical-align: middle;">名称
        </div>
        <p style="font-weight:900;">发起方</p>
        <div style="height:100px;width: 60px;margin: 0 auto;">
          <img src="../../assets/icons/down.png" alt="" style="height:100%;width: 100%;"></div>
        <div class="Signatories">
          <div style="text-align:center">
            <div> <img src="../../assets/img/mine.png" alt="" style="width:80px;height:80px;vertical-align: middle;">
            </div>
            <div style="color:black">已签署</div>
          </div>

        </div>
        <div style="height:100px;width: 60px;margin: 0 auto;"><img src="../../assets/icons/down.png" alt=""
                                                                   style="height:100%;width: 100%;"></div>
        <div><img src="../../assets/icons/yes.png" alt="" style="margin-left:10px;margin-top: 20px;"></div>
      </div>
    </el-drawer>

    <div style="width: 70%;height: 100%;">
      <embed :src="fileData.fileUrl" type="application/pdf" width=100% height=100%/>
    </div>
    <div style="width: 20px;background-color: rgba(242, 242, 242, 1);"></div>
    <div style="width: 20%;height: 100%;display: flex;flex-direction: column;align-content: center;padding-top: 20px">
      <div class="serve">
        <el-button class="button" @click="open">出征服务</el-button>
        <el-button class="button">全证据链</el-button>
        <el-button class="button" @click="outerVisible = true">签约详情</el-button>
        <el-button class="button">文件下载</el-button>
      </div>
      <div style="display: flex;flex-direction: column;width: 100%;position: relative;bottom: -70%">
        <div>
          <el-button type="primary" style="width: 100%">下一步</el-button>
        </div>
        <div style="margin-top: 20px">
          <el-button style="width: 100%" @click="backPage">上一步</el-button>
        </div>
      </div>
    </div>
    <!-- ----------------------------- -->
    <div>
      <el-dialog title="签约流程示意图" :visible.sync="outerVisible">
        <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
        </el-dialog>

      </el-dialog>
    </div>
  </div>
</template>

<script>

  import PdfComponent from '../components/PdfComponent'

  export default {
    name: 'templateSignIndexForm',
    components: {PdfComponent},
    data() {
      return {
        drawer: false,
        outerVisible: false,
        innerVisible: false,
        pdfUrl: 'http://47.96.117.177/testFile.pdf' + '#toolbar=0',
        title: '实习协议书.pdf',
        fileName: null,
        fileData: {
          contractTitle: '',
          fileUrl: ''
        }
      }
    },
    methods: {
      backPage() {
        this.$router.go(-1);
      }, open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      },
      handleClose(done) {
        this.drawer = false
      }
    },

    mounted() {

      this.fileData = JSON.parse(this.$route.query.fileData)
      console.log(this.fileData)
    }
  }
</script>

<style scoped>
  .button {
    width: 90%;
    margin: 10px 15px;
    color: #ffffff;
    background-color: #7F7F7F;
  }

  .Initiator {
    margin: 0 auto;
    width: 200px;
    height: 60px;
    background-color: rgb(242, 242, 242);
    line-height: 60px;
  }

  .Signatories {
    margin: 0 auto;
    width: 500px;
    height: 160px;
    background-color: rgb(242, 242, 242);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  /deep/ .el-drawer.ltr {
    left: 19% !important;
  }
  .status{
    position: absolute;
    top: 40%;
    left: 14%;
    width: 30px;
    border-radius: 0 15px 15px 0;
    height: 200px;
    writing-mode: vertical-lr;
    text-align: center;
    background-color: #fff;
  }
</style>
