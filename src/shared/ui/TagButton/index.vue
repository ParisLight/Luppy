<template>
    <div class="tag-button">
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.tag-button{
    border-radius: 15px;
    border: 1px solid #A79DB4;
    background-color: var(--light-color);
    padding: 8px 28px;
    display: inline-flex;
    align-items: center;
    width: auto;
    cursor: pointer;
    transition: .3s ease-in-out;
    transition-property: background, border;
    &.is-active{
        background-color: var(--darker-grey);
        border: 1px solid var(--gradient-color);
        span{
            color: white;
        }
    }
    span{
        color: var(--darker-grey);
        font-size: 12px;
        font-weight: 400;
        transition: .3s ease-in-out color;
    }
}
</style>