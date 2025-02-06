<script setup lang="ts">

import {Timer, PieChart, More}from'@element-plus/icons-vue'

defineProps<{
  title: string;
  image: string;
  readyInMinutes: string;
  calories: number;
}>();

</script>


<template>
  <el-card shadow="hover" class="relative w-full max-w-auto" :body-style="{ padding: '0px' }">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />

    <div class="flex flex-col">

      <div class="flex justify-between items-center mt-0.5 text-gray-600 text-sm px-1 py-1">
        <span class="flex items-center gap-1">
          <el-icon><PieChart /></el-icon>
          {{ calories }} ккал
        </span>
        <span class="flex items-center gap-1">
          <el-icon><Timer /></el-icon>
          {{ readyInMinutes }}
        </span>
      </div>

      <div>
        <h3 class="font-semibold text-lg mt-1 px-1 py-1">{{ title }}</h3>
      </div>

      <div>
        <el-button class="absolute bottom-0 right-0" @click="toggleCard" :icon="More" circle></el-button>
      </div>
    </div>
  </el-card>
</template>
