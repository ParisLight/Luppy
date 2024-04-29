<template>
  <div class="event-card">
    <div class="event-card__container">
      <div class="event-card__date">
        <span>{{ date }}</span>
      </div>
      <div class="event-card__top">
        <div class="event-card__name">
          <span>{{ title }}</span>
        </div>
        <div class="event-card__geo">
          <div class="event-card__geo-icon">
            <img src="/images/icons/Location.svg" alt="location">
          </div>
          <span>{{geo.name}}</span>
        </div>
      </div>
      <div class="event-card__main">
        <span>{{description}}</span>
      </div>
      <div class="event-card__bottom">
        <EventMembers
          :members-list="members"
        />
        <TagButton
          class="is-active"
          text="Join Us"
          type="secondary"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TagButton } from '@/shared/index'
import EventMembers from "@/entities/EventCard/EventMembers.vue";
import { type Props } from './type'

withDefaults(defineProps<Props>(), {
  date: 'September 30, 2023',
  title: 'Puppy Playdate',
  description: 'Bring your 🐶 friend for a day of fun and socialization with other puppies. There ...',
  geo: {
    name: 'Dog Park',
    coords: [15.232, 15.23331]
  },
  members: () => [{}]
})
</script>
<style lang="scss" scoped>
.event-card {
  border-radius: 10px;
  background-color: var(--darker-grey);
  padding: 20px;
  width: 350px;
  &__date {
    span {
      font-size: 12px;
      line-height: 15px;
      color: var(--white-color);
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
  }
  &__name {
    span {
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      color: var(--secondary-logo-color);
    }
  }
  &__main {
    margin-top: 10px;
    span {
      font-size: 12px;
      line-height: 15px;
    }
  }
  &__geo {
    display: flex;
    align-items: center;
    column-gap: 6px;
    cursor: pointer;
    &-icon {
      width: 11px;
      height: 14px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>