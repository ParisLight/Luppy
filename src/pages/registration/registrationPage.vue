<template>
  <div class="login-page">
    <div class="content container">
      <StepProgressbar
          class="login-page__step-progressbar"
          :step="currentStep.type"
      />
      <div class="login-page__back" @click.stop="goToBackStep()">
        <div class="login-page__back-icon">
          <img src="/images/icons/arrow-left.svg" alt="left">
        </div>
        <div class="login-page__back-text">
          <span>Back</span>
        </div>
      </div>
      <div class="login-page__steps">
        <Transition :name="stepsAnimation" mode="out-in">
          <div
              class="login-page__step"
              :key="currentStep.id"
              v-if="currentStep.type && currentStep.type === 'start'"
          >
            <div class="login-page__title">
              <span>Find your pawfect match</span>
            </div>
            <div class="login-page__descr">
              <span>Join Luppy, the dog dating app that helps you find love for both you and your furry friend.</span>
            </div>
            <div class="login-page__content">
              <InputField
                  :placeholder="'Enter your email address'"
                  :show-label="true"
                  :label-text="'Email'"
                  :label-icon="false"
                  :show-search="false"
                  v-model="userInfo.mail"
              />
              <BaseButton
                  class="login-page__continue"
                  :type="'primary'"
                  :text="'Continue'"
                  :state="userInfo.mail.length < 3 ? 'disabled' : 'default'"
                  @click="goToNextStep()"
              />
              <div class="login-page__already-registered">
                <span style="font-weight: 300">Already have an account?</span>
                <span style="font-weight: 400" @click="router.push('/registration')"> Log in</span>
              </div>
            </div>
          </div>
          <div
              v-else-if="currentStep.type && currentStep.type === 'half'"
              class="login-page__step"
              :key="currentStep.id"
          >
            <div class="login-page__title">
              <span>Tell us about your 🐶’ soulmate</span>
            </div>
            <div class="login-page__descr">
              <span>
                Help us find the perfect match for your dog by providing some information about them.
              </span>
            </div>
            <div class="login-page__content">
              <InputField
                  :placeholder="'Enter your dog\'s name'"
                  :show-label="true"
                  :label-text="'Dog\'s Name'"
                  :label-icon="false"
                  :show-search="false"
                  v-model="userInfo.dogName"
              />
              <InputField
                  :placeholder="'Enter your dog\'s breed'"
                  :show-label="true"
                  :label-text="'Breed'"
                  :label-icon="false"
                  :show-search="false"
                  v-model="userInfo.breed"
              />
              <div class="login-page__radios">
                <div class="login-page__radios-name">
                  <span>Gender:</span>
                </div>
                <RadioButtonGroup
                    class="login-page__radio-button-group"
                    :list="gendersList"
                    :default="0"
                    @change="userInfo.gender = $event"
                />
              </div>
              <div class="login-page__radios">
                <div class="login-page__radios-name">
                  <span>Size:</span>
                </div>
                <RadioButtonGroup
                    class="login-page__radio-button-group"
                    :list="sizesList"
                    :default="0"
                    @change="userInfo.size = $event"
                />
              </div>
              <DatePicker
                  @changeDate="userInfo.dogAge = $event"
                  :placeholder="'Select Age'"
              />
              <BaseButton
                  class="login-page__continue"
                  :type="'primary'"
                  :text="'Continue'"
                  :state="userInfo.mail.length < 3 ? 'disabled' : 'default'"
                  @click="goToNextStep()"
              />
            </div>
          </div>
          <div
              v-else-if="currentStep.type && currentStep.type === 'end'"
              class="login-page__step"
              :key="currentStep.id"
          >
            <div class="login-page__title">
              <span>Tell us about your 🐶’ soulmate</span>
            </div>
            <div class="login-page__descr">
              <span>
                Help us find the perfect match for your dog by providing some information about them.
              </span>
            </div>
            <div class="login-page__content">
              <MultiTags
                  :title="'Temperament:'"
                  :model="userInfo.temperament"
                  :list="temperamentList"
              />
              <MultiTags
                  :title="'Interests:'"
                  :model="userInfo.interests"
                  :list="interestsList"
              />
              <BaseButton
                  class="login-page__continue"
                  :type="'primary'"
                  :text="'Continue'"
                  :state="userInfo.mail.length < 3 ? 'disabled' : 'default'"
                  @click="goToNextStep()"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from "vue-router";
import {
  StepProgressbar,
  InputField,
  BaseButton,
  RadioButtonGroup,
  DatePicker
} from '@/shared/index'
import { MultiTags } from "@/features/MultiTags/index";
import {
  steps,
  temperamentList,
  sizesList,
  gendersList,
  interestsList
} from '@/content/registrationPage'

const router = useRouter()

const stepsAnimation = ref('slide-right')

const currentStep = computed(() => steps.value.find(step => step.active))

type Size = 'S' | 'M' | 'L'
type Gender = 'M' | 'F'
type userType = {
  mail: string,
  dogName: string,
  dogAge: string,
  breed: string,
  gender: Gender,
  size: Size,
  temperament: Array<object>,
  interests: Array<object>
}
const userInfo : userType = reactive({
  mail: '',
  dogName: '',
  dogAge: '',
  breed: '',
  gender: 'F',
  size: 'M',
  temperament: [],
  interests: []
})

const goToNextStep = () => {
  const indexCurrentStep = steps.value.findIndex(step => step.id === currentStep.value.id)
  if(indexCurrentStep === -1 || !steps.value[indexCurrentStep + 1]) return
  steps.value[indexCurrentStep].active = false
  steps.value[indexCurrentStep + 1].active = true
  stepsAnimation.value = 'slide-right'
}
const goToBackStep = () => {
  const indexCurrentStep = steps.value.findIndex(step => step.id === currentStep.value.id)
  if(typeof steps.value[indexCurrentStep - 1] === 'undefined') {
    router.push('/auth')
    return
  }
  if(!indexCurrentStep || indexCurrentStep === -1) return

  steps.value[indexCurrentStep - 1].active = true
  stepsAnimation.value = 'slide-left'
}
</script>
<style lang="scss" scoped>
.login-page {
  &__steps {
    margin-top: 35px;
  }
  &__back {
    display: flex;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
    margin-top: 35px;
    &-icon {
      width: 5px;
      height: 10px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__title span{
    font-size: 20px;
    font-weight: 600;
  }
  &__descr {
    margin-top: 10px;
    span {
      color: var(--light-color);
      font-weight: 300;
    }
  }
  &__content {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }
  &__radios {
    display: flex;
    align-items: center;
    &-name {
      width: 90px;
      span {
        font-weight: 300;
      }
    }
  }
  &__radio-button-group {
    width: 100%;
  }
  &__already-registered {
    text-align: center;
    span {
      color: var(--light-color);
      &:nth-child(2) {
        cursor: pointer;
      }
    }
  }
}
</style>