import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import SearchPage from "./views/SearchPage.vue"

const routes = [
    {
        path: "",
        name: "homepage",
        component: HomePage,
        meta: { showSearch: true },
    },
    {
        path: "/search",
        name: "searchPage",
        component: SearchPage,
        meta: { showSearch: false },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;