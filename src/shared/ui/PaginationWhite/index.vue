<template>
  <div class="pagination-white">
    <div
        class="pagination-white__item"
        :class="{'is-active': props.activeElement.id === item.id}"
        v-for="(item, index) in props.paginationList"
        :key="item.id ? item.id : index"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from './type';

const props = withDefaults(defineProps<Props>(), {
  paginationList: [{ id: 1 }, { id: 2 }, { id: 3 }],
})
</script>

<style lang="scss" scoped>
.pagination-white{
  display: flex;
  align-items: center;
  column-gap: 7px;
  &__item{
    width: 8px;
    height: 8px;
    border-radius: 15px;
    background-color: var(--light-grey);
    transition: .3s ease-in-out background;
    &.is-active{
      background-color: var(--light-color);
    }
  }
}
</style>