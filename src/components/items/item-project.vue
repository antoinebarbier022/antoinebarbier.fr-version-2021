<template>
<!--onclick="window.alert('Le détail du projet n\'est pas disponible. À bientot ! ');"-->
    <router-link :to="{ name: 'project', params: { id: project_item_prop.id }}">
        <div class="slide">
            <figure>
                <img v-bind:src="require(`../../assets/images/${project_item_prop.urlImage}`)" v-bind:alt="project_item_prop.alt">
            </figure>
            <span class="project-title">
                {{ project_item_prop.name }} 
                <strong>({{ project_item_prop.langage }})</strong>
            </span>
        </div>
    </router-link>
</template>


<script>

    export default {
        name: 'ProjectItem',
        components:{

        },
        props: ["project_item_prop"],
    }
</script>
<style scoped>
.slide{
    width:340px;
    height:auto;
    display: flex;
    flex-direction: column;
}


.slide > figure{
    position: relative;
    width:340px;
    min-height:200px;
    max-height:200px;
}

.project-title{
    margin:15px;
    color: var(--secondary-text-color);
}

</style>