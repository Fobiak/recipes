<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import { useRecipeStore } from "@/store/recipeStore";
import { getCalories } from "@/utils/getCalories";
import { convertMinute } from "@/utils/convertMinute";
import Card from "@/components/card/Card.vue";
import { vInfiniteScroll } from '@vueuse/components';

const page = ref(1);
const loading = ref(false)

const recipeStore = useRecipeStore();
const isLoading = ref(true);

const loadMoreRecipes = async () => {
  if (loading.value) return;
  loading.value = true;
  await recipeStore.loadRecipes(page.value, recipeStore.currentSearchQuery);
  page.value++;
  loading.value = false;
};

onMounted(async () => {
  isLoading.value = true;
  await recipeStore.loadRecipes();
  isLoading.value = false;
});

watch(() => recipeStore.recipes, () => {
  isLoading.value = false;
});
</script>

<template>
  <main class="px-24 py-8" v-loading="isLoading">
    <div v-if="recipeStore.recipes.length === 0 && !isLoading" class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Рецепты не найдены</h1>
        <p class="mt-6 text-lg font-medium text-gray-500 sm:text-xl/8">
          К сожалению, по вашему запросу рецептов не найдено.
        </p>
      </div>
    </div>
    <div v-else class="grid gap-10" style="grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));">
      <Card v-for="recipe in recipeStore.recipes"
            :key="recipe.id"
            :id="recipe.id"
            :title="recipe.title"
            :image="recipe.image"
            :calories="getCalories(recipe.summary)"
            :ready-in-minutes="convertMinute(recipe.readyInMinutes)"
            :servings="recipe.servings"
            :aggregateLikes="recipe.aggregateLikes"
            :dish-types="recipe.dishTypes"
            @click="$router.push(`/detail/${recipe.id}`)"
            class="cursor-pointer"
      />
    <div
         v-infinite-scroll="loadMoreRecipes"
         infinite-scroll-disabled="loading || recipeStore.recipes.length === 0"
         infinite-scroll-distance="300">
    </div>
    </div>
  </main>
</template>
