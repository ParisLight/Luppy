<template>
    <div 
        class="badge-component"
        :class="defineBadgeClass"
    >
        <span>
           {{ props.text }}
        </span>
    </div>
</template>
<script setup lang="ts">
import type { Props } from './type';
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
    color: 'follow',
    text: 'text'
})

const defineBadgeClass = computed(() => ({
    'follow': props.color === 'follow',
    'error': props.color === 'error',
    'disabled': props.color === 'disabled',
    'active': props.color === 'active',
    'connect': props.color === 'connect'
}))

</script>
<style lang="scss" scoped>
    .badge-component{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        span{
            padding: 5.5px 24px;
            color: white;
            font-size: 9px;
        }
        &.follow{
            background: var(--primary-color);
        }
        &.error{
            background: var(--error);
        }
        &.disabled{
            background: var(--light-grey);
        }
        &.active{
            background: var(--active);
            span{
                color: var(--background-color);
            }
        }
        &.connect{
            background: var(--darker-grey);
            border: 1px solid var(--gradient-color);
            span{
                color: white;
            }
        }
    }
</style>