<template>
    <div class="max-w-max-width-screen mx-auto h-32 flex items-center justify-between px-8 py-6">
        <img src="~/assets/images/logos/logo-zele.png" class="h-full"/>
        <li class="flex items-center">
            <ul class="ml-10"><a class="text-link" href="#">Solutions</a></ul>
            <ul class="ml-10"><a class="text-link" href="#">Fonctionnalités</a></ul>
            <ul class="ml-10"><a class="text-link" href="#">Nos Clients</a></ul>
            <ul class="ml-10"><a class="text-link" href="#">Web App</a></ul>
            <ul class="ml-10"><a class="text-link" href="#"><button class="button-orange">Contact</button></a></ul>
        </li>
        <p>{{ isActive }}</p> 
        <div class="burger">
            <div class="btn_burger btn1" @click="isActive = 'active'">
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
                isActive: 'hello',
            }
        },
    }
</script>

<style scoped>
    .btn_burger{
        width: 60px;
        height: 70px;
        position: relative;
    }
    .lignes{
        background-color: var(--color-dark-blue);
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
</style>