import makeRequest from "@/services/api/httpClient";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const fetchRecipes = async ( searchQueryHead ) => {
    try {
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
                query: searchQueryHead,
                number: 15,
                addRecipeInformation: true,
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
                                         selectSortChoice, sortDirectionK) => {
    try {
        console.log(makeRequest)
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
                query: searchQuery,
                number: 15,
                addRecipeInformation: true,
                cuisine: cuisineType,
                diet: dietType,
                type: mealType,
                includeIngredients: incIngrQuery,
                excludeIngredients: excIngrQuery,
                sort: selectSortChoice,
                sortDirection: sortDirectionK,
            },
        });
    } catch (error) {
        console.error("Ошибка при запросе рецептов:", error);
        return null;
    }
};


