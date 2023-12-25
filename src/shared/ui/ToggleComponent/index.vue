<template>
    <div class="toggle-component">
        <Toggle v-model="toggleState" />
    </div>
</template>
<script setup lang="ts">
import Toggle from '@vueform/toggle';
import { ref } from 'vue';

const toggleState = ref(false);
</script>
<style lang="scss">
.toggle-component {
    --toggle-bg-on: var(--primary-color);
    --toggle-border-on: var(--gradient-color);
    --toggle-border-off: var(--light-grey);
    --toggle-border: 1px;
    --toggle-ring-width: 0;
    --toggle-height: 21px;
    --toggle-width: 59px;

    .toggle-off {
        --toggle-handle-enabled: var(--light-grey);
        --toggle-bg-on: var(--light-color);
    }

    .toggle-handle {
        top: 50%;
        transform: translateY(-50%);
        height: 18px;
        width: 18px;

        &-off {
            left: 3px;
        }

        &-on {
            left: 65%;
        }
    }
}
</style>
<style src="@vueform/toggle/themes/default.css"></style>
