<template>
  <el-card
      shadow="hover"
      class="w-[300px] h-[430px] flex flex-col justify-between"
      :body-style=" { padding: '0px' } "
  >
    <img :src="image" :alt="title" class="w-full h-[180px] object-cover"/>

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex justify-between text-gray-800 text-sm " >
        <span class="flex items-center gap-1">
          <el-icon :size="20" :color="'#000000'"><PieChart /></el-icon>
          {{ calories }} ккал
        </span>
        <span class="flex items-center gap-1">
          <el-icon :size="20" :color="'#000000'"><Timer /></el-icon>
          {{ readyInMinutes }}
        </span>
      </div>

      <h2 class="text-lg font-bold truncate mt-2">{{ title }}</h2>
      <div class="flex flex-wrap gap-1 mt-2 text-sm text-gray-500">
        <span v-for="type in dishTypes.slice(0, 6)" :key="String(type)" class="bg-gray-200 px-2 py-1 rounded-md">
          {{ type }}
        </span>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-between items-center px-4 py-2">
        <div class="flex flex-col text-sm">
          <span class="flex gap-1 p-1">
            <el-icon :size="20"><Food /></el-icon>
            {{ servings }} порц.
          </span>
          <span class="flex gap-1 p-1">
            <el-icon :size="20"><StarFilled /></el-icon>
            {{ aggregateLikes }}
          </span>
        </div>
        <el-button class="flex items-center" round>Перейти </el-button>
      </div>
    </template>
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
  dishTypes: Array,
});
</script>

