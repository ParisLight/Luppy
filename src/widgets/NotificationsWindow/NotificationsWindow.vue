<template>
    <div class="notifications-window">
      <div class="notifications-window__top">
        <div class="back-btn" @click="store.closeMyNotifications()">
          <img src="/images/icons/arrow_left_slim.svg" alt="arrow">
          <span>Back</span>
        </div>
        <div class="notifications-window__info-icon">
          <img src="/images/icons/lile_info.svg" alt="info">
        </div>
      </div>
      <div class="notifications-window__content">
        <div class="notifications-window__list">
            <NotificationCard
              v-for="(notification, index) in notificationsList"
              :key="index"
            />
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import NotificationCard from "@/entities/NotificationCard/NotificationCard.vue";
import { notificationsList } from '@/content/notifications'
import { useStore } from "@/stores/coreStore";
const store = useStore()
console.log(notificationsList, 'notifications_list_')
</script>
<style lang="scss" scoped>
.notifications-window {
  position: fixed;
  inset: 0;
  background-color: var(--background-color);
  padding: 25px 30px;
  &__info-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 35px;
  }
}
.back-btn {
  display: flex;
  align-items: center;
  column-gap: 20px;

  span {
    font-size: 18px;
    font-weight: 500;
    color: var(--white-color);
  }
}
</style>