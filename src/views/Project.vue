<template>
  <div id="project_page">
        <Menu/>
        <ProjectDetail/>
  </div>
</template>


<script>
  import Menu from '../components/Menu.vue'
  import ProjectDetail from '../components/ProjectDetail.vue'

  export default {
    name: 'Project',
    components:{
      Menu,
      ProjectDetail
    }

  }

</script>

<style>


</style>
