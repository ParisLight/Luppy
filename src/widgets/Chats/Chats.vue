<template>
  <div class="chats">
    <ChatPreview
      v-for="item in 10" :key="item"
      @click="router.push({name: 'currentChat', params: { chatId: item }})"
    />
  </div>
</template>
<script setup lang="ts">
import { ChatPreview } from "@/entities/index";
import { useRouter } from "vue-router";

const router = useRouter()
</script>
<style lang="scss" scoped>
</style>