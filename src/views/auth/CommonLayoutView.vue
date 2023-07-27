<template>
  <Transition name="el-fade-in" mode="out-in">
    <!-- 除了 auth-index 外的所有模块的共同背景 -->
    <div
      v-if="
        $router.currentRoute.value.name !== 'auth-index' && $router.currentRoute.value.name !== 'auth-createSuccess'
      "
      class="bg"
    >
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
@import '@/assets/auth/style.css';
</style>
