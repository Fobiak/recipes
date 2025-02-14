<script setup lang="ts">
import {getCalories} from "@/utils/getCalories";
import {convertMinute} from "@/utils/convertMinute";
import Card from "@/components/card/Card.vue";
import {useComplexSearchStore} from "@/store/complexSearchStore";
import {onMounted, ref, watch, computed} from "vue";
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'

const complexSearchStore = useComplexSearchStore();
const isLoading = ref(true);

const value2 = ref(true)
const sortDirectionK = computed(() => (value2.value ? 'asc' : 'desc'));

onMounted(async () => {
  isLoading.value = true;
  await complexSearchStore.loadRecipes();
  isLoading.value = false;
});

watch(() => complexSearchStore.recipes, () => {
  isLoading.value = false;
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

const incIngrQuery = ref('')
const excIngrQuery = ref('')

const selectSortChoice = ref('');

const sortChoice = [
  { label: 'Популярное', value: 'popularity' },
  { label: 'По времени', value: 'time' },
  { label: 'По калориям', value: 'calories' },
  { label: 'Случайно', value: 'random' },
];

const setSortChoice = (value) => {
  if (selectSortChoice.value === value) {
    selectSortChoice.value = '';
  } else {
    selectSortChoice.value = value;
  }
  console.log(selectSortChoice.value);
  fetchFilteredRecipes();
};

const onPageChange = (newPage: number) => {
  page.value = newPage;
  fetchFilteredRecipes();
};

const applyFilters = () => {
  page.value = 1;
  fetchFilteredRecipes();
};

const page = ref(1);
const fetchFilteredRecipes = () => {
  complexSearchStore.loadRecipes(cuisineType.value,
      dietType.value, mealType.value,
      searchQuery.value, incIngrQuery.value, excIngrQuery.value,
      selectSortChoice.value, sortDirectionK.value, page.value);
};

</script>

<template>
  <div class="flex justify-between border-b border-gray-300 px-24 py-6 bg-white">
    <div class="flex items-center gap-2">
      <el-select-v2
          v-model="cuisineType"
          :options="options"
          placeholder="Кухни стран"
          style="width: 200px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />
      <el-select-v2
          v-model="dietType"
          :options="options2"
          placeholder="Диета"
          style="width: 200px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />
      <el-select-v2
          v-model="mealType"
          :options="options3"
          placeholder="Тип блюда"
          style="width: 200px; margin-right: 16px; vertical-align: middle"
          multiple
          clearable
      />

      <div class="flex flex-col">
        <el-input
            v-model="incIngrQuery"
            style="width: 200px;  margin-right: 16px;"
            placeholder="+ ингредиент"
            clearable>
        </el-input>
        <el-input
            v-model="excIngrQuery"
            style="width: 200px;  margin-right: 16px;"
            placeholder="- ингредиент"
            clearable
            class="pt-2">
        </el-input>
      </div>

      <div class="flex ">
        <el-input
            v-model="searchQuery"
            style="width: 250px; height: 40px; margin-right: 16px;"
            @keyup.enter="applyFilters"
            placeholder="Поиск по названию"
            clearable
        >
        </el-input>
      </div>
      <div class="flex items-center">
        <el-button  plain @click="applyFilters" type="success">Подобрать рецепт</el-button>
      </div>
    </div>
  </div>
  <div class="flex items-center px-24 py-2">
    <el-button
        v-for="button in sortChoice"
        :key="button.value"
        :type="selectSortChoice === button.value ? 'primary' : 'default'"
        @click="setSortChoice(button.value)"
        link
    >
      {{ button.label }}
    </el-button>
    <el-switch
        v-model="value2"
        style="margin-left: 24px"
        inline-prompt
        :active-icon="ArrowUp"
        :inactive-icon="ArrowDown"
        @change="applyFilters"
    />
  </div>
  <main class="px-24 py-8" v-loading="isLoading">
    <div v-if="complexSearchStore.recipes.length === 0" class="text-center text-gray-500">
      Нет доступных рецептов
    </div>
    <el-pagination
        class="flex justify-center mb-4"
        v-if="complexSearchStore.totalPage > 0"
        :current-page="complexSearchStore.currentPage"
        :page-size="8"
        :total="complexSearchStore.totalPage"
        layout="prev, pager, next"
        @current-change="onPageChange" />
    <div class="grid gap-16" style="grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));">
      <Card v-for="recipe in complexSearchStore.recipes" :key="recipe.id"
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
    </div>
  </main>
</template>
