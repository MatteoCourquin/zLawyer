<template>
    <div>
        <Header/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Contact from '../components/contact/Contact.vue';
import Footer from '../components/Footer.vue';
export default { components: { Header, Contact, Footer } }
</script>
