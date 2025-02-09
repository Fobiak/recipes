<script setup lang="ts">
import { onMounted } from "vue";
import { useRecipeStore } from "@/store/recipeStore";
import { getCalories } from "@/utils/getCalories";
import { convertMinute } from "@/utils/convertMinute";
import Card from "@/components/card/Card.vue";


const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.loadRecipes();
});
</script>

<template>
  <main class="px-20 pr-80 py-8">
    <div class="grid gap-4"
         :class="'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'"
         style="grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));">
      <Card v-for="recipe in recipeStore.recipes" :key="recipe.id"
            :title="recipe.title"
            :image="recipe.image"
            :calories="getCalories(recipe.summary)"
            :ready-in-minutes="convertMinute(recipe.readyInMinutes)"
            :servings="recipe.servings"
            :aggregateLikes="recipe.aggregateLikes"
            :dish-types="recipe.dishTypes"
      />
    </div>
  </main>
</template>
