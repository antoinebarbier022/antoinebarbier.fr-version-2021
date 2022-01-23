<template>
<div>
    <div class="project-detail-container">
        <div class="thumbnail-slider">
            <Splide ref="main" id="main-slider" :options="optionsMain">
                <SplideSlide v-for="element in project?.images" v-bind:key="element.id">
                    <img :src="require(`../../public/assets/images/${element.image}`)" :alt="element.alt">
                </SplideSlide>
            </Splide>

            <Splide v-if="project?.images.length > 1" ref="thumbnails" id="thumbnails" :options="optionsThumbnails">
                <SplideSlide class="thumb-slide" v-for="element in project?.images" v-bind:key="element.id">
                    <img :src="require(`../../public/assets/images/${element.image}`)" :alt="element.alt">
                </SplideSlide>
            </Splide>

        </div>
        <div class="project-detail">
            <div class="project-detail-content">
                
                <h2>{{project?.name}} </h2>
                <h3>{{ project?.annee ? project?.annee : "Date inconnu" }}</h3>
                <p v-html="parserDescription"></p>
                <p v-if="!parserDescription" class="no-description noselect">Il n'y a pas encore de description pour ce projet.</p>
                <div class="tags">
                    <span v-for="tag in project?.tags" v-bind:key="tag.id">
                        #{{ tag.name.replace(" ", "")}}
                    </span>
                </div>
            </div>          
            <div class="project-links">
                <a v-if="project?.website" class="button-link" :href="project?.website" target="_blank" :title="project?.website">
                    Site Web
                    </a>
                <a v-if="project?.gitlab" class="button-link" :href="project?.gitlab" target="_blank" :title="project?.gitlab">
                    <span class="icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gitlab" class="svg-inline--fa fa-gitlab fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path></svg>
                    </span>
                    <span>GitLab</span>
                </a>
                <a v-if="project?.github" class="button-link" :href="project?.github" target="_blank" :title="project?.github">
                    <span class="icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="white" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </span>
                    <span>GitHub</span>
                </a>
                <a v-if="project?.partage" class="button-link" target="_blank" href="#">Partager</a>
                <a v-if="project?.document" class="button-link" target="_blank" :href="project?.document">Document</a>
            </div>
        
        </div>

    </div>

    <div class="back-button-container">
    
        <a @click="$router.go(-1)">
            <span class="back-button noselect">Retour - Voir les autres projets</span>
        </a>
           

    </div>
