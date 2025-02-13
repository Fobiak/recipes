<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useRecipeInfoStore } from "@/store/RecipeInfoStore";

const recipeInfoStore = useRecipeInfoStore();
const route = useRoute();

onMounted(async () => {
  const recipeId = Number(route.params.id)
  await recipeInfoStore.loadRecipes(recipeId); // Загружаем детали рецепта
});
</script>

<template>
  <p>Эта страница постав с ID</p>
  <div v-if="recipeInfoStore.recipe">
    <h1 class="text-2xl font-bold">{{ recipeInfoStore.recipe.title }}</h1>
    <img :src="recipeInfoStore.recipe.image" alt="Recipe Image" class="w-full max-w-md rounded-lg">
    <p v-html="recipeInfoStore.recipe.summary"></p>
  </div>

</template>
