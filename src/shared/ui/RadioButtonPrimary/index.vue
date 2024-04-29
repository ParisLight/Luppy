<template>
  <div class="radio-button-primary">
    <input
        class="radio-button-primary__radio"
        type="radio"
        :name="props.text"
        :id="uniqueId"
        v-model="modelValue"
        :value="value"
        @change="$emit('change', modelValue)"
    >
    <label
        :for="uniqueId"
        class="radio-button-primary__label"
    >
      {{ text }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type';
import { genId } from "@/composables/genId/genId";

const props = withDefaults(defineProps<Props>(), {
  text: 'checkbox',
})

defineEmits(['change'])

const { uniqueId } = genId()

const modelValue = defineModel()

</script>

<style lang="scss" scoped>
.radio-button-primary {
  &__radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
    cursor: pointer;

    & + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      cursor: pointer;

      &::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background-color: var(--gradient-color);
        background-repeat: no-repeat;
        background-size: 12px 9px;
        background-position: center center;
        margin-right: 12px;
        transition: .3s ease-in-out;
      }
    }
    &:checked + label {
      &::before {
        background-image: url('/images/icons/checkbox-icon.svg');
      }
    }
  }

  &__label {
    font-weight: 300;
  }
}
</style>