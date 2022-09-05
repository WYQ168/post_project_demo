<!--<template>-->
<!--  <div>-->
<!--    <el-card class="box-card">-->
<!--      <div slot="header" class="clearfix">-->
<!--        <span>选择模板</span>-->
<!--      </div>-->
<!--      <div class="text item">-->
<!--        <div style="margin: 20px 0">-->
<!--          <input style="width: 300px;height: 35px" type="text" name="" id="" placeholder="请输入文件名称搜索">-->
<!--          <button style="background-color: #3a9d9d;margin: 0 10px;cursor: pointer" >搜索</button>-->
<!--          <button style="background-color: #b22939;cursor: pointer">重置</button>-->
<!--        </div>-->
<!--        <div style="width: 100%;">-->
<!--          <el-table-->
<!--            class="elTable"-->
<!--            :data="SignData"-->
<!--            border-->
<!--            style="width: 100% ;">-->
<!--            <el-table-column type="index"></el-table-column>-->
<!--            <el-table-column-->
<!--              prop="fileName"-->
<!--              label="模板名称"-->
<!--              width="200">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="fileId"-->
<!--              label="模板编号"-->
<!--              width="260">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="people"-->
<!--              label="创建人"-->
<!--              width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="createTime"-->
<!--              label="创建时间"-->
<!--              width="280">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="updateTime"-->
<!--              label="最后修改时间"-->
<!--              width="280">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="operation"-->
<!--              label="操作">-->
<!--              <template slot-scope="scope">-->
<!--                <el-button type="text" style="color: #ffffff;width: 50px;height: 30px;background-color: #1ab394" @click="useSeal(scope.row)">-->
<!--                  使用-->
<!--                </el-button>-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <el-pagination-->
<!--          background-->
<!--          layout="prev, pager, next"-->
<!--          :current-page="current"-->
<!--          :page-size="size"-->
<!--          @current-change="checkPage"-->
<!--          :total="total">-->
<!--        </el-pagination>-->
<!--      </div>-->
<!--    </el-card>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import { getSignList } from '../../api/sign'-->

<!--  export default {-->
<!--    name: 'templateSignIndex',-->
<!--    data() {-->
<!--      return {-->
<!--        currentPage4: 4,-->
<!--        SignData: [],-->
<!--        signDataList:{},-->
<!--        current:1,-->
<!--        size:10,-->
<!--        total:0,-->

<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      useSeal(scope){-->
<!--        this.signDataList = scope-->
<!--        this.$router.push({-->
<!--          path:'./templateSignIndexForm',-->
<!--          query:{mealData:JSON.stringify(this.signDataList)}-->
<!--        })-->
<!--      },-->
<!--      initSignData() {-->
<!--        getSignList({type:5,current:this.current}).then(res => {-->
<!--          this.SignData=res.data.records-->

<!--          this.current=res.data.current-->
<!--          this.total=res.data.total-->
<!--        })-->
<!--      },-->
<!--      checkPage(page){-->
<!--        this.current=page-->
<!--        this.initSignData()-->
<!--      }-->
<!--    },-->
<!--    mounted() {-->
<!--      this.initSignData()-->
<!--    }-->
<!--  }-->

<!--</script>-->

<!--<style scoped lang="scss">-->

<!--  .text {-->
<!--    font-size: 14px;-->
<!--  }-->

<!--  .item {-->
<!--    margin-bottom: 18px;-->

<!--    button {-->
<!--      width: 60px;-->
<!--      height: 28px;-->
<!--      border-radius: 5px;-->
<!--      border: none;-->
<!--      color: #fff;-->
<!--    }-->

<!--    .operation {-->
<!--      background-color: #3a9d9d;-->
<!--    }-->
<!--  }-->

<!--  .clearfix:before,-->
<!--  .clearfix:after {-->
<!--    display: table;-->
<!--    content: "";-->
<!--  }-->

<!--  .clearfix:after {-->
<!--    clear: both-->
<!--  }-->

<!--  .box-card {-->
<!--    margin: 20px 20px 20px 10px;-->
<!--    border-radius: 15px;-->

<!--  }-->

<!--  ::v-deep .el-table th,-->
<!--  ::v-deep .el-table td {-->
<!--    text-align: center !important;-->
<!--  }-->

<!--  .block {-->
<!--    text-align: right;-->
<!--  }-->
<!--</style>-->
