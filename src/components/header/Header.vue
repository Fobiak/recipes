<script setup lang="ts" >
import router from "@/router";
import {computed, onMounted, ref} from "vue";
import { useRoute } from "vue-router"
import { useRecipeStore } from "@/store/recipeStore";
import { useDebounceFn } from '@vueuse/core';
import {Back} from "@element-plus/icons-vue";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.loadRecipes();
});

const searchQueryHead = ref('');
const headSearch = useDebounceFn(() => {
  recipeStore.loadRecipes(1, searchQueryHead.value);
}, 1000);

const clearSearch = () => {
  searchQueryHead.value = '';
  recipeStore.loadRecipes(1, '');
};

const route = useRoute();
const showSearch = computed(() => route.meta.showSearch);

function goSearch() {
  router.push({ name: "searchPage" })
}

function goHome() {
  router.push({ name: "homepage" })
}

</script>

<template>
  <header class="flex justify-between border-b border-gray-300 px-24 py-3 bg-white">
    <div class="flex items-center gap-4 cursor-pointer"
         @click="$router.push(`/`)">
      <img src="@/assets/recipe.svg" alt="recipes" class="w-12">
      <div>
        <h2 class="text-xl font-bold">Все рецепты</h2>
        <p class="text-xs text-slate-400">Еда — это искусство, а ты художник</p>
      </div>
    </div>
    <div v-if="showSearch" class=" flex-1 flex items-center gap-2 px-10">
      <el-input v-model="searchQueryHead"
                @input="headSearch"
                @clear="clearSearch"
                style="width: 300px; height: 45px"
                placeholder="Поиск по рецептам"
                clearable>
      </el-input>
    </div>
    <div class="flex items-center">
      <el-button @click="goHome" plain>Главная</el-button>
      <el-button @click="goSearch" plain>Подробный поиск</el-button>
      <el-button plain @click="router.back()" :icon="Back"></el-button>
    </div>
  </header>
</template>

