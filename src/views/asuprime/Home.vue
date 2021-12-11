<script>

// source = https://github.com/axios/axios
function validateForm() {
    let x = document.forms["inscription"]["nom"].value;
    if (x == "") {
      alert("Veuillez remplir le nom");
      return false;
    }
  }

import axios from "axios";

export default {
    methods: {
        async pressed(){
            // /gestionprojetApi/index.php
            axios.post('http://0.0.0.0:8000/index.php', {
                    insertionsuser: "insertionsuser",
                    nom: this.nom,
                    prenom: this.prenom,
                    datenaissance: this.datenaissance,
                    telephone: this.telephone,
                    mail:this.mail,
                    mdp: this.mdp
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); 




        }
    },
	data(){
        return {
            nom: "votre nom",
            prenom: "votre prénom",
            datenaissance: "votre date de naisance",
            telephone: "06 00 00 00 00",
            mail:"votre email",
            mdp: "votre mot de passe"
        }
    }
}


</script>

<template> 
  <main>
    <form name="inscription"  method="POST" @submit.prevent="pressed">
      <h1>Inscription</h1>
   
      <label for="nom"> Nom </label>
      <input type="text" name="nom" v-model="nom" >    
      <label for="prenom" >prenom</label>
      <input type="text" name="prenom" v-model="prenom" >   
      <label for="naissance">Date de naissance</label>
      <input type="date" name="naissance" v-model="datenaissance" >
      <label for="mail">Adresse mail</label>
      <input type="email" name="mail" v-model="mail" >
      <label for="tel">Téléphone</label>
      <input type="tel" name="tel" v-model="telephone">
      <label for="mdp">Mot de passe</label>
      <input type="password" name="mdp" v-model="mdp" >
      <label for="verifmdp">Vérification du mot de passe</label>
      <input type="password" name="verifmdp" id="verifmdp">
      <button type="submit" value="Subscribe!"  >   Envoyer </button>
    </form>
  </main>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


html {
    font-family: Arial, Helvetica, sans-serif;
}

h1{
    text-align: center;
}

form, h1 {
    width: 20rem;
    margin: 0 auto;
}

form {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

form > div {
    display: flex;
    flex-direction: row;
}

label, input {
    display: block;
}

label {
    text-transform: lowercase;
    font-variant: small-caps;
    color: rgba(0, 0, 0, 0.5);
    margin-top: .5rem;
}

input {
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: .5rem;
    border-bottom: 2px solid rgb(180, 180, 210);
}

input[type="submit"]{
    font-size: 1rem;
    margin-top: 1rem;
    background-color: rgb(180, 180, 210);
}
</style>
