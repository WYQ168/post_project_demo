<template>
  <div style="padding: 10px">
    <div>
      <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
    </div>
    <el-table
      :data="authMenuDataList"
      stripe
      style="width: 100%;margin-top: 1rem">
      <el-table-column
        prop="authKey"
        label="权限标识"
        width="180">
      </el-table-column>
      <el-table-column
        label="菜单权限"
        width="180">
        <template slot-scope="scope">
          <div v-for="(item,index) in scope.row.menuList" :key="item.id">
            <span v-if="item.checked">{{item.name}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" icon="el-icon-delete" @click="handleDelete(scope.row.authKey)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="checkEdit?'新增':'修改'"
      :visible.sync="dialogVisible"
      width="40%"
      >
      <div>
        <span>权限标识：</span>
        <el-input v-model="editParam.authKey" placeholder="请输入权限名称"></el-input>
      </div>
      <p>菜单权限：</p>

      <el-tree
        :data="editParam.menuList"
        default-expand-all
        show-checkbox
        node-key="id"
        ref="treeStr"
        :props="defaultProps">
      </el-tree>

      <div style="margin-top: 1rem;margin-left: 35%">
        <el-button type="primary" icon="el-icon-plus" v-if="checkEdit" @click="submitAddData">新增</el-button>
        <el-button type="primary" v-else icon="el-icon-edit" @click="submitEditData">修改</el-button>
        <el-button icon="el-icon-close" @click="function() {
            dialogVisible=false
          }">取消</el-button>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  import {getAuthMenuList,getMenuTreeList,addMenuAuthData,editMenuAuthData,deleteMenuAuthData} from '@/api/menu'

  export default {
    name: 'Role',
    data() {
      return {
        authMenuDataList:[],
        menuTreeList:[],
        editParam:{
          menuList:[]
        },
        dialogVisible:false,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        checkedList:[],
        checkEdit:false,
        oldAuthKey:null
      }
    },
    methods:{
      submitEditData(){
        let that=this
        let editParam={
          authKey:this.editParam.authKey,
          oldAuthKey:this.oldAuthKey,
          menuList:this.$refs.treeStr.getCheckedKeys()
        }
        editMenuAuthData(editParam).then(res=>{
          getAuthMenuList().then(res=>{
            that.authMenuDataList=res.data
            that.dialogVisible=false
            that.$message({
              type:'success',
              message:'操作成功'
            })
          })
        })
      },
      submitAddData(){
        let that=this
        let addParam={
          authKey:this.editParam.authKey,
          menuList:this.$refs.treeStr.getCheckedKeys()
        }
        addMenuAuthData(addParam).then(res=>{
          getAuthMenuList().then(res=>{
            that.authMenuDataList=res.data
            that.dialogVisible=false
            that.$message({
              type:'success',
              message:'操作成功'
            })
          })
        })
      },
      handleAdd(){
        this.checkEdit=true
        this.editParam={
          menuList:this.menuTreeList
        }
        this.dialogVisible=true
        this.$nextTick(function () {
          this.$refs.treeStr.setCheckedKeys([])
        })
      },
      handleDelete(keyStr){
        let that=this
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteMenuAuthData({authKey:keyStr}).then(res=>{
            getAuthMenuList().then(res=>{
              that.authMenuDataList=res.data
              that.$message({
                type:'success',
                message:'删除成功'
              })
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleEdit(data){
        this.checkEdit=false
        this.dialogVisible=true
        this.editParam=data
        this.oldAuthKey=data.authKey
        this.checkedList=[]
        let that=this
        data.menuList.forEach(entity=>{
          entity.children.forEach(entityData=>{
            if (entityData.checked){
              that.checkedList.push(entityData.id)
            }
          })
        })
        this.$nextTick(function () {// 调用$nextTick函数
          that.$refs.treeStr.setCheckedKeys(that.checkedList)
        })
      }
    },
    mounted() {
      getAuthMenuList().then(res=>{
        this.authMenuDataList=res.data
      })
      getMenuTreeList().then(res=>{
        this.menuTreeList=res.data
      })
    }
  }

</script>
<style scoped lang="scss">

</style>
