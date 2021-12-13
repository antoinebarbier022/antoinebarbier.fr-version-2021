<template>
  <div class="project_page">
        <Menu/>
        <ProjectDetail/>
        <Footer/>
  </div>
</template>


<script>
  import Menu from '../components/Menu.vue'
  import ProjectDetail from '../components/ProjectDetail.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Project',
    components:{
      Menu,
      ProjectDetail,
      Footer
    }

  }

</script>

<style scoped>

.project_page{ 
  min-height: 100vh; 
  margin: 0; 
  
  display: grid;
  grid-template-rows: auto 1fr auto;
}


</style>
