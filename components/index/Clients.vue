<template>
  <div class="max-width-white-section max-width-clients-section">
    <div class="max-width-white-section-content">
      <h2 class="text-orange">Ils nous font confiance</h2>

      <div class="wrapperContainerTop">
        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="azarmi" alt="Logo Arasmis" class="image w-auto h-28" />
          <img :src="baro" alt="Logo Baro" class="image w-auto h-28" />
          <img :src="betto" alt="Logo Betto" class="image w-auto h-28" />
          <img
            :src="bonifassi"
            alt="Logo Bonifassi"
            class="image w-auto h-28"
          />
          <img :src="flichy" alt="Logo Flichy" class="image w-auto h-28" />
        </div>
        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="azarmi" alt="Logo Arasmis" class="image w-auto h-28" />
          <img :src="baro" alt="Logo Baro" class="image w-auto h-28" />
          <img :src="betto" alt="Logo Betto" class="image w-auto h-28" />
          <img
            :src="bonifassi"
            alt="Logo Bonifassi"
            class="image w-auto h-28"
          />
          <img :src="flichy" alt="Logo Flichy" class="image w-auto h-28" />
        </div>
      </div>

      <div class="wrapperContainerBottom">
        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img
            :src="bonilfassi"
            alt="Logo Bonilfassi"
            class="imageBottom w-auto h-28"
          />
          <img
            :src="lamartine"
            alt="Logo Lamartine"
            class="imageBottom w-auto h-28"
          />
          <img :src="lombard" alt="Logo Lombard" class="imageBottom w-auto h-28" />
          <img
            :src="navacelle"
            alt="Logo Navacelle"
            class="imageBottom w-auto h-28"
          />
          <img :src="ollyns" alt="Logo Ollyns" class="imageBottom w-auto h-24" />
        </div>
        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img :src="valther" alt="Logo Valther" class="imageBottom w-auto h-28" />
          <img :src="lombard" alt="Logo Lombard" class="imageBottom w-auto h-28" />
          <img :src="flichy" alt="Logo Flichy" class="image w-auto h-28" />
          <img :src="vatier" alt="Logo Vatier" class="imageBottom w-auto h-28" />
          <img :src="azarmi" alt="Logo Azarmi" class="imageBottom w-auto h-28" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import azarmi from "../../assets/images/clients/azarmiLogo.webp";
import baro from "../../assets/images/clients/baroLogo.webp";
import betto from "../../assets/images/clients/bettoLogo.webp";
import bonifassi from "../../assets/images/clients/bonifassiLogo.webp";
import flichy from "../../assets/images/clients/flichyLogo.webp";
import bonilfassi from "../../assets/images/clients/bonifassiLogo.webp";
import lamartine from "../../assets/images/clients/laMartineLogo.webp";
import lombard from "../../assets/images/clients/lombardLogo.webp";
import navacelle from "../../assets/images/clients/navacelleLogo.webp";
import ollyns from "../../assets/images/clients/ollynsLogo.webp";
import valther from "../../assets/images/clients/valtherLogo.webp";
import vatier from "../../assets/images/clients/vatierLogo.webp";
import vinci from "../../assets/images/clients/vinciLogo.webp";

import { gsap } from "gsap";

export default {
  data: function () {
    return {
      azarmi,
      baro,
      betto,
      bonifassi,
      flichy,
      bonilfassi,
      lamartine,
      lombard,
      navacelle,
      ollyns,
      valther,
      vatier,
      vinci,
    }
  },

  mounted() {
    this.wrapAnimationInfinite()
    this.wrapAnimationInfiniteBottom()
  },

  methods: {
    wrapAnimationInfinite() {
      if (window.matchMedia("(max-width: 1200px)").matches) {
        gsap.set(".wrapperContainerTop", { xPercent: -200 })
      } else {
        gsap.set(".wrapperContainerTop", { xPercent: -50 })
      }

      let imagesWidth = 300
      var totalWidth = imagesWidth * 10
      var test2 = document.querySelectorAll(".wrapperContainerTop .image")
      var dirFromRight = "-=" + totalWidth

      var mod = gsap.utils.wrap(0, totalWidth)

      gsap.set(test2, {
        x: function (i) {
          return i * imagesWidth;
        },
      });

      var action = gsap.timeline().to(test2, {
        x: dirFromRight,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: 25,
        ease: "none",
        repeat: -1,
      })
    },

    wrapAnimationInfiniteBottom() {
      if (window.matchMedia("(max-width: 1200px)").matches) {
        gsap.set(".wrapperContainerBottom", { xPercent: -200 })
      } else {
        gsap.set(".wrapperContainerBottom", { xPercent: -50 })
      }

      let imagesWidth = 300
      var totalWidth = imagesWidth * 9
      var test2 = document.querySelectorAll(
        ".wrapperContainerBottom .imageBottom"
      )
      var dirFromLeft = "+=" + totalWidth

      var mod = gsap.utils.wrap(0, totalWidth)

      gsap.set(test2, {
        x: function (i) {
          return i * imagesWidth;
        },
      })

      var action = gsap.timeline().to(test2, {
        x: dirFromLeft,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: 25,
        ease: "none",
        repeat: -1,
      })
    },
  },
}
</script>

<style scoped>
.imageBottom, .image {
  position: absolute;
}

.wrapperContainerTop {
  padding-top: 40px;
}
.wrapperContainerBottom {
  padding-top: 150px;
  margin-bottom: 65px;
}
</style>
