
<script> 

export default {
    methods: {
        suivant(){  
   
        }
    },
	data(){
        return {
            nom: "nom",
            prenom: "prenom",
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
                <h2> Rejoignez l'aventure Mijoto !</h2>
                <p> créer un compte </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <form >
                    <div>
                        <input type="text" name="nom"  v-model="nom">
                    </div>
                    <div>
                        <input type="text" name="prenom"  v-model="prenom">
                    </div>
                    
                    <div>
                        <input type="email" name="email"  v-model="email">
                    </div>
                    <div>
                        <input type="text"  name="mdp"  v-model="mdp" >
                    </div>
                </form>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">  
                <button class="btn1" >   S'inscrire  </button>  
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-top:2vh;">  
                <router-link  to="/connection" style="color:#006281;font-size:1.5vh;" > Déja inscrit ? Se connecter</router-link> 
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
