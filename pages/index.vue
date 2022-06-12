<template>
    <div>
        <Header class="fixed"/>
        <Hero/>
        <Reviews/>
        <Advantages/>
        <Adaptive/>
        <Features/>
        <Clients/>
        <Testimonials/>
        <Infos/>
        <Pricing/>
        <Footer/>
        <Elements/>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Reviews from '../components/Reviews.vue';
import Advantages from '../components/Advantages.vue';
import Adaptive from '../components/Adaptive.vue';
import Features from '../components/Features.vue';
import Clients from '../components/Clients.vue';
import Testimonials from '../components/Testimonials.vue';
import Infos from '../components/Infos.vue';
import Pricing from '../components/Pricing.vue';
import Elements from '../components/Elements.vue';
export default { components: { Hero, Reviews, Advantages, Adaptive, Features, Clients, Testimonials, Infos, Pricing, Elements } }
</script>
