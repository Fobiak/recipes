import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchRecipesInfo } from "@/services/api/rest/api"
import {fetchRecipesWidget} from "@/services/api/rest/api";


export const useRecipeInfoStore = defineStore("recipeInfoStore", () => {
    const recipes = ref([]);
    const widgetData = ref([]);

    async function loadRecipes(recipeId: number) {
        try {
            const [responseInfo, responseWidget] = await Promise.all([
                fetchRecipesInfo(recipeId),
                fetchRecipesWidget(recipeId)
            ]);

            recipes.value = responseInfo.data;
            widgetData.value = responseWidget.data;
        } catch (error) {
            console.error("Ошибка загрузки рецептов:", error);
        }
    }
    return { recipes, widgetData, loadRecipes };
});
