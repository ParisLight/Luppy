<template>
  <div class="step-progressbar">
    <div
        class="step-progressbar__segment"
        v-for="(segment, index) in segments" :key="segment.id"
        :class="{'is-active': segment.active}"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
  step: 'start'
})

const segments = computed((): object[] => {
  if(props.step === 'start') return [ { id: 1, active: true }, { id: 2, active: false }, { id: 3, active: false } ]
  if(props.step === 'half') return [ { id: 1, active: true }, { id: 2, active: true }, { id: 3, active: false } ]
  if(props.step === 'end') return [ { id: 1, active: true }, { id: 2, active: true }, { id: 3, active: true } ]
})
</script>

<style lang="scss" scoped>
  .step-progressbar{
    display: flex;
    align-items: center;
    column-gap: 4px;
    &__segment{
      border-radius: 50px;
      background: var(--light-color);
      transition: .3s ease-in-out background;
      height: 5px;
      //max-width: 90px;
      width: 100%;
      &.is-active{
        background: var(--gradient-color);
      }
    }
  }
</style>