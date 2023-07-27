<template>
  <div>
    <div class="text-3xl font-bold">
      {{ (currentStep === 4 ? (form.contact.includes('@') ? '邮箱' : '手机号码') : '') + stepTitles[currentStep - 1] }}
    </div>
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

    <!-- TODO: 步骤 4 需要完善邮箱转手机验证 -->
    <div v-if="currentStep === 4">
      <div class="mt-4 text-2xl font-semibold">我们向你发送了一个代码</div>
      <div class="mt-1">在下面输入验证{{ form.contact }}。</div>
      <div class="animated-input mx-auto mt-4">
        <input v-model="verificationCode" type="text" required />
        <label>验证码</label>
      </div>
      <div class="hyperlink ml-[5.4rem] mt-1 text-left text-xs">
        <span v-if="form.contact.includes('@')" @click="popConfirmOpen = !popConfirmOpen">没有收到邮件？ </span>
        <span v-else @click="null">重新获取验证码</span>
        <div
          v-if="popConfirmOpen"
          class="absolute left-0 top-0 h-screen w-screen cursor-default"
          @click="popConfirmOpen = !popConfirmOpen"
        />
        <div v-if="popConfirmOpen" class="pop-confirm cursor-default text-black">
          <div class="ml-3 mt-2">没有收到邮件？</div>
          <div @click="null" class="ml-4 mt-3 cursor-pointer font-bold">重新发送邮件</div>
          <div @click="null" class="ml-4 mt-1 cursor-pointer font-bold">改用手机号码</div>
        </div>
      </div>

      <button @click="currentStep++" class="btn ml-2 mt-24 bg-blue-700 text-base font-bold text-white">下一步</button>
    </div>

    <!-- TODO: 步骤 5 -->
  </div>
</template>

<script setup lang="ts">
const currentStep = ref(1)
const stepTitles = ['创建你的YXG账户', '定制你的体验', '创建你的YXG账户', '验证']

const form = reactive({
  name: '',
  contact: '',
  collectData: true,
})

const verificationCode = ref()

const popConfirmOpen = ref(false)
</script>

<style scoped>
@import '@/assets/auth/style.css';

.pop-confirm {
  position: absolute;
  left: 605px;
  top: 470px;
  width: 6.5rem;
  height: 5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
