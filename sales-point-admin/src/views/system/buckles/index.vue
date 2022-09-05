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
            <el-table-column prop="date" label="机具编号" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="扣费金额(百分比)" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
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
    formatter(row, column) {
      return row.address
    }
  }
}
</script>
