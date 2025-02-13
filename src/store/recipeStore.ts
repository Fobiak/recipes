import { defineStore } from "pinia";
import { ref } from "vue";
import {fetchRecipes} from "@/services/api/rest/api"


export const useRecipeStore = defineStore("recipeStore", () => {
    const recipes = ref([]);

    async function loadRecipes( page = 1, searchQueryHead ='') {
        try {
            const response = await fetchRecipes( searchQueryHead, page );
            if (page == 1) {
                recipes.value = response.data.results;
            } else {
                recipes.value.push( ...response.data.results);
            }
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, loadRecipes };
});
