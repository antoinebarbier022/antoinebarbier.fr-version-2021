<template>
  <div id="notFound">
        <Menu/>
        <div class="notFound-content">
          <div class="message-button">
            <p>Erreur 404 | La page est introuvable.</p>
            <router-link class="button-link" to="/">
              Retour sur la page principale
            </router-link>
          </div>
        </div>              
  </div>
</template>


<script>
  import Menu from '../components/Menu.vue'

  export default {
    name: 'NotFound',
    components:{
      Menu,
    }

  }

</script>

<style scoped>

#notFound{
  height: 100%;
  display:grid;
  grid-template-rows: max-content auto;
  margin-bottom:60px;
}
.notFound-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:60px;
}

p{
    text-align: center;
}

a.button-link{

    margin:auto;
    height:40px;
    min-width:200px;
    width:300px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--secondary-color);
    font-style: normal;
    font-size: 0.8rem;
    opacity: 0.8;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 5px solid var(--secondary-color-darker);
}

a.button-link:focus{
    
    transform: translateY(3px);
    border-bottom: 3px solid var(--secondary-color-darker);

}
</style>
