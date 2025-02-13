import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import SearchPage from "./views/SearchPage.vue"
import DetailPage from "@/views/DetailPage.vue";

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
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: DetailPage,
        meta: { showSearch: false },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;