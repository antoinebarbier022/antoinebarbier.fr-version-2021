import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue";
import Project from "./views/Project.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "/test",
      name: "test",
      component: Home,
    },
    {
      path: "/project/:id",
      name: "project",
      props: true,
      component: Project,
    },
    {
      path: "/:NotFound(.*)", 
      component: NotFound,
    }
    
  ],
});

export default router;