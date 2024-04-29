<template>
  <div class="home-page">
    <div class="container container__main">
      <InputField
          class="home-page__input-field home-page__section"
          placeholder="Search"
          :showSearch="true"
          :showLabel="false"
      />
    </div>
    <NewMatches
      class="home-page__new-matches home-page__section"
    />
    <PopularDogs
      class="home-page__popular-dogs home-page__section"
    />
    <TopEvents
      class="home-page__top-events home-page__section"
    />
  </div>
</template>
<script setup lang="ts">
import { InputField } from '@/shared/index'
import {
    PopularDogs,
    TopEvents,
    NewMatches
} from "@/widgets/index";
</script>
<style lang="scss" scoped>
.home-page {
  &__section{
    margin-top: 35px;
  }
}
</style>