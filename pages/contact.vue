<template>
    <div>
        <Header/>
        <Contact/>
        <Elements/>
    </div>
</template>

<script>
import Header from '../components/index/Header.vue';
import Contact from '../components/contact/Contact.vue';
import Elements from '../components/index/Elements.vue';
export default { components: { Header, Contact, Elements } }
</script>
