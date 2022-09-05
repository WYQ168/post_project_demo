<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>选择模板</span>
      </div>
      <div class="text item">
        <div style="margin: 20px 0">
          <input class="inputClass" type="text" name="" id="" placeholder="请输入文件名称搜索" v-model="fileName">
          <input class="inputClass" type="text" name="" id="inputId" placeholder="请输入发起人或签署人搜索" v-model="person">
          时间:
          <el-date-picker v-model="timer" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <button style="background-color: #3a9d9d;margin: 0 10px" @click="submit">搜索</button>
          <button style="background-color: #b22939;" @click="reset">重置</button>
        </div>


        <el-tabs>
          <el-tab-pane v-for="(item,index) in navList" :key="index">
            <span slot="label" @click="clickche(index)">{{ item.title }}</span>
            <div style="width: 100%;">
              <el-table class="elTable" :data="contractData" border style="width: 100% ;">
                <el-table-column type="index" ></el-table-column>
                <el-table-column prop="contractTitle" label="模板名称" ></el-table-column>
                <el-table-column prop="Sender" label="发件人" ></el-table-column>
                <el-table-column prop="signatorName" label="签署人"></el-table-column>
                <el-table-column prop="status" label="状态" >
                  <template slot-scope="scope">
                    <span>{{scope.row.status==1?'待我处理'
                      :scope.row.status==2?'待他处理'
                      :scope.row.status==3?'已完成'
                      :scope.row.status==4?'已逾期'
                      :scope.row.status==5?'待仲裁':'已作废'}}</span>
                  </template>
                </el-table-column>

                <el-table-column prop="startTime" label="发起时间/截止时间" width="280"></el-table-column>
                <el-table-column prop="operation" label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" style="color: #00afff" icon="el-icon-view"
                               @click="lookData(scope.row)"
                    >查看
                    </el-button>
                    <el-button type="text" style="color: #00afff" icon="el-icon-thumb" @click="deletData(scope.row.id)">
                      签署
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div class="block" style="margin-top: 20px">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :current-page="current"
                  :page-size="size"
                  @current-change="checkPage"
                  :total="total">
                </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>

  </div>


    </el-card>


  </div>
</template>

<script>
  import  {getContractList,getContractFileData} from '../../api/contract'
  export default {
    name: 'contractIndex',
    data() {
      return {
        timer: '',
        select: '',
        currentPage4: 4,
        contractId:'',
        navList: [
          {
            title: '全部文件'
          },
          {
            title: '待我处理'
          },
          {
            title: '待他人处理'
          },
          {
            title: '已完成'
          },
          {
            title: '已逾期'
          },
          {
            title: '待仲裁'
          },
          {
            title: '已作废'
          }
        ],
        contractData: [],
        conList:{},
        fileName:"",
        person:"",
        current:1,
        size:10,
        total:1
      }
    },
    methods: {
      clickche(index){
          if(index && index==0){
            index=null;
          }
          getContractList({status:index}).then(res=>{
            this.contractData=res.data.rows
          })

      },
      lookData(scope){
        this.conList=scope
        getContractFileData({contractId:this.conList.id}).then(res=>{
          this.conList=res.data
          this.$router.push({
            path:'./templateContractView',
            query:{fileData:JSON.stringify(this.conList)}
          })
        })

      },
      initContractList(){
        getContractList().then(res=>{
          this.contractData=res.data.rows
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      reset(){
        this.fileName=''
        this.person=''
        this.timer=''
      },
      checkPage(page){
        this.current=page
        this.initContractList()
      },
      submit(){
        let obj = {}
        obj.fileName  =this.fileName
        obj.signName=this.person
        obj.startTime = this.timer[0]
        obj.endTime = this.timer[1]
        getContractList(obj).then(res=>{
          this.contractData=res.data.rows
        })
      }

    },
    mounted() {
      this.initContractList()
    }
  }
</script>

<style scoped lang="scss">
  .inputClass[data-v-723a8c86]{
    height: 36px;
  }
  #inputId {
    width: 200px;
  }

  .inputClass {
    width: 150px;
    height: 35px;
    margin-right: 15px;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid #cccccc;
  }

  .navList {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    div {
      width: 100px;
      height: 35px;
      background-color: #f3f3f3;
      border: 1px solid #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
