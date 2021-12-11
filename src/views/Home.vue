<template>
  <div id="home_page">
    <Header/>
    <SectionPresentation/>
    <SectionProjects/>
    <SectionSkills/>
  </div>
</template>


<script>

import Header from '../components/Header.vue'
import SectionPresentation from '../components/SectionPresentation.vue'
import SectionProjects from '../components/SectionProjects.vue'
import SectionSkills from '../components/SectionSkills.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SectionPresentation,
    SectionProjects,
    SectionSkills
  },
}

</script>

<style>


</style>
