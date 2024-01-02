<template>
  <div class="progressbar-primary">
    <div class="progressbar-primary__progress" :style="defineProgressWidth"></div>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
  progress: 15
})

const defineProgressWidth = computed(() => {
  if(props.progress > 100) return {
    width: '100%'
  }
  return { width: `${props.progress}%` }
})
</script>

<style lang="scss" scoped>
.progressbar-primary{
  position: relative;
  height: 5px;
  max-width: 284px;
  width: 100%;
  background-color: var(--light-grey);
  border-radius: 50px;
  overflow: hidden;
  &__progress{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50px;
    background: var(--gradient);
    transition: .1s ease-in-out all;
  }
}
</style>