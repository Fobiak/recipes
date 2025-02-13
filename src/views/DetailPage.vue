<script setup>
import { useRoute } from 'vue-router';
import {onMounted, ref} from 'vue';
import { useRecipeInfoStore } from "@/store/RecipeInfoStore";

const recipeInfoStore = useRecipeInfoStore();
const route = useRoute();
const steps = ref([]);
const isLoading = ref(true);

const active = ref(0)

const next = () => {
  if (active.value < steps.value.length - 1) {
    active.value++;
  } else {
    active.value = 0;
  }
}

onMounted(async () => {
  isLoading.value = true;
  const recipeId = Number(route.params.id)
  await recipeInfoStore.loadRecipes(recipeId);
  steps.value = recipeInfoStore.recipes.analyzedInstructions?.[0]?.steps || [];
  isLoading.value = false;
});
</script>

<template>
  <main class="px-24 py-8" v-loading="isLoading">
    <div
        v-if="recipeInfoStore.recipes"
        class="flex flex-row justify-between">
      <img :src="recipeInfoStore.recipes.image" alt="recipeImage" class="w-full max-w-md rounded-lg">
      <div class="flex flex-col ml-6">
        <h1 class="text-2xl font-bold mb-2">{{ recipeInfoStore.recipes.title }}</h1>
        <p v-html="recipeInfoStore.recipes.summary"></p>
      </div>
    </div>
    <div v-if="steps.length > 0">
      <h1 class="text-xl my-2">Инструкция к приготовлению</h1>
      <el-steps class="py-3"  :active="active" finish-status="success" direction="vertical">
        <el-step

            v-for="(step, index) in steps"
            :key="index"
            :description="step.step"
        />
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">Шаг</el-button>
    </div>
    <h1 class="text-xl my-2">Ингредиенты</h1>
    <div v-html="recipeInfoStore.widgetData"></div>
  </main>
</template>
