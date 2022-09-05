<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>实名认证</span>
      </div>
      <div class="item">
          <div class="itemImg">
            <img src="" alt="">
          </div>
          <div style="font-size: 16px;color: #cccccc">请用手机扫描上方二维码进行认证</div>
          <div class="finish">已完成认证</div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'personal'
}
</script>

<style scoped>
.item{
 text-align: center;
}

.itemImg{
  margin: 20px auto;
  width: 150px;
  height: 150px;
  background: #1c84c6;
}
.finish{
  width: 100px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #1c84c6;
  color: white;
  border-radius: 5px;
  margin: 30px auto;
}
</style>
