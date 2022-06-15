<template>
    <div>
        <Header class="fixed"/>
        <ContentPdc/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import ContentPdc from '../components/pdc/ContentPdc.vue';
    import Footer from '../components/Footer.vue';

    export default { components: { Header, ContentPdc, Footer } }
</script>
