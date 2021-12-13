<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>


<script>

export default {
  name: 'App',
}

</script>

<style>
  @font-face {
      font-family: "Reenie Beanie";
      src: url("assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.ttf") format("truetype");
  }

  html, body{
      margin-bottom: 0;
      margin:0;
  }
  #app{
      height: 100vh;
  }


  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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

  /* Butons pred and next */

button{
    cursor: pointer;
    background-color: transparent;
    border: 3px solid rgba(255, 255, 255, 0.2);
    transition: border 300ms ease-in-out;
    border-radius: 100%;
    padding:2px;
    margin:4px;
    width: 40px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.group-bouton{
    position: absolute;
    top:-60px;
    right:10vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
}

button:hover{
    border: 3px solid rgba(255, 255, 255, 0.8);
}

button > svg{
    width: 10px;
}

</style>
