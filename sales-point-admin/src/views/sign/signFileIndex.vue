<template>
  <div style="height: 100vh;width: 100%;display: flex;flex-direction: row">
    <div style="width: 10%;height: 100%;background-color: #F6F6F6;display: flex;justify-content: center">
      <div style="margin-top: 25px;text-align: center">
        <el-image
          style="width: 100px; height: 100px"
          :src="require('../../../static/icons/pdfIcon.jpeg')"
          fit="fill"
        ></el-image>
        <p style="font-size: 12px">{{title}}</p>
      </div>
    </div>
    <div style="width: 70%;height: 100%;"  >
      <pdf-component :pdf-url="pdfUrl"></pdf-component>
    </div>
    <div style="width: 20%;height: 100%;display: flex;flex-direction: column;align-content: center;padding: 20px">
      <div style="text-align: center;margin: 0 auto;height: 80%">
        <div class="oneItem" >
          <vue-draggable-div drag-handle=".draggable" :w="100" :h="100"  @resizing="resizingFunc">
            <div class="titlew">签约方一 <span>1</span></div>
            <div class="qianYue">
              <div>xiaotouxue</div>
              <div>日期：xxxx</div>
            </div>
          </vue-draggable-div>
        </div>
        <div class="oneItem" >
          <vue-draggable-div  :w="100" :h="100">
            <div class="titlew draggable">签约方一 <span>1</span> </div>
            <div class="qianYue">
              <div>xiaotouxue</div>
              <div>日期：xxxx</div>
            </div>
          </vue-draggable-div>
        </div>
      </div>
      <div style="text-align: center">

        <el-button style="margin-bottom: 20px;background-color: #1ab394;color: white">发起签约</el-button>
        <el-button style="margin-left: 0px">上一步</el-button>
      </div>

    </div>
    </div>
</template>

<script>

  import VueDraggableDiv from 'vue-draggable-div'
  import PdfComponent from '../components/PdfComponent'
  import contractOneVue from './contractOne.vue'
  import ContractTwo from './contractTwo.vue'

  export default {
    name: 'templateSignIndexForm',
    components: {PdfComponent, contractOneVue, ContractTwo,VueDraggableDiv},
    data() {
      return{
        coordinate: {
          client: {},
          elePosition: {}
        },
        isShow: "",
        pdfUrl: 'http://47.96.117.177/testFile.pdf' + '#toolbar=0',
        title: '实习协议书.pdf',
        fileName: null
      }
    },
    methods: {
      resizingFunc(){
        console.log(e)
      }
    },
    mounted() {

    },

  }
</script>

<style scoped lang="scss">

  .position_set_content{
    position: relative;
    display: flex;
    .position_set_left{
      position: relative;
      width: 200px;
      img{
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        cursor: pointer;
      }
      .position_set_tips{
        margin-top: 50px;
        div:nth-child(2){
          margin-top: 10px;
          font-size: 14px;
          color: rgb(48, 116, 241);
        }
      }
    }
    .position_set_right{
      width: 1500px;
      img{
        width: 100%;
      }
    }
  }


  .oneItem{

    span{
      background: white;
      color: #1e1e1e;
      padding: 1px 5px;
      border-radius: 50%;
      margin-left: 5px;

    }
  }
  .titlew{
    height: 30px;
    background-color: #e1394e;
    border-radius:15px 15px 0 0;
    color: white;
    font-size: 14px;
    line-height: 30px;
  }
  .qianYue{
    height: 60px;
    border: 1px dashed #e1394e;
    border-top: none;
    box-sizing: border-box;
    border-radius: 0 0 15px 15px;
  }

</style>
