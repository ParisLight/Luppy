<template>
  <div
    class="base-button"
    :class="[
        type === 'primary' ? 'base-button--primary' : 'base-button--secondary',
        iconPosition === 'left' ? 'base-button--left' : 'base-button--right',
        defineStateButton
    ]"
  >
    <div class="base-button__content">
      <div class="base-button__img" v-if="props.icon">
        <img :src="props.icon" alt=""/>
      </div>
      <div class="base-button__text">
        <span>{{ props.text }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {type Props} from './type';
import {computed} from 'vue';

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  state: 'default',
  type: 'primary',
  icon: false,
  iconPosition: 'left',
  text: 'Base button'
})

const defineStateButton = computed(() => {
  if (props.state === 'default') return '';
  if (props.state === 'disabled') return 'base-button--disabled';
  if (props.state === 'pressed') return 'base-button--pressed';
})

</script>
<style lang="scss" scoped>
.base-button {
  padding: 11px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 54px;

  &__content {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  &__text {
    span {
      color: var(--white-color);
      font-size: 16px;
      font-weight: 600;
      line-height: 21.4px;
      text-transform: capitalize;
    }
  }

  &__img {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &--large {
    max-width: 254px;
    width: 100%;
  }

  &--small {
    max-width: 134px;
    width: 100%;

    .base-button__img {
      width: 15px;
      height: 15px;
    }
  }

  &--primary {
    background: linear-gradient(256deg, #E9525F 4.96%, #EF7D85 73.81%);
  }

  &--secondary {
    background: var(--background-color);
    border: 1px solid var(--gradient-color);
  }

  &--left {
    .base-button__content {
      flex-direction: row;
    }
  }

  &--right {
    .base-button__content {
      flex-direction: row-reverse;
    }
  }

  &--pressed {
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  &--disabled {
    background: var(--light-grey);
    border: 1px solid var(--light-grey);
    pointer-events: none;
  }
}
</style>
