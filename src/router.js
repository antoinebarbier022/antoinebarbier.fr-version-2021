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
      beforeEnter: (to, from, next) => {
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
          "jeu-video-bebert"
        ]
        console.log(to.params);
        if(autorisations.includes(to.params.id)){
          console.log("Autorisé")
          next()
        }else{
          console.log("Inconnu")
          next({name : "error404"})
        }
      }
    },
    {
      path: "/404", 
      name:"error404",
      component: NotFound,
    },
    {
      path: "/:NotFound(.*)", 
      name:"notfound",
      component: NotFound,
    }
    
  ],
});


export default router;