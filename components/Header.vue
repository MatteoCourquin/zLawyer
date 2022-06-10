<template>
    <div class="max-w-max-width-screen mx-auto h-32 flex items-center justify-between px-8 py-6">
        <img src="~/assets/images/logos/logo-zele.png" class="h-full"/>
        <ul class="items-center hidden xl:flex header-nav" :class="{ active: isActive }">
            <li class="ml-10"><a class="text-link" href="#">Solutions</a></li>
            <li class="ml-10"><a class="text-link" href="#">Fonctionnalités</a></li>
            <li class="ml-10"><a class="text-link" href="#">Nos Clients</a></li>
            <li class="ml-10"><a class="text-link" href="#">Web App</a></li>
            <li class="ml-10"><a class="text-link" href="#"><button class="button-orange">Contact</button></a></li>
        </ul>
        <div class="burger block xl:hidden">
            <div class="btn_burger btn1" :class="{ active: isActive }" @click="isActive = !isActive">
                <div class="lignes"></div>
                <div class="lignes"></div>
                <div class="lignes"></div>
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
            }
        },
    }
</script>

<style scoped>
    .btn_burger{
        width: 60px;
        height: 70px;
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
        top: 18px;
    }
    .lignes:nth-child(3){
        top: 36px;
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
        height: 100%;
        background: #0a0a0ab4;
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
            top: -100%;
        }
        to{
            top: 0;
        }
    }
</style>