<template>
  <div>
    <!-- 新增部门 -->
    <div>
      <div style="padding: 14px 15px 7px;min-height: 40px; border-bottom: 1px solid #e6ebf5;">
        <span>添加部门</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px" style="padding:40px">
        <el-form-item label="部门名称" >
          <el-input v-model="form.name" style="width:300px;margin-bottom: 20px;" placeholder="请输入部门名称" ></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="form.region" placeholder="请选择活动区域" style="width:300px;margin-bottom: 20px;">
            <el-option label="部门1" value="shanghai"></el-option>
            <el-option label="部门2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职能描述">
          <el-input type="textarea" v-model="form.desc" style="width:300px;margin-bottom: 20px;"
          :autosize="{minRows:8,maxRows:20}"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 权限设置 -->
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
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </div>

</template>

<script>
export default {
  name: 'addMember',
  data() {
    return {
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
      ],
      form: {
        name: '',
        region: '',
        desc: ''
      }
    };
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
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.permissionTitle {
  width: 100%;
  background-color: rgb(249, 250, 252);
  height: 55px;
  line-height: 55px;
  padding-left: 40px;
}

.permissionLi {
  height: 55px;
  line-height: 55px;
  width: 190px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;
  padding-left: 40px;
}

</style>
