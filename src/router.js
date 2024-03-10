import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Project from "./views/Project.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "/projet/:id",
      name: "project",
      props: true,
      component: Project,
      beforeEnter: (to, _, next) => {
        const autorisations = [
          "application-marchee-en-ligne",
          "implementation-moteur-de-requetes-en-etoile",
          "application-meteo",
          "plateforme-gestion-des-stages-informatique",
          "application-reseau-social",
          "mouflaquettes",
          "projet-programmation-concurente",
          "algorithme-de-resolution-du-jeu-slitherlink",
          "casse-brique-en-ligne-de-commande",
          "jeu-video-bebert",
        ];
        if (autorisations.includes(to.params.id)) {
          next();
        } else {
          next({ name: "error404" });
        }
      },
    },
    {
      path: "/erreur404",
      name: "error404",
      component: NotFound,
    },
    {
      path: "/:NotFound(.*)",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export default router;
