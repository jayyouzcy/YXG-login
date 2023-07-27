<template>
  <div class="bg">
    <div class="auth-container">
      <i-ep-close-bold @click="$router.push({ name: 'auth-index' })" class="ml-4 mt-4 cursor-pointer text-2xl" />
      <div class="text-center">
        <img class="mx-auto mt-12 h-24 object-cover" src="@/assets/common/YX_gov.png" />
        <div class="text-3xl font-bold">创建你的YXG账户</div>
        <div class="mt-7 text-4xl font-bold">成功</div>
        <button @click="null" class="btn ml-2 mt-7 bg-blue-700 text-base font-bold text-white">访问你的账户页面</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
