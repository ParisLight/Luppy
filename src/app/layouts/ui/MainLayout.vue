<template>
  <div class="main-layout page-main">
    <HeaderMain/>
    <slot></slot>
    <MenuMain />
    <transition name="slide-right-same">
      <NotificationsWindow
        v-if="store.myNotificationsVisible"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  HeaderMain,
  MenuMain,
  NotificationsWindow
} from "@/widgets/index";
import { useStore } from "@/stores/coreStore";
const store = useStore()
</script>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
}
</style>
