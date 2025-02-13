import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchRecipesInfo } from "@/services/api/rest/api"


export const useRecipeInfoStore = defineStore("recipeInfoStore", () => {
    const recipes = ref([]);

    async function loadRecipes(recipeId: number) {
        try {
            const response = await fetchRecipesInfo(recipeId);
            recipes.value = response.data;
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, loadRecipes };
});
