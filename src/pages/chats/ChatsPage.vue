<template>
  <div class="chats-page">
    <div class="content container">
      <InputField
        class="chats-page__section"
        :show-search="true"
        :placeholder="'Search'"
        :show-label="false"
      />
      <NewMatches class="chats-page__section"/>
      <Chats class="chats-page__section"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { InputField } from '@/shared/index'
import { NewMatches, Chats } from "@/widgets/index";
</script>
<style lang="scss" scoped>
.chats-page__section {
  margin-top: 35px;
}
</style>