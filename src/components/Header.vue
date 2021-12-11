<template>
  <header id="header">
        <figure class="mini-profile-image">
            <img src="../assets/images/IMG_9614.jpg" alt="">
        </figure>
        <h1>Antoine Barbier</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>

    header{
        margin-top:20px;
        margin-bottom:60px;
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        
    }

    header figure{
        height:150px;
    }

    header figure img{
        height: 100%;
        border-radius: 100%;
        border: 4px solid rgba(0, 0, 0, 0.2);
    }

    .mini-profile-image{
        display:none;
        
    }



    @media (max-width: 840px) {
        header{
            gap: 2rem;
        }
        header{
            justify-content: start;
        }
        .mini-profile-image{
            display:inline-block;
        }
    }

    @media (max-width: 600px) {
        header{
            gap: 1.5rem;
        }
        header h1{
            font-size: 3.2rem;;
        }
        header figure{
            height:130px;
        }
    }

    @media (max-width: 430px) {
        header{
            gap: 1rem;
        }
        header h1{
            font-size: 2.3rem;;
        }
        header figure{
            height:110px;
        }
    }

    @media (max-width: 350px) {
        header{
            gap: 0.5rem;
            justify-content: center;
        }

        .mini-profile-image{
            display:none;
        }
    }

</style>