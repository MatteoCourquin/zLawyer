<template>
    <div>
        <Header class="fixed"/>
        <ContentPdc/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/index/Header.vue';
    import ContentPdc from '../components/pdc/ContentPdc.vue';
    import Footer from '../components/index/Footer.vue';

    export default { components: { Header, ContentPdc, Footer } }
</script>
