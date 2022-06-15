<template>
    <div>
        <Header class="fixed"/>
        <CGU/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/index/Header.vue';
    import CGU from '../components/cgu/CGU.vue';
    import Footer from '../components/index/Footer.vue';

    export default { components: { Header, CGU, Footer } }
</script>
