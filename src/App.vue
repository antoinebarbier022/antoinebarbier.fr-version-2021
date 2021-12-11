<template>
  <div id="app">
    <Header/>
    <Presentation/>
    <Projects/>
    <Skills/>
    <Footer/>
  </div>
</template>


<script>

import Header from './components/Header.vue'
import Presentation from './components/Presentation.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Presentation,
    Projects,
    Skills,
    Footer
  },
}

</script>

<style>
  @font-face {
      font-family: "Reenie Beanie";
      src: url("assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.ttf") format("truetype");
  }

  *{
      scroll-behavior: smooth;


  }

  html, body{
      margin-bottom: 0;
      margin:0;
  }

  :root {
    --main-bg-color: #0d1124;
    --main-text-color:#fff;
    --secondary-text-color:#adaab2;
    --secondary-color: #0698bd;
    --secondary-color-darker: #067d9b;
  }

  body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
  }

  header, .presentation-content, #Skills-section{
      width:840px;
      margin:auto;
  }

  @media (max-width: 1000px) {
      header, .presentation-content, #Skills-section{
          max-width: 840px;
          width:90%;
      }
  }

  h1{
      font-family: "Reenie Beanie", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 4rem;
      line-height: 70px;
      text-align: center;
      display:inline-block;
  }

  h2{
      
      font-style: normal;
      font-size: 1.5rem;
      font-weight: bold;
  }

  h3{
      font-style: normal;
      font-size: 1.3rem;
      font-weight: 600;
      opacity: 0.9;
      text-transform: uppercase;
      margin:0;

      padding-bottom: 20px;
  }

  h4{
      font-style: normal;
      font-size: 0.9rem;
      opacity: 0.6;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom:10px;
  }

  p{
      font-size: 1rem;
      line-height: 1.5em;
      color: var(--secondary-text-color);
  }

  a{
      color: var(--main-text-color);
      text-decoration: none;
  }


  figure, img{
      margin:0;
      padding:0;
  }

  figure{
      height: 100%;
      /* Centrer les images dans les figures */
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

</style>
