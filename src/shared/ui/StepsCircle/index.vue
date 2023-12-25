<template>
  <div class="steps-circle" @click="onClickStep">
    <div class="steps-circle__process">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: var(--gradient-color)" />
            <stop offset="73.81%" style="stop-color: #EF7D85" />
          </linearGradient>
        </defs>
        <circle
          class="circle-step"
          cx="50%"
          cy="50%"
          r="30"
          fill="none"
          stroke="url(#gradient)"
          stroke-width="2"
          :stroke-dashoffset="defineProgress"
          stroke-dasharray="200"
        />
      </svg>
    </div>
    <div class="steps-circle__back"></div>
    <div class="steps-circle__arrow">
      <img src="/images/icons/arrow-right.svg" alt="arrow">
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { type Props } from './types';

const props = withDefaults(defineProps<Props>(), {
  step: 'first'
})
const emits = defineEmits(['clickStep']);

const onClickStep = () :void => {
  emits('clickStep');
}

const defineProgress = computed(() => {
  if(props.step === 'first') return  '130'
  if(props.step === 'second') return '60'
  else return '0'
})
</script>
<style lang="scss" scoped>
.steps-circle {
  position: relative;
  z-index: 5;
  width: 66px;
  height: 66px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(256deg, var(--gradient-color) 4.96%, #EF7D85 73.81%);
    z-index: -1;
    border-radius: 100%;
    width: 72%;
    height: 72%;
  }

  &__process {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    svg {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    circle{
      transition: .3s ease-in-out all;
    }
  }

  &__arrow {
    width: 16px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
