<template>
    <div class="hero max-width-blue-section grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div class="flex flex-col items-center lg:block row-start-2 lg:row-start-1 md:px-8">
            <h1 class="text-center lg:text-left mb-14">La solution de gestion de cabinets d’avocats <br><span class="text-orange">simple, <br>ergonomique, <br>sans engagement !</span></h1>
            <NuxtLink to="/contact" class="button-orange w-max">Je souhaite une démonstration</NuxtLink>
        </div>
        <div>
            <img class="w-full" :src="illustrationHero2" alt="illustration du logiciel">
            <typewriter :replace="replace" :type-interval="20" :replace-interval="3000">
                <p class="text-replace text-center text-2xl hidden lg:block">La solution la mieux notée par vos confrères !</p>
            </typewriter>
        </div>


    </div>
</template>

<script>

import illustrationHero1 from "../../assets/images/hero/illustrationHero1.png";
import illustrationHero2 from "../../assets/images/hero/illustrationHero2.png";
import Typewriter from "typewriter-vue";

export default {
    components: {
        Typewriter,
    },
    data: function() {
        return {
            illustrationHero1,
            illustrationHero2,
            replace: [
                { from: "La solution la mieux notée par vos confrères", to: "Votre solution de gestion de cabinet qui vous fait gagner du temps !" },
            ],
        }
    },
};

</script>


<style scoped>

    .hero{
        padding-top: 180px;
    }
    .text-replace{
        font-family: 'Roboto-Regular', sans-serif;
    }

</style>