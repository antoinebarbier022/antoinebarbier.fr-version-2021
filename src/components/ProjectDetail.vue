<template>
    <div class="project-detail-container">
        <div class="thumbnail-slider">
            <Splide ref="main" id="main-slider" :options="optionsMain">
                <SplideSlide v-for="element in project?.images" v-bind:key="element.id">
                    <img :src="require(`../assets/images/${element.image}`)" :alt="element.alt">
                </SplideSlide>
            </Splide>

            <Splide v-if="project?.images.length > 1" ref="thumbnails" id="thumbnails" :options="optionsThumbnails">
                <SplideSlide class="thumb-slide" v-for="element in project?.images" v-bind:key="element.id">
                    <img :src="require(`../assets/images/${element.image}`)" :alt="element.alt">
                </SplideSlide>
            </Splide>

        </div>
        <div class="project-detail">
            <div class="project-detail-content">
                
                <h2>{{project?.name}} </h2>
                <h3>{{ project?.annee ? project?.annee : "Date inconnu" }}</h3>
                <p v-html="project?.description"></p>
                <p v-if="!project?.description" class="no-description noselect">Il n'y a pas encore de description pour ce projet.</p>
                <div class="tag-tags">
                    <span v-for="tag in project?.tags" v-bind:key="tag.id">
                        #{{ tag.name.replace(" ", "")}}
                    </span>
                </div>
                
            </div>          
            <div class="project-links">
                <a v-if="project?.website" class="button-link" :href="project?.website" target="_blank" :title="project?.website">Site Web</a>
                <a v-if="project?.gitlab" class="button-link" :href="project?.gitlab" target="_blank" :title="project?.gitlab">GitLab</a>
                <a v-if="project?.github" class="button-link" :href="project?.github" target="_blank" :title="project?.github">GitHub</a>
                <a v-if="project?.partage" class="button-link" href="#">Partager</a>
            </div>
        
        </div>

    </div>

    <div class="back-button-container">
    
        <a @click="$router.go(-1)">
            <span class="back-button noselect">Retour aux projets</span>
        </a>
           

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
            { id: 0, 
                name:"Plateforme de gestion de stages pour la Faculté des Sciences",
                annee:"2020",
                description:"Projet TER, faculté des sciences de Montpellier",
                images: [
                    {
                        image: "plateforme-gestion-stage.png",
                        alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"
                        },
                        {
                        image: "projet-reseau-social/androidApp.png",
                        alt:"Plateforme de gestion de stage Informatique pour la faculté des sciences de Montpellier"
                        }
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
            { id: 1, 
                name:"Réseau Social - JAVA - Android",
                annee:"2020",
                description:"",
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
            { id: 2, 
                name:"Mouflaquettes.fr",
                annee:"2020",
                description:"",
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
            { id: 3, 
                name:"Projet de programmation concurente",
                annee:"",
                description:"",
                images: [
                    {
                        image: "projet-concurente.png",
                        alt:"Projet de programmation concurente"
                        }
                ],
                tags:[
                    {name:"C++"}
                ],
                website : "" ,
                gitlab : "" ,
                github : "" ,
            },
            { id: 4, 
                name:"Algorithme de résolution du casse tête : SlitherLink",
                annee:"2019",
                description:"",
                images: [
                    {
                        image: "SlitherLink.png",
                        alt:"Programme de résolution de SLitherLink"
                        }
                ],
                tags:[
                    {name:"C++"}
                ],
                website : "" ,
                gitlab : "" ,
                github : "" ,
            },
            { id: 5, 
                name:"Projet Casse brique en ligne de commande",
                annee:"2018",
                description:"",
                images: [
                    {
                        image: "casseBrique.png",
                        alt:"Projet Casse brique en ligne de commande"
                        }
                ],
                tags:[
                    {name:"C++"}
                ],
                website : "" ,
                gitlab : "https://gitlab.com/An_toine/l2-casse-brique" ,
                github : "" ,
            },
            { id: 6, 
                name:"Jeu vidéo Bébert - Constructeur de niveau",
                langage:"Python",
                annee:"2017",
                description:`Ce projet de jeu vidéo de style Mario Bros a été développé en Python avec mon ami <a href="https://raphaelgimenez.fr" target="_blank">Raphael Gimenez.</a>`,
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
        }
    },
    mounted () {
        window.scrollTo(0, 0)
        /* Si il n'y a pas de projet alors on quitte la page */
        if(this.project.length == 0){
            this.$router.push('/');
        }

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
.tag-tags>span{
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
    border-radius: 5px;
    height:40px;
    width: 100%;
    background: var(--secondary-color);
    font-style: normal;
    font-size: 0.8rem;
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 5px solid var(--secondary-color-darker);
}

a.button-link:focus{
    
    transform: translateY(3px);
    border-bottom: 3px solid var(--secondary-color-darker);

}

.back-button-container{
    display:flex;
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


</style>