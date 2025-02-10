import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchRecipesSearch } from "@/services/api/rest/api"

export const useComplexSearchStore = defineStore("complexSearchStore", () => {
    const recipes = ref([]);

    async function loadRecipes(cuisineType = [], dietType = [], mealType= [], searchQuery='') {
        try {
            const response = await fetchRecipesSearch(cuisineType.join(","), dietType.join(","), mealType.join(","), searchQuery);
            recipes.value = response.data.results;
            console.log(response.data.results);
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, loadRecipes };
});
