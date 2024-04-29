<template>
  <div class="dog-preview">
    <img :src="img">
    <div class="dog-preview__status" :class="{'is-active': status}"></div>
  </div>
</template>
<script setup lang="ts">
import {type Props} from './type'

const props = withDefaults(defineProps<Props>(), {
  img: '/images/partials/eventMembers/member-1.png',
  status: true
})
</script>
<style lang="scss" scoped>
.dog-preview {
  position: relative;
  width: 54px;
  height: 54px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    overflow: hidden;
  }

  &__status {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    position: absolute;
    right: 3px;
    bottom: 3px;
    background-color: var(--darker-grey);

    &.is-active {
      background-color: var(--active);
    }
  }
}
</style>