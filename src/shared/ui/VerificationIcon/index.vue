<template>
    <div class="verification-icon">
        <img :src="defineIcon" alt="verification">
    </div>
</template>
<script setup lang="ts">
import { type Props } from './types';
import { computed } from 'vue';

import VerificationFalseIcon from '/images/icons/FalseVerification.svg';
import VerificationTrueIcon from '/images/icons/TrueVerification.svg';
const props = withDefaults(defineProps<Props>(), {
    verification: false
})

const defineIcon = computed(() => {
    if (props.verification) return VerificationTrueIcon;
    if (!props.verification) return VerificationFalseIcon;
}) 
</script>
<style lang="scss">
.verification-icon {
    width: 20px;
    height: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>