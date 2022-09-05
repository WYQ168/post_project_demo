<template>

  <!-- 主模块 -->
  <el-container class="home">
    <el-main style="height: 840px;">
      <!-- 上模块 -->
      <el-row class="home">
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <div class="homeNav">
              <div>
                <router-link to="../sign/signIndex">
                  <img src="../assets/icons/hander.png" alt="">
                  <div>发起签约</div>
                </router-link>
              </div>
              <div class="line"></div>
              <div>
                <router-link to="../sign/signIndex">
                  <img src="../assets/icons/hander-a.png" alt="">
                  <div>签约管理</div>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <div class="homeNav">
              <div>
                <router-link to="">
                  <img src="../assets/icons/yIcon.png" alt="">
                  <div>添加印章</div>
                </router-link>
              </div>
              <div class="line"></div>
              <div>
                <router-link to="../seal/seal">
                  <img src="../assets/icons/yy.png" alt="">
                  <div>印章管理</div>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="homeNav">
              <div>
                <router-link to="../stamp/addStamp">
                  <img src="../assets/icons/guan.png" alt="">
                  <div>新增模板</div>
                </router-link>
              </div>
              <div class="line"></div>
              <div>
                <router-link to="../stamp/stamp">
                  <img src="../assets/icons/more.png" alt="">
                  <div>模板管理</div>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 中模块 -->
      <el-row class="home">
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>待我签署</span>
              </div>
              <div class="text item">
                <div>
                  暂无待我签署合同
                </div>
                <div>去<span>签约管理</span>看看</div>
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>待他人签署</span>
              </div>
              <div class="text item2 ">
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>即将截止签署</span>
              </div>
              <div class="text item2">
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <!-- 下模块 -->
      <el-row class="home">
        <el-col :span="8" style="margin: 0 auto;">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>已完成签署</span>
              </div>
              <div class="text item2">

              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>合同余数</span>
              </div>
              <div class="text item">
                <div>
                  暂无可用套餐
                </div>
                <div>去<span>购买套餐</span>看看</div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>



</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      // 版本号
      version: '3.7.0'
    }
  },
  methods: {
    goTarget(href) {
      window.open(href, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .item2{
    height: 60px;
  }
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home {
  background-color: #f0f0f0;

  .Nav {
    display: flex;
    //justify-content: space-around;
    flex-wrap: wrap;
  }

  .homeNav {
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 350px;
    height: 130px;
    // margin: 20px 20px 20px 10px;
    margin: 30px auto;

    div {


      img {
        width: 40px;
        height: 40px;
      }
    }
  }


  .line {
    margin: 0 60px;
    width: 2px;
    height: 32px;
    background-color: #d0d0d0;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  text-align: center;

  span {
    color: #333333;
    font-size: 16px;
    font-weight: bold;
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
  width: 350px;
  // margin: 20px 20px 20px 10px;
  border-radius: 15px;
  margin: 30px auto;
}

.indexCard {
  display: flex;
  flex-wrap: wrap;
}
</style>

