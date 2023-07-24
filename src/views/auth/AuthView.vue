<template>
  <div class="min-h-screen">
    <el-row>
      <el-col :span="12">
        <img
          class="min-h-screen rounded-r-[30px] object-cover"
          style="object-position: 72%"
          src="@/assets/auth/auth_side_img.png"
        />
      </el-col>

      <el-col :span="12">
        <div class="mx-auto mt-8 w-[19rem]">
          <img class="h-16 w-48 object-cover" src="@/assets/common/GYX_gov.png" />

          <div class="ml-2 mt-10 text-3xl font-bold">为了明天的一切，</div>
          <div class="ml-[4.5rem] text-3xl font-bold">为了一切的明天</div>

          <div class="ml-3 mt-10 text-4xl font-bold">立即加入YXG。</div>

          <button class="btn ml-2 mt-12 bg-blue-700 text-base font-bold text-white">创建账号</button>
          <div class="ml-2 mt-1 text-[0.1rem] text-[#383838]">
            注册即表示同意<span class="text-blue">服务条款</span>及<span class="text-blue">隐私政策</span
            >，其中包括<span class="text-blue">Cookie 使用条款</span>。
          </div>

          <div @click="router.push({ name: 'auth-login' })" class="ml-2 mt-8 cursor-pointer text-2xl font-bold">
            已有账号？
          </div>

          <button class="btn ml-2 mt-6 border-[3px] border-[#d6d6d6] bg-white text-sm">
            <div class="flex items-center justify-center">
              <img class="mr-1 h-9 w-16" src="@/assets/common/GYX_community.png" />
              <div class="font-yahei font-bold">通过 Y X 社区登录</div>
            </div>
          </button>
          <div class="ml-[8.5rem] mt-2 font-bold">或</div>
          <button class="btn ml-2 mt-2 border-[3px] border-[#d6d6d6] bg-white font-bold text-blue-700">登录</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style scoped>
.text-blue {
  color: rgba(18, 85, 181, 1);
}

.btn {
  @apply min-h-[2.5rem] min-w-[17.5rem] rounded-[60px] font-yahei;
}
</style>
