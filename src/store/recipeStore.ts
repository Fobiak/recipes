import { defineStore } from "pinia";
import { ref } from "vue";
import {fetchRecipes} from "@/services/api/rest/api"

export const useRecipeStore = defineStore("recipeStore", () => {
    const recipes = ref([]);

    async function loadRecipes() {
        try {
            const response = await fetchRecipes();
            recipes.value = response.data.results;
            console.log(response.data.results);
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, loadRecipes };
});
