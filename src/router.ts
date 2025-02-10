import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import SearchPage from "./views/SearchPage.vue"

const routes = [
    {
        path: "",
        name: "homepage",
        component: HomePage
    },
    {
        path: "/search",
        name: "searchPage",
        component: SearchPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;