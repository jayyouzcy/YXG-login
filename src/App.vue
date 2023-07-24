<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="el-fade-in" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
