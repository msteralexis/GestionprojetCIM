<script>

export default {
    methods: {
        coucou(){
            alert("coucou")
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
      
        <div class="cadre" >
            <h1> Apprenez à cuisiner </h1>
            <router-link class="lien1" to="/presentation"> En 4 Etapes</router-link> <br>
        </div>
        <router-link  class="lien2" to="/inscriptionConnection"> Je passe les Etapes ></router-link>
   
      
  </main>
</template>


<style>
main{ 
   
    display: flex;
    align-items: center;
    text-align:center;
    padding:0;
    margin:0;

    background-image:url("https://media.istockphoto.com/photos/homemade-chocolate-chip-cookie-on-white-overhead-xxxl-picture-id157511634?s=170667a");
    background-repeat:no-repeat;
    background-size: cover;

    height:100vh;
    width:100%;
  
}


.logo{ position: absolute;
    width: 97px;
    height: 95.07px;
    left: 139px;
    top: 81px;
    color: rgb(180, 180, 210);
}

.cadre{
    position: absolute;
    width: 50%;
    height: 50vh;
    left: 25%;
    top: 20vh;

    background: #FFF7EA;
    box-shadow: 0px 3.30351px 11.5623px rgba(0, 0, 0, 0.25);
    border-radius: 33.0351px;
    transform: rotate(0.16deg);
    clip-path: polygon(100% 0, 100% 86%, 100% 89%, 63% 91%, 41% 93%, 21% 95%, 0 100%, 0 0);
}

h1{
    position: absolute;
    left:25%;
    width: 50%;
    height: 20vh;
    margin-top:10%;
    
    padding-top:5vh;

    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 6vh;
    line-height: 99.5%;

    /* or 41px */
    text-align: center;

    color: #016590;

    border: 0.244493px solid #016590;
}

.lien1{
    position: absolute;
    width: auto;
    height: 40vh;
    left: 55%;
    top: 35vh;
    padding-top:5vh;
    font-size: 3vh;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
 

    color: #F7A600;
}


.lien2{
    position: absolute;
    width: auto;
    height: 10%;
    left: 60%;
    top:80vh;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 3vh;
    line-height: 18px;


    text-align: center;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    color: #FFF7EA;
    text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.56), 0px 1px 14px rgba(0, 0, 0, 0.49);
}


</style>
