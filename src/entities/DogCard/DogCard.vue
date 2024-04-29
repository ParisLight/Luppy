<template>
  <div class="dog-card" :style="{'background-image': 'url(' + image + ')'}">
    <div class="dog-card__container">
      <div class="dog-card__info">
        <div class="dog-card__name-block">
          <div class="dog-card__name">
            <span>{{name}}</span>
          </div>
          <VerificationIcon
            class="dog-card__verification"
            :verification="verification"
          />
        </div>
        <div class="dog-card__description">
          <span>{{info}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VerificationIcon } from '@/shared/index'
import { type Props } from "./type";

const props = withDefaults(defineProps<Props>(), {
  image: '/images/homePage/dogs/dog-card-1.png',
  name: 'funny dog',
  info: '-',
  verification: false
})
</script>
<style lang="scss" scoped>
.dog-card {
  width: 135px;
  height: 184px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;

  &__container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }

  &__name-block {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  &__name {
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
    }
  }
  &__description {
    span {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__description {
    margin-top: 5px;
  }
}
</style>