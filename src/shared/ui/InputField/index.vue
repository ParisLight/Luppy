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
                :type="typeData"
                :autocomplete="typeData === 'password' ? 'on' : 'off'"
            />
            <div class="input-field__search-icon" v-if="props.showSearch">
                <img :src="defineSearchIcon" alt="search">
            </div>
          <div class="input-field__show-password" v-if="props.type === 'password'" @click.stop="showPassword">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 11.1992C10.7239 11.1992 10.5 11.4231 10.5 11.6992C10.5 11.9754 10.7239 12.1992 11 12.1992V11.1992ZM14.5 8.69922C14.5 8.42308 14.2761 8.19922 14 8.19922C13.7239 8.19922 13.5 8.42308 13.5 8.69922H14.5ZM2.22067 6.82462L1.8145 6.53303L2.22067 6.82462ZM2.22045 10.5735L2.62662 10.2819H2.62662L2.22045 10.5735ZM4.78797 13.592L5.16327 13.2616L5.1506 13.2473L5.13686 13.2339L4.78797 13.592ZM17.101 3.69922L16.7553 4.06038L16.7695 4.07398L16.7847 4.08641L17.101 3.69922ZM1.33692 8.69919L0.836916 8.69919L1.33692 8.69919ZM19.7793 10.5738L20.1855 10.8654V10.8654L19.7793 10.5738ZM19.7793 6.82454L19.3731 7.11613V7.11613L19.7793 6.82454ZM19.2018 5.24818C19.027 5.03436 18.712 5.00269 18.4982 5.17744C18.2844 5.35218 18.2527 5.66718 18.4275 5.88099L19.2018 5.24818ZM6.79169 14.6345C6.5674 14.4734 6.25499 14.5246 6.0939 14.7489C5.9328 14.9731 5.98403 15.2856 6.20831 15.4467L6.79169 14.6345ZM20.6631 8.69921L20.1631 8.69921L20.6631 8.69921ZM0.687652 16.3088C0.472022 16.4813 0.437061 16.7959 0.609566 17.0116C0.78207 17.2272 1.09672 17.2622 1.31235 17.0897L0.687652 16.3088ZM21.3123 1.08965C21.528 0.917148 21.5629 0.602502 21.3904 0.386871C21.2179 0.17124 20.9033 0.13628 20.6877 0.308784L21.3123 1.08965ZM17.1747 3.75943L17.4871 4.14987V4.14987L17.1747 3.75943ZM4.82765 13.6371L5.14 14.0275L4.82765 13.6371ZM11 5.19922C9.067 5.19922 7.5 6.76622 7.5 8.69922H8.5C8.5 7.31851 9.61929 6.19922 11 6.19922V5.19922ZM7.5 8.69922C7.5 9.5215 7.78418 10.2788 8.25932 10.8763L9.042 10.2538C8.70251 9.82694 8.5 9.28742 8.5 8.69922H7.5ZM13.7323 6.51168C13.0917 5.71244 12.1056 5.19922 11 5.19922V6.19922C11.7893 6.19922 12.493 6.56446 12.952 7.1371L13.7323 6.51168ZM11 12.1992C12.933 12.1992 14.5 10.6322 14.5 8.69922H13.5C13.5 10.0799 12.3807 11.1992 11 11.1992V12.1992ZM11 0.199219C8.94157 0.199219 7.06089 1.21862 5.51011 2.48837C3.9536 3.7628 2.67621 5.3327 1.8145 6.53303L2.62684 7.11621C3.4626 5.95204 4.6815 4.45925 6.14362 3.2621C7.61146 2.06027 9.2717 1.19922 11 1.19922V0.199219ZM1.81427 10.8651C2.47058 11.7793 3.36558 12.9045 4.43909 13.9502L5.13686 13.2339C4.11794 12.2413 3.26075 11.1653 2.62662 10.2819L1.81427 10.8651ZM17.4468 3.33806C15.7291 1.69348 13.4928 0.199219 11 0.199219V1.19922C13.1008 1.19922 15.0964 2.47217 16.7553 4.06038L17.4468 3.33806ZM1.8145 6.53303C1.24852 7.3214 0.836922 7.86561 0.836916 8.69919L1.83692 8.6992C1.83692 8.24567 2.01448 7.96919 2.62684 7.11621L1.8145 6.53303ZM2.62662 10.2819C2.01442 9.42914 1.83691 9.15274 1.83692 8.6992L0.836916 8.69919C0.83691 9.53277 1.24843 10.0769 1.81427 10.8651L2.62662 10.2819ZM11 17.1992C13.0584 17.1992 14.9391 16.1798 16.4899 14.9101C18.0464 13.6356 19.3238 12.0657 20.1855 10.8654L19.3732 10.2822C18.5374 11.4464 17.3185 12.9392 15.8564 14.1363C14.3885 15.3382 12.7283 16.1992 11 16.1992V17.1992ZM20.1854 6.53295C19.9004 6.13589 19.5709 5.69981 19.2018 5.24818L18.4275 5.88099C18.7817 6.31442 19.0986 6.7337 19.3731 7.11613L20.1854 6.53295ZM6.20831 15.4467C7.60887 16.4526 9.23885 17.1992 11 17.1992V16.1992C9.52392 16.1992 8.09632 15.5715 6.79169 14.6345L6.20831 15.4467ZM20.1855 10.8654C20.7515 10.077 21.1631 9.53281 21.1631 8.69921L20.1631 8.69921C20.1631 9.15275 19.9855 9.42923 19.3732 10.2822L20.1855 10.8654ZM19.3731 7.11613C19.9855 7.96918 20.1631 8.24568 20.1631 8.69921L21.1631 8.69921C21.1631 7.86561 20.7515 7.32137 20.1854 6.53295L19.3731 7.11613ZM17.4871 4.14987L21.3123 1.08965L20.6877 0.308784L16.8624 3.369L17.4871 4.14987ZM16.7847 4.08641L16.8584 4.14663L17.4911 3.37224L17.4174 3.31202L16.7847 4.08641ZM1.31235 17.0897L5.14 14.0275L4.5153 13.2467L0.687652 16.3088L1.31235 17.0897ZM5.14 14.0275L17.4871 4.14987L16.8624 3.369L4.5153 13.2467L5.14 14.0275ZM4.41268 13.9224L4.45235 13.9675L5.20294 13.3067L5.16327 13.2616L4.41268 13.9224Z" fill="#726C7D"/>
            </svg>
          </div>
        </div>
        <div class="input-field__caption" v-if="props.state === 'error'">
            <span>{{ props.caption }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Props } from './types';
