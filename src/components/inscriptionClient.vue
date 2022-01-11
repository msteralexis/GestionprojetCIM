
<script> 

export default {
    methods: {
        ajoustClients( listuser ){  
            listuser.forEach((item, index) => {

                // si l'utilisateur existe deja et est clients
                if(item.mail == this.email && item.numero == 0){
                    alert('mail deja existant')     
                }
            
            })

            // vérification des données saisie
            if( this.nom.length > 3 && this.prenom.length > 3 && this.mdp.length > 3  ) {
                
                this.users = { nomRestaurant: 'aucun', numero: 0, localisation:'Lyon', mail:this.email,mdp:this.mdp,nom: this.nom ,prenom: this.prenom }
                this.$store.commit('ajoutsUsers', this.users)
                this.$router.push('/connection') 
      
            }else{
                alert("erreur dans la saisie")
            }


        }
    },
	data(){
        return {
            nom: "Nom",
            prenom: "Prenom",
            email: "E-mail",
            mdp: "Mot de passe" ,
            users:   { nomRestaurant: 'Berk', numero: 8, localisation:'Lyon', mail:'test3@gmail.com',mdp:'test3',nom:'jojo3',prenom:'toto3' }
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
                        <input class="modifInput" type="text" name="nom"  @click="nom=' '" v-model="nom">
                    </div>
                    <div>
                        <input class="modifInput" type="text" name="prenom"  @click="prenom=' '" v-model="prenom">
                    </div>
                    
                    <div>
                        <input  class="modifInput" type="email" name="email" @click="email=' '"  v-model="email">
                    </div>
                    <div>
                        <input class="modifInput" type="text"  name="mdp"  @click="mdp=' '" v-model="mdp" >
                    </div>


                    <div style="text-align:left;">
                        <input   style="margin-left:64px;"  type="checkbox" name="scales">
                        <label style="margin-left:10px;width:70%;" for="scales">Je souhaite recevoir les newletters concernant les évènement Mijoto</label>
                    </div>

                    <div  style="text-align:left;">
                        <input   style="margin-left:64px;"  type="checkbox" name="scales">
                        <label  style="margin-left:10px;width:70%;" for="scales">J'accepte les conditions d'utilisation de Mijoto</label>
                    </div>

                    
                </form>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-top:2vh;">  
                <button class="btn1" style="width:256px;" @click="ajoustClients($store.state.users)">   S'inscrire  </button>  
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
