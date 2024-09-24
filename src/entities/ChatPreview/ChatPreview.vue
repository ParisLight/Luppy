<template>
  <div class="chat-preview">
    <div class="chat-preview__content">
      <div class="chat-preview__avatar">
        <img src="/images/partials/notificationCard/dog_avatar.png" alt="avatar">
      </div>
      <div class="chat-preview__message">
        <div class="chat-preview__from">
          <span>Luna Cutipie</span>
        </div>
        <div class="chat-preview__text">
          <span>OK! sounds good.</span>
        </div>
      </div>
      <div class="chat-preview__time">
        <span>10:05 AM</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//TODO: make a mocks props
</script>
<style lang="scss" scoped>
.chat-preview {
  &__content {
    display: flex;
    column-gap: 10px;
    align-items: center;
    padding: 25px 0;
    border-top: 1px solid var(--darker-grey);
    border-bottom: 1px solid var(--darker-grey);
  }
  &__avatar {
    width: 46px;
    height: 46px;
    border-radius: 100%;
    border: 1px solid var(--light-color);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  &__message {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  &__from {
    span {
      color: var(--white-color);
      font-size: 18px;
      font-weight: 500;
    }
  }
  &__text {
    span {
      color: var(--light-color);
      font-size: 14px;
      font-weight: 300;
      line-height: 21px;
    }
  }
  &__time {
    margin-left: auto;
    align-self: flex-end;
    span {
      font-size: 12px;
      line-height: 14px;
      color: var(--light-grey);
    }
  }
}
</style>