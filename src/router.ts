import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue"; // Импортируем компонент для отрисовки

const routes = [
    {
        path: "",
        name: "homepage",
        component: HomePage // Указываем компонент для маршрута
    }
];

const router = createRouter({
    history: createWebHistory(), // Используй createWebHistory для работы с историей
    routes
});

export default router;