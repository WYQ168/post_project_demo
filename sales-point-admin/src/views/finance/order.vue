<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单列表</span>
      </div>
      <div class="text item">
        <div style="width: 100%;">
          <el-table class="elTable" :data="OrderData" border style="width: 100% ;">
            <el-table-column type="index"></el-table-column>

            <el-table-column prop="mealName" label="套餐名称"  ></el-table-column>

            <el-table-column prop="orderDescribe" label="套餐描述"  ></el-table-column>

            <el-table-column prop="mealPrice" label="套餐价格"></el-table-column>

            <el-table-column prop="mealCopies" label="套餐份数"></el-table-column>

            <el-table-column prop="payPrice" label="实际应支付金额"></el-table-column>

            <el-table-column prop="createTime" label="创建时间"></el-table-column>

            <el-table-column label="支付状态"  >
              <template slot-scope="scope">
                {{scope.row.payStatus==1?'已支付':'未支付'}}
              </template>
            </el-table-column>

            <el-table-column prop="payTime" label="支付时间"  ></el-table-column>

            <el-table-column label="订单状态" >
              <template slot-scope="scope">
                {{scope.row.orderStatus==1?'正常':'已取消'}}
              </template>
            </el-table-column>

            <el-table-column label="操作"   fixed="right" width="200px">
              <template slot-scope="scope">
                <el-button type="text" style="color: #00afff" icon="el-icon-shopping-cart-1" @click="payOrder(scope.row)">支付</el-button>
                <el-button type="text" style="color: #00afff" icon="el-icon-delete" @click="canOrder(scope.row.id)">取消订单</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="block">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="current"
          :page-size="size"
          @current-change="checkPage"
          :total="total">
        </el-pagination>
      </div>
    </el-card>


  </div>
</template>

<script>
  import {getOrderList ,goAliPay,cancelOrder} from '../../api/orders'

  export default {
    name: 'order',
    data() {
      return {
        currentPage4: 4,
        OrderData: [],
        dialogVisible:false,
        mealData:{},
        payData:{},
        current:1,
        size:10,
        total:0

      }
    },
    methods: {
      //获取数据列表
      initOrderList() {
        //todo 接口
        getOrderList({userType: 2,current:this.current}).then(res => {
          this.OrderData = res.data.records
          this.current=res.data.current
          this.total=res.data.total

        })

      },
      checkPage(page){
        this.current=page
        this.initOrderList()
      },

      //支付订单
      payOrder(scope){
        this.payData=scope
        let payData={
            name:this.payData.mealName,
            price:this.payData.payPrice,
            copies:this.payData.mealPrice,


        }
        let params={
          orderId:this.payData.id,
          userType:this.payData.userType,

        }
        console.dir(params)

        goAliPay(params).then(res=>{
          this.$router.push({
            path:'./buyDetial',
            query:{mealData:JSON.stringify(payData)}
          })
        })

      },
      //取消菜单
      canOrder(scope){
        let orderId=scope
        cancelOrder({orderId:orderId,userType:2}).then(res=>{
          this.$message({
            type: 'success',
            message: '取消成功!'
          })
          this.initOrderList()
        })
      },

    },
    mounted() {
      this.initOrderList()
    }
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    margin-top: 30px;
    align-items: center;

    div {
      margin-right: 20px;
    }

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
