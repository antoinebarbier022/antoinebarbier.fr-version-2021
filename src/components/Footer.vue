<template>
        <footer>
            <button class="arrow-bouton" href="#header" v-smooth-scroll>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
            </button>
            <nav>
                <div>
                    <h4>Suivre mon travail</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/antoineb_dev/" target="_blank" title="Instagram : @antoineb_dev">Instagram</a></li>
                                                <li><a href="https://www.instagram.com/antoineb_dev/" target="_blank" title="Dribbble : @An_toine">Dribbble</a></li>
                        <li><a href="https://gitlab.com/An_toine" target="_blank" title="GitLab : @An_toine">GitLab</a></li>
                        <li><a href="https://github.com/antoinebarbier022" target="_blank" title="Github : @antoinebarbier022">Github</a></li>
                    
                    </ul>
                </div>
    
                <div>
                    <h4>Curriculum Vitae </h4>
                    <ul>
                        <li> <a href="../assets/files/AntoineBarbier_CV_Stage.pdf" target="_blank" >Ouvrir le CV dans le navigateur web</a></li>
                        <li> <a href="../assets/files/AntoineBarbier_CV_Stage.pdf" download="CV_AntoineBarbier">Télécharger le CV</a></li>
                    </ul>
                </div>
    
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:antoinebarbier022@gmail.com">antoinebarbier022@gmail.com</a> </li>
                        <li><a href="https://www.linkedin.com/in/antoinebarbier022/" target="_blank" title="Linkedin : antoinebarbier022">Linkedin</a></li>
                    </ul>
                </div>
                
            </nav>
            <span class="footer-text">{{new Date().getFullYear() }} - <a href="https://antoinebarbier.fr" target="_blank">Antoine Barbier</a></span>
        </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>

    footer{
        width:calc(100vw - 60px);
        padding:30px 30px 30px 30px;
        background-color: var(--secondary-color-darker);
        overflow: hidden;
        box-shadow: 0px 0px 60px rgba(0,0,0,0.5);
    }
        

    footer nav{
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        justify-content: space-around;
        margin:auto;

    }

    footer nav div{
        margin:10px;
    }

    @media (max-width: 700px) {
        footer nav{
            flex-direction: column;
        }
    }

    footer button{
        float:right;
        background: linear-gradient(145deg, var(--secondary-color), var(--secondary-color-darker));
        box-shadow:  4px 4px 8px rgba(0, 0, 0, 0.5),
                -2px -2px 6px rgba(0, 0, 0, 0.1);
    
    }



    footer ul{
        margin:0;
        padding:0;
        list-style: none;
    }
    footer ul li{
        padding:2px;
    }

    footer a:hover{
        text-decoration: underline;
    }

    .footer-text{
        float: right;
        margin:auto;
        opacity: 0.6;
    }

</style>