<script>

import toto from '/src/views/toto.vue'

export default {
	name: 'App',
	components: {
		toto
	}
}

</script>


<template>
  <div class="about">
    <h1> page test </h1>
    			<p>Bienvenue sur notre page d'<toto /></p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
