<template>
  <div class="chats-page">
    <div class="content container">
      <InputField />
      <NewMatches />
    </div>
  </div>
</template>
<script setup lang="ts">
import { InputField } from '@/shared/index'
import { NewMatches } from "@/widgets/index";
</script>
<style lang="scss" scoped>
</style>