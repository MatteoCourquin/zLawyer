<template>
    <div class="max-width-white-section">
        <div class="max-width-white-section-content relative grid grid-cols-1 lg:grid-cols-2">
            <div class="p-8">
                <h3 class="mb-8">Contact</h3>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <p class="pb-4">Zèle Solutions : <br>
                    9, rue Angélique Verien <br>
                    92200, Neuilly-sur-Seine</p>
                    <div>
                        <p>Tél : <a class="text-link" href="tel:330184257027">01 84 25 70 27</a></p>
                        <p>Mail : <a class="text-link" href="mailto:info@zele-solutions.fr">info@zele-solutions.fr</a></p>
                    </div>
                </div>
            </div>

            <div class="p-8">
                <h3 class="mb-8">zLAwyer App</h3>
                <div class="flex flex-wrap">
                    <a target="_blank" href="https://apps.apple.com/fr/app/zlawyer/id1174916635?mt=8"><img class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3" :src="badgeAppStore" alt="logo de téléchargement vers l'apple store"></a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zelesolution.zlawyer&hl=fr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3" :src="badgePlayStore" alt="logo de téléchargement vers le play store"></a>
                </div>
            </div>

            <div class="p-8">
                <h3 class="mb-8">Ressources</h3>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="pb-4">
                        <!-- <a class="text-link block" download="TeamViewerQS.exe" href="https://download.teamviewer.com/download/TeamViewerQS.exe">Assistance à distance (Teamviewer)</a>
                        <a class="text-link block" target="_blank" href="https://anydesk.com/fr/downloads">Assistance à distance (Anydesk)</a>
                        <a class="text-link block" download="zLawyerStp.exe" href="http://www.zlawyer.fr/private/zlawyerstp.exe">Installation zLawyer</a> -->
                        <a class="text-link block" download="TeamViewerQS.exe" href="https://download.teamviewer.com/download/TeamViewerQS.exe">Assistance à distance (Teamviewer)</a>
                        <a class="text-link block" target="_blank" href="https://anydesk.com/fr/downloads">Assistance à distance (Anydesk)</a>
                        <a class="text-link block" download="zLawyerStp.exe" :href="require('../assets/download/zlawyerstp.exe')">Installation zLawyer</a>
                    </div>

                    <div>
                        <nuxt-link class="block text-link" to="/conditions-generales-utilisation">Conditions générales d'utilisation</nuxt-link>
                        <nuxt-link class="block text-link" to="/politques-de-confidentialite">Politiques de confidentialité</nuxt-link>
                        <nuxt-link class="block text-link" to="/politique-de-cookies">Politiques de cookies</nuxt-link>
                    </div>
                </div>

            </div>

            <div class="p-8 flex items-center">
                <img :src="panda" class="w-28" alt="">
            </div>

            <div class="absolute w-full bottom-5">
                <p class="text-center">© 2006 - {{ year }} • Zèle Solutions. Tous droits réservés.</p>
            </div>
        </div>
    </div>
</template>

<script>

    import badgeAppStore from "../assets/images/logos/badgeAppStore.svg";
    import badgePlayStore from "../assets/images/logos/badgePlayStore.svg";
    import panda from "../assets/images/pandas/panda.png";

    export default {
        data: function () {
            return {
                badgeAppStore,
                badgePlayStore,
                panda,

                year : new Date().getFullYear(),
            }
        },
    }

</script>