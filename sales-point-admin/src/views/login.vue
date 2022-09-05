<template>
  <div class="login">

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" v-if="!forgetPasword">
      <div class="imgLogin">
        <img width="100%" height="100%" src="../assets/img/LOGO.png" alt="">
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="请输入手机号"
        >
          <svg-icon slot="prefix" icon-class="phone" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin"

        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>

      <div style="display: flex;justify-content: space-around;">
        <el-checkbox v-model="loginForm.rememberMe" style="color: #CCCCCC;">记住密码</el-checkbox>
        <div class="linkType" style="font-size: 14px;color: #CCCCCC;cursor: pointer;" @click="forGet()">忘记密码?</div>
      </div>
      <el-form-item>
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          class="loginYes"
          @click.native.prevent="handleLogin"
        >
          <div v-if="!loading"><span style="margin-right: 24px">登</span><span>录</span></div>
          <div v-else>登 录 中...</div>
        </el-button>
        <div style="margin-bottom: 60px" v-if="register">
          <router-link class="link-typew" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>

    </el-form>


    <el-form ref="loginForm" class="login-form form" v-else>

      <el-form-item prop="username">
        <el-input
          v-model="phone"
          type="text"
          auto-complete="off"
          placeholder="请输入手机号"
        >
          <svg-icon slot="prefix" icon-class="phone" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>


      <div style="display: flex;justify-content:space-between;width: 64%;margin: 0 auto" prop="code">
        <div>
          <el-input
            v-model="Code"
            type="text"
            auto-complete="off"
            placeholder="请输入验证码"
            style="width: 100%;"
          >
            <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon"/>
          </el-input>
        </div>
        <div class="register-code1">
          <span v-show="show" @click="getNoteInfo()">获取验证码</span>
          <span v-show="!show" class="count">{{count}}s后获取</span>
        </div>
      </div>
      <el-form-item prop="password1" style="margin-top: 20px;">
        <el-input
          v-model="password1"
          type="password"
          auto-complete="off"
          placeholder="请设置新密码"
          @keyup.enter.native="handleLogin"

        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input
          v-model="password2"
          type="password"
          auto-complete="off"
          placeholder="请确认新密码"
          @keyup.enter.native="handleLogin"

        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>

      <div style="margin-top: 30px">
        <el-button
          size="medium"
          type="primary"
          class="loginYes"
        >
          <div @click="forGetPass()">重置密码</div>

        </el-button>

      </div>


    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2021 suCaiTong.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import {getSmsCode,modifyPassWrod} from "@/api/login";
  import Cookies from "js-cookie";
  import {encrypt, decrypt} from '@/utils/jsencrypt'

  export default {
    name: "Login",
    data() {
      return {
        forgetPasword: false,
        show: true,
        timer: null,
        uuid:'',
        loginForm: {
          username: "LS",
          password: "123456",
          rememberMe: false,
          platform: 1,
          code: "",
          uuid: ""
        },
        loginRules: {
          username: [
            {required: true, trigger: "blur", message: "请输入您的账号"}
          ],
          password: [
            {required: true, trigger: "blur", message: "请输入您的密码"}
          ],

        },
        loading: false,
        // 验证码开关
        captchaOnOff: true,
        // 注册开关
        register: true,
        redirect: undefined,
        modify:null
      };
    },

    created() {
      this.getCookie();
    },
    methods: {
      forGetPass() {
        let params={
          platform:1,
          userType:"manage",
          uuid: this.uuid,
          phone:this.phone,
          smsCode:this.Code,
          password:this.password1,
          modify:"password"
        }
        modifyPassWrod(params).then(res=>{
          this.$message({
            type: 'success',
            message: '重置密码成功'
          })
          this.$router.push('/login')
        })
      },
      getCookie() {
        const username = Cookies.get("username");
        const password = Cookies.get("password");
        const rememberMe = Cookies.get('rememberMe')
        this.loginForm = {
          username: username === undefined ? this.loginForm.username : username,
          password: password === undefined ? this.loginForm.password : decrypt(password),
          rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
        };
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            if (this.loginForm.rememberMe) {
              Cookies.set("username", this.loginForm.username, {expires: 30});
              Cookies.set("password", encrypt(this.loginForm.password), {expires: 30});
              Cookies.set('rememberMe', this.loginForm.rememberMe, {expires: 30});
            } else {
              Cookies.remove("username");
              Cookies.remove("password");
              Cookies.remove('rememberMe');
            }
            this.$store.dispatch("Login", this.loginForm).then((res) => {
              console.log("Login===" + JSON.stringify(res))
              this.$router.push({path: this.redirect || "/"}).catch(() => {
              });
            }).catch(() => {
              this.loading = false;

            });
          }
        });
      },
      forGet() {
        this.forgetPasword = true
      },
      getNoteInfo() {
        if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone)) {
          this.$message({
            type: 'error',
            message: '手机号码格式错误'
          })
          return false;
        } else {
          //倒计时
          getSmsCode({phone: this.phone}).then(res => {
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
  };
</script>

<style rel="stylesheet/scss" lang="scss" >
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url("../assets/img/di.png");
    background-size: cover;

  }

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    text-align: center;
    width: 570px;
    background: rgba(96, 112, 129, 0.51);
    border-radius: 10px;

    .el-input {
      width: 360px;
      height: auto;
      border-radius: 10px;


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

  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }

  .login-code {
    width: 33%;
    height: 38px;
    float: right;

    img {
      cursor: pointer;
      vertical-align: middle;
    }
  }

  .char {
    margin-top: 20px;
    font-size: 18px;
    font-weight: normal;
    color: #CCCCCC;
    margin-bottom: 60px;
  }

  .loginYes {
    width: 360px;
    font-size: 20px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto ;
    background: #1DD2AF;
    border: 2px solid #1DD2AF;
    border-radius: 10px;
  }

  .link-typew,
  .link-typew:focus {
    color: #CCCCCC;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: #1ab394 !important;
    }
  }

  .el-login-footer {
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

  .login-code-img {
    height: 38px;
  }

  .imgLogin {
    width: 211px;
    height: 84px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 16% auto 9% auto;
  }

  .register-code1 {
    width: 116px;
    height: 55px;
    background: #1DD2AF;
    border: 2px solid #1DD2AF;
    border-radius: 10px;
    line-height: 55px;
    margin-left: 10px;
    font-size: 18px;
    color: white;
    cursor: pointer;

  }
.linkType:hover{
  color: #1ab394;
}
  .form {
    padding: 80px 0;
  }
  .el-form-item__error{
    left: 19%;
  }
  @media only screen and (max-width: 750px) {
    .login {
      background-image: url("../assets/img/di2.png");
    }

    .login-form {
      width: 75%;


      .el-input {
        height: 47px;

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
    .loginYes {
      width: 80%;
      height: 40px;
      font-size: 16px;
    }
    .imgLogin {
      width: 100px;
      height: 44px;
    }
    .char {
      margin-bottom: 20px;
      font-size: 14px;
    }
    .register-code1 {
      width: 180px;
      margin-left: 10px;
      font-size: 12px;
      line-height: 47px;
      height: 47px;
    }
  }

</style>
