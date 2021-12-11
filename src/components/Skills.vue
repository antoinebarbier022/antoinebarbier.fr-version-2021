<template>
    <section id="Skills-section">
        <h3 class="skills-title">Mes compétences</h3>
        <!-- Components -->
        <div class="skills-container">
            <SkillItem v-for="item in skillList" 
                v-bind:skill_item_prop="item" 
                v-bind:key="item.id"/>
        </div>
    </section>
</template>

<script>
import SkillItem from './items/item-skill.vue'
    export default {
        name: 'Skills',
        components:{
            SkillItem
        },
        data() {
            return {
                skillList: [
        {id:0,
            name:"HTML/CSS",
            level:"Avancé",
            pourcent:"90"
        },
        {id:1,
            name:"Javascript",
            level:"Débutant",
            pourcent:"50"
        },
        {id:2,
            name:"Angular",
            level:"Débutant",
            pourcent:"50"
        },
        {id:3,
            name:"VueJs",
            level:"Débutant",
            pourcent:"50"
        },
        {id:4,
            name:"Java (Android Studio)",
            level:"Débutant",
            pourcent:"60"
        },
        {id:5,
            name:"ThreeJs",
            level:"Débutant",
            pourcent:"60"
        },
        {id:6,
            name:"Flutter",
            level:"Débutant",
            pourcent:"60"
        },
        {id:7,
            name:"C/C++",
            level:"Débutant",
            pourcent:"60"
        },
        {id:8,
            name:"SQL",
            level:"Débutant",
            pourcent:"60"
        },
        {id:9,
            name:"MongoDb",
            level:"Débutant",
            pourcent:"60"
        }
      ],

            }
        },
    }
</script>

<style>

    #Skills-section{
    
    margin-bottom: 50px;
    padding: 15px;
    
}

@media (max-width: 1000px) {
    #Skills-section{
        width:calc(100vw - 60px);
    }
    .skills-container{
        grid-template-columns: auto;
        column-gap: 0px;
        overflow: hidden;
    }
    
}


.skill{
    width:100%;
    margin-bottom:20px;
}
.skill-header{
    display: flex;
    flex-direction: row;
}

.skill-title, .skill-description{
    color:var(--secondary-text-color);
    margin-bottom: 2px;
    width:100%;
}
.skill-title{
min-width: 200px;
}
.skill-description{
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

}


.skills-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    margin-bottom: 50px;
}

@media (max-width: 700px) {
    .skills-container{
        grid-template-columns: auto;
        column-gap: 0px;
        overflow: hidden;
    }
    
}

.skill-container{
    width:100%;
    height: 5px;
    background-color: rgba(196, 196, 196, 0.3);
    border-radius: 5px;
}

.skill-progress-bar{
    width:100%;
    height: 100%;
    background: linear-gradient(90deg, var(--secondary-color) 70%, transparent 100%);


    border-radius: 5px;
}
</style>