<template>
  <div class="current-chat">
    <ContactUser />
    <SendMessageForm />
  </div>
</template>
<script setup lang="ts">
import { SendMessageForm } from "@/features/SendMessage/index";
import { ContactUser } from "@/features/ContactUser/index";

const props = defineProps({
  chatId: {
    type: String
  }
})
console.log(props.chatId, 'chat_id____')
</script>
<style lang="scss" scoped>
</style>