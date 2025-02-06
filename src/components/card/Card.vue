<template>
  <el-card shadow="hover" class="relative w-full max-w-auto flex flex-col" :body-style="{ padding: '0px' }">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />

    <div class="flex flex-col p-2">
      <div class="flex justify-between items-center text-gray-600 text-sm">
        <span class="flex items-center gap-1">
          <el-icon><PieChart /></el-icon>
          {{ calories }} ккал
        </span>
        <span class="flex items-center gap-1">
          <el-icon><Timer /></el-icon>
          {{ readyInMinutes }}
        </span>
      </div>

      <h3 class="font-semibold text-lg mt-1">{{ title }}</h3>

      <div class="flex justify-between items-center mt-2">
        <span class="flex items-center gap-1">
          <el-icon><Food /></el-icon>
          {{ servings }} порций
        </span>
        <span class="flex items-center gap-1">
          <el-icon><StarFilled /></el-icon>
          {{ aggregateLikes }}
        </span>
      </div>
    </div>
  </el-card>
</template>



<script setup lang="ts">
import { Timer, PieChart, Food, StarFilled} from '@element-plus/icons-vue';

defineProps({
  image: String,
  title: String,
  calories: Number,
  readyInMinutes: String,
  servings: Number,
  aggregateLikes: Number,
});
</script>

