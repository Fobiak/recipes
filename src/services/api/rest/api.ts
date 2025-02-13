import makeRequest from "@/services/api/httpClient";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const fetchRecipes = async ( searchQueryHead = '', page = 1 ) => {
    try {
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
                query: searchQueryHead,
                addRecipeInformation: true,
                offset: (page - 1) * 8,
            },
        });
    } catch (error) {
        console.error("Ошибка при запросе рецептов:", error);
        return null;
    }
};

//для подробного поиска
export const fetchRecipesSearch = async (cuisineType, dietType, mealType,
                                         searchQuery, incIngrQuery, excIngrQuery,
                                         selectSortChoice, sortDirectionK, page= 1) => {

    try {
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
                query: searchQuery,
                number: 8,
                addRecipeInformation: true,
                cuisine: cuisineType,
                diet: dietType,
                type: mealType,
                includeIngredients: incIngrQuery,
                excludeIngredients: excIngrQuery,
                sort: selectSortChoice,
                sortDirection: sortDirectionK,
                offset: (page - 1) * 8,
            },
        });
    } catch (error) {
        console.error("Ошибка при запросе рецептов:", error);
        return null;
    }
};


