<template>
  <div id="home_page">
    <Header/>
    <SectionPresentation/>
    <SectionProjects/>
    <SectionSkills/>
    <Footer/>
  </div>
</template>


<script >

import Header from '../components/Header.vue'
import SectionPresentation from '../components/SectionPresentation.vue'
import SectionProjects from '../components/SectionProjects.vue'
import SectionSkills from '../components/SectionSkills.vue'
  import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SectionPresentation,
    SectionProjects,
    SectionSkills,
    Footer
  },mounted () {
        window.scrollTo(0, 0)
    }
}

</script>

<style scoped>

*{
  scroll-behavior: smooth;
}
</style>
