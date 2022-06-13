<template>
    <div>
        <Header/>
        <ContactCard/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import ContactCard from '../components/contact/ContactCard.vue';
export default { components: { Header, ContactCard } }
</script>
