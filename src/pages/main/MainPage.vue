<template>
  <div class="onboarding">
      <div class="content container">
          <OnboardingSteps />
      </div>
  </div>
</template>
<script setup lang="ts">
import { OnboardingSteps } from '@/widgets/index'


</script>
<style lang="scss" scoped>
.onboarding {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>