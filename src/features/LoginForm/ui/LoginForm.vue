<template>
  <div class="login-form">
    <form class="login-form__inputs">
      <InputField
          placeholder="Enter your email address"
          label-text="Email"
          v-model="userInfo.mail"
      />
      <InputField
          placeholder="Enter your password"
          label-text="Password"
          type="password"
          v-model="userInfo.password"
      />
    </form>
    <BaseButton
        class="login-form__base-button"
        text="Log In"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import {
  BaseButton,
  InputField
} from '@/shared/index'

type UserInfo = {
  mail: string,
  password: string
}
const userInfo: UserInfo = reactive({
  mail: '',
  password: ''
})
</script>
<style lang="scss" scoped>
.login-form {
  &__inputs {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }

  &__base-button {
    margin-top: 35px;
  }
}
</style>