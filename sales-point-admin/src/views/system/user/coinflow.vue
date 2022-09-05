<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
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
        <el-form-item label="昵称：" prop="nickname">
          <el-input
            v-model="queryParams.nickname"
            placeholder="请输入昵称"
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
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
            >重置</el-button
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
      
        <el-table-column label="登录开始时间" align="center" > 
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isReal)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="登录结束时间" align="center">
          <template slot-scope="scope">
             <span style="margin-left: 10px">{{isReal(scope.row.isSelf)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="登录时长" align="center">
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
      @pagination="getList"
    />
  </div>
</template>

<script>
import {
  getCoinFlowList,
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
        userCode: undefined,
        phonenumber: undefined,
        status: undefined,
        nickname: undefined,
        phone: undefined,
        userLine: undefined,
        sex: undefined,
      },
      
      // 列信息
      columns: [
        { key: 0, label: `用户编号`, visible: true },
        { key: 1, label: `用户名称`, visible: true },
        { key: 2, label: `用户昵称`, visible: true },
        { key: 3, label: `部门`, visible: true },
        { key: 4, label: `手机号码`, visible: true },
        { key: 5, label: `状态`, visible: true },
        { key: 6, label: `创建时间`, visible: true },
      ],
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "用户名称长度必须介于 2 和 20 之间",
            trigger: "blur",
          },
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
          {
            min: 5,
            max: 20,
            message: "用户密码长度必须介于 5 和 20 之间",
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "email",
            message: "'请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        phonenumber: [
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  
  created() {
    this.getCoinFlowList();
    
  },
  methods: {
    /** 查询用户列表 */
    getCoinFlowList() {
      this.loading = true;
      getCoinFlowList(this.addDateRange(this.queryParams, this.dateRange)).then(
        (response) => {
           console.log("this.total=="+this.total)
          
          this.userList = response.data.list;
          this.total = response.data.total;
          this.loading = false;
          console.log("this.total=="+this.total)
        }
      );
    },
     
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        userId: undefined,
        deptId: undefined,
        userName: undefined,
        nickName: undefined,
        password: undefined,
        phonenumber: undefined,
        email: undefined,
        sex: undefined,
        status: "0",
        remark: undefined,
        postIds: [],
        roleIds: [],
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
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
  