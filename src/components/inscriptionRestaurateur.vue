
<script> 

export default {
    methods: {
        ajoustClients( listuser ){  
            listuser.forEach((item, index) => {

                // si l'utilisateur existe deja et est clients
                if(item.mail == this.email && item.numero > 0){
                    alert('mail deja existant')     
                }
            
            })

            // vérification des données saisie
            if( this.nom.length > 3 && this.siret.length > 3 && this.mdp.length > 3  ) {
                
                this.users = { nomRestaurant: this.nom, numero: 10, localisation:'Lyon', mail:this.email,mdp:this.mdp,nom: 'aucun' ,prenom: 'aucun' }
                this.$store.commit('ajoutsUsers', this.users)
                this.$router.push('/connection') 
      
            }else{
                alert("Erreur dans la saisie")
            }


        }
    },
	data(){
        return {
            nom: "Nom du restaurant",
            siret: "N° de Siret",
            localisation: "Localisation",
            email: "E-mail",
            mdp: "Mot de passe" 
        }
    }

}

</script>

<template> 



    <div class="row contenaire connection">
        
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre" style=" margin-top:4.9vh; height:95vh;"> 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <h2 style="font-weight:bold;"> Rejoignez l'aventure <br> Mijoto !</h2>
                <p> Créer un compte </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position:absolute;top:15vh;width:80%;left:10%;" >
                <form >
                    <div>
                        <input placeholder="Nom du restaurant" class="modifInput" type="text" name="nom" @click="nom=''"  v-model="nom">
                    </div>
                    <div>
                        <input placeholder="N° de Siret" class="modifInput" type="text" name="siret" @click="siret=''" v-model="siret">
                    </div>
                       <div>
                        <input placeholder="Localisation" class="modifInput" type="text" name="localisation:" @click="localisation=''" v-model="localisation">
                    </div>
                    <div>
                        <input placeholder="E-mail" class="modifInput" type="email" name="email"  @click="email=''" v-model="email">
                    </div>
                    <div>
                        <input placeholder="Mot de passe" class="modifInput" type="text"  name="mdp" @click="mdp=''"  v-model="mdp">
                    </div>

                    <div style="text-align:left;">
                        <input  type="checkbox" name="scales" style="margin-left:30px;">
                        <label style="margin-left:7px;width:80%;" for="scales">Je souhaite recevoir les newletters concernant les évènement Mijoto</label>
                    </div>

                    <div  style="text-align:left;">
                        <input  type="checkbox" name="scales" style="margin-left:30px;">
                        <label style="margin-left:7px;width:80%;"  for="scales">J'accepte les conditions d'utilisation de Mijoto</label>
                    </div>

                </form>

                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >  
                <button class="btn1" style="width:256px;" @click="ajoustClients($store.state.users)" >   S'inscrire </button>  
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-top:1vh;">  
                <router-link  to="/connection" style="color:#006281;font-size:1.5vh; font-family: Montserrat; font-style: normal; font-weight: normal; font-size: 12px; line-height: 15px; " > 
                Déja inscrit ? <strong> Se connecter </strong></router-link> 
            </div>
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






</style>
