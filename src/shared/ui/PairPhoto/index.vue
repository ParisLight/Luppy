<template>
    <div class="pair-photo">
        <div class="pair-photo__item">
            <img :src="props.firstPhoto" alt="pair-1">
        </div>
        <div class="pair-photo__item">
            <img :src="props.secondPhoto" alt="pair-2">
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Props } from './type';

const props = withDefaults(defineProps<Props>(), {
    firstPhoto: '/images/pair-photo-1.png',
    secondPhoto: '/images/pair-photo-2.png'
})
</script>
<style lang="scss">
.pair-photo{
    position: relative;
    display: inline-block;
    &__item{
        width: 70px;
        height: 70px;
        border-radius: 40px;
        border: 1px solid var(--background-color);
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:nth-child(2){
            position: absolute;
            top: 0;
            left: 84%;
        }
    }
}
</style>