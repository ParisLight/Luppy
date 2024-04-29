<template>
  <div class="auth-page">
    <div class="content container">
      <div class="auth-page__intro">
        <div class="auth-page__intro-img">
          <img src="/images/authPage/Welcome_Dog.png" alt="welcome">
        </div>
        <div class="auth-page__title">
          <span>Welcome to Luppy!</span>
        </div>
        <div class="auth-page__descr">
          <span>Luppy is the dog dating app that makes finding furry friends fun and easy.</span>
        </div>
      </div>
      <WelcomeButtons
          class="auth-page__auth-form"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { WelcomeButtons } from "@/features/WelcomeButtons/index.ts";
</script>
<style lang="scss" scoped>
.auth-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &-img {
      width: 198px;
      height: 181px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__title span{
    font-size: 24px;
    font-weight: 600;
  }

  &__descr {
    margin-top: 10px;
    span {
      color: var(--light-color);
      font-weight: 300;
    }
  }

  &__auth-form {
    margin-top: 120px;
  }
}
</style>