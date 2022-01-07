
<script> 

export default {
    methods: {
        suivant(){  
   
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
        
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre"> 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <h2 style="font-weight:bold;"> Rejoignez l'aventure <br> Mijoto !</h2>
                <p> Créer un compte </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position:absolute;top:15vh;width:80%;left:10%;" >
                <form >
                    <div>
                        <input class="modifInput" type="text" name="nom"  v-model="nom">
                    </div>
                    <div>
                        <input class="modifInput" type="text" name="siret"  v-model="siret">
                    </div>
                       <div>
                        <input class="modifInput" type="text" name="localisation:"  v-model="localisation">
                    </div>
                    <div>
                        <input class="modifInput" type="email" name="email"  v-model="email">
                    </div>
                    <div>
                        <input class="modifInput" type="text"  name="mdp"  v-model="mdp">
                    </div>

                    <div >
                        <input  type="checkbox" name="scales">
                        <label style="margin-left:10px;width:80%;" for="scales">Je souhaite recevoir les newletters concernant les évènement Mijoto</label>
                    </div>

                    <div  >
                        <input  type="checkbox" name="scales">
                        <label style="margin-left:10px;" for="scales">J'accepte les conditions d'utilisation de Mijoto</label>
                    </div>

                    
                </form>

                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >  
                <button class="btn1" style="width:256px;" >   S'inscrire </button>  
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

.cadre{
    margin-top:4.9vh; 
    height:95vh;
}















#carreCoche{

position: absolute;
width: 10px;
height: 10px;
left: 59px;
top: 60vh;


border: 1px solid #016590;
box-sizing: border-box;
border-radius: 1px;


}


#carreCoche2{



position: absolute;
width: 281px;
height: 24px;
left: 75px;
top: 60vh;


font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;


color: #016590;



}




#carreCocheBis{

position: absolute;
width: 10px;
height: 10px;
left: 59px;
top: 65vh;


border: 1px solid #016590;
box-sizing: border-box;
border-radius: 1px;


}


#carreCoche2Bis{



position: absolute;
width: 281px;
height: 24px;
left: 75px;
top: 65vh;


font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;


color: #016590;



}
</style>
