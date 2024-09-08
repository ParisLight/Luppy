<template>
  <div class="notification-card">
    <div class="notification-card__avatar">
        <img src="/images/partials/notificationCard/dog_avatar.png" alt="avatar">
    </div>
    <div class="notification-card__content">
        <div class="notification-card__title">
            <span>Björn Twain has liked your dog, Loki!</span>
        </div>
        <div class="notification-card__action">
            <BaseButton
              class="notification-card__base-button"
              text="Send A Message"
              :font-size="9"
              :font-weight="400"
            />
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseButton } from '@/shared/index'
</script>
<style lang="scss" scoped>
.notification-card {
  display: flex;
  column-gap: 15px;
  border-radius: 15px;
  padding: 22px 15px;
  background-color: var(--darker-grey);
  &__avatar {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
  }
  &__base-button {
    height: 24px;
    width: fit-content;
  }
}
</style>border: 0.5px solid;



