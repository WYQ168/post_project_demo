<template>
  <div>
    <h3>1.添加部署方法</h3>
    <hr>
    <div style="text-align:center">
      <button><img src="../../assets/icons/add.png" style="vertical-align:bottom;width: 18px;"/> &nbsp;签署方</button>
    </div>

    <input type="checkbox" name="批量签署方" id="" style="margin: 10px 0;"> 批量签署方
    <hr style="box-shadow: 0px 0px 6px;">
    <h3 style="margin-bottom:0">2.设置签章位置</h3>
    <p class="p">在签署页，拖动签章位置到需要盖章的地方</p>
    <hr>
    <div style="position:relative">


      <div v-for="(item,index) in nameData" :key="index">
        <div style="display:flex;justify-content: space-between; font-size: 14px;">
          <div><img src="../../assets/icons/delateCha.png" alt="" width="12px"/>&nbsp;名称</div>
          <div>{{item.name}}</div>
        </div>


        <div style="display:flex;justify-content: space-between; margin: 20px 0;">
          <div style="">
            <img src="../../assets/icons/edit.png" style="margin-top: 10px; width: 24px;"/>
          </div>
          <div v-show="item.isShow==true" style="position: absolute" @click="activeFunc($event,index)">
            <vue-draggable-div :w="100" :h="100">
              <div style=" width:80px;height: 80px; border: 1px solid red ;z-index: 99"></div>
            </vue-draggable-div>
          </div>

          <button style="height: 40px;background-color: rgb(170,170,170); " @click="qianyue(index)">设置签章位置</button>
        </div>
      </div>



      <div style="display:flex;justify-content: space-between;font-size: 14px;">
        <div><img src="../../assets/icons/delateCha.png" alt="" width="12px"></div>
        <div>批量签署方</div>
      </div>
      <div>

        <button style="height: 40px;background-color: rgb(170,170,170);width: 100%;">批量签署方 </button>
      </div>
      <el-button style="width: 100%;margin-top: 20px; background-color: rgb(57,156,156);color: #FFFFFF;" @click="up">
        上一步
      </el-button>
      <el-button style="width: 100%;margin: 10px 0!important; background-color: rgb(57,156,156);color: #FFFFFF;"
      >确定
      </el-button>
    </div>
  </div>
</template>

<script>

  import VueDraggableDiv from 'vue-draggable-div'

  export default {
    name: '',
    props:['pageNum'],//当前页数
    components: {
      VueDraggableDiv
    },

    data() {
      return {
        ydong: false,

        nameData: [
          {
            name: '签约方一',
            isShow: false,
            positionX: 0,
            positionY: 0,
          },
          {
            name: '签约方二',
            isShow: false,
            positionX: 0,
            positionY: 0,
          },
          {
            name: '签约方一',
            isShow: false,
            positionX: 0,
            positionY: 0,
          },
        ]
      }
    },
    methods: {
      up() {
        this.$emit('event2', false)
      },
      qianyue(index) {
        this.ydong = true
        this.nameData[index].isShow=true
      },
      activeFunc(e, index) {
        this.nameData[index].positionX=e.pageX
        this.nameData[index].positionY  =e.pageY
        console.log(this.nameData)
        // console.dir(e)
        // this.positionX = e.pageX
        // this.positionY = e.pageY
        let cliet = {
          positionX: this.positionX,  //获取目标元素
          positionY: this.positionY
        }
        // console.log(cliet)
        let nice = localStorage.setItem("cliet", JSON.stringify(cliet))

      }

    },
    created() {
      // let cliet=localStorage.getItem('cliet')
      // this.cliet=cliet
      // console.dir(this.cliet)
    }
  }
</script>

<style>
  button {
    width: 85%;
    height: 45px;
    font-size: 14px;
    color: #ffffff;
    background-color: rgb(58, 154, 196);
    border: none;
    border-radius: 5px;

  }

  .p {
    padding: 0;
    margin: 0;
    font-size: 12px;
    text-indent: 2em;
  }
</style>
