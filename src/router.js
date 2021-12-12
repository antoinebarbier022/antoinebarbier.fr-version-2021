import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue";
import Project from "./views/Project.vue";

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/project/:id",
      name: "project",
      props: true,
      component: Project,
    },
  ],
});

export default router;