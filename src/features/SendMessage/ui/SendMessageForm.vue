<template>
  <div class="send-message-form">
    <div class="send-message-form__content">
      <div class="send-message-form__attach send-message-form__icon">
        <img src="/images/sendMessageForm/attach_icon.svg" alt="attach">
      </div>
      <div class="send-message-form__input">
        <textarea
          class="send-message-form__textarea"
          placeholder="Write your message"
          ref="textareaElem"
          name=""
          id=""
          @input="changeMessage"
        />
        <div class="send-message-form__send send-message-form__icon">
          <img src="/images/sendMessageForm/send_message_icon.svg" alt="send">
        </div>
      </div>
      <div class="send-message-form__send-voice send-message-form__icon">
        <img src="/images/sendMessageForm/microphone_icon.svg" alt="microphone">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textareaElem = ref(null)
const changeMessage = () => {
  resizeTextarea()
}
const resizeTextarea = () => {
  textareaElem.value.style.height = 'auto';
  textareaElem.value.style.height = textareaElem.value.scrollHeight + 'px';
}
</script>
<style lang="scss" scoped>
.send-message-form {
  padding-top: 10px;
  border-top: 1px solid var(--darker-grey);
 &__content {
   display: flex;
   align-items: center;
   column-gap: 25px;
 }
  &__icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__input {
    position: relative;
    flex: 1;
  }
  &__send {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &__textarea {
    background-color: var(--darker-grey);
    border-radius: 10px;
    color: var(--white-color);
    font-size: 14px;
    line-height: 21px;
    font-weight: 300;
    outline: none;
    border: none;
    resize: none;
    padding: 20px 50px 20px 20px;
    width: 100%;
    height: 61px;
    min-height: 61px;
    max-height: 120px;
    overflow: hidden;
    overflow-y: auto;
    &::placeholder {
      color: var(--light-grey);
    }
  }
}
</style>