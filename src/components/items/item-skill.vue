<template>
    <div class="skill">
        <div class="skill-header">
            <p class="skill-title">{{ skill_item_prop.name }}</p>
            <p class="skill-description">{{ skill_item_prop.level }}</p>
        </div>
        <div class="skill-container">
            <div class="skill-progress-bar" v-bind:style="{ width: skill_item_prop.pourcent + '%' }"></div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'SkillItem',
        props: ["skill_item_prop"],
    }
</script>
<style scoped>

</style>