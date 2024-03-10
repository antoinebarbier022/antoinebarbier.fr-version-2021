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
        <Footer/>            
  </div>
</template>


<script >
  import Menu from '../components/Menu.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'NotFound',
    components:{
      Menu,
      Footer
    }

  }

</script>

<style scoped>

#notFound{ 
  min-height: 100vh; 
  margin: 0; 
  
  display: grid;
  grid-template-rows: auto 1fr auto;
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
