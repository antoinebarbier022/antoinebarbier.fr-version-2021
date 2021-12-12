<template>
    <section id="Projects-section">
        <span class="group-bouton">
            <button class="arrow-bouton prev">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
            </button>
            <button class="arrow-bouton next">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </button>
        </span>
        <Splide class="slider" :options="splideOptions">
            <SplideSlide v-for="item in projectList" v-bind:key="item.id">
                <ProjectItem v-bind:project_item_prop="item" />
            </SplideSlide>
        </Splide>
    </section>
</template>

<script>
    import ProjectItem from './items/item-project.vue'
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/splide.min.css';

    export default {
        name: 'SectionProjects',
        components:{
            ProjectItem,
            Splide,
            SplideSlide,
        },
        data(){
            return{
                /** https://splidejs.com/guides/options/*/
                splideOptions:{ 
                    type: 'loop',
                    autoWidth: true,
                    pagination: false,
                    autoScroll: {
                        speed: 2,
                    },
                    
                    perPage:1,
                    focus  : 'center',
                    breakpoints: {
                        800: {
                           perPage:1
                        },
                    },
                    arrowPath: 'M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z',
                    classes: {
                        arrows: 'group-bouton',
                        arrow : 'arrow-bouton',
                        prev  : 'prev',
                        next  : 'next',
                    }
                },
                projectList: [
                { id: 0, 
                    name:"Plateforme de gestion de stages pour la Faculté des Sciences",
                    langage:"Angular",
                    urlImage: "plateforme-gestion-stage.png", 
                    alt: "Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier" 
                },
                { id: 1, 
                    name:"Réseau Social",
                    langage:"JAVA - Android",
                    urlImage: "androidApp.png", 
                    alt: "Réseau Social Android Socializing" 
                },
                { id: 2, 
                    name:"Mouflaquettes.fr",
                    langage:"VueJs",
                    urlImage: "projet-mouflaquettes/mouflaquettes.png", 
                    alt: "Site web des mouflaquettes" 
                },
                { id: 3, 
                    name:"Projet de programmation concurente",
                    langage:"C++",
                    urlImage: "projet-concurente.png", 
                    alt: "Projet de programmation concurente" 
                },
                { id: 4, 
                    name:"Algorithme de résolution du casse tête : SlitherLink",
                    langage:"C++",
                    urlImage: "SlitherLink.png", 
                    alt: "Programme de résolution de SLitherLink" 
                },
                { id: 5, 
                    name:"Projet Casse brique en ligne de commande",
                    langage:"C++",
                    urlImage: "casseBrique.png", 
                    alt: "Projet Casse brique en ligne de commande" 
                },
                { id: 6, 
                    name:"Jeu vidéo Bébert - Constructeur de niveau",
                    langage:"Python",
                    urlImage: "projet-bebert/bebertProject.png", 
                    alt: "Jeu vidéo Bébert - Constructeur de niveau" 
                },
            ],
            }
        }
    }
</script>

<style scoped>


#Projects-section{
    position: relative;
    width:100%;
}

.project-title{
    margin:15px;
    color: var(--secondary-text-color);
}

.slider{
    position: relative;
    width: 100%;
    height:290px;
    margin-bottom:50px;
    padding-bottom:5px;
    padding-top:30px;
    background-color: rgba(196, 196, 196, 0.1);
    box-shadow: 0px 0px 60px rgba(0,0,0,0.5);
}



.slider img{
    width:100%;
    opacity: 0.9;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.slider img:hover{
    width:100%;
    opacity: 1;
}

.bloc-title-project{
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.splide__slide{
    filter: grayscale(1) brightness(1.1);
    /*background-color: rgba(196, 196, 196, 0.3);*/
    transform: scale(0.98, 0.98);
    -webkit-transform:scale(0.98, 0.98);
    transition: transform 200ms ease-in-out, filter 300ms ease-in-out;
}

.splide__slide:hover{
    /*background-color: rgba(156, 49, 49, 0.3);*/
    filter: grayscale(0) brightness(1);
    transform: scale(1, 1);
    -webkit-transform:scale(1, 1);
}

  @media (max-width: 750px) {
      /** l'élément actif est allumé si on est sur mobile */
    .splide__slide.is-active{
        filter: grayscale(0) brightness(1);
        transform: scale(1.5, 1.5);
        -webkit-transform:scale(1, 1);
    }
    /* On desactive le hover */
    .splide__slide:hover{
        /*background-color: rgba(156, 49, 49, 0.3);*/
        filter: grayscale(0) brightness(1);
        border-radius: 7px;
        transform: scale(0.98, 0.98);
        -webkit-transform:scale(0.98, 0.98);
    }
      
  }


</style>