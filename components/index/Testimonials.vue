<template>
    <div class="max-width-blue-section">
        <h2 class="mb-20">Ce qu’ils pensent de nous</h2>

        <!-- Slider Container  -->
        <div class="slider-testimonials flex gap-10" ref="sliderContainer" :style="slider">

            <!-- Card Testimonials Client 1 -->
            <div class="card-testimonial" ref="sliderCard">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo1" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 2 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Le logiciel zLawyer ? en un mot ? ...la FACILITE !" C'est une solution très agréable et très simple. Il nous est devenu indispensable et il ne tombe jamais en panne.</p>
            </div>

            <!-- Card Testimonials Client 3 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo3" alt="logo des clients">
                <p>C’est sans conteste le meilleur logiciel de facturation et de gestion et le plus easy-using avec une équipe hyper professionnelle et hyper réactive.</p>
                <br>
                <p>Nous utilisons ZL depuis 7 ans et nous n’avons jamais rencontré aucun problème.</p>
            </div>

            <!-- Card Testimonials Client 4 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo4" alt="logo des clients">
                <p>Cela va bientôt faire 10 ans que nous utilisons Z. Un logiciel ergonomique, convivial et d’une simplicité de déploiement et d’utilisation appréciée par l’ensemble de notre équipe. A recommander les yeux fermés.</p>
            </div>

            <!-- Card Testimonials Client 5 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo5" alt="logo des clients">
                <p>J’utilise zLawyer depuis des années. Cet outil me permet de facturer en deux clics et d’obtenir une analyse détaillée de la rentabilité de mes dossiers.</p>
                <br>
                <p>En plus de cela, l’équipe dédiée au super est vraiment très réactive. Je recommande à 200% !</p>
            </div>

        </div>

        <div class="flex justify-center gap-20 mt-10">
            <img @click="slideLeft()" class="cursor-pointer" :src="arrowLeft" alt="fleche de direction slider">
            <img @click="slideRight()" class="cursor-pointer" :src="arrowRight" alt="fleche de direction slider">
        </div>

        <!-- <p>{{ slideDuration }}</p> -->
    </div>
</template>

<script>
import quoteLogo from "../../assets/images/logos/quoteLogo.svg";
import arrowRight from "../../assets/images/logos/arrowRightIcon.svg";
import arrowLeft from "../../assets/images/logos/arrowLeftIcon.svg";
import clientLogo1 from "../../assets/images/testimonials/kiejman.png";
import clientLogo2 from "../../assets/images/testimonials/richelieu.png";
import clientLogo3 from "../../assets/images/testimonials/sekriValentinZerrouk.png";
import clientLogo4 from "../../assets/images/testimonials/mggVoltaire.png";
import clientLogo5 from "../../assets/images/testimonials/adHoc.png";

export default {
    data: function () {
        return {
            // Images
            arrowLeft,
            arrowRight,
            quoteLogo,
            clientLogo1,
            clientLogo2,
            clientLogo3,
            clientLogo4,
            clientLogo5,

            // Slider
            counter: 0,
            cardWidth: 0,
            // slideDuration: 2000,
            // setInterval: setInterval( () => { this.slideRight() }, this.slideDuration),
        }
    },
    methods:{
        // Function to slide Right
        slideRight: function () {
            this.counter ++
            if (this.counter >= this.$refs.sliderContainer.children.length) {
                this.counter = 0;
                this.cardWidth = 0;
            } else {
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = (this.cardWidth + 40) * this.counter;
            }
        },
        // Function to slide Left
        slideLeft: function () {
            this.counter --
            if (this.counter <= -1) {
                this.counter = this.$refs.sliderContainer.children.length;
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = ((this.cardWidth + 40) * this.counter) - (this.cardWidth + 40);
            } else {
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = (this.cardWidth + 40) * this.counter;
            }
        },
        // startSlider: function(setInterval){
        //     setInterval = setInterval( () => { this.slideRight() }, this.slideDuration);
        //     // setInterval( () => { this.slideRight() }, this.slideDuration)
        //     console.log("Slider ON");
        // },
        // stopSlider: function(){
        //     this.slideDuration = 10000
        //     setInterval( () => { this.slideRight() }, this.slideDuration);
        //     console.log("Slider OFF");
        //     // setTimeout(() => {
        //     //     this.slideDuration = 500
        //     //     this.startSlider()
        //     // }, 20000);
        // }
    },
    // mounted() {
    //     this.startSlider(this.setInterval);
    //     console.log("slider ON")
    // },
    computed: {
        // Style to slide the card
        slider() {
            return {
                transform : `translateX(-${this.cardWidth}px)`,
                transition: "transform .5s ease-in-out",
            };
        },
    },
};

</script>

<style scoped>
    .card-testimonial{
        flex-shrink: 0;
        width: 38vw;
        max-width: 700px;
        position: relative;
        padding: 60px;
        border-radius: var(--radius-current);
        background-color: var(--color-white);
        box-shadow: var(--shadow-current);
    }
    @media screen and (max-width : 1000px){
        .card-testimonial{
            width: 70%;
        }
    }
    @media screen and (max-width : 700px){
        .card-testimonial{
            width: 90%;
        }
    }
    .card-testimonial .logo-client{
        margin-bottom: 40px;
        height: 50px;
    }
    .card-testimonial .quote{
        position: absolute;
        top: -30px;
        right: 10%;
    }
</style>