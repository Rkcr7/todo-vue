import { createRouter, createWebHistory } from "vue-router";
import ToDo from "./views/ToDo.vue";
import about from "./views/about.vue";
const routes = [
  {
    path: "/",
    name: "ToDo",
    component: ToDo,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
