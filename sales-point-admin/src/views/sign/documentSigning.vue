<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="black"></span><span>文件名称</span>
      </div>
      <div class="text item">
        <input type="text" placeholder="请输入文件名字">
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="black"></span><span>签署文件</span><span class="fontColor">(计费)</span>
        <i class="el-icon-warning" style="margin: 0 5px"></i><span class="fontColor">0/30</span>
      </div>
      <div class="text item wenJian">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div style="width: 150px;font-size: 12px;background-color: #f0f0f0;padding: 5px 0;color: rgba(77,77,77,0.61)">
          支持pdf、docx、doc、jpg、xls、xlsx、wps等格式文件
        </div>
        <div class="incidental">
          <div class="incidentalNav clearfix">
            <span class="black"></span><span >附带文件</span><span class="fontColor">(计费)</span>
            <i class="el-icon-warning" style="margin: 0 5px"></i><span class="fontColor">0/30</span>
          </div>
          <div class="inciClass">
            <button><img src="" alt="">添加附属文件</button>
          </div>
        </div>
      </div>
    </el-card>


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="black"></span><span>签署设置 </span>
        <span style="margin: 0 20px" class="fontColor">1/10</span><span class="fontColor">>></span>
      </div>
      <div class="text item">
        <div style="display: flex;justify-content: space-between;margin-bottom: 15px">
          <div style="display: flex;align-items: center">
            <div style="font-size: 13px">按顺序签名<span style="font-size: 12px;color: #7F7F7F">/各方按顺序完成签约</span></div>
            <div style="font-size: 16px;font-weight: bold;margin-left: 15px">签署流程示意图</div>
          </div>
          <div>
            批量签署方
            <i class="el-icon-warning" style="margin: 0 10px"></i>
            <button style="width: 100px;height: 30px;background-color: #3d98e3;border: none;color: #fff;">添加签署方</button>
          </div>
        </div>
        <div>
          <div style="display:flex;align-items: center"  class="fColor">
            签约方一
            <el-select class="widMan" v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="个人" value="1"></el-option>
              <el-option label="企业" value="2"></el-option>
            </el-select>
            <el-input class="widMan" v-model="input" placeholder="请输入内容"></el-input>
            <el-input class="widMan" v-model="input" placeholder="请输入内容"></el-input>
            <el-input class="widMan" v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
    </el-card>


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="black"></span><span>其他设置</span>
      </div>
      <div class="text item">
        <div  class="fColor">签约链接时效  <el-input  class="widMan" v-model="input" placeholder="请输入内容"></el-input></div>
        <div style="display:flex;align-items: center ;margin-top: 20px"  class="fColor">
          签约方一
          <el-select class="widMan" v-model="Select" slot="prepend" placeholder="请选择">
            <el-option label="发起方支付全部费用" value="1"></el-option>
            <el-option label="各方支付各自的费用" value="2"></el-option>
          </el-select>

        </div>
      </div>
    </el-card>
    <div class="lastClass" style="text-align: center;">
      <button style="margin-right: 20px;border-radius: 5px;">取消</button>
      <button style="background-color: #389b9b;color: #ffffff;border: none;border-radius: 5px;" @click="nextSign">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'documentSigning',
  data() {
    return {
      Select:'',
      input:'',
      select: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
    nextSign(){
      this.$router.push('./signFileIndex')
    }
  }
}
</script>

<style scoped lang="scss">
.documentName {

}
.widMan{
  width: 200px;
  margin-left: 10px;
}
.fColor{
  color: #7F7F7F;
}
.clearfix{
  font-weight: bold;
  color: #333333;
  font-size: 14px;
}
.fontColor{
  color: #7F7F7F;
  margin-left: 5px;
}
.black {
  background-color: #333333;
  padding: 3px 3px;
  border-radius: 20px;
  margin-right: 10px;
}

.text {
  font-size: 14px;

  input {
    width: 300px;
    height: 40px;
    border: 1px solid #cccccc;
    padding-left: 10px;

  }
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
  margin: 20px 20px 20px 10px;
  border-radius: 15px;

}

.incidental {
  margin-top: 30px;
  margin-left: -20px;

}

.incidentalNav {
  border-bottom: 1px solid #e6ebf5;
  padding-left: 15px;
  padding-bottom: 10px;

}

::v-deep .el-card .wenJian {
  padding: 0 !important;
}

.inciClass {
  margin: 25px;

  button {
    width: 170px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid rgba(51, 51, 51, 0.68);
    border-radius: 5px;
    margin-left: 10px;
  }
}

.lastClass {
  button {
    width: 91px;
    height: 37px;
    color: #000;

    background-color: #ffffff;
    border: #f0f0f0 solid 1px;
  }
}

</style>
