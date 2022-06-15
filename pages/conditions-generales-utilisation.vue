<template>
    <div>
        <Header class="fixed"/>
        <Content/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Content from '../components/usagePolicy/Content.vue';
    import Footer from '../components/Footer.vue';

    export default { components: { Header, Content, Footer } }
</script>
