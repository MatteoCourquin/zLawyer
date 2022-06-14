<template>
  <div class="max-width-white-section max-width-clients-section" id="clients">
    <div class="max-width-white-section-content">
      <h2 class="text-orange">Ils nous font confiance</h2>

      <div class="wrapperContainerTop">
        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="aramsis" alt="Arasmis Logo" class="image w-auto" />
          <img :src="archers" alt="Archers Logo" class="image w-auto" />
          <img :src="lexcom" alt="Lexcom Logo" class="image w-auto" />
          <img :src="rivedroit" alt="Rivedroit Logo" class="image w-auto" />
          <img :src="rivedroit" alt="Rivedroit Logo" class="image w-auto" />
        </div>
        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="aramsis" alt="Arasmis Logo" class="image w-auto" />
          <img :src="archers" alt="Archers Logo" class="image w-auto" />
          <img :src="archers" alt="Archers Logo" class="image w-auto" />
          <img :src="lexcom" alt="Lexcom Logo" class="image w-auto" />
          <img :src="rivedroit" alt="Rivedroit Logo" class="image w-auto" />
        </div>
      </div>

      <div class="wrapperContainerBottom">
        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img :src="aramsis" alt="Arasmis Logo" class="imageBottom w-auto" />
          <img :src="aramsis" alt="Arasmis Logo" class="imageBottom w-auto" />
          <img :src="archers" alt="Archers Logo" class="imageBottom w-auto" />
          <img :src="lexcom" alt="Lexcom Logo" class="imageBottom w-auto" />
          <img
            :src="rivedroit"
            alt="Rivedroit Logo"
            class="imageBottom w-auto"
          />
        </div>
        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img :src="aramsis" alt="Arasmis Logo" class="imageBottom w-auto" />
          <img :src="archers" alt="Archers Logo" class="imageBottom w-auto" />
          <img :src="lexcom" alt="Lexcom Logo" class="imageBottom w-auto" />
          <img :src="lexcom" alt="Lexcom Logo" class="imageBottom w-auto" />
          <img
            :src="rivedroit"
            alt="Rivedroit Logo"
            class="imageBottom w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aramsis from "../../assets/images/clients/aramisLogo.png";
import archers from "../../assets/images/clients/archersLogo.png";
import lexcom from "../../assets/images/clients/lexcomLogo.png";
import rivedroit from "../../assets/images/clients/rivedroitLogo.png";
import { gsap } from "gsap";

export default {
  data: function () {
    return {
      aramsis,
      archers,
      lexcom,
      rivedroit,
    };
  },

  mounted() {
    this.wrapAnimationInfinite()
    this.wrapAnimationInfiniteBottom()
  },

  methods: {
    wrapAnimationInfinite() {

      if(window.matchMedia("(max-width: 1200px)").matches) {

        gsap.set(".wrapperContainerBottom", { xPercent: -200 })

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
          return i * imagesWidth
        },
      })

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

      if(window.matchMedia("(max-width: 1200px)").matches) {

        gsap.set(".wrapperContainerBottom", { xPercent: -200 })

      } else {

        gsap.set(".wrapperContainerBottom", { xPercent: -50 })

      }

      // const imagesContainer = document.querySelector(".imagesContainerBottom")
      const images = document.querySelectorAll(".imageBottom")

      let imagesWidth = 350
      var totalWidth = imagesWidth * 10
      var test2 = document.querySelectorAll(
        ".wrapperContainerBottom .imageBottom"
      );
      var dirFromLeft = "+=" + totalWidth

      var mod = gsap.utils.wrap(0, totalWidth);

      gsap.set(test2, {
        x: function (i) {
          return i * imagesWidth;
        },
      });

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

    resizeFunction() {
      this.wrapAnimationInfinite()
      this.wrapAnimationInfiniteBottom()
    },
  },
}
</script>

<style scoped>
.imageBottom,
.image {
  position: absolute;
  margin: 0 400px;
}

.wrapperContainerBottom {
  padding-top: 100px;
}
</style>
