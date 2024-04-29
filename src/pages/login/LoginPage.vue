<template>
  <div class="login-page">
    <div class="content container">
      <div class="login-page__text">
        <div class="login-page__title">
          <span>Back to pawsome matches</span>
        </div>
        <div class="login-page__title-min">
          <span>Missed us? Log in to resume your furry love quest.</span>
        </div>
      </div>
      <LoginForm
          class="login-page__login-form"
      />
      <div class="login-page__alternative-login">
        <div class="login-page__or">
          <span>OR</span>
        </div>
<!--        TODO: make a link or smth-->
        <div class="login-page__socials-list">
          <div class="login-page__socials-item">
            <img src="/images/loginPage/FB.png" alt="fb">
          </div>
          <div class="login-page__socials-item">
            <img src="/images/loginPage/APPLE.png" alt="apple">
          </div>
          <div class="login-page__socials-item">
            <img src="/images/loginPage/Google.png" alt="google">
          </div>
        </div>
      </div>
      <div class="login-page__sign-up">
        <span>New to Luppy? <router-link to="/registration" style="font-weight: 600">Sign Up</router-link></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LoginForm } from "@/features/LoginForm/index";
</script>
<style lang="scss" scoped>
.login-page {
  height: 100%;
  //TODO: fw 700
  &__title {
    span {
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
    }
  }
  &__title-min {
    margin-top: 10px;
    span {
      font-size: 14px;
      line-height: 21px;
      font-weight: 300;
    }
  }
  &__login-form {
    margin-top: 35px;
  }
  &__alternative-login {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
  }
  &__socials-list {
    display: flex;
    align-items: center;
    column-gap: 18px;
  }
  &__socials-item {
    height: 54px;
    width: 54px;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__sign-up {
    text-align: center;
    margin-top: 35px;
    span {
      font-weight: 300;
    }
  }
}
</style>