<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="layoutComponent">
        <component :is="Component" />
      </component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import '@/assets/base.css'

import { useRoute } from "vue-router";
import { computed, defineAsyncComponent } from "vue";

const route = useRoute()

const layoutComponent = computed(() => {
  const layout = route.meta.layout ?? 'DefaultLayout'
  return defineAsyncComponent(() => import(`/src/app/layouts/ui/${layout}.vue`))
})

</script>

<style scoped></style>
