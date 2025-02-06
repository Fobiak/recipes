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
  <main class="px-10 py-8">
    <div class="grid grid-cols-3 gap-4">
      <Card v-for="recipe in recipeStore.recipes" :key="recipe.id"
            :title="recipe.title" :image="recipe.image" :calories="getCalories(recipe.summary)" :ready-in-minutes="convertMinute(recipe.readyInMinutes)" />
    </div>
  </main>
</template>
