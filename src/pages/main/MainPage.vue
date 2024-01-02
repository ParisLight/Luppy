<template>
  <div class="main">
    <LoaderComponent
        :state='activeStateLoader'
        :progress="activeProgress"
    />
    <StepProgressbar :step="'end'"/>
  </div>
</template>
<script setup lang="ts">
import { CheckboxPrimary, StepProgressbar, LoaderComponent } from '@/shared/index';
import { ref } from 'vue';

const activeProgress = ref(0);
const activeStateLoader = ref('grey');
const interval = setInterval((): void => {
  activeProgress.value += 1;
  defineStateLoader()
  if(activeProgress.value >= 100){
    clearInterval(interval);
    return;
  }
}, 40)

const defineStateLoader = () => {
  if(typeof activeStateLoader.value === 'undefined') return 'grey'
  if(activeProgress.value % 100 === 0){
    activeStateLoader.value = 'gradient';
    return;
  }
  if(activeProgress.value % 10 === 0){
    activeStateLoader.value = activeStateLoader.value === 'grey' ? 'white' : 'grey';
  }
}

</script>
<style lang="scss">
.main {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
