<template>
    <div>
        <Header class="fixed"/>
        <ContentCgu/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/index/Header.vue';
    import ContentCgu from '../components/cgu/ContentCgu.vue';
    import Footer from '../components/index/Footer.vue';

    export default { components: { Header, ContentCgu, Footer } }
</script>
