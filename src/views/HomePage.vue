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
  await recipeStore.loadRecipes(page.value);
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
    <div class="grid gap-10" style="grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));">
      <Card v-for="recipe in recipeStore.recipes" :key="recipe.id"
            :title="recipe.title"
            :image="recipe.image"
            :calories="getCalories(recipe.summary)"
            :ready-in-minutes="convertMinute(recipe.readyInMinutes)"
            :servings="recipe.servings"
            :aggregateLikes="recipe.aggregateLikes"
            :dish-types="recipe.dishTypes"
      />
    <div
         v-infinite-scroll="loadMoreRecipes"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="300">
    </div>
    </div>
  </main>
</template>
