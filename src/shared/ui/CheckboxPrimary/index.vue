<template>
    <div class="checkbox-primary">
        <input
            class="checkbox-primary__checkbox"
            type="checkbox"
            name=""
            id="checkbox"
            v-model="modelValue"
        >
        <label 
            for="checkbox"
            class="checkbox-primary__label"
        >
            {{ props.labelText }}
        </label>
    </div>
</template>
<script setup lang="ts">
import type { Props } from './types';

const props = withDefaults(defineProps<Props>(), {
    labelText: ''
})

const modelValue = defineModel('modelValue', {});
</script>
<style lang="scss">
.checkbox-primary{
    display: inline-block;
   &__checkbox{
     position: absolute;
     z-index: -1;
     opacity: 0;
     & + label::before {
       content: '';
       cursor: pointer;
       display: inline-block;
       width: 24px;
       height: 24px;
       flex-shrink: 0;
       flex-grow: 0;
       border: 0.75px solid white;
       background-color: transparent;
       background-repeat: no-repeat;
       background-position: center center;
       border-radius: 7px;
       transition: .3s ease-in-out all;
     }
     &:checked + label::before{
       background-image: url("/images/icons/primary-input-checked.svg");
       border: 0.75px solid var(--gradient-color);
       background-color: var(--gradient-color);
     }
   }
    &__label{
        color: white;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        column-gap: 12px;
        cursor: pointer;
    }
}
</style>