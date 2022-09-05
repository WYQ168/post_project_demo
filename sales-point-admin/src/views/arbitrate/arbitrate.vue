<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>选择模板</span>
      </div>
      <div class="text item">
        <div style="margin: 20px 0">
          <input class="inputClass" type="text" name="" id="" placeholder="请输入文件名称搜索">
          <input class="inputClass" type="text" name="" id="inputId" placeholder="请输入发起人或签署人搜索">
          <input class="inputClass" type="text" name="" id="" placeholder="请输入文件名称搜索">
          状态:
          <el-select class="widMan" v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="待我签" value="1"></el-option>
            <el-option label="已完成" value="2"></el-option>
          </el-select>

          <button style="background-color: #3a9d9d;margin: 0 10px">搜索</button>
          <button style="background-color: #b22939;">重置</button>
          <div style="float: right">
            <button style="border:1px solid #000;background: white;color: #000000;width: 80px;margin-right: 15px">消息记录</button>
            <button style="background:#1c84c6;width: 80px;" @click="send">发布案件</button>
          </div>
        </div>

        <div style="width: 100%;">
          <el-table
            class="elTable"
            :data="tableData"
            border
            style="width: 100% ;"
          >
            <el-table-column
              prop=""
              label=" "
              width="60"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label=" "
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop=""
              label=" "
              width="60"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label=" "
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="Sender"
              label="发件人"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="people"
              label="签署人"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="timer"
              label="发起时间/截止时间"
              width="280"
            >
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作"
            >
              <div class="operation">
                <div @click="lookUp">查看</div>
                <div @click="revoke">撤销</div>
                <div @click="cancel">取消</div>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1"
        >
        </el-pagination>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'templateSignIndex',
  data() {
    return {
      timer: '',
      select: '',
      currentPage4: 4,
      tableData: [{
        name: '劳动合同',
        Sender: '小许',
        people: '小徐',
        state: '1',
        timer: '2022-07-04-2022-07-04'
      },
        {
          name: '劳动合同',
          Sender: '小许',
          people: '小徐',
          state: '1',
          timer: '2022-07-04-2022-07-04'
        },
        {
          name: '劳动合同',
          Sender: '小许',
          people: '小徐',
          state: '1',
          timer: '2022-07-04-2022-07-04'
        },
        {
          name: '劳动合同',
          Sender: '小许',
          people: '小徐',
          state: '1',
          timer: '2022-07-04-2022-07-04'
        },
        {
          name: '劳动合同',
          Sender: '小许',
          people: '小徐',
          state: '1',
          timer: '2022-07-04-2022-07-04'
        }]
    }
  },
  methods: {
    lookUp() {
      console.dir('--------------')
      this.$router.push('./templateContractView')
    },
    revoke(){
      this.$router.push('./templateContractView')
    },
    cancel(){
      this.$router.push('./templateContractView')
    },
    send(){
      this.$router.push('./send')
    }
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
  border: 1px solid #cccccc;
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
