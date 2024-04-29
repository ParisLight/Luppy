<template>
  <div class="date-picker">
    <VueDatePicker
        v-model="date"
        @update:model-value="handleDate"
        dark
        hide-input-icon
        :placeholder="placeholder"
        :enable-time-picker="false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import VueDatePicker from "@vuepic/vue-datepicker";
import type { Props } from './type.ts'

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'placeholder'
})
const emit = defineEmits(['changeDate'])

const date = ref('')
const handleDate = (value) => {
  emit('changeDate', value)
}
</script>
<style lang="scss" scoped>
:deep(.dp__main ) {
  border-radius: 10px;
  overflow: hidden;
}
:deep(.dp__main) > div:nth-child(2) {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: var(--background-color);
}
:deep(.dp__pointer) {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
}
:deep(.dp__selection_preview) {
  display: none;
}
:deep(.dp--menu-wrapper) {
  padding: 20px;
  border: 1px solid var(--white-color);
  border-radius: 10px;
  overflow: hidden;
}
:deep(.dp__calendar) {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 6px;
}
:deep(.date-picker-menu) {
  background: var(--background-color) !important;
  color: var(--white-color);
}
:deep(.date-picker-cell) {
  color: var(--white-color);
}
:deep(.dp__month_year_row) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
:deep(.dp__month_year_select) {
  background: none;
  border: none;
  outline: none;
  color: var(--white-color);
  font-family: 'Inter';
  font-weight: 600;
}
:deep(.dp__calendar_header) {
  display: flex;
  align-items: center;
  column-gap: 6px;
  justify-content: center;
}
:deep(.dp__input_wrap) {
  border: 1px solid var(--white-color);
  overflow: hidden;
  border-radius: 10px;
  padding: 20px;
}
:deep(.dp__calendar_header_item) {
  width: 45px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-grey);
}
:deep([aria-label="Calendar wrapper"]) {
  width: 100%;
}
:deep(.dp__clear_icon) {
  display: none;
}
:deep(.dp__calendar_row) {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  width: 100%;
}
:deep(.dp__calendar_item) {
  width: 45px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--darker-grey);
  border-radius: 10px;
  transition: .3s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--gradient-color);
  }
  &[aria-selected="true"] {
    background: var(--primary-color);
    border: 1px solid var(--gradient-color);
  }
}
:deep(.dp--arrow-btn-nav) {
  background: none;
  outline: none;
  border: none;
  width: 5px;
  height: 15px;
  background-size: 100% 100%;
  &[aria-label="Previous month"] {
    background-image: url("/images/icons/arrow_left_slim.svg");
  }
  &[aria-label="Next month"] {
    background-image: url("/images/icons/arrow_right_slim.svg");
  }
}
:deep(.dp__action_row) {
  margin-top: 20px;
}
:deep(.dp__action_buttons) {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
:deep(.dp__action_cancel) {
  border: 1px solid var(--gradient-color);
  background: none;
  color: var(--white-color);
  font-family: 'Inter';
  border-radius: 15px;
  width: 50%;
  height: 42px;
}
:deep(.dp__action_select) {
  background: var(--gradient);
  color: var(--white-color);
  font-family: 'Inter';
  width: 50%;
  border: none;
  height: 42px;
  border-radius: 15px;
}
</style>