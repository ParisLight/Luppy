<template>
  <div class="contact-user">
    <div class="contact-user__content">
      <div class="contact-user__info">
        <DogPreview
          :img="'/images/partials/eventMembers/member-1.png'"
          :status="true"
        />
        <div class="contact-user__text">
          <span class="contact-user__name">Luna Cutipie</span>
          <div class="contact-user__status">Active Now</div>
        </div>
      </div>
      <div class="contact-user__actions">
        <div class="contact-user__action">
          <img src="/images/icons/cam_icon.svg" alt="camera">
        </div>
        <div class="contact-user__action">
          <img src="/images/icons/call_icon.svg" alt="call">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DogPreview } from "@/entities/index";
</script>
<style lang="scss" scoped>
.contact-user {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--darker-grey);
  &__content {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__info {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  &__name {
    color: var(--white-color);
    font-size: 18px;
    line-height: 21px;
  }
  &__status {
    color: var(--light-color);
    font-size: 12px;
    font-weight: 400;
  }
  &__actions {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  &__action {
    width: 24px;
    height: 24px;
    font-size: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>