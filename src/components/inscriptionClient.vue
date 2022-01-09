
<script> 

export default {
    methods: {
        suivant(){  
   
        }
    },
	data(){
        return {
            nom: "Nom",
            prenom: "Prenom",
            email: "E-mail",
            mdp: "Mot de passe" 
        }
    }

}

</script>

<template> 



    <div class="row contenaire connection">
        
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre" > 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <h2> Rejoignez l'aventure <br> Mijoto !</h2>
                <p style="font-size:2.5vh;">  Créer un compte </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <form >
                    <div>
                        <input class="modifInput" type="text" name="nom"  v-model="nom">
                    </div>
                    <div>
                        <input class="modifInput" type="text" name="prenom"  v-model="prenom">
                    </div>
                    
                    <div>
                        <input  class="modifInput" type="email" name="email"  v-model="email">
                    </div>
                    <div>
                        <input class="modifInput" type="text"  name="mdp"  v-model="mdp" >
                    </div>


                    <div >
                        <input id="carreCoche" type="checkbox" name="scales">
                        <label id="carreCoche2" for="scales">Je souhaite recevoir les newletters concernant les évènement Mijoto</label>
                    </div>

                    <div  >
                        <input id="carreCocheBis" type="checkbox" name="scales">
                        <label id="carreCoche2Bis" for="scales">J'accepte les conditions d'utilisation de Mijoto</label>
                    </div>

                    
                </form>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:10vh;">  
                <button class="btn1" style="width:256px;" >   S'inscrire  </button>  
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-top:2vh;">  
                <router-link  to="/inscriptionClientGout" style="color:#006281;font-size:1.5vh;" > Déja inscrit ? Se connecter</router-link> 
            </div>
        </div>
        
    </div>

</template>



<style>

.connection{
    background-image:url("../assets/dane-deaner-TXHml4xX9A0-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}


.cadre{
    margin-top:9.5vh; 
    height:90vh;
}




</style>