</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent( {
  name: 'ProjectDetail',
  props: ['id'],
  components: {
    Splide,
    SplideSlide,
  },
  data(){
    return{
        optionsMain: {
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: false,
            drags: false,
        },

        optionsThumbnails:{
            lazyLoad: 'nearby',
            gap: 10,
            rewind: true,
            pagination: false,
            cover: true,
            isNavigation: true,
        },
        // En attendant d'utiliser VueX pour passer des données dans l'application
        projectList: [
            { id: "application-marchee-en-ligne", 
                    name:"Application marchée en ligne",
                    annee:"2021",
                    description:"",
                    membres:[
                        {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"}
                        ],
                    images: [
                        {
                            image: "projet-marchee-en-ligne/marchee-en-ligne.png",
                            alt:"Application Marchée en ligne"
                            },
                            
                        ],
                    tags:[
                        {name: "Flutter"},
                        {name: "Firebase"},
                    ],
                    website : "" ,
                    gitlab : "https://gitlab.com/An_toine/app-marche-en-ligne" ,
                    github : "https://github.com/antoinebarbier022/app-marche-en-ligne" ,
                },
                { id: "implementation-moteur-de-requetes-en-etoile", 
                    name:"Implémentation d'un moteur de requêtes en étoile",
                    annee:"2021",
                description:"Membres du groupe : Antoine Barbier et Djamel Benameur.",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Djamel Benameur", url:"https://fr.linkedin.com/in/djamel-benameur-9a1704130"}],
                images: [
                    {
                        image: "projet-moteur-requetes/sparql.png",
                        alt:"Sparql"
                        },
                    ],
                tags:[
                    {name: "Java"},
                    {name: "Python"},
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/implementation-d-un-mini-moteur-de-requetes-en-etoile" ,
                github : "https://github.com/antoinebarbier022/implementation-d-un-mini-moteur-de-requetes-en-etoile" ,
                },
                { id: "application-meteo", 
                    name:"Application Méteo",
                    annee:"2021",
                description:"",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"}
                    ],
                images: [
                    {
                        image: "projet-meteo-app/meteo.png",
                        alt:"Application Méteo connecté à une API"
                        },
                    ],
                tags:[
                    {name: "Flutter"},
                    {name: "API"},
                    {name: "openweather"},
                    
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/hai912i-td-antoine-barbier/-/tree/main/weather_app" ,
                github : "https://github.com/antoinebarbier022/td-mobile-flutter/tree/main/weather_app" ,
                },
            { id: "plateforme-gestion-des-stages-informatique", 
                name:"Plateforme de gestion de stages pour la Faculté des Sciences",
                annee:"2020",
                description:`Projet TER (Travail d'Étude et de Recherche) d'une durée de 4 mois. <br> 
                            Les membres du projets sont : Antoine Barbier, El Mokhtar Aissaoui et Antoine Brahimi.`,
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Antoine Brahimi", url:"https://antoinebrah.github.io"}, 
                    {name:"El Mokhtar Aissaoui", url:"https://mokhtaraissaoui.fr"}],
                images: [
                    {image: "projet-plateforme-stages/infoStage.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    {image: "projet-plateforme-stages/infoStage1.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    {image: "projet-plateforme-stages/infoStage2.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    {image: "projet-plateforme-stages/infoStage3.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    {image: "projet-plateforme-stages/infoStage4.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    {image: "projet-plateforme-stages/infoStage5.png", alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"},
                    ],
                tags:[
                    {name: "MEAN"},
                    {name: "angular"},
                    {name: "html"},
                    {name: "css"},
                    {name: "javascript"},
                    {name: "Node.js"},
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/m1-ter-stageinfo" ,
                github : "https://github.com/antoinebarbier022/M1-TER-stageInfo" ,
            },
            { id: "application-reseau-social", 
                name:"Réseau Social - JAVA - Android",
                annee:"2020",
                description:"",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Antoine Brahimi", url:"https://antoinebrah.github.io"},],
                images: [
                    {image: "projet-reseau-social/androidApp.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android1.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android2.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android3.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android4.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android5.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android6.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android7.png",alt:"Réseau Social Android Socializing"},
                    {image: "projet-reseau-social/android8.png",alt:"Réseau Social Android Socializing"},
                    ], 
                tags:[
                    {name:"Java"},
                    {name:"Android Studio"},
                    {name:"Firebase"}
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/projet_dev_android_hmin205" ,
                github : "https://github.com/antoinebarbier022/reseau-social-android" ,
            },
            { id: "mouflaquettes", 
                name:"Mouflaquettes.fr",
                annee:"2020",
                description:"",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"}
                    ],
                images: [
                    {
                        image: "projet-mouflaquettes/mouflaquettes.png",
                        alt:"Site web des mouflaquettes"
                        }
                ],    
                tags:[
                    {name:"VueJs"}
                ],
                website : "https://www.mouflaquettes.fr",
                gitlab : "https://gitlab.com/An_toine/mouflaquettes.fr" ,
                github : "" ,
            },
            { id: "projet-programmation-concurente", 
                name:"Projet de programmation concurente",
                annee:"2020",
                description:`<u>Projet universitaire :</u> <br>
                L’idée de ce projet s’inspire d’un système de réservation de ressources de calcul et/ou de stockage 
                sur une plateforme de grille ou de cloud. Il a pour objectif de permettre à des clients de louer des puissances de 
                calcul ou des espaces de stockage distants répondant à des besoins spécifiques (exemple : exécuter une simulation 
                scientifique sur une architecture distribuée de processeurs et de mémoire pour stocker (le temps de la location) 
                les données traitées et produites). Dans le système à mettre en oeuvre, un client aura la possibilité de louer 
                des ressources, soit en mode exclusif (les ressources louées sont utilisées par un seul client pendant toute 
                la durée de la réservation), soit en mode partagé (les ressources louées peuvent être utilisées en même temps 
                par plusieurs clients).`,
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"}
                    ],
                images: [
                    {
                        image: "projet-concurente.png",
                        alt:"Projet de programmation concurente"
                        }
                ],
                tags:[
                    {name:"C++"},
                    {name:"Threads"},
                    {name:"Semaphores"},
                    {name:"ICPC"},

                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/hmin105m-projet-systeme-de-reservation-distribue" ,
                github : "" ,
                document:"https://gitlab.com/An_toine/hmin105m-projet-systeme-de-reservation-distribue/-/blob/master/consignes-projet-concurente.pdf"
            },
            { id: "algorithme-de-resolution-du-jeu-slitherlink", 
                name:"Algorithme de résolution du casse tête : SlitherLink",
                annee:"2019",
                description:"Membres du projets : Antoine Barbier, Djamel Benameur, Timoléon Demas, Matthieu Commins, Thomas Zaragoza.",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Djamel Benameur", url:"https://fr.linkedin.com/in/djamel-benameur-9a1704130"}, 
                    {name:"Timoléon Demas", url:""}, 
                    {name:"Matthieu Commins", url:"https://fr.linkedin.com/in/matthieu-commins-3651a1159"},
                    {name:"Thomas Zaragoza", url:"https://fr.linkedin.com/in/thomas-zaragoza-bab653160"}],
                images: [
                    {
                        image: "SlitherLink.png",
                        alt:"Programme de résolution de SLitherLink"
                        }
                ],
                tags:[
                    {name:"C++"},
                    {name:"Doxygen"}
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/resolution-slitherlink" ,
                github : "" ,
            },
            { id: "casse-brique-en-ligne-de-commande", 
                name:"Projet Casse brique en ligne de commande",
                annee:"2018",
                description:"Ce projet universitaire a été développé par Antoine Barbier, Djamel Benameur, Timoléon Demas et Matthieu Commins.",
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Djamel Benameur", url:"https://fr.linkedin.com/in/djamel-benameur-9a1704130"}, 
                    {name:"Timoléon Demas", url:""}, 
                    {name:"Matthieu Commins", url:"https://fr.linkedin.com/in/matthieu-commins-3651a1159"}],
                images: [
                    {
                        image: "casseBrique.png",
                        alt:"Projet Casse brique en ligne de commande"
                        }
                ],
                tags:[
                    {name:"C++"},
                    {name:"ncurses"}
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/l2-casse-brique" ,
                github : "" ,
            },
            { id: "jeu-video-bebert", 
                name:"Jeu vidéo Bébert",
                langage:"Python",
                annee:"2017",
                description:`Ce projet de jeu vidéo de style Mario Bros a été développé en Python avec mon ami Raphael Gimenez.</a>`,
                membres:[
                    {name:"Antoine Barbier", url:"https://www.antoinebarbier.fr"},
                    {name:"Raphael Gimenez", url:"https://raphaelgimenez.fr"}],
                images: [
                    {image: "projet-bebert/bebertProject.png", alt:"Jeu vidéo Bébert - Constructeur de niveau"},
                    {image: "projet-bebert/splashscreen.png", alt:"Jeu vidéo Bébert - Constructeur de niveau"},
                    {image: "projet-bebert/jeu.png", alt:"Jeu vidéo Bébert - Constructeur de niveau"},
                    {image: "projet-bebert/editeur-niveau.png", alt:"Jeu vidéo Bébert - Constructeur de niveau"},
                ],
                tags:[
                    {name:"python"},
                    {name:"pygame"}
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/projet-bebert",
                github : "" ,
            },
        ],

    }
    },computed:{
        project : function () {
            return this.projectList.filter( e =>  e.id == this.$route.params.id)[0];
        },
        parserDescription : function (){
            var text = this.project?.description;
            for(const membre of this.project?.membres){
                text = text.replace(membre.name,`<a href="${membre.url} "target="_blank" title="${membre.url}" >$&</a>`);
            }
            return text
        }
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    setup() {
        const main = ref();
        const thumbnails = ref();

        onMounted( () => {  
        const thumbsSplide = thumbnails.value?.splide;
        if ( thumbsSplide ) {
            main.value?.sync( thumbsSplide );
        }else{
            console.log("pas sync")
        }
        } );
        return {
        main,
        thumbnails,
        }
    },
    
    } );
</script>

<style scoped>
    /** La thumnails et le texte explicatif du projet */
    div.project-detail-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
        width:80%;
        margin:auto;
        margin-top:60px;
    }

    #main-slider{
        padding:5px;
        margin-bottom:10px;
    }

    /* On défini la taille des images thumnails */
    #thumbnails-list > li{
        max-width:100px;
        height:5rem;
    }

    /** Comportement de toutes les images dans le bloc thumbnails */
 .splide__slide{
     display:flex;
     justify-content: center;
 }
    .splide__slide img {
        
        width: auto;
        height: auto;
        max-width: 700px;
        max-height: 300px;
    }
    @media (max-width:900px) {
        .splide__slide img {
            width: auto;
            height: auto;
            max-width: 600px;
            max-height: 270px;
        }
    }

    @media (max-width:400px) {
        .splide__slide img {
            width: auto;
            height: auto;
            max-width: 300px;
            max-height: 250px;
        }
    }
    .splide__slide {
        opacity: 0.3;
    }

    /** SUppression de la bordure par default */
    .splide--nav>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active, .splide--nav>.splide__track>.splide__list>.splide__slide.is-active{
        border: 0px solid transparent;
    }
    .splide__slide.is-active {
    opacity: 1;
    
    }


    @media (max-width: 850px) {
        div.project-detail-container{
            grid-template-columns: 1fr;
        }
        /** On met un peu d'espace en dessous du bloc thumbnail */
        #thumbnails{
            margin-bottom:20px;
        }
    }


   


h2{
    font-style: normal;
    font-size: 1.4rem;
    opacity: 0.9;
    font-weight: 600;
    margin-top:0;
    margin-bottom:5px;
}

h3{
    font-style: normal;
    font-size: 1rem;
    opacity: 0.8;
    text-transform: none;
    font-weight: 600;
    padding:0;
    margin-bottom:30px;
}

p{
    text-align: justify;
}
p.no-description{
    cursor:default;
    opacity: 0.5;
    font-weight: 300;
    font-style: italic;
}
.tags>span{
    text-transform:lowercase;
    padding-right:5px;
    color:var(--secondary-color);
}


.project-detail{
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
}

.project-links{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    margin-top:60px;
}
a.button-link{
    
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    height:40px;
    width: 100%;
    min-width:100px;
    background: var(--secondary-color);
    font-style: normal;
    font-size: 0.8rem;
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 5px solid var(--secondary-color-darker);
}

.button-link > .icon{
    width:23px;
     height:23px;
}

a.button-link:focus{
    
    transform: translateY(3px);
    border-bottom: 3px solid var(--secondary-color-darker);

}

.back-button-container{
    display: flex;
    justify-content: center;
    margin-top:120px;
    margin-bottom:120px; 
}



.back-button{
    border-radius:10px;
    border:1px solid rgba(255, 255, 255, 0.308); 
    background: rgba(255, 255, 255, 0.02);
    padding:10px 60px;
    margin:auto;
}
.back-button:hover{
    cursor: pointer;
    background: rgba(255, 255, 255, 0.048);
}

p>a:hover{
    text-decoration: underline;
}


</style>