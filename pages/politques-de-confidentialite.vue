<template>
    <div>
        <Header class="fixed"/>
        <PDC/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/index/Header.vue';
    import PDC from '../components/pdc/PDC.vue';
    import Footer from '../components/index/Footer.vue';

    export default { components: { Header, PDC, Footer } }
</script>
