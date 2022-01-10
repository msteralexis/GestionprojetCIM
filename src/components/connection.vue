
<script> 

export default {
    methods: {
        connectionUsers( listuser ){
            
            listuser.forEach((item, index) => {
                if(item.mail == this.email &&  item.mdp == this.mdp){
                    // si numero a 0 alors utilisateur
                    if(item.numero==0) {
                     
                        this.$router.push('/acceuilClients/'+index) 
                    }else{ // sinon restaurateur
                        this.$router.push('/acceuilRestaurateurs') 
                    }
                    
                }
            
            })
 
        }
    },
	data(){
        return {
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
                <h2 style="font-weight:bold"> Heureux de vous revoir !</h2>
                <p style="font-size:2.5vh;"> Se connecter à mon compte </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <form >
                    <div>
                        <input class="modifInput"  type="email" name="email" @click="email=''" v-model="email">
                    </div>
                    <div>
                        <input class="modifInput"  type="text"  name="mdp"  @click="mdp=''" v-model="mdp" >
                    </div>
                    <div style="text-align:left;"> 
                        <input  style="margin-left:64px;" type="checkbox" name="scales">
                        <label style="margin-left:10px;" for="scales">Se souvenir de moi</label>
                    </div>
                         
                </form>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >  
                <button class="btn1" style="width:256px;" @click="connectionUsers($store.state.users)" >   Se connecter </button>  
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-top:2vh;">  
                <router-link  to="/inscription" style="color:#006281;font-size:1.5vh;" > Pas encore de compte ? <strong >  S'inscrire  </strong></router-link> 
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
   margin-top:19.5vh; height:80vh;
}




</style>
