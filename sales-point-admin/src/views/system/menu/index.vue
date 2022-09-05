<template>
  <div style="padding: 10px">
    <el-button type="primary" icon="el-icon-plus" @click="openAddDialog">新增菜单</el-button>

    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;margin-top: 10px" row-key="id" border
              default-expand-all :tree-props="{children: 'children', hasChildren: 'children.length>0'}">

      <el-table-column type="index" sortable></el-table-column>

      <el-table-column prop="name" label="名称" sortable width="180"></el-table-column>

      <el-table-column prop="component" label="组件地址" sortable width="180"></el-table-column>

      <el-table-column prop="sort" label="排序" sortable width="180"></el-table-column>

      <el-table-column prop="componentName" label="组件名称" sortable width="180"></el-table-column>

      <el-table-column prop="path" label="路由地址" sortable width="180"></el-table-column>

      <el-table-column prop="createTime" label="创建时间" sortable width="180"></el-table-column>

      <el-table-column prop="updateTime" label="修改时间" sortable width="180"></el-table-column>

      <el-table-column prop="icon" label="ICON" sortable width="180"></el-table-column>

      <el-table-column label="操作" fixed="right" width="180">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="editMenu(scope.row)">编辑</el-button>
          <el-button type="text" icon="el-icon-delete" @click="deleteMenu(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="45%">
      <div>
        <div class="flex">
          <div>名 称:</div>
          <el-input style="width: 50%" v-model="editParams.name" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>组件地址:</div>
          <el-input style="width: 50%" v-model="editParams.component" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>组件名称:</div>
          <el-input style="width: 50%" v-model="editParams.componentName" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>路由地址:</div>
          <el-input style="width: 50%" v-model="editParams.path" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>父级菜单:</div>
          <el-select v-model="editParams.pid" clearable placeholder="请选择">
            <el-option v-for="item in tableData" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </div>
        <div class="flex">
          <div>icon:</div>
          <el-input style="width: 50%" v-model="editParams.icon" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>排序:</div>
          <el-input style="width: 50%" v-model="editParams.sort" placeholder="请输入" type="number"></el-input>
        </div>

        <el-switch v-model="value"></el-switch>

        <div>
          <el-button @click="editSure" v-if="title=='编辑菜单'">确定</el-button>
          <el-button @click="addSure" v-else>确定</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import {getMenuList, editMenuData, addMenuData} from '@/api/menu'

  export default {
    name: 'Menu',
    data() {
      return {
        tableData: [],
        editParams: {},
        dialogVisible: false,
        title: '',
        value: true
      }
    },
    methods: {
      //新增菜单
      openAddDialog() {
        this.title = '新增菜单'
        this.editParams = {}
        this.dialogVisible = true
      },
      //编辑 新增确定按钮
      addSure() {
        if (!this.editParams.pid) {
          this.editParams.pid = 0
        }
        addMenuData(this.editParams).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.initMenuList()
          this.dialogVisible = false
        })
      },
      //编辑
      editSure() {
        if (!this.editParams.pid) {
          this.editParams.pid = 0
        }
        editMenuData(this.editParams).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.initMenuList()
          this.dialogVisible = false
        })
      },
      close() {
        this.dialogVisible = false
      },

      initMenuList() {
        getMenuList().then(res => {
          this.tableData = res.data
          console.dir(this.tableData)
        })
      },


      editMenu(scope) {
        this.title = '编辑菜单'
        this.editParams = scope
        if (this.editParams.pid == 0) {
          this.editParams.pid = null
        }
        this.dialogVisible = true
      },
      deleteMenu(id) {
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 调接口删除
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    mounted() {
      this.initMenuList()
    }
  }
</script>
<style scoped lang="scss">
  .flex {
    display: flex;
    margin: 20px 0;
    align-items: center;

    div {
      margin-right: 20px;
    }
  }
</style>
