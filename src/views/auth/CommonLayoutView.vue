<template>
  <Transition name="el-fade-in" mode="out-in">
    <!-- 除了 auth-index 外的所有模块的共同背景 -->
    <div v-if="$router.currentRoute.value.name !== 'auth-index'" class="bg">
      <div class="auth-container">
        <i-ep-close-bold @click="$router.push({ name: 'auth-index' })" class="ml-4 mt-4 cursor-pointer text-2xl" />
        <div class="text-center">
          <img class="mx-auto -mt-6 h-24 object-cover" src="@/assets/common/YX_gov.png" />
          <RouterView v-slot="{ Component }">
            <Transition name="el-fade-in" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </div>
      </div>
    </div>
    <div v-else>
      <RouterView />
    </div>
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
  background-image: url('@/assets/auth/login_bg.jpg');
  background-size: cover;
  @apply flex h-screen items-center;
}

.auth-container {
  border-radius: 24px;
  background-color: white;
  box-shadow: 0px 9px 23px rgba(0, 0, 0, 0.25);
  @apply mx-auto h-[34rem] w-[28rem];
}
</style>
