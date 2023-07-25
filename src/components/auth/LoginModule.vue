<template>
  <div>
    <i-ep-close-bold @click="$router.push({ name: 'auth-index' })" class="ml-4 mt-4 cursor-pointer text-2xl" />
    <div class="text-center">
      <img class="mx-auto mt-1 h-12 w-40 object-cover" src="@/assets/common/GYX_gov.png" />
      <div class="mt-4 text-3xl font-bold">登录到YXG</div>
      <button class="btn mt-6 border-[3px] border-[#d6d6d6] bg-white text-sm">
        <div class="flex items-center justify-center">
          <img class="mr-1 h-9 w-16" src="@/assets/common/GYX_community.png" />
          <div class="font-yahei font-bold">通过 Y X 社区登录</div>
        </div>
      </button>
      <div class="mt-4 text-xl font-bold">或</div>
      <div class="animated-input mx-auto mt-4">
        <input v-model="identification" type="text" required />
        <label>手机号码、邮箱地址或YXG ID</label>
      </div>
      <button
        @click="$router.push({ name: 'auth-abnormal', query: { identification } })"
        class="btn ml-2 mt-8 bg-blue-700 text-base font-bold text-white"
      >
        下一步
      </button>
      <button class="btn ml-2 mt-2 border-[3px] border-[#d6d6d6] bg-white font-bold">忘记密码？</button>
      <div class="mt-8">
        还没有账号？<span @click="$router.push({ name: 'auth-register' })" class="hyperlink">注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const identification = ref('')
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
