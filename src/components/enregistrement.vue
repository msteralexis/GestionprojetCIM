
<script> 


export default { 
      methods: {

        retour( numeroatelier, numeroUsers ){
            
            this.$router.push('/atelier/'+numeroatelier+'/'+numeroUsers) 
            
            
        },

        enregistrement( numeroatelier, numeroUsers ){
            if( this.nom.length < 3 || this.numero.length <= 10 || this.date.length < 3 ) { 
                alert("Saisi incorrecte")
            }else{
                this.$router.push('/atelier/'+numeroatelier+'/'+numeroUsers) 
            }
       
            
            
            
        }

       
    },
	data(){
        return {
            nom: "",
            numero: "",
            date: "",
            cryptogramme: ""
        }
    }
    
} 
</script>

<template> 
    

     

    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 " id="cadreEnregistrement"> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="height:10vh;width:100%;position:absolute;top:0;left:0;text-align:center;justify-content:center; background-color:white;filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));">
            <a style="position: absolute; top:4vh; left:5%; z-index:25;color: #016590; font-size:2vh;background-color: white; "  v-on:click.once="retour($route.params.numeroatelier, $route.params.numeroatelier)">  Retour </a> 
            <p style="font-weight: bold;  line-height: 16px; text-align: center; color: #016590; padding-top:4vh;margin-left:15%; "> Finaliser l'inscription   </p>
        </div> 



       
       <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <form >
                
                <div>
                    <label for="scales"> Nom sur la carte * </label>
                </div>
                  <div>
                    <input  type="text" name="nomcarte" @click="nom=''"  v-model="nom">
                </div>


                <div>
                    <label for="scales"> Numéro de carte * </label>
                </div>
                <div>
                    <input  type="text" name="numerocarte"  @click="numero=''"  v-model="numero">
                </div>
                   


                <div>
                    <label for="scales"> Date de validité * </label>
                </div>
                <div>
                    <input  type="text" name="datecarte" @click="date=''"  v-model="date">
                </div>
                   


                <div>
                    <label for="scales"> Cryptogramme visuel * </label>
                </div>
                <div>
                    <input  type="text" name="cryptogrammecarte" @click="cryptogramme=''"  v-model="cryptogramme">
                </div>
                   
                   
                    
            </form>
        </div>

      
        <button class="btn1" style="width:126px;position:absolute;top:70vh;left:10%;" v-on:click="enregistrement($route.params.numeroatelier, $route.params.numeroatelier)" >   Payer  </button>  


        <button class="btn1" style="width:126px;position:absolute;top:70vh;right:10%;" v-on:click="enregistrement($route.params.numeroatelier, $route.params.numeroatelier)" >   Paypal </button>  




        <div id="menuEnregistrement">

            <ul>     
                <li>
                    <img  style="width:85%;" src='../assets/icons/home2.png'> <br> 
                    <a > Accueil</a>
                </li>

                   
                <li>
                    <img   src='../assets/icons/1.png'> <br> 
                    <a > Recherche </a>
                </li>

                   
                <li>
                    <img  src='../assets/icons/2.png'> <br> 
                    <a > Evenement </a>
                </li>

                   
                <li>
                    <img src='../assets/icons/zz.png'> <br> 
                    <a > Mon compte </a>
                </li>
            </ul>

        </div>


    </div>

  

    


</template>



<style>

#menuEnregistrement img{
    margin-top:1vh;margin-left:10%;height:4vh;width:60%;
}
#menuEnregistrement{
    position:fixed;bottom:0;left:0;width:100%;height:8vh;background-color:white;
      list-style-type:none;  text-align:center;
}


#menuEnregistrement ul {
    padding:0;
    margin:0;
    list-style-type:none;      
}

#menuEnregistrement li {
    margin-left:10%;;
    float:left; 
}


#menuEnregistrement li a{
    color: #016590;font-size:1.4vh;
}


#cadreEnregistrement{
    padding-top:10vh;
    text-align:left;
    padding-left:10%;
    
    height:100vh; background: #FFF7EA; width:100%;
    overflow: scroll;   overflow-x: hidden; scrollbar-width: none;      
}

#cadreEnregistrement label{
    font-size:18px;
}

#cadreEnregistrement input{
    background: #FFF7EA;
border: 1px solid #016590;
box-sizing: border-box;
border-radius: 5px;
height:44px;

}




</style>
