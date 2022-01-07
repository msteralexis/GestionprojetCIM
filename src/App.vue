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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"> 

  </header>
  
    <main> 
   
      <router-view/>

    </main>

</template>

<style>

   @import '@/assets/base.css';
   @import '@/assets/boostrap.css'; 

</style>
