import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('core', () => {
  const myNotificationsVisible = ref(false)
  function openMyNotifications () {
    myNotificationsVisible.value = true
  }
  function closeMyNotifications() {
    myNotificationsVisible.value = false
  }
  return {
    myNotificationsVisible,
    openMyNotifications,
    closeMyNotifications
  }
})
