<template>
  <div class="main-layout page-main">
    <HeaderMain/>
    <slot></slot>
    <MenuMain />
  </div>
</template>

<script setup lang="ts">
import {
  HeaderMain,
  MenuMain
} from "@/widgets/index";
</script>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
}
</style>
