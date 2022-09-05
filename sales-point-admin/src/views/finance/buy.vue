<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>购买套餐</span>
      </div>
      <div class="text item">
        <div style="display: flex;flex-wrap: wrap;">
          <el-card shadow="hover" class="buyList" v-for="(item,index) in buyData" :key="index">
            <div style="font-size: 24px;font-weight: bold">{{item.name}}</div>
            <div class="title">{{item.copies}}份合同</div>
            <div>￥ <span style="font-size: 28px">{{item.price}}</span></div>
            <div class="buy" @click="buy(item)">立即购买</div>
          </el-card>

        </div>
        <div class="block" style="text-align: right">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="current"
            :page-size="size"
            @current-change="checkPage"
            :total="total">
          </el-pagination>
        </div>
      </div>

    </el-card>
    <el-dialog
     title="订单"
      :visible.sync="dialogVisible"
      width="45%"
    >
      <div style="text-align: center">
          <div class="flex">
            <div>套餐名称:</div>
            <el-input :disabled="true" style="width: 40%"  v-model="addOrderData.name" placeholder="请输入"></el-input>
          </div>
          <div class="flex">
            <div>套餐价格:</div>
            <el-input :disabled="true" style="width: 40%" v-model="addOrderData.price" placeholder="请输入"></el-input>
          </div>
          <div class="flex">
            <div>套餐合同份数:</div>
            <el-input :disabled="true" style="width: 40%" v-model="addOrderData.copies" placeholder="请输入"></el-input>
          </div>
       <div class="flex" style="margin-bottom: 40px">
         <div>订单描述：</div>
         <el-input type="textarea" placeholder="请输入内容" style="width: 40%;"   v-model="addOrderData.describe" maxlength="30" show-word-limit></el-input>
       </div>

        <div>
          <el-button @click="addSureOrder()">确认订单</el-button>
          <el-button @click="close()">取消订单</el-button>
        </div>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  import {getBuyData} from '../../api/buy'
  import {createOrder} from '../../api/orders'

  export default {
    name: 'buy',
    data() {
      return {
        buyData: {},
        dialogVisible:false,
        addOrderData:{
          describe:'',
        },
        current:1,
        size:10,
        total:0
      }
    },
    methods: {
      initBuyData() {
        getBuyData().then(res => {
          this.buyData = res.data.records
          this.current=res.data.current
          this.total=res.data.total
        })
      },
      checkPage(page){
        this.current=page
        this.initBuyData()
      },
      buy(item) {
        this.addOrderData=item
        console.dir(this.addOrderData)
        this.dialogVisible=true
      },
      //创建套餐
      addSureOrder(){
        let params={
          mealId: this.addOrderData.id,
          orderDescribe:this.addOrderData.describe,
          userType:2
        }
        createOrder(params).then(res=>{
          this.$router.push({
            path:'./buyDetial',
            query:{mealData:JSON.stringify(this.addOrderData)}
          })

        })
        this.dialogVisible=false
      },
      close(){
        this.dialogVisible=false
      }

    },
    mounted() {
      this.initBuyData()
    }
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;


  div {
    margin-right: 20px;

  }

  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
    /*width: 480px;*/
  }

  .buyList {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 200px;
    margin: 20px 16px;
    cursor: pointer;
  }

  .buy {
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    background: rgba(127, 127, 127, 0.35);
  }

  .title {
    margin: 20px 0;
  }

</style>
