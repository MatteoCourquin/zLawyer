<template>
  <div class="max-width-white-section">
    <div class="max-width-white-section-content flex flex-col items-center">
      <h2 class="text-orange text-center">
        Une réponse simple à vos questions
      </h2>

      <div class="lg:w-5/6 grid grid-rows-2 md:grid-cols-2 gap-4 items-center">

        <!-- Card Infos -->
        <div class="sm:w-5/6 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <img :src="infoIcon" alt="iconInfo" />
            <h4 class="ml-4">Y-a-t-il un engagement ?</h4>
          </div>

          <p class="mt-5">
            L’offre zLawyer est
            <span class="text-bolder">sans engagement</span>. Vous pouvez
            stopper votre abonnement à tout moment mais nous serions attristés
            de vous voir partir.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <img :src="infoIcon" alt="iconInfo" />
            <h4 class="ml-4">Comment j’importe mes données ?</h4>
          </div>

          <p class="mt-5">
            Que vos données proviennent d’un autre éditeur ou directement depuis
            Excel,
            <span class="text-bolder"
              >nous vous offrons l’import de vos données</span
            >. C’est quand même plus facile quand on ne recommence pas à zéro.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <img :src="infoIcon" alt="iconInfo" />
            <h4 class="ml-4">Y-a-t-il des frais cachés ?</h4>
          </div>

          <p class="mt-5">
            Une fois abonné, vous bénéficiez d’un accès au support utilisateur
            et aux mises à jour
            <span class="text-bolder">sans frais complémentaires</span>.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <img :src="infoIcon" alt="iconInfo" />
            <h4 class="ml-4">Puis adapter mon abonnent ?</h4>
          </div>

          <p class="mt-5">
            Oui sans problème. Si un collaborateur quitte le cabinet et qu’il
            n’est pas remplacé, vous pourrez
            <span class="text-bolder"
              >adapter votre abonnement en conséquence</span
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infoIcon from "../../assets/images/logos/infoIcon.svg";

export default {
  data() {
    return {
      infoIcon: infoIcon,
    };
  },
};
</script>
