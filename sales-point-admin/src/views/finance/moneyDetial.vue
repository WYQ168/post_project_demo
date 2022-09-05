<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>选择模板</span>
      </div>
      <div class="text item">
        <div style="margin: 20px 0">
          <input class="inputClass" type="text" name="" id="" placeholder="请输入文件名称搜索">
          <input class="inputClass" type="text" name="" id="inputId" placeholder="请输入发起人或签署人搜索">

          <button style="background-color: #3a9d9d;margin: 0 10px">搜索</button>
          <button style="background-color: #b22939;">重置</button>

        </div>


        <div style="width: 100%;">
          <el-table
            class="elTable"
            :data="getUserData"
            border
            style="width: 100% ;"
          >
            <el-table-column type="index"></el-table-column>
            <el-table-column
              prop="userName"
              label="真实姓名"
            >
            </el-table-column>
            <el-table-column
              prop="orderNum"
              label="订单编号"
            >
            </el-table-column>
            <el-table-column
              prop="payPrice"
              label="支付金额"
            >
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间"
            >
            </el-table-column>


          </el-table>
        </div>
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
  import {getPriceWaterList} from '../../api/role'
  export default {
    name: 'templateSignIndex',
    data() {
      return {
        timer: '',
        select: '',
        currentPage4: 4,
        getUserData: [],
        current:1,
        size:10,
        total:0
      }
    },
    methods: {
      initGetUser(){
        getPriceWaterList({current:this.current}).then(res=>{
          this.getUserData=res.data.records
          console.log(this.getUserData)
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      checkPage(page){
        this.current=page
        this.initGetUser()
      }

    },
    mounted() {
      this.initGetUser()
    }
  }
</script>

<style scoped lang="scss">
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

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;

    button {
      width: 60px;
      height: 28px;
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
</style>
