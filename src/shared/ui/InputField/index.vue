<template>
    <div class="input-field" :class="defineInputState">
        <label for="" class="input-field__label" v-if="props.showLabel">
            <div class="input-field__label-img" v-if="props.labelIcon">
                <img src="/images/icons/Verified-transparent.svg" alt="label-icon">
            </div>
            {{ props.labelText }}
        </label>
        <div class="input-field__input-wrapper">
            <input
                :placeholder="props.placeholder" 
                class="input-field__input"
                v-model="modelValue"
            />
            <div class="input-field__search-icon" v-if="props.showSearch">
                <img :src="defineSearchIcon" alt="search">
            </div>
        </div>
        <div class="input-field__caption" v-if="props.state === 'error'">
            <span>{{ props.caption }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Props } from './types';
import { computed, defineModel } from 'vue';

const props = withDefaults(defineProps<Props>(), {
    showSearch: true,
    showLabel: true,
    labelIcon: true,
    labelText: 'Label',
    placeholder: 'placeholder...'
})

const modelValue = defineModel('modelValue');

const defineInputState = computed(() => ({
    'input-field--error': props.state === 'error',
    'input-field--disabled': props.state === 'disabled'
}))

const defineSearchIcon = computed(() => {
    if(props.state === 'error') return '/images/icons/Search_2-error.svg';
    return '/images/icons/Search_2.svg'
})
</script>
<style lang="scss" scoped>
    .input-field{
        display: flex;
        flex-direction: column;
        max-width: 353px;
        width: 100%;
        row-gap: 7px;
        &.input-field--error{
            .input-field__input{
                border: 1px solid var(--error);
                color: var(--error);
                &::placeholder{
                    color: var(--error);
                }
            }
        }
        &.input-field--disabled{
            .input-field__label{
                color: var(--light-grey);
            }
            .input-field__input{
                border: 1px solid var(--light-grey);
                color: var(--light-grey);
                pointer-events: none;
                &::placeholder{
                    color: var(--light-grey);
                }
            }
        }
        &__label{
            color: white;
            font-size: 14px;
            font-weight: 300;
            line-height: 20.9px;
            display: flex;
            align-items: center;
            column-gap: 6px;
            &-img{
                width: 17px;
                height: 17px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        &__input{
            padding: 16px 50px 16px 25px;
            border-radius: 15px;
            background: var(--darker-grey);
            border: 0.25px solid var(--light-color);
            outline: none;
            line-height: 21px;
            font-weight: 300;
            color: var(--light-grey);
            width: 100%;
            &::placeholder{
                line-height: 21px;
                font-weight: 300;
                color: var(--light-grey);
            }
            &-wrapper{
                position: relative;
            }
        }
        &__search-icon{
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            width: 21px;
            height: 21px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__caption{
            margin-top: 5px;
            span{
                font-size: 12px;
                color: var(--error);
            }
        }
    }
</style>