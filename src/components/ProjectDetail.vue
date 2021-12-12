<template>
    <div class="project-detail-container">
        <div class="thumbnail-slider">
            <Splide ref="main" id="main-slider" :options="optionsMain">
                <SplideSlide >
                    <img src="../assets/images/androidApp.png" alt="slide.alt">
                </SplideSlide>
                <SplideSlide >
                    <img src="../assets/images/bebertProject.png" alt="slide.alt">
                </SplideSlide>
                        <SplideSlide class="thumb-slide">
                    <img src="../assets/images/androidApp.png" alt="slide.alt">
                </SplideSlide>
                <SplideSlide class="thumb-slide">
                    <img src="../assets/images/bebertProject.png" alt="slide.alt">
                </SplideSlide>
            </Splide>

            <Splide ref="thumbnails" id="thumbnails" :options="optionsThumbnails">
                <SplideSlide class="thumb-slide">
                    <img src="../assets/images/androidApp.png" alt="slide.alt">
                </SplideSlide>
                <SplideSlide class="thumb-slide">
                    <img src="../assets/images/bebertProject.png" alt="slide.alt">
                </SplideSlide>
                <SplideSlide class="thumb-slide">
                    <img src="../assets/images/androidApp.png" alt="slide.alt">
                </SplideSlide>
                <SplideSlide class="thumb-slide">
                    <img src="../assets/images/bebertProject.png" alt="slide.alt">
                </SplideSlide>
            </Splide>

        </div>
        <div class="project-detail">
            <div class="project-detail-content">
                <h2>Plateforme de gestion des stage informatiques de la FDS de Montpellier</h2>
                <h3>Année : 2017</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique velit tenetur. Amet nulla veritatis tempora natus nemo? Illum possimus harum quibusdam voluptatem vero odit, culpa nesciunt delectus in aut!</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique velit tenetur. Amet nulla veritatis tempora natus nemo? Illum possimus harum quibusdam voluptatem vero odit, culpa nesciunt delectus in aut!</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique velit tenetur. Amet nulla veritatis tempora natus nemo? Illum possimus harum quibusdam voluptatem vero odit, culpa nesciunt delectus in aut!</p>
                
                <span>#Java #Firebase #Projet</span>
            </div>          
            <div class="project-links">
                <a class="button-link" href="#">Voir le projet</a>
                <a class="button-link" href="#">Code source</a>
                <a class="button-link" href="#">Partager</a>
            </div>
        
        </div>

    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent( {
  name: 'ProjectDetail',
  components: {
    Splide,
    SplideSlide,
  },data(){
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
    }

}
  },mounted () {
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
        margin-bottom:120px; 
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
    .splide__slide img {
        width: 100%;
        height: auto;
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


</style>