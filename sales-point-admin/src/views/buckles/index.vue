<template>
  <el-container>
    <!-- 头部  -->
    <el-header style="margin: 20px 0px">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input size="medium" placeholder="输入机具编号" v-model="spare_field1"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="search">
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
            <el-table-column type="bucklesId" width="55"></el-table-column>
            <el-table-column prop="spare_field1" label="机具编号" sortable></el-table-column>
            <el-table-column prop="spare_field2" label="机具类型" sortable></el-table-column>
            <el-table-column prop="spare_field3" label="机具下发着" sortable></el-table-column>
            <el-table-column prop="bucklesMoney" label="扣费金额(百分比)" sortable></el-table-column>
            <el-table-column prop="bucklesStatus" label="扣费状态" sortable></el-table-column>
            <el-table-column prop="createTime" label="创建时间" sortable></el-table-column>
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
    <el-dialog :visible.sync="dialogVisible" width="45%">
      <div class="dialog">
        <div class="flex">
          <div>机具编号:</div>
          <el-input style="width: 50%" v-model="scopedData.date" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>扣费金额(百分比):</div>
          <el-input style="width: 50%" v-model="scopedData.bucklesMoney" placeholder="请输入"></el-input>
        </div>
        <div class="flex">
          <div>扣费状态:</div>
          <el-input style="width: 50%" v-model="scopedData.bucklesStatus" placeholder="请输入"></el-input>
        </div>

        <div>
          <el-button @click="editSure">确定</el-button>
          <el-button @click="close">取消</el-button>
        </div>
      </div>
    </el-dialog>


  </el-container>
</template>

<script>

import { getBuckles } from '@/api/buckles'

export default {
  data() {
    return {
      spare_field1: '',
      dialogVisible: false,
      scopedData: {},
      tableData: []
    }
  },
  methods: {
    search() {
      getBuckles({ bucklesMoney: this.spare_field1 }).then(res => {
        this.tableData = res.rows
      })
    },
    initBucklesData() {
      getBuckles().then(res => {
        console.log(res.rows)
        this.tableData = res.rows
      })
    },
    close() {
      this.dialogVisible = false
    },
    editSure() {
      this.dialogVisible = false
    },
    editMenu(scope) {
      this.scopedData = scope
      this.dialogVisible = true
    },
    deleteMenu(id) {
      this.$confirm('删除扣费模板?', '提示', {
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

  },
  mounted() {
    this.initBucklesData()
  }
}
</script>
<style lang="scss">

.flex {
  display: flex;
  margin: 40px auto;
  align-items: center;

  input {
    margin-left: 40px;
  }
}

</style>
