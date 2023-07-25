<template>
  <div>
    <i-ep-close-bold @click="$router.push({ name: 'auth-index' })" class="ml-4 mt-4 cursor-pointer text-2xl" />
    <div class="text-center">
      <img class="mx-auto mt-1 h-12 w-40 object-cover" src="@/assets/common/GYX_gov.png" />
      <div class="mt-4 text-3xl font-bold">登录到YXG</div>
      <div class="animated-input mx-auto mt-4">
        <input v-model="identification" type="text" required />
        <label>手机号码、邮箱地址或YXG ID</label>
      </div>
      <button class="btn ml-2 mt-8 bg-blue-700 text-base font-bold text-white">下一步</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const identification = ref('')
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
