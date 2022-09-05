<template>
  <div class="login">

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <div class="imgLogin
      ">

      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"

        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>

      <div style="display: flex;justify-content: space-around;">
        <el-checkbox v-model="loginForm.rememberMe" style="color: #CCCCCC;">记住密码</el-checkbox>
        <div style="font-size: 14px;color: #CCCCCC;cursor: pointer;">忘记密码?</div>
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
        <div style="" v-if="register">
          <router-link class="link-typew" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>

    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2021 suCaiTong.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import {getCodeImg, getCodeText} from "@/api/login";
  import Cookies from "js-cookie";
  import {encrypt, decrypt} from '@/utils/jsencrypt'


  export default {
    name: "Login",

    data() {
      return {
        codeUrl: "",
        codeText: "",
        loginForm: {
          username: "admin",
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
          code: [{required: true, trigger: "change", message: "请输入验证码"}],

        },
        loading: false,
        // 验证码开关
        captchaOnOff: true,
        // 注册开关
        register: true,
        redirect: undefined
      };
    },

    created() {

      this.getCookie();
    },
    methods: {

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
              if (this.captchaOnOff) {
                this.getCode();
              }
            });
          }
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url("../assets/images/login-background.jpg");
    background-size: cover;

  }

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    text-align: center;
    width: 35%;
    background: rgba(96, 112, 129, 0.51);
    border-radius: 10px;
    .el-input {
      width: 70%;
      height: auto;
      border-radius: 10px;


      input {
        padding-left: 53px;
        width: 100%;
        height: 55px;
        border: 1px solid #1DD2AF;
        border-radius: 10px;
        color:#cccccc;
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
  .char{
    margin-top: 20px;
    font-size: 18px;
    font-weight: normal;
    color: #CCCCCC;
    margin-bottom: 60px;
  }
  .loginYes {
    margin-top: 15px;
    width: 70%;
    font-size: 20px;
    height: 55px;
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
      color:#1ab394!important;
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
  .imgLogin{
    width: 211px;
    height: 84px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 12% auto 9% auto;
  }

  @media only screen and (max-width: 750px) {
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
      height: 40px;
      font-size: 16px;
    }
    .imgLogin{
      width: 100px;
      height: 44px;
    }
    .char{
      margin-bottom: 20px;
      font-size: 14px;
    }
  }

</style>
