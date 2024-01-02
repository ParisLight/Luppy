<template>
  <div class="loader-component">
    <div class="loader-component__state">
      <img :src="defineLoaderState" alt="state">
    </div>
    <Transition name="decrease-width">
      <ProgressbarPrimary
          class="loader-component__progressbar-primary"
          :progress="props.progress"
          v-if="!isCompleteLoading"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';
import { computed } from 'vue';
import { ProgressbarPrimary } from '@/shared/index';

const props = withDefaults(defineProps<Props>(), {
  state: 'grey',
  progress: 0
})

const isCompleteLoading = computed(() => {
  return props.progress >= 100;
})

const defineLoaderState = computed((): string => {
  if(props.state === 'grey') return '/images/icons/loader-grey.svg'
  if(props.state === 'white') return '/images/icons/loader-white.svg'
  if(props.state === 'gradient') return '/images/icons/loader-grad.svg'
})
</script>

<style lang="scss" scoped>
.loader-component{
  max-width: 94px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 13.5px;
  &__state{
    width: 94px;
    height: 94px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>