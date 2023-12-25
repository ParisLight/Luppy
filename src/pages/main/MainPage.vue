<template>
  <div class="main">
    <!-- <BaseButton />
    <StepsCircle :step="'second'" />
    <TagButton :class="{ 'is-active': activeBtn }" @click="onClickStep">
      Click
    </TagButton>
    <VerificationIcon /> -->
    <ToggleComponent />
    <SliderRange :value="15" />
  </div>
</template>
<script setup lang="ts">
import { BaseButton, SliderRange, StepsCircle, TagButton, ToggleComponent, VerificationIcon } from '@/shared/index'
import { ref } from 'vue';

const activeBtn = ref(false);
const onClickStep = (): void => {
  activeBtn.value = !activeBtn.value;
}
</script>
<style lang="scss">
.main {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
