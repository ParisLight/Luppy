<template>
  <div class="radio-button-primary">
    <input type="radio" :name="props.name" :id="props.id">
    <label for="radio">input radio</label>
  </div>
</template>

<script setup lang="ts">
//TODO: доделать
import type { Props } from './type';
const props = withDefaults(defineProps<Props>(), {
  name: 'checkbox',
  id: 'id'
})
</script>

<style lang="scss" scoped>

</style>