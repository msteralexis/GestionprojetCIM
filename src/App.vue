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

    <!-- Composant passage de données
    <InscriptionVue toto="toto"></InscriptionVue>
    <InscriptionVue ></InscriptionVue>
-->

  




  </header>
  
    <main> 
   
      <router-view/>
 

    </main>





  
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/boostrap.css';
</style>
