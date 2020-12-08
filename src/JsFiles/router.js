import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Main.vue";
import Basket from "@/views/Basket.vue";

const routes = [
  {
    path: "/vue-basket",
    component: Home,
  },
  {
    path: "/basket",
    component: Basket,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;