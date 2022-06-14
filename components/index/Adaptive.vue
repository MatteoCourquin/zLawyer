<template>
    <div class="max-width-white-section">
        <div class="max-width-white-section-content text-center flex flex-col items-center">
            <h2 class="text-orange">zLawyer s’adapte a votre organisation</h2>
            <p class="my-2 w-3/4 xl:w-1/2">Que votre cabinet soit équipé d’un <span class="text-bolder">Nas</span>, d’un serveur ou encore d’un <span class="text-bolder">Cloud</span>, zLawyer <span class="text-bolder">s'adapte</span> parfaitement à <span class="text-bolder">votre organisation</span>. zLawyer est <span class="text-bolder">100% compatible</span> avec les technologies actuelles de stockage.</p>

            <div class="mt-4 flex flex-wrap items-center justify-center">
              <img :src="googleDrive" alt="GoogleDrive Logo" class="mx-2 h-20">
              <img :src="oneDrive" alt="OneDrive Logo" class="mx-2 h-20">
              <img :src="synology" alt="Synology Logo" class="mx-2 h-20">
              <img :src="dropbox" alt="Dropbox Logo" class="mx-2 h-20">
              <img :src="tresorit" alt="tresorit Logo" class="mx-2 h-20">
              <img :src="pcloud" alt="logo-pcloud Logo" class="mx-2 h-20">
            </div>
        </div>
    </div>
</template>

<script>
import googleDrive from "../../assets/images/adaptative/googleDriveLogo.svg"
import oneDrive from "../../assets/images/adaptative/oneDriveLogo.svg"
import synology from "../../assets/images/adaptative/synologyLogo.svg"
import dropbox from "../../assets/images/adaptative/dropboxLogo.svg"
import tresorit from "../../assets/images/adaptative/tresoritLogo.svg"
import pcloud from "../../assets/images/adaptative/pcloudLogo.svg"

export default {
    data: function () {
        return {
            dropbox,
            googleDrive,
            synology,
            tresorit,
            pcloud,
            oneDrive
        }
    },
}
</script>

