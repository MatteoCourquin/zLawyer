<template>
    <div class="max-width-blue-section" id="fonctionnalites">
        <h2>Fonctionnalités</h2>
        <p class="subtitle md:w-2/3 xl:w-1/2">Lorem ipsum dolor sit amet <span class="text-bolder">consectetur adipisicing</span> elit. Eligendi cum culpa distinctio sunt <span class="text-bolder">numquam nemo</span> veritatis obcaecati, fuga rem placeat!</p>

        <!-- Card Features Facturation -->
        <div class="md:px-8">
            <div class="card-features">
                <img :src="features1" alt="fonctionnalité facturation">
                <div class="card-features-description">
                    <h3><span class="text-underline">Facturation</span> <br> Arbitrer & gérer la rentabilité</h3>
                    <p>Que vous souhaitiez mesurer les temps réels passés, valoriser le coût global réel du dossier, faire vos arbitrages de facturation sans effacer les durées réelles et donc vos coûts réels, notre logiciel de facturation pour avocat vous offre la possibilité de mesurer efficacement la rentabilité de vos dossiers ou de vos forfaits …
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
            </div>
        </div>

        <!-- Card Features Phone -->
        <div class="md:px-8">
            <div class="card-features card-features-invert">
                <div class="card-features-description">
                    <h3><span class="text-underline">L’application</span> zLawyer Iphone et Android</h3>
                    <p>Visualisez et saisissez vos temps où que vous soyez depuis votre mobile. L’application gère automatiquement les modes en-ligne et hors-ligne. Si vous êtes un associé, vous aurez aussi accès aux principaux indicateurs financiers de votre cabinet.
                    </p>
                    <NuxtLink to="/contact"><!-- <button class="button-transparent">Je souhaite une démonstration</button> --></NuxtLink>
                </div>
                <img :src="features1" alt="fonctionnalité facturation">
            </div>
        </div>

        <!-- Card Features Agenda -->
        <div class="md:px-8">
            <div class="card-features">
                <img :src="features1" alt="fonctionnalité facturation">
                <div class="card-features-description">
                    <h3><span class="text-underline">Un agenda</span> partagé au cabinet</h3>
                    <p>Synchronisés avec Microsoft Outlook , vos rendez-vous – filtrables par dossier – se présentent sous forme d’ agenda ou d’échéancier à 7 jours. En 1 clic, vérifiez la disponibilité d’un autre utilisateur et conviez-le à des RDV. Avec la solution informatique zLawyer: chaque RDV peut faire l’objet d’une facturation.
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
            </div>
        </div>

        <!-- Card Features Gestion -->
        <div class="md:px-8">
            <div class="card-features card-features-invert">
                <div class="card-features-description">
                    <h3><span class="text-underline">Une gestion</span> documentaire sans contrainte</h3>
                    <p>Notre logiciel de gestion de cabinet d’avocat vous aide dans la gestion des documents de chaque dossier : modèles, organisation, classement, et ce, sans privatisation puisque les documents restent évidemment sur votre serveur / disque actuel. En effet, zLawyer sait se greffer à votre organisation actuelle sans aucun changement.
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
                <img :src="features1" alt="fonctionnalité facturation">
            </div>
        </div>

        <!-- Card Features Dossiers -->
        <div class="md:px-8">
            <div class="card-features">
                <img :src="features1" alt="fonctionnalité facturation">
                <div class="card-features-description">
                    <h3><span class="text-underline">Dossiers</span> : l’information à portée de main</h3>
                    <p>Avec notre logiciel de gestion de dossiers d’avocat, pas besoin de menus complexes ou de longues manipulations pour tout retrouver. Chaque fenêtre de dossiers vous présente les informations essentielles le concernant :
                    intervenants (clients, confrères, etc…), les coordonnées complètes, l’état financier du dossier, les factures à relancer.
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
            </div>
        </div>

        <!-- Card Features Essentiel -->
        <div class="md:px-8">
            <div class="card-features card-features-invert">
                <div class="card-features-description">
                    <h3><span class="text-underline">L’essentiel</span> en un coup d’oeil</h3>
                    <p>La fenêtre principale du logiciel de cabinet d’avocat zLawyer affiche votre tableau de bord personnel. Cette fenêtre vous permet d’accéder à l’ensemble des informations prioritaires de votre activité en un seul coup d’œil : vos échéances, vos dossiers à facturer, vos factures à relancer, et la synthèse de vos saisies des temps .
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
                <img :src="features1" alt="fonctionnalité facturation">
            </div>
        </div>

        <!-- Card Features Capture -->
        <div class="md:px-8">
            <div class="card-features">
                <img :src="features1" alt="fonctionnalité facturation">
                <div class="card-features-description">
                    <h3><span class="text-underline">La capture</span> du temps qui passe</h3>
                    <p>Appels téléphoniques, rédaction d’actes, rendez-vous, audiences, réunions internes… Que vous facturiez aux temps ou au forfait, avec le logiciel de gestion de temps zLawyer : consignez bien, facturer mieux et gérer votre budget en un seul clic.
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
            </div>
        </div>

        <!-- Card Features Clients -->
        <div class="md:px-8">
            <div class="card-features card-features-invert">
                <div class="card-features-description">
                    <h3>Donnez à vos clients <span class="text-underline">un accès à leur dossier</span> sur le web.</h3>
                    <p>La fenêtre principale du logiciel de cabinet d’avocat zLawyer affiche votre tableau de bord personnel. Cette fenêtre vous permet d’accéder à l’ensemble des informations prioritaires de votre activité en un seul coup d’œil : vos échéances, vos dossiers à facturer, vos factures à relancer, et la synthèse de vos saisies des temps .
                    </p>
                    <NuxtLink to="/contact"><button class="button-transparent">Je souhaite une démonstration</button></NuxtLink>
                </div>
                <img :src="features1" alt="fonctionnalité facturation">
            </div>
        </div>

    </div>
</template>

<script>

import features1 from "../assets/images/features/features1.png";

export default {
    data: function () {
        return {
            features1: features1
        }
    },
}

</script>

<style scoped>
    .card-features{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        align-items: center;
        margin-bottom: 50px;
    }
    @media screen and (max-width : 1200px) {
        .card-features{
            grid-template-columns: 1fr;
        }
        .card-features.card-features-invert img{
            grid-row-start: 1;
        }
    }
    .card-features img{
        border-radius: var(--radius-current);
        box-shadow: var(--shadow-current);
    }
    .card-features .card-features-description{
        padding: 24px;
    }
    .card-features .card-features-description p{
        margin: 40px 0;
    }
</style>