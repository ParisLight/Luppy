<template>
  <div class="onboarding-steps">
    <div class="content__skip" @click="goToLogin()">
      <span>Skip</span>
    </div>
    <div class="content__main">
      <Transition name="slide-right" mode="out-in">
        <div class="content__img" v-if="currentStep.image" :key="currentStep.image">
          <img :src="currentStep.image" alt="image">
        </div>
      </Transition>
      <Transition name="slide-right" mode="out-in">
        <div class="content__title" v-if="currentStep.title" :key="currentStep.title">
          <span>{{ currentStep.title }}</span>
        </div>
      </Transition>
      <Transition name="slide-right" mode="out-in">
        <div class="content__text" v-if="currentStep.description" :key="currentStep.description">
          <span>{{ currentStep.description }}</span>
        </div>
      </Transition>
      <PaginationWhite
          class="content__pagination-white"
          :paginationList="steps"
          :activeElement="currentStep"
      />
      <StepsCircle
          class="content__steps-circle"
          @clickStep="nextStep()"
          :step="currentStep.id"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { StepsCircle, PaginationWhite } from '@/shared/index'

const router = useRouter()

const steps = ref([
  {
    id: 0,
    title: 'Welcome to Luppy!',
    description: 'With our easy-to-use app, you can browse profiles, send messages, and arrange meetups with other dog owners in your area.',
    image: '/images/mainPage/onboarding_1.png',
  },
  {
    id: 1,
    title: 'Create your dog\'s profile.',
    description: 'Include information about your dog\'s breed, size, temperament, energy level, and play style.',
    image: '/images/mainPage/onboarding_2.png',
  },
  {
    id: 2,
    title: 'Start swiping!',
    description: 'Once you\'ve created your dog\'s profile, you can start swiping through potential matches.',
    image: '/images/mainPage/onboarding_3.png',
  }
])
const currentStep = ref(steps.value[0]);
const nextStep = () => {
  const currentId = currentStep.value?.id
  if(typeof currentId !== 'undefined') {
    const nextStep = steps.value.find(step => step.id === currentId + 1)
    if(nextStep) currentStep.value = nextStep
    else goToLogin()
  }
}

const goToLogin = () => {
  router.push('/auth')
}
</script>
<style lang="scss" scoped>
.content__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  overflow: hidden;
}
.content__skip {
  text-align: right;
  cursor: pointer;
}
.content__skip span {
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
}
.content__img {
  width: fit-content;
  height: 225px;
  font-size: 0;
}
.content__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content__title {
  margin-top: 40px;
}
.content__title span {
  font-size: 24px;
  font-weight: 600;
  color: var(--white-color);
}
.content__text {
  margin-top: 10px;
  height: 60px;
  text-align: center;
}
.content__text span {
  font-size: 14px;
  font-weight: 300;
  color: var(--light-color);
}
.content__pagination-white {
  margin-top: 35px;
}
.content__steps-circle {
  margin-top: 80px;
}
</style>