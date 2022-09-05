<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>选择模板</span>
      </div>
      <div class="text item">
        <div style="margin: 20px 0">
          <input class="inputClass" type="text" name="" id="" placeholder="请输入姓名搜索">
          <input class="inputClass" type="text" name="" id="inputId" placeholder="请输入电话号码搜索">
          <button style="background-color: #3a9d9d;margin: 0 10px">搜索</button>
          <button style="background-color: #b22939;">重置</button>
          <el-button style="float: right;width:80px;height:35px;background-color: #1c84c6;color: white" type="text"
                     @click="addUserForList">新增成员
          </el-button>
        </div>

        <div style="width: 100%;">
          <el-table
            class="elTable"
            :data="staffData"
            border
            style="width: 100% ;"
          >
            <el-table-column
              type="index"
              width="60"
            >
            </el-table-column>
            <el-table-column
              prop="sysUser.name"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="sysUser.phone"
              label="电话号码"
            >
            </el-table-column>
            <el-table-column
              prop="dept.name"
              label="所属部门"
            >
            </el-table-column>
            <el-table-column
              prop="sysUser.createTime"
              label="添加时间"
            >
            </el-table-column>
            <el-table-column
              prop="timer"
              label="最后登录时间"
            >
            </el-table-column>

            <el-table-column
              label="是否启用"
              width="100"
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
                <el-button style="color: #00afff" type="text" icon="el-icon-edit" @click="editStaff(scope.row)">编辑
                </el-button>
                <el-button style="color: #00afff" type="text" icon="el-icon-delete" @click="deleteStaff(scope.row.id)">
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
          <div>姓 名:</div>
          <el-input v-model="editParams.name" style="width: 50%" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>电话号码:</div>
          <el-input v-model="editParams.phone" style="width: 50%" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>所属部门:</div>
          <el-select v-model="editParams.deptId" placeholder="请选择">
            <el-option
              v-for="item in deptDataList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>

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
  import {getUserDeptList, deleteUserDeptData, addUserForDept, editUserForDept} from '../../api/role'
  import {getDeptList} from '../../api/dept'

  export default {
    name: 'templateSignIndex',
    data() {
      return {
        current:1,
        size:10,
        total:0,
        timer: '',
        select: '',
        title: '',
        value: '',
        name: '',
        currentPage4: 4,
        staffData: [],
        enabled: false,
        editParams: {
          name: '',
          phone: '',
          depeId: null
        },
        dialogVisible: false,
        deptData: [],
        deptDataList: {},
        editList: {}
      }
    },
    methods: {
      checkPage(page){
        this.current=page
        this.initGetUserList()
      },
      //获取
      initGetUserList() {
        getUserDeptList({current:this.current}).then(res => {
          this.staffData = res.data.records
          this.staffData.enabled = 0 ? true : false
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      //添加确定
      addSure() {
        let editParams = {
          userName: this.editParams.name,
          phone: this.editParams.phone,
          deptId: this.editParams.deptId
        }
        addUserForDept(editParams).then(res => {
          this.$message({
            type: 'success',
            message: '增加成功!'
          })
          this.initGetUserList()
          this.dialogVisible = false
        })

      },
      //编辑确定
      editSure(scope) {
        let editParams = {
          id: this.id,
          userId: this.userId,
          userName: this.editParams.name,
          phone: this.editParams.phone,
          deptId: this.editParams.deptId
        }
        editUserForDept(editParams).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.initGetUserList()
          this.dialogVisible = false

        })


      },
      close() {
        this.dialogVisible = false
      },
      //编辑
      editStaff(scope) {
        this.title = '编辑'

        this.id = scope.id
        this.userId = scope.userId
        this.editParams.name = scope.sysUser.name
        this.editParams.phone = scope.sysUser.phone
        this.editParams.deptId = scope.dept.id

        this.dialogVisible = true

      },

      //增加
      addUserForList() {
        this.dialogVisible = true
        this.title = '增加'
        this.editParams = {}

      },

      //删除
      deleteStaff(id) {
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 调接口删除
          deleteUserDeptData({id: id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.initGetUserList()
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      lookUp() {
        console.dir('--------------')
        this.$router.push('./power')
      },
      revoke() {
        this.$router.push('./templateContractView')
      },
      cancel() {
        this.$router.push('./templateContractView')
      }
    },
    mounted() {
      this.initGetUserList()
      getDeptList().then(res => {
        this.deptDataList = res.data.list
        console.log(this.deptDataList)
      })
    }
  }
</script>

<style scoped lang="scss">
  .inputClass[data-v-723a8c86]{
    height: 36px;
  }
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

