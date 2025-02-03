<script setup lang="ts" >
import { Search, Operation } from '@element-plus/icons-vue'
</script>

<template>
  <header class="flex justify-between border-b border-gray-300 px-10 py-3">
    <div class="flex items-center gap-4">
      <img src="@/assets/recipe.svg" alt="recipes" class="w-12">
      <div>
        <h2 class="text-xl font-bold">Все рецепты</h2>
        <p class="text-xs text-slate-400">Еда — это искусство, а ты художник</p>
      </div>
    </div>
    <div class=" flex-1 flex items-center gap-2 px-10">
      <el-input v-model="input" style="width: 300px" placeholder="Поиск по рецептам">
        <template #suffix>
          <el-button :icon="Operation" size="large" style="border: none; margin-right: -10px;" ></el-button>
        </template>
      </el-input>
      <el-button plain :icon="Search" size="large" circle />
    </div>
    <div class="flex items-center">
      <el-button plain>Главная</el-button>
    </div>
  </header>
</template>

