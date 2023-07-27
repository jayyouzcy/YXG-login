<template>
  <div>
    <div class="text-2xl font-bold">输入你的手机号码或YXG ID</div>
    <div class="mx-[12%] mt-1 text-sm">
      你的账户存在异常登录活动。为了保证你的账户安全，请输入你的手机号码或YXG ID以确认你的身份。
    </div>
    <div class="animated-input mx-auto mt-4">
      <input v-model="verification" type="text" required />
      <label>手机号码或YXG ID</label>
    </div>
    <button
      @click="$router.push({ name: 'auth-password', query: { identification } })"
      class="btn ml-2 mt-56 bg-blue-700 text-base font-bold text-white"
    >
      下一步
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const identification = router.currentRoute.value.query.identification
console.log(identification)
const verification = ref('')
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
