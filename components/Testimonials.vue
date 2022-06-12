<template>
    <div class="max-width-blue-section">
        <h2 class="mb-20">Ce qu’ils pensent de nous</h2>

        <div class="slider-testimonials flex  gap-10" :style="slider">
            <!-- Card Testimonials Client 1 -->
            <div class="card-testimonial" ref="sliderCard">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 2 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 3 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 4 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 5 -->
            <div class="card-testimonial">
                <img class="quote" :src="quoteLogo" alt="checkIcon">
                <img class="logo-client" :src="clientLogo2" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.</p>
                <br>
                <p>Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>
        </div>

        <div class="flex justify-center gap-20 mt-10">
            <img @click="slideLeft()" class="cursor-pointer" :src="arrowLeft" alt="fleche de direction slider">
            <img @click="slideRight()" class="cursor-pointer" :src="arrowRight" alt="fleche de direction slider">
        </div>

        <p>Counter : {{ counter }}</p>
        <p>CardWidth : {{ cardWidth }}</p>

    </div>
</template>

<script>
import quoteLogo from "../assets/images/logos/quoteLogo.svg";
import arrowRight from "../assets/images/logos/arrowRightIcon.svg";
import arrowLeft from "../assets/images/logos/arrowLeftIcon.svg";
import clientLogo1 from "../assets/images/testimonials/clientLogo1.svg";
import clientLogo2 from "../assets/images/testimonials/clientLogo2.svg";

export default {
    data: function () {
        return {
            arrowLeft: arrowLeft,
            arrowRight: arrowRight,
            quoteLogo: quoteLogo,
            clientLogo1 : clientLogo1,
            clientLogo2 : clientLogo2,

            counter: 0,
            cardWidth: 0,
        }
    },
    methods:{
        slideRight: function () {        
            this.counter ++
            if (this.counter >= 5) {
                this.counter = 0;
                this.cardWidth = 0;
            } else {
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = (this.cardWidth + 40) * this.counter;
            }
        },
        slideLeft: function () {        
            this.counter --
            if (this.counter <= -1) {
                this.counter = 5;
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = ((this.cardWidth + 40) * this.counter) - (this.cardWidth + 40);
            } else {
                this.cardWidth = this.$refs.sliderCard.offsetWidth;
                this.cardWidth = (this.cardWidth + 40) * this.counter;
            }
        },
    },
    computed: {
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
    }
    .card-testimonial .quote{
        position: absolute;
        top: -30px;
        right: 10%;
    }
</style>