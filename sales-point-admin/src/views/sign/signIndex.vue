<template>
  <div class="sign">
    <div class="signIndex" @click="skipSignPage(index)">
      <div class="signImg">
        <span class="add">+</span>
        <img src="../../assets/icons/guan.png" alt="">
      </div>
      <div>
        <h1>模板发起签署</h1>
        <div>智能生成合同</div>
      </div>
    </div>
    <div class="signIndex" @click="skipSignPage">
      <div class="signImg">
        <span class="add">+</span>
        <img :src="img" alt="">
      </div>
      <div >
        <h1>文件发起签署</h1>
        <div>支持pdf/docx/doc/jpg/xls/xlsx/wps等格式</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signIndex',
  data(){
    return{
      index:0,
      img:require('../../assets/icons/hander.png')

    }
  },
  methods:{
    skipSignPage(index){
     if(index==0){
       this.$router.push("./templateSignIndex")
     }else{
       this.$router.push("./documentSigning")
     }
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 5px 0;
  font-size: 24px;
  color: #333333;
}
.sign {
  width: 100%;
  height: 820px;
  background-color: #f0f0f0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 25px 0;
}
.signImg{
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  .add{
    position: absolute;
    font-size: 40px;
    right: -6px;
    top: 0;
    color: #333333;
    cursor: pointer;
  }
}

.signIndex {
  width: 500px;
  height: 150px;
  display: flex;
  align-items: center;
  padding-left: 80px;
  border-radius: 15px;
  background-color: #ffffff;
  cursor: pointer;

img {
  width: 40px;
  height: 40px;
}
}

</style>
