<template>
  <div>
    <i-ep-close-bold @click="$router.push({ name: 'auth-index' })" class="ml-4 mt-4 cursor-pointer text-2xl" />
    <div class="text-center">
      <img class="mx-auto -mt-6 h-24 object-cover" src="@/assets/common/YX_gov.png" />
      <div class="cursor-pointer text-3xl font-bold">现在就加入到YXG</div>
      <button class="btn mt-6 border-[3px] border-[#d6d6d6] bg-white text-sm">
        <div class="flex items-center justify-center">
          <img class="mr-1 h-7" src="@/assets/common/YX_community.png" />
          <div class="font-yahei font-bold">通过 Y X 社区登录</div>
        </div>
      </button>
      <div class="mt-4 text-xl font-bold">或</div>
      <button
        @click="$router.push({ name: 'auth-register' })"
        class="btn ml-2 mt-4 bg-blue-700 text-base font-bold text-white"
      >
        创建账号
      </button>
      <div class="mx-[20%] mt-1 text-left text-xs text-[#383838]">
        注册即表示同意<span class="hyperlink">服务条款</span>及<span class="hyperlink">隐私政策</span>，其中包括<span
          class="hyperlink"
          >Cookie 使用条款</span
        >。
      </div>

      <div class="mt-32">
        已有账号了？<span @click="$router.push({ name: 'auth-login' })" class="hyperlink">登录</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
