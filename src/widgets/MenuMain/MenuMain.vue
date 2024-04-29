<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <div class="main-menu__list">
        <div
          class="main-menu__item"
          v-for="item in menuItems"
          :key="item.id"
          :class="{'is-active': route.path === item.path}"
          @click="router.push(item.path), item.cb && typeof item.cb === 'function' ? item.cb() : ''"
        >
          <div class="main-menu__item-icon" v-if="item.icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="main-menu__item-text">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const menuItems = ref([
  {
    id: 1,
    icon: '/images/partials/menuMain/home.svg',
    text: 'Home',
    path: '/home',
    cb: () => console.log('qwe')
  },
  {
    id: 2,
    icon: '/images/partials/menuMain/message.svg',
    text: 'Chats',
    path: '/chats',
    cb: () => console.log('qwe')
  },
  {
    id: 3,
    icon: '/images/partials/menuMain/heart.svg',
    text: 'Matches',
    path: '/matches',
    cb: () => console.log('qwe')
  },
  {
    id: 4,
    icon: '/images/partials/menuMain/profile.svg',
    text: 'Profile',
    path: '/profile',
    cb: () => console.log('qwe')
  }
])
</script>
<style lang="scss" scoped>
.main-menu {
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    width: 98px;
    height: 57px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    &.is-active {
      border: 1px solid var(--gradient-color);
    }
    &-icon {
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-text {
      span {
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
}
</style>