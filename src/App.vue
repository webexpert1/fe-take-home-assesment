<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header class="p-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-20">
    <nav class="flex gap-4 justify-center">
      <RouterLink to="/" class="text-gray-700 font-bold hover:text-blue-600 transition-colors duration-200">Home</RouterLink>
      <RouterLink to="/battery-dashboard" class="text-gray-700 font-bold hover:text-blue-600 transition-colors duration-200">Battery Dashboard</RouterLink>
    </nav>
  </header>

  <main class="min-h-[calc(100vh-4rem)] flex justify-center items-start pt-12">
    <RouterView />
  </main>

  <VueQueryDevtools />
</template>