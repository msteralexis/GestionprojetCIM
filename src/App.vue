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



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    

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
</style>
