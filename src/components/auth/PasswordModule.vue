<template>
  <div>
    <div class="text-3xl font-bold">输入你的密码</div>
    <div class="animated-input mx-auto mt-6">
      <input v-model="identification" type="text" required disabled />
      <label>手机号码或YXG ID</label>
    </div>
    <div class="animated-input mx-auto mt-4">
      <input v-model="password" type="password" required />
      <label>密码</label>
    </div>
    <div class="hyperlink ml-[5.4rem] mt-1 text-left text-xs">忘记密码？</div>
    <button class="btn ml-2 mt-36 bg-blue-700 text-base font-bold text-white">登录</button>
    <div class="mt-2">
      还没有账号？<span @click="$router.push({ name: 'auth-register' })" class="hyperlink">注册</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const identification = router.currentRoute.value.query.identification
const password = ref('')
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
