<template>
  <!-- 除了 auth-index 外的所有模块的共同背景 -->
  <div v-if="$router.currentRoute.value.name !== 'auth-index'" class="bg">
    <div class="auth-container">
      <RouterView v-slot="{ Component }">
        <Transition name="el-fade-in" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
  <RouterView v-else v-slot="{ Component }">
    <Transition name="el-fade-in" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
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
