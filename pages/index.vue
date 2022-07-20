<template>
  <div>
    <Header class="fixed" />
    <Hero />
    <Reviews />
    <Advantages />
    <Adaptive />
    <Features />
    <Infos />
    <Testimonials />
    <Clients />
    <Pricing />
    <Footer />
    <Zendesk />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/index/Hero.vue";
import Reviews from "../components/index/Reviews.vue";
import Advantages from "../components/index/Advantages.vue";
import Adaptive from "../components/index/Adaptive.vue";
import Features from "../components/index/Features.vue";
import Clients from "../components/index/Clients.vue";
import Testimonials from "../components/index/Testimonials.vue";
import Infos from "../components/index/Infos.vue";
import Pricing from "../components/index/Pricing.vue";
import Footer from "../components/Footer.vue";
import Zendesk from "../components/index/Zendesk.vue";

export default {
  components: {
    Header,
    Hero,
    Reviews,
    Advantages,
    Adaptive,
    Features,
    Clients,
    Testimonials,
    Infos,
    Pricing,
    Footer,
    Zendesk,
  },
  mounted() {
    window.axeptioSettings = {
      clientId: "62d841060c47121494b0034d",
      cookiesVersion: "zlawyer-fr",
    };
    (function (d, s) {
      var t = d.getElementsByTagName(s)[0],
        e = d.createElement(s);
      e.async = true;
      e.src = "//static.axept.io/sdk.js";
      t.parentNode.insertBefore(e, t);
    })(document, "script");
  },
};
</script>
