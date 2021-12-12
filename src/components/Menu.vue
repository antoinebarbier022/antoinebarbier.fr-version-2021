<template>
  <div id="header-menu">
        <span id="title-menu">
            <router-link to="/">Antoine Barbier</router-link>
        </span>
        <nav>  
            <router-link tag="li" to="/">Présentation</router-link>
            <router-link tag="li" to="/project" onclick="window.alert('La page des projets n\'est pas encore disponible.');">Mes Projets</router-link> 
            <a href="/project" onclick="window.alert('La page contact n\'est pas encore disponible.');">Me Contacter</a> 
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style scoped>

#header-menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width:90%;
    height:80px;
    margin:auto;
}

@media (max-width:850px) {
    #header-menu{
        flex-direction: column;
    }
    #title-menu{
        padding: 20px;
    }
}

#title-menu{
    font-family: "Reenie Beanie", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 2.5rem;
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