<script setup lang="ts" >
import { Search } from '@element-plus/icons-vue'
import router from "@/router";

function goSearch() {
  router.push({ name: "searchPage" })
}

function goHome() {
  router.push({ name: "homepage" })
}
</script>

<template>
  <header class="flex justify-between border-b border-gray-300 px-24 py-3 bg-white">
    <div class="flex items-center gap-4">
      <img src="@/assets/recipe.svg" alt="recipes" class="w-12">
      <div>
        <h2 class="text-xl font-bold">Все рецепты</h2>
        <p class="text-xs text-slate-400">Еда — это искусство, а ты художник</p>
      </div>
    </div>
    <div class=" flex-1 flex items-center gap-2 px-10">
      <el-input v-model="input" style="width: 300px; height: 45px" placeholder="Поиск по рецептам"></el-input>
      <el-button plain :icon="Search" size="large" circle />
    </div>
    <div class="flex items-center">
      <el-button @click="goHome" plain>Главная</el-button>
      <el-button @click="goSearch" plain>Подробный поиск</el-button>
      <el-button plain>О нас</el-button>
    </div>
  </header>
</template>

