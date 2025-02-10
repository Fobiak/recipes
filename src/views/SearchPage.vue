<script setup lang="ts">
import SelectorBar from "@/components/selector-bar/selector-bar.vue";
import {getCalories} from "@/utils/getCalories";
import {convertMinute} from "@/utils/convertMinute";
import Card from "@/components/card/Card.vue";
import {useComplexSearchStore} from "@/store/complexSearchStore";
import {onMounted} from "vue";

const complexSearchStore = useComplexSearchStore();

onMounted(() => {
  complexSearchStore.loadRecipes();
});
</script>

<template>
  <selector-bar/>
  <main class="px-24 py-8">
    <div class="grid gap-10" style="grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));">
      <Card v-for="recipe in complexSearchStore.recipes" :key="recipe.id"
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
