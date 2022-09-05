<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>套餐列表</span>
        <el-button style="float: right; padding: 6px 3px;background: #1c84c6;color: white" type="text"
                   @click="addBuyList">添加套餐
        </el-button>
      </div>
      <div class="text item">
        <div style="width: 100%;">
          <el-table class="elTable" :data="buyList" border style="width: 100% ;">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="name" label="套餐名称">
            </el-table-column>

            <el-table-column prop="price" label="套餐价格"></el-table-column>

            <el-table-column prop="copies" label="套餐合同份数"></el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" style="color:#00afff" icon="el-icon-edit"
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

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="45%"
    >
      <div>
        <div class="flex">
          <div>套餐名称:</div>
          <el-input style="width: 50%" v-model="editParams.name" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>套餐价格:</div>
          <el-input style="width: 50%" v-model="editParams.price" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>套餐合同份数:</div>
          <el-input style="width: 50%" v-model="editParams.copies" placeholder="请输入"></el-input>
        </div>

        <div style="margin-top: 40px;text-align: center">
          <el-button @click="editSure" v-if="title=='编辑'">确定</el-button>
          <el-button @click="addSure" v-else>确定</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  import {getBuyData, editBuyData, deleteBuyData, addBuyData} from '../../api/buy'

  export default {
    name: 'templateSignIndex',
    data() {
      return {
        timer: '',
        select: '',
        currentPage4: 4,
        buyList: [],
        dialogVisible: false,
        editParams: [],
        title: '',
        current:1,
        size:10,
        total:0
      }
    },
    methods: {
      //编辑
      editSeal(scope) {
        this.editParams = scope
        this.title = '编辑'
        this.dialogVisible = true
      },

      //删除套餐
      deleteSeal(id) {
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 调接口删除
          deleteBuyData({id: id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.initBuyList()
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },

      //修改套餐
      editSure() {
        editBuyData(this.editParams).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.dialogVisible = false
        })
      },
      //添加
      addBuyList() {
        this.title = '添加'
        this.editParams = {}
        this.dialogVisible = true
      },
      //确定添加
      addSure() {
        addBuyData(this.editParams).then(res => {
          this.$message({
            type:'success',
            message:'操作成功'
          })
          this.initBuyList()
          this.dialogVisible = false
        })
      },
      // 取消
      close() {
        this.dialogVisible = false
      },
      //获取套餐列表篇
      initBuyList() {
        getBuyData({current:this.current}).then(res => {
          this.buyList = res.data.records
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      checkPage(page){
        this.current=page
        this.initBuyList()
      }
    },
    mounted() {
      this.initBuyList()
    }
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    margin-top: 30px;
    align-items: center;

    div {
      margin-right: 20px;
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
