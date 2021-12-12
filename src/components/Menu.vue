<template>
  <div id="menu">
        <span id="title-menu">
            <router-link to="/">Antoine Barbier</router-link>
        </span>
        <nav>  
            <router-link tag="li" to="/">Présentation</router-link>
            <router-link tag="li" to="/">Mes Projets</router-link> 
            <a href="">Me Contacter</a> 
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style scoped>

#menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width:90%;
    height:70px;
    margin:auto;
}

#title-menu{
    font-family: "Reenie Beanie", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 3rem;
}

nav{
    display:flex;
    align-items: center;
    gap:40px;
    font-style: normal;
    font-size: 0.9rem;
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: 600;
}


</style>