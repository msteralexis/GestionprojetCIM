
<script> 

export default {
    methods: {
        suivant(){  

                
            if(this.counter == 3){
                this.text = "<strong>  Rencontrez </strong>  du monde <br>  <strong> et Partagez </strong> "
                this.counter =  this.counter + 1
            }  

             if(this.counter == 2){
                this.text = "Savouez le plat <br> <strong>  Préparez avec le chef </strong>  "
                this.counter =  this.counter + 1
            }  
              
            
           
            if(this.counter == 1){
                this.text = " <strong> Inscrivez-vous </strong> <br> à un atellier cuisine "
                this.counter = this.counter + 1
            }    
            
           
           
        }
    },
	data(){
        return {
           counter: 1,
           text: " Trouver <br> un atelier de cuisine <br><strong>Près de cher vous </strong> " ,
           boutonText : " Prochain Etape ",
            logo: "../assets/MijotoLogo__hat-orange.png"
        }
    }

}





</script>

<template> 
   
   
    <div class="row presentation contenaire" style="text-align:center;">
    
   
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadrePresentation">
        



            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo"  style="padding-top:5vh;" >
                <img  v-if="this.counter==1" class="logo" src="../assets/toque1.png">
                <img  v-if="this.counter==2" class="logo" src="../assets/toque2.png">
                <img  v-if="this.counter==3" class="logo" src="../assets/toque3.png">
                <img  v-if="this.counter==4" class="logo" src="../assets/toque4.png">

            </div>


             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:15vh;">
                <p  v-html="text" ></p> 
            </div>



             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
              
                <button v-if="this.counter<4" class="btn1" v-on:click="suivant()"   v-html="boutonText" > </button> 

                <button v-if="this.counter>=4" class="btn1"> 
                    <router-link  class="lien1" to="/inscriptionConnection"> Commencer </router-link> 
                </button> 
            </div>


            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position:absolute;top:70vh;width:80%; margin-left:20%; background-color:black; list-style-type:none;" >
                <div class="menu" style="left:0%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<2" class="menu" style="left:20%;"> </div>    <div v-if="this.counter>=2" class="menu" style="left:20%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<3"  class="menu" style="left:40%;"> </div>  <div v-if="this.counter>=3" class="menu" style="left:40%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<4"  class="menu" style="left:60%;"> </div>  <div v-if="this.counter>=4" class="menu" style="left:60%;background-color:#F7A600;"> </div>    
            </div>


            
        </div>
    </div>
</template>



<style>

.presentation{
    background-image:url("../assets/jason-briscoe-7MAjXGUmaPw-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}


.cadrePresentation{

    background: #FFF7EA;
    box-shadow: 0px 3.30351px 11.5623px rgba(0, 0, 0, 0.25);
    transform: rotate(0.16deg);

    border-radius: 33.0351px;
    height:80vh; 
    width:60%; 
    margin-left:20%;
}


.menu{
    height:2vh; 
    width:19%; 
    background-color:white;
    position:absolute;      
    border: 2px solid rgba(247, 166, 0, 0.38);
}













</style>


