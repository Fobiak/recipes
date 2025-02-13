import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchRecipesInfo } from "@/services/api/rest/api"


export const useRecipeInfoStore = defineStore("recipeInfoStore", () => {
    const recipe = ref([]);

    async function loadRecipes(recipeId) {
        try {
            const response = await fetchRecipesInfo(recipeId);
            recipe.value = response.data;
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipe, loadRecipes };
});
