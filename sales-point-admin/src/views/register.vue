<template>
  <div class="register">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form">
      <div class="imgLogin
      ">
        <img width="100%" height="100%" src="../assets/img/LOGO.png" alt="">
      </div>

      <el-form-item prop="userType">
        <div style="display: flex;justify-content: space-evenly">
          <el-radio v-model="radio" label="1">个人</el-radio>
          <el-radio v-model="radio" label="2">企业</el-radio>
        </div>
      </el-form-item>


      <el-form-item prop="phone">
        <el-input v-model="registerForm.phone" type="text" auto-complete="off" placeholder="请输入手机号">
          <svg-icon slot="prefix" icon-class="phone" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>

      <div class="codeRe" prop="code">
        <el-input
          v-model="registerForm.code"
          type="text"
          auto-complete="off"
          placeholder="请输入验证码"
          style="width: 40%"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon"/>
        </el-input>
        <div class="register-code">
          <span v-show="show" @click="getNoteInfo()">获取验证码</span>
          <span v-show="!show" class="count">{{count}}s后获取</span>
        </div>
      </div>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          auto-complete="off"

          placeholder="请设置密码"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>

      <div style="text-align: left;width: 70%;margin: 0 auto">
        <el-checkbox v-model="checked" style="color: #CCCCCC;">同意用户协议</el-checkbox>
      </div>

      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          class="zhuce"
          @click.native.prevent="handleRegister()"
        >
          <div style="font-size: 20px" v-if="!loading">注 册</div>
          <div style="font-size: 20px" v-else>注 册 中...</div>
        </el-button>
        <div style="text-align: right;margin: 20px 0">
          <router-link class="link-type" :to="'/login'">使用已有账户登录</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-register-footer">ip
      <span>Copyright © 2018-2021 suCaiTong.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import {register, getSmsCode} from "@/api/login";

  export default {
    name: "Register",
    data() {

      return {
        show: true,
        count: '',
        checked: false,
        timer: null,
        codeUrl: "",
        radio: "1",
        list: [{
          name: '个人'
        },
          {
            name: '企业'
          }],
        registerForm: {
          phone: "",
          password: "",
          code: "",
          verificationUUid: ""
        },
        registerRules: {
          phone: [
            {required: true, trigger: "blur", message: "请输入您的手机号"},
            {min: 11, max: 11, message: '手机号格式错误', trigger: 'blur'}
          ],
          password: [
            {required: true, trigger: "blur", message: "请输入您的密码"},
            {min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur'}
          ],

          code: [{required: true, trigger: "change", message: "请输入验证码"}]
        },
        loading: false,
        captchaOnOff: true
      };
    },
    created() {

    },
    methods: {
      handleRegister(params) {
        let registerw = {
          phone: this.registerForm.phone,
          passwordStr:this.password,//密码
          verificationCode: this.registerForm.code,
          loginFrom:1,//1企业,2个人
          userType: "manage",
          verificationUUid: this.uuid
        }
        if (this.checked == false) {
          this.$message({
            type: 'error',
            message: '请先同意用户协议'
          })
        } else {
          register(registerw).then(res => {
            if (res.code == 200) {
              this.$router.push('/login')
              this.$message({
                type: 'success',
                message: '注册成功'
              })
            }

          })
        }

      },
      choose() {

      },
      getNoteInfo() {
        if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.registerForm.phone)) {
          this.$message({
            type: 'error',
            message: '手机号码格式错误'
          })

        } else {
          //倒计时
          getSmsCode({phone: this.registerForm.phone}).then(res => {
            this.$message({
              type: 'success',
              message: '发送成功注意查收!'
            })
            this.uuid = res.data.uuid
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000)
            }

          })

        }

      }

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .imgLogin {
    width: 211px;
    height: 84px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 12% auto 9% auto;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("../assets/img/di.png");
    background-size: cover;
  }

  .register-form {
    text-align: center;
    border-radius: 10px;
    background: rgba(96, 112, 129, 0.51);

    padding: 25px 25px 5px 25px;

    .el-input {
      width: 70%;
      height: auto;
      border-radius: 10px;
      margin: 0 20px;

      input {
        padding-left: 53px;
        width: 100%;
        height: 55px;
        border: 1px solid #1DD2AF;
        border-radius: 10px;
        color: #cccccc;
        background: rgba(96, 112, 129, 0.51);
      }
    }

    .input-icon {
      height: 55px;
      width: 24px;
      margin-left: 15px;
      color: #ffffff;
    }
  }

  .active {
    border: 1px solid #ffffff;
    background-color: #1ab394;
  }

  .register-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }

  .register-code {
    width: 133px;
    height: 55px;
    background: #1DD2AF;
    border: 2px solid #1DD2AF;
    border-radius: 10px;
    float: right;
    margin-right: 60px;
    line-height: 55px;
    font-size: 18px;
    color: white;
    cursor: pointer;


  }
  .link-type:hover{
    color: #1ab394;
  }

  .codeRe {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .el-input{
      margin-left: 60px;
    }
  }

  .el-register-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .register-code-img {
    height: 38px;
  }

  .el-form-item__error {
    left: 15%;
  }

  .zhuce {
    margin-top: 20px;
    width: 368px;
    height: 55px;
    background: #1DD2AF !important;
    border: 2px solid #1DD2AF !important;
    border-radius: 10px;
  }

  .userName {
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;

    .quiew {
      width: 15px;
      height: 15px;
      border: 1px solid #1ab394;
      margin-right: 10px;
    }
  }

  .link-type {
    margin-right: 80px;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #1ab394;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #1ab394;
    border: #1ab394 solid 1px;
  }

  @media only screen and (max-width: 750px) {

    .el-form {
      width: 75%;

      .el-input {
        width: 80%;
        height: 47px;
        margin: 0;

        input {
          height: 47px;
          padding-left: 45px;
        }

      }

      .input-icon {
        height: 45px;
        width: 20px;

      }
    }
    .register-form {
      width: 80%;
    }
    .imgLogin {
      width: 130px;
      height: 45px;
    }
    .zhuce {
      width: 202px;
      height: 47px;

    }
    .register-code {
      font-size: 12px;
      height: 47px;
      line-height: 47px;
      margin-right: 0;
      width: 80px;
      margin-left: 20px;
    }

  }
.codeRe{
  margin-left: 0;
}
  .el-radio__label {
    color: white;
  }

  .el-radio__input.is-checked .el-radio__inner {
    background-color: #1ab394;
    border: 1px solid #ffffff;
    border-radius: 0;
  }

  .el-radio__inner {
    border-radius: 0;
    border: 1px solid #1ab394;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #1ab394;
  }
</style>
