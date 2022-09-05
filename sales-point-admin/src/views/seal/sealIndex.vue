<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>印章管理</span>
      </div>
      <div class="text item">
        <div style="margin: 20px 0">
<!--          <input class="inputClass" type="text" name="" id="" placeholder="请输入文件名称搜索">-->
<!--          <input class="inputClass" type="text" name="" id="inputId" placeholder="请输入发起人或签署人搜索">-->
<!--          时间:-->
<!--          <el-date-picker-->
<!--            v-model="timer"-->
<!--            type="daterange"-->
<!--            start-placeholder="开始日期"-->
<!--            end-placeholder="结束日期"-->
<!--          >-->
<!--          </el-date-picker>-->
<!--          <button style="background-color: #3a9d9d;margin: 0 10px">搜索</button>-->
<!--          <button style="background-color: #b22939;">重置</button>-->
          <button style="background: #1c84c6;width: 80px;float: right;margin-bottom: 30px" @click="astamp">新增印章</button>
        </div>
        <div class="navList">

        </div>
        <div style="width: 100%;">
          <el-table
            class="elTable"
            :data="SealData"
            border
            style="width: 100% ;"
          >
            <el-table-column
              type="index"
              label="序号"
              width="60"
            >
            </el-table-column>

            <el-table-column
              prop="createTime"
              label="创建时间"
            >
            </el-table-column>
            <el-table-column
              prop=""
              label="印章图片"
            >
              <template slot-scope="scope">
                <el-image style="width: 100px;height: 100px" :src="scope.row.fileUrl"></el-image>
              </template>
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作"
            >
              <template slot-scope="scope">
                <el-button type="text" style="color: #00afff" icon="el-icon-edit"
                           @click="editSeal(scope.row)"
                >编辑
                </el-button>
                <el-button type="text" style="color: #00afff" icon="el-icon-delete" @click="deleteSeal(scope.row.id)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-dialog
          title="编辑"
          :visible.sync="dialogVisible"
          width="45%"
        >
          <div class="flex">

          </div>
          <div class="flex">
            <div style="margin-right: 30px">印章图片:</div>
            <el-upload
              action="http://192.168.0.108:8080/system/sealInfo/editSealFile"
              :data="{id:this.editParam.id,userType: 2}"
              :headers="headers"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div class="editBbutton">
            <el-button @click="editSure">确定</el-button>
            <el-button @click="close">取消</el-button>
          </div>
        </el-dialog>
        <el-dialog
          title="添加印章"
          :visible.sync="dialog"
          width="45%"
        >
          <el-upload
            class="upload-demo"
            style="text-align: center"
            drag
            :action="importFileUrl"
            :headers="headers"
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


          <div class="keep" @click="uploadSealItem">提交</div>


        </el-dialog>
      </div>
      <div class="block">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="current"
          :page-size="size"
          @current-change="checkPage"
          :total="total">
        </el-pagination>
      </div>
    </el-card>

  </div>
</template>

<script>
  import {getSealList, editSealList, uploadSealList, deleteSealFile} from '../../api/seal'
  import {getTokenStr} from '../../api/login'

  export default {
    name: 'templateSignIndex',
    data() {
      return {
        current:1,
        size:10,
        total:0,
        timer: '',
        select: '',
        currentPage4: 4,
        SealData: [],
        dialogVisibl: false,
        editParam: {},
        dialog: false,
        dialogImageUrl: '',
        dialogVisible: false,
        headers: {},
        input: '',
        importFileUrl: 'http://192.168.0.108:8080/​system/sealInfo​/uploadSealFile',
        upLoadData: {
          cpyId: this.id,
          userType: 2
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      astamp() {
        this.dialog = true
      },
      editSeal(scope) {
        this.editParam = scope
        this.dialogVisible = true
      },
      editSure() {
        this.dialogVisible = false
      },
      close() {
        this.dialogVisible = false
      },
      deleteSeal(id) {

        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteSealFile({userType: 2, id: id}).then(res => {
            //todo 调接口删除
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.initSealList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      initSealList() {
        getSealList({userType: 2,current:this.current}).then(res => {
          this.SealData = res.data.records
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      checkPage(page){
        this.current=page
        this.initSealList()
      },
      initTokenDataStr() {
        getTokenStr().then(res => {
          this.headers = {
            'Authorization': res
          }
        })
      },
      // 上传成功后的回调
      uploadSuccess(response, file, fileList) {
        alert("上传成功")
        console.log('上传文件', response)
      },
      // 上传错误
      uploadError(response, file, fileList) {
        alert('上传失败，请重试！')
      },
      // 上传前对文件的大小的判断
      beforeAvatarUpload(file) {
        const extension = file.name.split('.')[1] === 'png'
        const isLt2M = file.size / 1024 / 1024 < 10
        if (!extension) {
          alert('上传模板只能是 png格式!')
        }
        if (!isLt2M) {
          alert('上传模板大小不能超过 2MB!')
        }
        return extension && isLt2M
      },
      uploadSealItem() {
        uploadSealList(this.upLoadData).then(res=>{
          this.$message({
            type:'success',
            message:'添加成功'
          })
        })

      }

    },
    mounted() {
      this.initSealList()
      this.initTokenDataStr()
    }
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    margin-bottom: 40px;

    .title {
      margin-right: 20px;
    }
  }

  .editBbutton {
    margin: 40px auto;
    text-align: center;

    button {
      background: #1c84c6;

    }
  }

  #inputId {
    width: 200px;
  }

  .inputClass {
    width: 150px;
    height: 35px;
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }

  .navList {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    div {
      width: 100px;
      height: 35px;
      background-color: #f3f3f3;
      border: 1px solid #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;

    button {
      padding: 10px 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
    }

    .operation {
      color: #3a9d9d;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
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
    margin: 20px 20px 20px 10px;
    border-radius: 15px;

  }

  ::v-deep .el-table th,
  ::v-deep .el-table td {
    text-align: center !important;
    letter-spacing: 2px;
  }

  .block {
    text-align: right;
  }

  .itemOnLoad {
    width: 100px;
    height: 35px;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    background: #1c84c6;
  }

  .keep {
    width: 100px;
    height: 35px;
    background: #1c84c6;
    color: white;
    text-align: center;
    line-height: 35px;
    margin: 60px auto;
  }
</style>
