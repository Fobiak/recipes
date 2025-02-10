<script setup>
import {onMounted, ref} from 'vue'
import {useComplexSearchStore} from "@/store/complexSearchStore.ts";
const complexSearchStore = useComplexSearchStore();

onMounted(() => {
  complexSearchStore.loadRecipes();
});

const cuisines = ref([
  "African", "American", "British", "Cajun", "Caribbean",
  "Chinese", "Eastern European", "European", "French",
  "German", "Greek", "Indian", "Irish", "Italian", "Japanese",
  "Jewish", "Korean", "Latin American", "Mediterranean",
  "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish",
  "Thai", "Vietnamese"
]);

const cuisineType = ref([])
const options = ref(cuisines.value.map(cuisine => ({
  value: cuisine,
  label: cuisine
})))

const fetchFilteredRecipes = () => {
  complexSearchStore.loadRecipes(cuisineType.value);
};
</script>


<template>

  <div class="flex justify-between border-b border-gray-300 px-24 py-3 bg-white">
    <div class="flex items-center gap-4">
      <el-select-v2
          v-model="cuisineType"
          :options="options"
          placeholder="Кухни стран"
          style="width: 240px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />
    </div>
    <div class="flex items-center">
      <el-button  plain @click="fetchFilteredRecipes">Подобрать рецепт</el-button>
    </div>
  </div>
</template>
