<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>权限设置</span>
      </div>
      <div class="text item"  v-for="(item,index) in permissionTitleList" :key="index" style="margin: 15px 0 10px 10px;">
        <div class="permissionTitle">
          <el-checkbox :indeterminate="item.checkIcon" v-model="item.checkAll" @change="handleCheckAllChange(item,index)">{{item.title}}</el-checkbox>
        </div>
        <div  style="border: 1px solid rgba(0,0,0,0.1);">
          <el-checkbox-group v-model="item.checkList" @change="handleCheckedCitiesChange(item,index)">
            <el-checkbox v-for="(item2,index2)  in item.text" :key="index2" :label="item2" class="permissionLi">{{item2}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { create } from 'domain';

export default {
  name: 'power',
  data() {
    return {
      checkAll: false,
      checkAll2: false,
      checkGroupMap:{},
      checkGroupList:[],
      permissionTitleList:[
        {
          title:'发起签约',
          text:["使用模板","文件发起签约"],
          checkList:[],
          checkAll:false,
          checkIcon:false
        },
        {
          title:'合同管理',
          text:["查看合同","签署合同","撤销合同","催签合同","合同链接"],
          checkList:[],
          checkAll:false,
          checkIcon:false
        },
        {
          title:'模板管理',
          text:["新增模板","编辑模板","删除模板","发起签约"],
          checkList:[],
          checkAll:false,
          checkIcon:false
        },
        {
          title:'印章管理',
          text:["新增印章","查看印章","设为默认"],
          checkList:[],
          checkAll:false,
          checkIcon:false
        },
        {
          title:'组织架构',
          text:["部门新增/删除","部门编辑/设置","员工新增/删除","员工编辑/设置","角色新增/删除","角色编辑/设置"],
          checkList:[],
          checkAll:false,
          checkIcon:false
        },
      ]
    }
  },
  mounted(){
    for(let i=0;i<this.permissionTitleList.length;i++){
      this.checkGroupMap['group'+i]={
        list:[]
      }
    }
    console.dir(this.checkGroupMap)
  },
  methods: {
    handleCheckAllChange(item,index) {
      this.permissionTitleList[index].checkIcon=false
      if(this.permissionTitleList[index].checkAll){
        this.permissionTitleList[index].checkList.push(...item.text)
      }else{
        this.permissionTitleList[index].checkList=[]
      }
    },
    handleCheckedCitiesChange(item,index) {
     if(this.permissionTitleList[index].text.length==this.permissionTitleList[index].checkList.length){
      this.permissionTitleList[index].checkIcon=false
      this.permissionTitleList[index].checkAll=true
     }else if(this.permissionTitleList[index].checkList.length>0){
      this.permissionTitleList[index].checkIcon=true
      this.permissionTitleList[index].checkAll=false
     }else{
      this.permissionTitleList[index].checkIcon=false
      this.permissionTitleList[index].checkAll=false
     }
    }
  },
 created() {
  console.log(this.permissionTitleList)
 }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
.permissionTitle{
  width: 100%;
  background-color: rgb(249,250,252);
  height: 55px;
  line-height: 55px;
  padding-left: 40px;
}
.permissionLi{
  height: 55px;
  line-height: 55px;
  width: 190px;
  border-right: 1px solid rgba(0,0,0,0.1);
  text-align: left;
  padding-left: 40px;
}

</style>
