<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="true"
    >
      
        <el-form-item label="用户" prop="userCode">
          <el-input
            v-model="queryParams.userCode"
            placeholder="请输入伴鱼号"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
       
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            size="mini"
            @click="handleQuery"
            >搜索</el-button
          >
        </el-form-item>
    </el-form>

    <div>
      <el-table v-loading="loading" :data="userList" style="width: 100%">
        <el-table-column label="用户(伴鱼号)">
         <template slot-scope="scope">
        
          <span style="margin-left: 10px">{{ scope.row.nickname }}({{scope.row.userCode}})</span>
          </template>
        </el-table-column>
      
        <el-table-column label="用户昵称" align="center" > 
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isReal)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="邀请人数" align="center">
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isSelf)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="总收益" align="center">
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isVip)}}</span>
          </template>
        </el-table-column>
         <el-table-column label="操作" align="center">
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isVip)}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
     <pagination
      v-show="total > 0"
      :total="100"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getInviteDetailList"
    />
  </div>
</template>

<script>
import {
  getInviteDetailList,
  getCoinFlowList
} from "@/api/system/user";
  import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "User",
  dicts: ["sys_normal_disable", "sys_user_sex"],
  components: { Treeselect },
  data() {
    return {
      // 遮罩层
      loading: false,
       
      // 总条数
      total: 0,
      // 用户表格数据
      userList: null,
      // 弹出层标题
      title: "",
     
      // 表单参数
      form: {},
     
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined,
      },
      
       
    }
  },
  
  created() {
    this.getInviteDetailList();
  },
  methods: {
    /** 查询用户列表 */
    getInviteDetailList() {
      this.loading = true;
       getInviteDetailList(this.queryParams).then(
        (response) => {
           console.log("this.total=="+this.total)
          
          this.userList = response.data.list;
          this.total = response.data.total;
          this.loading = false;
          console.log("this.total=="+this.total)
        }
      );
    },
     
     
     
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getInviteDetailList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
     
     
     isReal(status){
       var isReal = "否"
      if(status == 1){
        isReal ="是"
      }
      return isReal
     }
  },
};
</script>
  