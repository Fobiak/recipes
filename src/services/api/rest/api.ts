import makeRequest from "@/services/api/httpClient";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const fetchRecipes = async () => {
    try {
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
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
export const fetchRecipesSearch = async (cuisineType, dietType, mealType, searchQuery) => {
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
            },
        });
    } catch (error) {
        console.error("Ошибка при запросе рецептов:", error);
        return null;
    }
};


