<template>
    <!--  TODO: create some wrapper who encapsulates components: top-events/popular-dogs/new-matches-->
    <div class="popular-dogs">
        <div class="popular-dogs__top">
            <div class="popular-dogs__title">
                <span>Top Events</span>
            </div>
            <div class="popular-dogs__all" v-if="dogsPreview.length > 6">
                <span>See All</span>
            </div>
        </div>
        <div class="popular-dogs__list-wrapper">
            <div class="popular-dogs__list" v-if="dogsPreview.length">
                <DogPreview
                    v-for="(preview, index) in dogsPreview"
                    :key="index"
                    :img="preview.img"
                    :status="preview.status"
                />
            </div>
            <div v-else>
                -
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DogPreview } from "@/entities/index";
import { dogsPreview } from '@/content/homePage'

</script>
<style lang="scss" scoped>
.popular-dogs {
    padding-left: 30px;
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 30px;
    }
    &__title {
        span {
            color: var(--white-color);
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
        }
    }
    &__all {
        cursor: pointer;
        span {
            color: var(--white-color);
            font-size: 12px;
            line-height: 15px;
        }
    }
    &__list-wrapper {
        overflow: hidden;
        overflow-x: auto;
        margin-top: 15px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    &__list {
        display: flex;
        width: max-content;
        column-gap: 15px;
        &-item:last-child {
            margin-right: 30px;
        }
    }
}
</style>