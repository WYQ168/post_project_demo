<template>
  <div style="padding: 10px">
    <el-button type="primary" icon="el-icon-plus" @click="openAddRole">新增角色</el-button>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;margin-top: 10px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'children.length>0'}"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        sortable
      >
      </el-table-column>

      <el-table-column
        prop="remark"
        label="备注"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="状态"
        sortable
      >
        <template slot-scope="scope">
          <span>{{scope.openFlag==1?'开启':'未开启'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        sortable
      >
      </el-table-column>

      <el-table-column
        prop="updateTime"
        label="更新时间"
        sortable
      >
      </el-table-column>

      <el-table-column
        label="操作"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="getMenuList(scope.row.id)">编辑权限</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog
      title="编辑权限"
      :visible.sync="dialogVisible"
      width="45%"
    >
      <el-tree
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        v-model="testParams"
        :props="defaultProps">
      </el-tree>
      <div style="margin-top: 40px;text-align: center">
        <el-button @click="editSure">确定</el-button>
        <el-button @click="close">取消</el-button>
      </div>

    </el-dialog>
    <el-dialog
      title="新增角色"
      :visible.sync="dialogV"
      width="45%"
    >
      <div class="flex">
        <div>名 称:</div>
        <el-input style="width: 50%"  v-model="addName" placeholder="请输入"></el-input>
      </div>
      <div class="flex">
        <div>备 注:</div>
        <el-input style="width: 50%"  v-model="nameType" placeholder="请输入"></el-input>
      </div>
      <div class="flex">
        <div>级 别:</div>
        <el-select v-model="region" placeholder="请选择级别">
          <el-option label="超级管理员" value="1"></el-option>
          <el-option label="管理员" value="2"></el-option>
          <el-option label="企业用户" value="3"></el-option>
          <el-option label="普通用户" value="4"></el-option>
        </el-select>
      </div>

      <div style="margin-top: 40px;text-align: center">
        <el-button @click="addSure">确定</el-button>
        <el-button @click="close2">取消</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import {getRoleList, getRoleCheckedMenuList, editAuthority,addRoleData} from '@/api/role'

  export default {
    name: 'Role',
    data() {
      return {
        region:"",
        addName:"",
        nameType:"",
        dialogV:false,
        data: [],
        tableData: [],
        dialogVisible: false,
        formLabelAlign: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        testParams:[],
        requestParamList:[],
        checkId:null,
      }
    },
    methods: {
      // 新增角色
      openAddRole(){
          this.dialogV=true
      },
      addSure(){
        let RoleDataEditReq={
          remark:this.nameType,
          roleLevel:this.region,
          roleName:this.addName
        }

        console.log(RoleDataEditReq)
        if(this.nameType==""||this.addName==""||this.region==""){
          this.$message({
            type: 'error',
            message: '不能为空'
          })
          return
        }else {
          addRoleData(RoleDataEditReq).then(res=>{
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.dialogV=false
            this.nameType=''
            this.region=''
            this.addName=''
            this.initMenuList()
          })


        }
      },
      close2(){
        this.dialogV=false
      },
      //获取角色列表
      initMenuList() {
        getRoleList().then(res => {
          this.tableData = res.data
        })
      },
      //获取权权限列表
      getMenuList(id) {
        this.checkId=id
        getRoleCheckedMenuList({roleId: id}).then(res => {
          this.data = res.data
          let checkIdArray = []
          this.data.forEach(entity => {
            entity.children.forEach(data => {
              if (data.checked == 1) {
                checkIdArray.push(data.id)
              }
            })
          })
          this.$refs.tree.setCheckedKeys(checkIdArray);

        })
        this.dialogVisible = true

      },
      //编辑确定
      editSure() {
        this.requestParamList=[]
        this.testParams=this.$refs.tree.getCheckedNodes()
        this.testParams.forEach(entity=>{
          if (entity.children && entity.children!=null){
            entity.children.forEach(data=>{
              this.requestParamList.push(data.id)
            })
          }else {
            if (this.requestParamList.indexOf(entity.id)==-1){
              this.requestParamList.push(entity.id)
            }
          }
        })
        let requestParam={
          roleId:this.checkId,
          menuIdList:this.requestParamList
        }

        console.dir(this.testParams)
        console.dir(requestParam)


        //todo 调接口
        editAuthority(requestParam).then(res=>{
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
        })
        this.dialogVisible = false
      },
      //取消编辑
      close() {
        this.dialogVisible = false
      }
    },
    mounted() {
      this.initMenuList()
    }
  }

</script>
<style scoped lang="scss">
  .flex{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    div{
      margin-right: 20px;
    }
  }
</style>
