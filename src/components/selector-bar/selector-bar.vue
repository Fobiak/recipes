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

const diets = ref([
  "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian",
  "Vegan", "Pescetarian", "Paleo", "Primal",
  "Low FODMAP", "Whole30"
]);
const dietType = ref([])
const options2 = ref(diets.value.map(diet => ({
  value: diet,
  label: diet
})))

const meals = ref([
  "main course", "side dish", "dessert", "appetizer", "salad", "bread",
  "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood",
  "snack", "drink"
]);
const mealType = ref([])
const options3 = ref(meals.value.map(meal => ({
  value: meal,
  label: meal
})))

const searchQuery = ref('');

const fetchFilteredRecipes = () => {
  complexSearchStore.loadRecipes(cuisineType.value, dietType.value, mealType.value, searchQuery.value);
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
      <el-select-v2
          v-model="dietType"
          :options="options2"
          placeholder="Диета"
          style="width: 240px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />
      <el-select-v2
          v-model="mealType"
          :options="options3"
          placeholder="Тип блюда"
          style="width: 240px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />

      <div class=" flex-1 flex items-center gap-2 px-10">
        <el-input
            v-model="searchQuery"
            style="width: 300px; height: 45px"
            @keyup.enter="fetchFilteredRecipes"
            placeholder="Поиск по названию"
            clearable
        >
        </el-input>
      </div>

    </div>
    <div class="flex items-center">
      <el-button  plain @click="fetchFilteredRecipes">Подобрать рецепт</el-button>
    </div>
  </div>
</template>
