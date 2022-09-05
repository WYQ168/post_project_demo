<template>
  <el-container>
    <!-- 头部  -->
    <el-header style="margin: 20px 0px">

      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input size="medium" placeholder="输入机具编号" v-model="input3"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin: 20px 0px">
        <el-button type="primary" icon="el-icon-plus" plain>新增</el-button>
        <el-button type="danger" icon="el-icon-delete" plain>删除</el-button>
      </el-row>

    </el-header>
    <!--  中部  -->
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="机具编号" sortable></el-table-column>
            <el-table-column prop="name" label="扣费金额(百分比)" sortable></el-table-column>
            <el-table-column prop="status" label="扣费状态" sortable></el-table-column>
            <el-table-column prop="address" label="日期" sortable></el-table-column>
            <el-table-column label="操作" sortable>
              <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="editMenu(scope.row)">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" @click="deleteMenu(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="45%">
      <div>
        <div class="flex">
          <div>机具编号:</div>
          <el-input style="width: 50%" v-model="editParams.name" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>扣费金额(百分比):</div>
          <el-input style="width: 50%" v-model="editParams.component" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>扣费状态:</div>
          <el-input style="width: 50%" v-model="editParams.componentName" placeholder="请输入"></el-input>
        </div>
        <el-switch v-model="value"></el-switch>
        <div>
          <el-button @click="editSure" v-if="title=='编辑菜单'">确定</el-button>
          <el-button @click="addSure" v-else>确定</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </div>
    </el-dialog>


  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {

    editMenu() {
      this.$confirm('编辑扣费模板?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
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

  }
}
</script>
