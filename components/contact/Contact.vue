<template>
  <div class="max-width-blue-section container-contact">
    <p
      class="text-response"
      :class="[isSuccess ? 'text-green-600' : 'text-red-600']"
    >
      {{ response }}
    </p>

    <div
      class="card-contact grid xl:grid-cols-2 grid-cols-1 overflow-hidden bg-transparent sm:bg-white mx-auto"
    >
      <div
        class="xl:flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 hidden"
      >
        <div
          class="relative hidden md:flex flex-auto items-center justify-center w-1/2 h-full p-16 2xl:p-20 overflow-hidden bg-gray-800 dark:border-l"
        >
          <!-- Rings -->
          <svg
            class="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              class="text-gray-700 opacity-25"
              fill="none"
              stroke="currentColor"
              stroke-width="100"
            >
              <circle r="234" cx="196" cy="23"></circle>
              <circle r="234" cx="790" cy="491"></circle>
            </g>
          </svg>
          <!-- Dots -->
          <svg
            class="absolute -top-16 -right-16 text-gray-700"
            viewBox="0 0 220 192"
            width="220"
            height="192"
            fill="none"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="220"
              height="192"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            ></rect>
          </svg>

          <!-- Content -->
          <div class="z-10 relative w-full max-w-2xl">
            <img class="h-16" :src="zeleLogo" alt="logo zele solutions" />
            <h2 class="mt-6 text-4xl text-white">
              Un Renseignement ? <br />
              Une Démo ? <br />
              Contactez-nous !
            </h2>
            <p class="mt-6 text-blue text-bolder text-lg">
              zLawyer, la solution de gestion de cabinets d’avocats simple,
              ergonomique, sans engagement !
            </p>
            <div class="mt-14 flex items-center">
              <img :src="phoneLogo" alt="logo de telephone" />
              <p class="ml-4 flex-shrink-0">
                <a class="text-blue" href="tel:330184257027">01 84 25 70 27</a>
              </p>
            </div>
            <div class="mt-14 flex items-center">
              <img class="ml-2" :src="locaLogo" alt="logo de localisation" />
              <p class="ml-6 text-blue flex-shrink-0">
                Zele Solutions <br />
                9, rue Angélique Verien, <br />
                92200, Neuilly-sur-Seine
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-10">
        <h2 class="p-2">Contact</h2>

        <form
          v-on:submit.prevent="onSubmit()"
          method="POST"
          class="contact-card-form"
        >
          <div class="flex flex-col p-2">
            <label for="cabinetName"
              >Cabinet <span class="text-red-600">*</span></label
            >
            <input
              type="text"
              id="cabinetName"
              name="cabinetName"
              v-model="cabinet"
            />
          </div>

          <div class="flex flex-col p-2">
            <label for="country">Pays</label>
            <select name="pays" id="pays">
              <option v-for="pays in allPays" :value="pays">
                {{ pays }}
              </option>
            </select>
            <!-- <input type="text" id="country" name="country" v-model="pays" /> -->
          </div>

          <div class="grid grid-cols-2">
            <div class="flex flex-col p-2">
              <label for="name">Nom <span class="text-red-600">*</span></label>
              <input type="text" id="name" name="name" v-model="nom" />
            </div>

            <div class="flex flex-col p-2">
              <label for="firstName"
                >Prénom <span class="text-red-600">*</span></label
              >
              <input
                type="text"
                id="firstName"
                name="firstName"
                v-model="prenom"
              />
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div class="flex flex-col p-2">
              <label for="mail">Mail <span class="text-red-600">*</span></label>
              <input type="email" id="mail" name="mail" v-model="email" />
            </div>

            <div class="flex flex-col p-2">
              <label for="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" v-model="telephone" />
            </div>
          </div>

          <div class="flex flex-col p-2">
            <label for="message">Message</label>
            <textarea
              class="h-28"
              id="message"
              name="message"
              v-model="message"
            />
          </div>

          <button type="submit" class="button-orange mx-2 my-10 w-max">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import zeleLogo from "../../assets/images/logos/zeleLogo.svg";
import phoneLogo from "../../assets/images/logos/phoneLogo.svg";
import locaLogo from "../../assets/images/logos/locaLogo.svg";
import json from "../../assets/data/pays.json";

export default {
  data() {
    return {
      zeleLogo,
      phoneLogo,
      locaLogo,

      allPays: [
        // "France",
        // "Allemagne",
        // "Chine",
      ],

      cabinet: "",
      pays: "",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      message: "",

      isSuccess: false,
      response: "",
    };
  },
  mounted() {
    this.allPays = json;
  },
  methods: {
    onSubmit() {
      let data = {
        cabinet: this.cabinet,
        pays: this.pays,
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        telephone: this.telephone,
        message: this.message,
      };
      console.log(data);

      axios
        .post("https://zlawyercontact.azurewebsites.net/api/contact", data, {
          headers: {
            Accept: "application/json",
          },
        })
        .then(
          (response) => {
            console.log("SUCCESS");
            this.isSuccess = response.status === 200 ? true : false;
            this.response = response.data;
            this.$router.push("/contact-success");
          },
          (response) => {
            console.log("ERROR");
            this.response = response.response.data;
          }
        );
    },
  },
};
</script>

<style scoped>

.container-contact{
  min-height: 950px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-contact {
  width: 80%;
  border-radius: var(--radius-current);
  box-shadow: var(--shadow-current);
}
@media screen and (max-width: 640px) {
  .card-contact {
    width: 100%;
    box-shadow: none;
  }
}
.card-contact input,
.card-contact select,
.card-contact textarea {
  font-family: "Roboto-Regular", sans-serif;
  border: 1px solid var(--color-blue);
  border-radius: 5px;
  padding: 5px 10px;
  resize: none;
  outline: none;
}
.card-contact input:hover,
.card-contact select:hover,
.card-contact textarea:hover {
  border: 1px solid var(--color-orange);
}
.card-contact label {
  font-family: "Roboto-Medium", sans-serif;
  color: var(--color-dark-blue);
}
.card-contact input,
.card-contact select,
.card-contact textarea {
  font-family: "Roboto-medium", sans-serif;
  color: #394454b5;
}


.contact-card-form {
  display: flex;
  flex-direction: column;
}

.text-response {
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%, -50%);
}
</style>
