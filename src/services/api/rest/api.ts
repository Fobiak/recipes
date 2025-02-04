import makeRequest from "@/services/httpClient";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";


export const fetchRecipes = async () => {
    try {
        return await makeRequest({
            url: `${BASE_URL}/recipes/complexSearch`,
            method: "get",
            params: {
                apiKey: apiKey,
                number: 11,
                addRecipeInformation: true,
            },
        });
    } catch (error) {
        console.error("Ошибка при запросе рецептов:", error);
        return null;
    }
};

