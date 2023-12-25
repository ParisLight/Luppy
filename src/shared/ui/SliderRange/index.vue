<template>
    <div class="slider-range">
        <Slider 
            class="slider-range__slider"
            :tooltips="false"
            :lazy="props.lazy"
            v-model="vModelSlider"
            :min="props.min"
            :max="props.max"
        />
    </div>
</template>
<script setup lang="ts">
import Slider from '@vueform/slider';
import { type Props } from './types';
import { ref } from 'vue';

const props = withDefaults(defineProps<Props>(), {
    value: () => [12, 66],
    lazy: false,
    min: 1,
    max: 100
})

const vModelSlider = ref(props.value);
</script>
<style lang="scss">
    .slider-range{
        max-width: 251px;
        width: 100%;
        --slider-bg: var(--light-color);
        --slider-connect-bg: var(--gradient-color);
        --slider-height: 4px;
        --slider-handle-bg: var(--light-color);
        --slider-handle-border: 1px solid var(--gradient-color);
        --slider-handle-shadow: 0;
        --slider-handle-width: 20px;
        --slider-handle-height: 20px;
    }
</style>
<style src="@vueform/slider/themes/default.css"></style>
