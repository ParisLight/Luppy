<template>
  <div class="header-main container container__main">
    <div class="header-main__back">
      <img src="/images/icons/arrow_left_slim.svg" alt="arrow">
    </div>
    <div class="header-main__route">
      <span>{{ route.path.split('/')[1] }}</span>
    </div>
    <div class="header-main__actions">
      <div class="header-main__actions-notifications">
        <img src="/images/icons/notific_default.svg" alt="notifications" v-if="true">
        <img src="/images/icons/notific_active.svg" alt="notifications" v-if="false">
      </div>
      <div class="header-main__menu">
        <img src="/images/icons/menu-icon.svg" alt="menu">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

console.log(route, 'route')
console.log(router, 'router')
</script>
<style lang="scss" scoped>
.header-main {
  display: flex;
  align-items: center;
  &__back {
    flex: 1;
  }
  &__route {
    flex: 1;
  }
  &__actions {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}
</style>