import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchRecipesSearch } from "@/services/api/rest/api"

export const useComplexSearchStore = defineStore("complexSearchStore", () => {
    const recipes = ref([]);
    const currentPage = ref(1);
    const totalPage = ref(0);

    async function loadRecipes(cuisineType = [], dietType = [],
                               mealType= [], searchQuery='', incIngrQuery = '',
                               excIngrQuery = '', selectSortChoice = '', sortDirectionK ='', page = 1) {
        try {
            const response = await fetchRecipesSearch(cuisineType.join(","),
                dietType.join(","), mealType.join(","), searchQuery, incIngrQuery,
                excIngrQuery, selectSortChoice, sortDirectionK, page);
            recipes.value = response.data.results;
            totalPage.value = response.data.totalResults;
            currentPage.value = page;
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, loadRecipes, currentPage, totalPage };
});
