<template>
  <div class="event-members">
    <div class="event-members__member" v-for="(member, index) in membersList" :key="index">
      <img :src="member.image" alt="member-1" v-if="member && member.image">
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  membersList: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>
<style lang="scss" scoped>
.event-members {
  display: flex;
  align-items: center;
  height: 34px;
  &__member {
    width: 34px;
    height: 34px;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--darker-grey);
    border-radius: 100%;
    overflow: hidden;
    &:not(:first-child) {
      margin-left: -8px;
    }
    img {
      width: 28px;
      height: 28px;
      object-fit: cover;
      border-radius: 100%;
      overflow: hidden;
    }
  }
}
</style>