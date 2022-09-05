<!--<template>-->
<!--  &lt;!&ndash; 主模块  &ndash;&gt;-->
<!--  <div style="height: 90vh;width: 100%;display: flex;background-color: #F6F6F6;flex-direction: row">-->
<!--    &lt;!&ndash; 左边模块 &ndash;&gt;-->
<!--    <div style="background-color: #FFFFFF; width: 15%;height: 100%;display: flex;justify-content: center">-->
<!--      <div style="margin-top: 25px;text-align: center">-->
<!--        <el-image style="width: 100px; height: 100px" :src="require('../../../static/icons/pdfIcon.jpeg')" fit="fill">-->
<!--        </el-image>-->
<!--        <p style="font-size: 12px">{{ mealData.fileName }}</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; 中间模块 &ndash;&gt;-->
<!--    <div id="pdfFather" style="width: 1000px;height: 100%;background-color: #FFFFFF;margin: 0px 25px 0px 25px;">-->
<!--      <div class="swiper-container">-->
<!--        <div class="swiper-wrapper">-->
<!--          <div class="swiper-slide" v-for="(item,index) in dataList">-->
<!--            <img :src="item.img" alt="">-->
<!--          </div>-->

<!--        </div>-->
<!--        &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--        <div class="swiper-pagination"></div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; 下边模块 &ndash;&gt;-->
<!--    <div-->
<!--      style="width: 350px;display: flex;flex-direction: column;align-content: center;padding: 20px;background-color: #FFFFFF;">-->
<!--      <contractOne @event1="getMessg1" v-show="!isShow"/>-->
<!--      &lt;!&ndash;子组件&ndash;&gt;-->
<!--      <contract-two @event2="getMessg2" :pageNum="pageNum" v-show="isShow"/>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import pdf from 'vue-pdf'-->
<!--  import PdfComponent from '../components/PdfComponent'-->
<!--  import contractOne from './contractOne.vue'-->
<!--  import ContractTwo from './contractTwo.vue'-->


<!--  import 'swiper/dist/js/swiper'-->
<!--  import 'swiper/dist/css/swiper.css'-->
<!--  import Swiper from "swiper"-->

<!--  export default {-->
<!--    name: 'templateSignIndexForm',-->
<!--    components: {PdfComponent, contractOne, ContractTwo, pdf},-->
<!--    data() {-->
<!--      return {-->
<!--        dataList: [-->
<!--          {img: require('../../../static/1.png')},-->
<!--          {img: require('../../../static/2.png')},-->
<!--        ],-->
<!--        isShow: false,-->
<!--        // pdfUrl: 'http://47.96.117.177/testFile.pdf' + '#toolbar=0',-->
<!--        title: '实习协议书.pdf',-->
<!--        mealData: {-->
<!--          fileName: '',-->
<!--          fileUrl: ''-->
<!--        },-->
<!--        pdfUrl: '',-->
<!--        pageTotalNum: 1, // 总页数-->
<!--        pageNum: 1, // 当前页数,-->

<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      getMessg1(val) {-->
<!--        this.isShow = val-->
<!--      },-->
<!--      getMessg2(val) {-->
<!--        this.isShow = val-->
<!--      },-->

<!--    },-->
<!--    mounted() {-->
<!--      this.mealData = JSON.parse(this.$route.query.mealData)-->
<!--      let that=this-->
<!--      new Swiper('.swiper-container', {-->
<!--        direction: 'vertical', // 垂直切换选项-->
<!--        mousewheel: true, //滚轮-->
<!--        // autoplay: { //自动开始-->
<!--        //   delay: 2500, //时间间隔-->
<!--        //   disableOnInteraction: false, //*手动操作轮播图后不会暂停*-->
<!--        // },-->
<!--        loop: false, // 循环模式选项-->

<!--        // 如果需要分页器-->
<!--        pagination: {-->
<!--          el: '.swiper-pagination',-->
<!--          clickable: true, // 分页器可以点击-->
<!--        },-->

<!--        // 如果需要前进后退按钮-->
<!--        navigation: {-->
<!--          nextEl: '.swiper-button-next',-->
<!--          prevEl: '.swiper-button-prev',-->
<!--        },-->

<!--        // 如果需要滚动条-->
<!--        // scrollbar: {-->
<!--        //   el: '.swiper-scrollbar',-->
<!--        // },-->
<!--        on: {-->

<!--          slideChangeTransitionStart: function() {-->
<!--            that.pageNum=this.activeIndex + 1-->
<!--          },-->
<!--        },-->
<!--      })-->
<!--    },-->

<!--  }-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  h1,-->
<!--  h2 {-->
<!--    font-weight: normal;-->
<!--  }-->

<!--  ul {-->
<!--    list-style-type: none;-->
<!--    padding: 0;-->
<!--  }-->

<!--  li {-->
<!--    display: inline-block;-->
<!--    margin: 0 10px;-->
<!--  }-->

<!--  a {-->
<!--    color: #42b983;-->
<!--  }-->

<!--  .swiper-container {-->
<!--    border: #1ab394 solid 1px;-->
<!--    height: 800px;-->
<!--    width: 70%;-->
<!--    z-index: 0;-->
<!--  }-->

<!--  .swiper-slide {-->
<!--    overflow: hidden;-->

<!--    img {-->
<!--      width: 125%;-->
<!--      transform: translateY(-20%);-->
<!--      height: 130%;-->


<!--    }-->
<!--  }-->
<!--</style>-->
