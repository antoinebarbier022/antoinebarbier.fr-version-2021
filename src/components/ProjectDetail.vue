<template>
    <div id="project_detail">
        <div>
            <Splide ref="main" id="main-slider" :options="optionsMain">
      <SplideSlide >
        <img src="../assets/images/androidApp.png" alt="slide.alt">
      </SplideSlide>
      <SplideSlide >
        <img src="../assets/images/bebertProject.png" alt="slide.alt">
      </SplideSlide>
    </Splide>

              <Splide ref="thumbnails" :options="optionsThumbnails">
      <SplideSlide >
        <img src="../assets/images/androidApp.png" alt="slide.alt">
      </SplideSlide>
      <SplideSlide >
        <img src="../assets/images/bebertProject.png" alt="slide.alt">
      </SplideSlide>
    </Splide>

        </div>
        <div>
            <h2>Plateforme de gestion des stage informatiques de la FDS de Montpellier</h2>
            <h3>Année : 2017</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique velit tenetur. Amet nulla veritatis tempora natus nemo? Illum possimus harum quibusdam voluptatem vero odit, culpa nesciunt delectus in aut!</p>
        <span>#Java #Firebase #Projet</span>
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
        fixedWidth: 140,
        fixedHeight: 100,
        lazyLoad: 'nearby',
        padding: { left: 60, right: 60 },
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
    div#project_detail{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
        width:80%;
        margin:auto;
        margin-top:60px;
        margin-bottom:120px;
    }

    #main-slider{
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.6);
        border-radius: 14px;
        padding:20px;
        margin-bottom:10px;
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



</style>