import { computed, ref } from 'vue';
import {InputField} from "@/shared";
// TODO: make masks
const props = withDefaults(defineProps<Props>(), {
    showSearch: false,
    showLabel: true,
    labelIcon: false,
    labelText: 'Label',
    placeholder: 'placeholder...',
    type: 'text'
})

const modelValue = defineModel();

const defineInputState = computed(() => ({
    'input-field--error': props.state === 'error',
    'input-field--disabled': props.state === 'disabled'
}))

const defineSearchIcon = computed(() => {
    if(props.state === 'error') return '/images/icons/Search_2-error.svg';
    return '/images/icons/Search_2.svg'
})

const typeData = ref(props.type)

const showPassword = () => {
  if(typeData.value === 'password') typeData.value = 'text'
  else typeData.value = 'password'
}
</script>
<style lang="scss" scoped>
    .input-field{
        display: flex;
        flex-direction: column;
        //max-width: 353px;
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
            outline: none;
            line-height: 21px;
            font-weight: 300;
            color: var(--white-color);
            width: 100%;
            transition: .3s ease-in-out;
            border: 1px solid transparent;
            &:focus {
              border: 1px solid var(--light-color);
            }
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
      &__show-password {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        width: 20px;
        height: 16px;
        font-size: 0;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
</style>