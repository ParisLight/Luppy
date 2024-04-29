<template>
  <div class="auth-form">
    <BaseButton
        :text="'Log In'"
        :type="'primary'"
        @click="toLogIn()"
    />
    <BaseButton
        :text="'Sign Up'"
        :type="'secondary'"
        @click="toRegistration"
    />
  </div>
</template>
<script setup lang="ts">
import { BaseButton } from '@/shared/index.ts'
import { useRouter } from "vue-router";
const router = useRouter()

const toLogIn = () => {
  router.push('/login')
}
const toRegistration = () => {
  router.push('/registration')
}
</script>
<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  row-gap: 35px;
}
</style>