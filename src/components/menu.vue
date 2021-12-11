<script>
export default {
  data() {
    return {
      greeting: 'menu!'
    }
  }
}
</script>

<template>
  <div class="wrapper">
      <h1> Menue </h1>
      <div id="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/inscriptionConnection"> inscription</router-link>
        <router-link to="/presentation"> Presentation </router-link>
      </div>
    </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
