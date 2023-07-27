<template>
  <div>
    <div class="text-3xl font-bold">{{ stepTitles[currentStep - 1] }}</div>
    <div class="mt-4 text-2xl font-semibold tracking-widest">第{{ currentStep }}步，共5步</div>

    <!-- 步骤 1 -->
    <div v-if="currentStep === 1">
      <div class="animated-input mx-auto mt-4">
        <input v-model="form.name" type="text" required />
        <label>姓名</label>
      </div>
      <div class="animated-input mx-auto mt-4">
        <input v-model="form.contact" type="text" required />
        <label>手机号码或邮箱地址</label>
      </div>

      <button @click="currentStep++" class="btn ml-2 mt-28 bg-blue-700 text-base font-bold text-white">下一步</button>
      <div class="mt-4">
        已有账号了？<span @click="$router.push({ name: 'auth-login' })" class="hyperlink">登录</span>
      </div>
    </div>

    <!-- TODO: 步骤 2 -->
  </div>
</template>

<script setup lang="ts">
const currentStep = ref(1)
const stepTitles = ['创建你的YXG账户']

const form = reactive({
  name: '',
  contact: '',
})
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
