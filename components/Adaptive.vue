<template>
    <div class="max-width-white-section">
        <div class="max-width-white-section-content text-center flex flex-col items-center">
            <h2 class="text-orange">zLawyer s’adapte a votre organisation</h2>
            <p class="mt-2 w-3/4 xl:w-1/2">Que votre cabinet soit équipé d’un <span class="text-bolder">Nas</span>, d’un serveur ou encore d’un <span class="text-bolder">Cloud</span>, zLawyer <span class="text-bolder">s'adapte</span> parfaitement à <span class="text-bolder">votre organisation</span>. zLawyer est <span class="text-bolder">100% compatible</span> avec les technologies actuelles de stockage.</p>

            <div class="mt-4 flex flex-wrap items-center justify-center">
              <img :src="googleDrive" alt="GoogleDrive Logo" class="mx-2">
              <img :src="one" alt="OneDrive Logo" class="mx-2">
              <img :src="synology" alt="Synology Logo" class="mx-2">
              <img :src="dropbox" alt="Dropbox Logo" class="mx-2">
              <img :src="tresorit" alt="tresorit Logo" class="mx-2">
              <img :src="pcloud" alt="logo-pcloud Logo" class="mx-2">
            </div>
        </div>
    </div>
</template>

<script>
import googleDrive from "../assets/images/adaptLogo/GoogleDrive.png"
import one from "../assets/images/adaptLogo/OneDrive.png"
import synology from "../assets/images/adaptLogo/Synology.png"
import dropbox from "../assets/images/adaptLogo/Dropbox.png"
import tresorit from "../assets/images/adaptLogo/tresorit.png"
import pcloud from "../assets/images/adaptLogo/logo-pcloud.png"

export default {
    data: function () {
        return {
            dropbox,
            googleDrive,
            synology,
            tresorit,
            pcloud,
            one
        }
    },
}
</script>

