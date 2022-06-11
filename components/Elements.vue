<template>
    <div class="py-10 border-t-8 border-black">

        <!-- Typo -->
        <h1>h1 • Roboto-Black</h1>
        <h2>h2 • Roboto-Black</h2>
        <h3>h3 • Roboto-Medium</h3>
        <h4>h4 • Roboto-Regular</h4>
        <p>p • Roboto-Regular</p>
        <p>Texte <span class="text-underline">souligné</span></p>
        <p>Texte en <span class="text-bolder">gras</span></p>
        <p class="subtitle">Sous-titre • Roboto-Light</p>
        <a href="#" class="text-link">Liens</a>
        <li>
            <ul>liste</ul>
            <ul>liste</ul>
            <ul>liste</ul>
        </li>

        <!-- Components -->
        <button class="button-orange">Bouton orange</button>
        <button class="button-transparent">Bouton transaprent</button>

        <!-- Colors -->
        <div class="p-10 bg-white"><p class="text-black">white</p></div>
        <div class="p-10 bg-light-blue"><p class="text-black">light-blue - Fond</p></div>
        <div class="p-10 bg-blue"><p class="text-black">blue - Ombres</p></div>
        <div class="p-10 bg-dark-blue"><p class="text-white">dark-blue - Titres & Textes</p></div>
        <div class="p-10 bg-midnight-blue"><p class="text-white">midnight-blue - Main </p></div>
        <div class="p-10 bg-orange"><p class="text-black">orange</p></div>
        <div class="p-10 bg-black"><p class="text-white">black</p></div>

        <!-- BG Contact & Connexion -->
        <div class="relative w-full h-screen p-16 lg:px-28 overflow-hidden bg-gray-800">
            <!-- Background -->
            <!-- Rings -->
            <svg class="absolute inset-0 pointer-events-none"
                viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
                <g class="text-gray-700 opacity-25" fill="none" stroke="currentColor" stroke-width="100">
                    <circle r="234" cx="196" cy="23"></circle>
                    <circle r="234" cx="790" cy="491"></circle>
                </g>
            </svg>
            <!-- Dots -->
            <svg class="absolute -top-16 -right-16 text-gray-700"
                viewBox="0 0 220 192" width="220" height="192" fill="none">
                <defs>
                    <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                    </pattern>
                </defs>
                <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
            </svg>
        </div>



        <!-- <div class="card" 
            v-for="(card, i) in cards" 
            :key="card.id" 
            ref="cards" 
            @click="simpleFade(i)">
        <div class="card-inner">
            <div class="card-name">click</div>
        </div>
        </div> -->
    </div>
</template>
<!-- 
<script>

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);

const myCards = [
    {
        id: 0,
        name: 'Prima carta',
    },
    {
        id: 1,
        name: 'Seconda carta',
    },
    {
        id: 2,
        name: 'Terza carta',
    },
    {
        id: 3,
        name: 'Quarta carta',
    }
];

export default {
    name: 'TarocchiCards',
    data() {
        return {
        cards: myCards,
        };
    },
    methods: {
        simpleFade(i) {
            gsap.fromTo(this.$refs.cards[i], {
                opacity: 1
            }, {
                opacity: 0,
                duration: 0.35
            });
        }
    },
}

</script> -->
