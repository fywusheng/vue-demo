<template>
  <div class="login">
    <div class="entry-logo"></div>
    <toast v-model="showPositionValue" type="text" :time="2000" is-show-mask :text="toastText" :position="position" width="200px"></toast>
    <group>
      <x-input title="手机号" v-model='mobile' class="mobile" type="tel" :max="11" placeholder="请输入手机号"></x-input>
      <x-input title="验证码" class="weui-vcode verifycode" placeholder="请输入验证码" type="tel" v-model.trim="verifycode">
        <x-button :class="{'sending':isSending}" slot="right" :text="icodetxt" type="primary" mini @click.native="getIcode">adsf</x-button>
      </x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" class="login-btn" @click.native="loginByVerifycode">免注册登录</x-button>
    </box>

  </div>
</template>
<script>
import { Group, XInput, XButton, Box, Toast } from 'vux'
// import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Group,
    XInput,
    XButton,
    Box,
    Toast
  }
}
</script>
<style lang='less'>
  @import "../../less/varible.less";

  .weui-tab {
    background: #fff;
  }
  .login {
    background: #fff;
    .entry-logo {
      width: 64px;
      height: 64px;
      margin: 64px auto;
      background-image: url(@logo-url);
    }

    .weui-cells:before {
      border-top: 0;
    }
    .weui-cell:before {
      position: absolute;
      right: 15px;
    }
    .weui-cells:after {
      position: absolute;
      left: 15px;
      right: 15px;
    }
    .weui-label {
      font-size: 14px;
    }
    .weui-vcode {
      button {
        background: #ffe89a;
        color: #a56100;
        &:active,&:hover {
          background: #ffe89a;
          color: #a56100;
        }
      }
    }

    .mobile {
      font-size: 14px;
    }
    .verifycode {
      font-size: 14px;
    }
    .login-btn {
      background: #fed854;
      color: #b96d00;
      font-size: 16px;
      height: 44px;
      margin-top: 50px;
      &:active, &:hover{
        background: #fed854;
        color: #a56100;

      }
    }
    .sending {
      background-color: #e7e7e7;
      color: #705408;

    }
  }
</style>
