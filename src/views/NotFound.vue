<template>
  <div id="notFound">
        <Menu/>
        <p>Error 404 | Not Found</p>
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

p{
    text-align: center;
    margin:200px;
}
</style>
