<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>部门列表</span>
        <el-button style="float: right; padding: 8px 20px;background-color: #1c84c6;color: white" type="text"
                   @click="open">新增
        </el-button>

      </div>
      <div class="text item">
        <div style="width: 100%;">
          <el-table
            class="elTable"
            :data="deptData"
            border
            style="width: 100% ;"
          >
            <el-table-column
              type="index"

            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="部门名称"

            >
            </el-table-column>
            <el-table-column
              prop="remark"
              label="部门描述"
              width="300"
            >
            </el-table-column>

            <el-table-column
              prop="deptNumberOfPeople"
              label="成员数量"
              width="120"
            >
            </el-table-column>


            <el-table-column
              prop="createTime"
              label="添加时间"
              width="320"
            >
            </el-table-column>
            <el-table-column
              label="是否启用"
              width="180"
            >
              <template slot-scope="scope">
                <el-switch v-model="scope.row.enabled"></el-switch>
              </template>

            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作"
            >
              <template slot-scope="scope">
                <el-button style="color: #00afff" type="text" icon="el-icon-edit" @click="editDept(scope.row)">编辑
                </el-button>
                <el-button style="color: #00afff" type="text" icon="el-icon-delete" @click="deleteDept(scope.row.id)">
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
          <div>部门名称:</div>
          <el-input style="width: 50%" v-model="editParams.name" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>部门描述:</div>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="editParams.remark"
            maxlength="30"
            show-word-limit
            style="width: 50%;"
          >
          </el-input>
        </div>
        <div class="flex">
          <div>是否启用:</div>
          <el-switch v-model="editParams.enabled"></el-switch>
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
  import {getDeptList, addDeptList, deleteDeptList, editDeptList} from '../../api/dept'

  export default {
    name: 'templateSignIndex',
    data() {
      return {
        timer: '',
        select: '',
        currentPage4: 4,
        deptData: [],
        dialogVisible: false,
        editParams: [],
        title:'',
        current:1,
        size:10,
        total:0
      }
    },
    methods: {

      astamp() {
        this.$router.push('./addSeal')
      },
      //编辑
      editDept(scope) {
        this.editParams = scope
        this.title='编辑'
        this.dialogVisible = true
      },
      //删除
      deleteDept(id) {
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 调接口删除
          deleteDeptList({id: id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.initDeptList()
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },
      //确定编辑
      editSure() {
        let editList = {
          id: this.editParams.id,
          name: this.editParams.name,
          remark: this.editParams.remark,
          enabled: this.editParams.enabled,

        }
        let params = JSON.parse(JSON.stringify(editList));
        params.enabled = editList.enabled ? 1 : 0


        editDeptList(params).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.dialogVisible = false
        })

      },
      //取消
      close() {
        this.dialogVisible = false
      },

      // 增加
      open() {
        this.title='增加'
        this.dialogVisible=true
        this.editParams={}

      },
      //确定增加
      addSure(){
        let addList = {
          name: this.editParams.name,
          remark: this.editParams.remark,
          enabled: this.editParams.enabled,

        }
        let params = JSON.parse(JSON.stringify(addList));
        params.enabled = addList.enabled ? 1 : 0

        addDeptList(addList).then(res=>{
          this.$message({
            type:'success',
            message:'操作成功'
          })
          this.initMenuList()
          this.dialogVisible = false
        })
      },
      //获取列表
      initDeptList() {
        getDeptList({current:this.current}).then(res => {
          this.deptData = res.data.list
          console.log(this.deptData)
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      checkPage(page){
        this.current=page
        this.initDeptList()
      }
    },
    mounted() {
      this.initDeptList()
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
