<template>
  <div class="radio-button-group">
    <RadioButtonPrimary
        v-for="(checkbox, index) in props.list"
        :key="index"
        :text="checkbox.name"
        :value="checkbox"
        v-model="modelValue"
        @change="$emit('change', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';
import { RadioButtonPrimary } from '@/shared/index'

const props = defineProps<Props>()

defineEmits(['change'])

const modelValue = defineModel()
if(typeof props.default !== 'undefined') {
  if(typeof props.default === 'number') {
    if(props.default < 0 || !props.list[props.default]) modelValue.value = props.list[0]
    else modelValue.value = props.list[props.default]
  }
  if(typeof props.default === 'object') {
    modelValue.value = props.list.find(item => item === props.default) || props.list[0]
  }
}
</script>

<style lang="scss" scoped>
.radio-button-group {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>