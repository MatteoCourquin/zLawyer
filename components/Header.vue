<template>
    <div class="header-container">
        <div class="header mx-auto h-24 flex items-center justify-between px-8 py-6 w-full">
            
            <NuxtLink to="/"><img :src="zeleLogo" class="h-12 sm:h-16 cursor-pointer"/></NuxtLink>

            <ul class="items-center hidden xl:flex header-nav">
                <li class="ml-10"><a class="text-link" href="/#solutions">Solutions</a></li>
                <li class="ml-10"><a class="text-link" href="/#fonctionnalites">Fonctionnalités</a></li>
                <li class="ml-10"><a class="text-link" href="/#clients">Nos Clients</a></li>
                <li class="ml-10"><a class="text-link" href="https://client.zlawyer.fr/sign-in" target="_blank">Accès Client</a></li>
                <li class="ml-10"><a href="tel:330184257027" class="button-orange text-link">01 84 25 70 27</a></li>
            </ul>

            <ul class="items-center hidden header-nav" :class="{ active : isActive }">
                <li class="ml-10"><a @click="isActive = !isActive" class="text-link" href="/#solutions">Solutions</a></li>
                <li class="ml-10"><a @click="isActive = !isActive" class="text-link" href="/#fonctionnalites">Fonctionnalités</a></li>
                <li class="ml-10"><a @click="isActive = !isActive" class="text-link" href="/#clients">Nos Clients</a></li>
                <li class="ml-10"><a @click="isActive = !isActive" class="text-link" href="https://client.zlawyer.fr/sign-in" target="_blank">Accès Client</a></li>
                <li class="ml-10"><a @click="isActive = !isActive" href="tel:330184257027" class="button-orange text-link">01 84 25 70 27</a></li>
            </ul>

            <div class="burger block xl:hidden">
                <div class="btn_burger btn1" :class="{ active: isActive }" @click="isActive = !isActive">
                    <div class="lignes"></div>
                    <div class="lignes"></div>
                    <div class="lignes"></div>
                </div>    
            </div>

        </div>
    </div>
</template>

<script>

    import zeleLogo from "../assets/images/logos/zeleLogo.svg";
    import zeleLogo1 from "../assets/images/logos/zeleLogo1.svg";
    import zeleLogo2 from "../assets/images/logos/zeleLogo2.svg";

    export default {
        data() {
            return {
                isActive: false,
                zeleLogo,
                zeleLogo1,
                zeleLogo2,
            }
        },
    }

</script>

<style scoped>

    .header-container{
        width: 100vw;
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
        z-index: 99999999;
    }
    .header {
        max-width: 1920px;
    }
    .btn_burger{
        width: 40px;
        height: 40px;
        position: relative;
        cursor: pointer;
    }
    .lignes{
        background-color: var(--color-orange);
        width: 100%;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        transition: 0.5s ease-in-out 0s;
    }
    .lignes:nth-child(1){
        top: 0px;
    }
    .lignes:nth-child(2){
        top: 16px;
    }
    .lignes:nth-child(3){
        top: 32px;
    }
    .active.btn1 .lignes{
        background-color: var(--color-white);
    }
    .active.btn1 .lignes:nth-child(1){
        top: 18px;
        transform: rotate(135deg);
    }
    .active.btn1 .lignes:nth-child(2){
        opacity: 0;
        transform: translateX(-20px);
    }
    .active.btn1 .lignes:nth-child(3){
        top: 18px;
        transform: rotate(-135deg);
    }
    .active.header-nav{
        position: absolute;
        right: 0;
        width: 50%;
        height: 100vh;
        background: #0a0a0ae2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: toTopBurger .5s ease-in-out forwards;
    }
    @media screen and (max-width : 700px){
        .active.header-nav{
            width: 100%;
        }
    }
    .active.header-nav li{
        margin-top: 50px;
        margin-left: 0;
        transform: translateY(-80px);
    }
    .active.header-nav li a{
        color: var(--color-white);
    }
    .active.header-nav li a:hover{
        color: var(--color-orange);
    }

    @keyframes toTopBurger {
        from{
            top: -100vh;
        }
        to{
            top: 0;
        }
    }
</style>