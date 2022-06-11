<template>
    <div class="max-width-blue-section">
        <h2>Ce qu’ils pensent de nous</h2>

        <div class="flex">
            <!-- Card Testimonials Client 1 -->
            <div class="card-testimonial">
                <img :src="quoteLogo" alt="checkIcon">
                <img :src="clientLogo1" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.<br>
                Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 2 -->
            <div class="card-testimonial">
                <img :src="quoteLogo" alt="checkIcon">
                <img :src="clientLogo1" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.<br>
                Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>

            <!-- Card Testimonials Client 3 -->
            <div class="card-testimonial">
                <img :src="quoteLogo" alt="checkIcon">
                <img :src="clientLogo1" alt="logo des clients">
                <p>Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation.<br>
                Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.</p>
            </div>
        </div>
    </div>
</template>

<script>
import quoteLogo from "../assets/images/logos/quoteLogo.svg";
import clientLogo1 from "../assets/images/testimonials/clientLogo1.svg";

export default {
    data: function () {
        return {
            quoteLogo: quoteLogo,
            clientLogo1 : clientLogo1,
        }
    },
}
</script>

<style scoped>
    .card-testimonial{
        padding: 40px;
        border-radius: var(--radius-current);
        background-color: var(--color-white);
    }
</style>