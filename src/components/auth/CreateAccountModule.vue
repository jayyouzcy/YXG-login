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

      <button @click="currentStep++" class="btn ml-2 mt-24 bg-blue-700 text-base font-bold text-white">下一步</button>
      <div class="mt-4">
        已有账号了？<span @click="$router.push({ name: 'auth-login' })" class="hyperlink">登录</span>
      </div>
    </div>

    <!-- 步骤 2 -->
    <div v-if="currentStep === 2">
      <div class="mt-3 text-lg font-semibold tracking-widest">跟踪你在网络上使用YXG内容的位置</div>
      <div class="-ml-[1.25rem] -mt-2">
        <label class="font-yahei text-sm tracking-widest text-black">YXG 使用此数据对你的体验进行个性化。</label>
        <el-checkbox v-model="form.collectData"></el-checkbox>
      </div>
      <div class="mx-[17%] ml-[4rem] mt-3 text-left text-xs text-[#383838]">
        注册即表示同意<span class="hyperlink">服务条款</span>及<span class="hyperlink">隐私政策</span>，其中包括<span
          class="hyperlink"
          >Cookie 使用条款</span
        >。
      </div>

      <button @click="currentStep++" class="btn ml-2 mt-40 bg-blue-700 text-base font-bold text-white">下一步</button>
    </div>

    <!-- 步骤 3 -->
    <div v-if="currentStep === 3">
      <div class="animated-input mx-auto mt-4">
        <input v-model="form.name" type="text" required disabled />
        <label>姓名</label>
      </div>
      <div class="animated-input mx-auto mt-4">
        <input v-model="form.contact" type="text" required disabled />
        <label>{{ form.contact.includes('@') ? '邮箱地址' : '手机号码' }}</label>
      </div>

      <div class="mx-[16%] mt-24 text-left text-xs text-[#383838]">
        注册即表示同意<span class="hyperlink">服务条款</span>及<span class="hyperlink">隐私政策</span>，其中包括<span
          class="hyperlink"
          >Cookie 使用条款</span
        >。
      </div>
      <button @click="currentStep++" class="btn ml-2 mt-3 bg-blue-700 text-base font-bold text-white">注册</button>
    </div>

    <!-- TODO: 步骤 4 -->
  </div>
</template>

<script setup lang="ts">
const currentStep = ref(1)
const stepTitles = ['创建你的YXG账户', '定制你的体验', '创建你的YXG账户']

const form = reactive({
  name: '',
  contact: '',
  collectData: true,
})
</script>

<style scoped>
@import '@/assets/auth/style.css';
</style>
