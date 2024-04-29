<template>
  <div class="multi-tags">
    <div class="multi-tags__title">
      <span>{{ title }}</span>
    </div>
    <div class="multi-tags__list" v-if="list">
      <TagButton
          class="multi-tags__tag-button"
          :class="{'is-active': selected.includes(tag)}"
          v-for="(tag, key) in list"
          :key="key"
          :text="tag.text"
          @click="tagClick(tag)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { TagButton } from "@/shared";
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title tags'
  },
  list: {
    type: Array<object>,
    default: () => []
  },
  model: {
    type: Array<object>,
    default: false
  }
})

const emit = defineEmits(['change'])

const selectedTags = ref([])
const selected = props.model || selectedTags.value

const tagClick = (tag) => {
  if (!tag) return;

  const index = selected.indexOf(tag);
  if (index !== -1) selected.splice(index, 1);
  else selected.push(tag);

  emit('change', selected);
  console.log(props.model, 'model')
};
</script>
<style lang="scss" scoped>
.multi-tags {
  &__title {
    span {
      font-weight: 600;
    }
  }
  &__list {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  &__tag-button {
    padding: 7px 10px;
  }
}
</style>