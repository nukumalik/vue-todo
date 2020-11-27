import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Todos",
    component: () => import("../views/Todos.vue")
  },
  {
    path: "/:id",
    name: "Todo",
    component: () => import("../views/Todo.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
