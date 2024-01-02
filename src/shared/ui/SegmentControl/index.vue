<template>
  <div
      class="segment-control"
      :class="{'segment-control--active': props.segmented}"
      @click="onClickSegment">
    <span class="segment-control__text">
      {{ props.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';

const props = withDefaults(defineProps<Props>(), {
  text: '',
  segmented: false
})

const onClickSegment = () => {
  console.log('click segment');
}
</script>

<style lang="scss" scoped>
.segment-control{
  padding: 8px;
  border-radius: 8px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease-in-out all;
  background: transparent;
  border: 1px solid transparent;

  &--active{
    border: 1px solid var(--gradient-color);
    background: var(--darker-grey);
    .segment-control__text{
      color: white;
    }
  }
  &__text{
    font-size: 11px;
    transition: .3s ease-in-out color;
    color: var(--light-grey);
  }
}
</style>