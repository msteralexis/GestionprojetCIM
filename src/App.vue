<script>
import Mainmenu from './components/menu.vue'

import InscriptionVue from './components/inscriptionConnection.vue'

export default {
  components: {
    Mainmenu,
    InscriptionVue
  }
}



</script>


<template>
  <header>
    

    <!--  chargement composant menue 
      <Mainmenu></Mainmenu>
    -->

    
    <!--  chargement par le routeur de la page d'accueil -->
    <router-view/>


<!-- Composant passage de données
    <InscriptionVue toto="toto"></InscriptionVue>
    <InscriptionVue ></InscriptionVue>
-->


  </header>


  
</template>

<style>
@import '@/assets/base.css';
</style>
