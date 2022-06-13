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
import Header from '../components/index/Header.vue';
import Hero from '../components/index/Hero.vue';
import Reviews from '../components/index/Reviews.vue';
import Advantages from '../components/index/Advantages.vue';
import Adaptive from '../components/index/Adaptive.vue';
import Features from '../components/index/Features.vue';
import Clients from '../components/index/Clients.vue';
import Testimonials from '../components/index/Testimonials.vue';
import Infos from '../components/index/Infos.vue';
import Pricing from '../components/index/Pricing.vue';
import Elements from '../components/index/Elements.vue';
export default { components: { Header, Hero, Reviews, Advantages, Adaptive, Features, Clients, Testimonials, Infos, Pricing, Elements } }
</script>
