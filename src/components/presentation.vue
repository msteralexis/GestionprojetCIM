
<script> 

export default {
    methods: {
        suivant(){  

                
            if(this.counter == 3){
                this.text = "<strong>  Rencontrez </strong>  du monde <br>   et <strong> Partagez </strong> "
                this.counter =  this.counter + 1
            }  

             if(this.counter == 2){
                this.text = "Savourez le plat <br> <strong>  préparé avec le chef </strong>  "
                this.counter =  this.counter + 1
            }  
              
            
           
            if(this.counter == 1){
                this.text = " <strong> Inscrivez-vous </strong> <br> à un atelier cuisine "
                this.counter = this.counter + 1
            }    
            
           
           
        }
    },
	data(){
        return {
           counter: 1,
           text: " Trouver <br> un atelier de cuisine <br><strong>Près de chez vous </strong> " ,
           boutonText : " Prochaine étape",
            logo: "../assets/MijotoLogo__hat-orange.png"
        }
    }

}





</script>

<template> 
   
   
    <div class="row contenaire" style="text-align:center;">
        <img  id="presentationFond" v-if="this.counter==1" class="logo" src="../assets/presentation/presentationBackground1.jpg">
        <img id="presentationFond" v-if="this.counter==2" class="logo" src="../assets/presentation/presentationBackground2.jpg">
        <img  id="presentationFond" v-if="this.counter==3" class="logo" src="../assets/presentation/presentationBackground3.jpg">
        <img id="presentationFond" v-if="this.counter==4" class="logo" src="../assets/presentation/presentationBackground4.jpg">

        
   
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadrePresentation">
        

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo" >
                <img  v-if="this.counter==1" class="logo" src="../assets/presentation/toque1.png">
                <img  v-if="this.counter==2" class="logo" src="../assets/presentation/toque2.png">
                <img  v-if="this.counter==3" class="logo" src="../assets/presentation/toque3.png">
                <img  v-if="this.counter==4" class="logo" src="../assets/presentation/toque4.png">

            </div>


             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:15vh;">
                <p  v-html="text" ></p> 
            </div>



            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 presentationBouton" > 
                <button v-if="this.counter<4" class="btn1" v-on:click="suivant()"   v-html="boutonText" > </button> 
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink presentationBouton" > 
                <router-link  v-if="this.counter>=4" class="btn1" to="/inscriptionConnection"> Commencer </router-link>     
            </div>



            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position:absolute;top:70vh;width:80%; margin-left:15%; background-color:black; list-style-type:none;" >
                <div class="menu" style="left:0%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<2" class="menu" style="left:20%;"> </div>    <div v-if="this.counter>=2" class="menu" style="left:20%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<3"  class="menu" style="left:40%;"> </div>  <div v-if="this.counter>=3" class="menu" style="left:40%;background-color:#F7A600;"> </div>
                <div v-if="this.counter<4"  class="menu" style="left:60%;"> </div>  <div v-if="this.counter>=4" class="menu" style="left:60%;background-color:#F7A600;"> </div>    
            </div>


            
        </div>
    </div>
</template>



<style>

#presentationFond{
      padding:0;
  margin:0;
  height:100vh;
  width:100%;
 
  position:absolute;
  left:0;
  top:0;

}
.presentation{
    background-image:url("../assets/jason-briscoe-7MAjXGUmaPw-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}


.cadrePresentation{
  align-items: center;
  text-align:center;
    background: #FFF7EA;
    box-shadow: 0px 3.30351px 11.5623px rgba(0, 0, 0, 0.25);
    transform: rotate(0.16deg);

    border-radius: 33.0351px;
    height:80vh; 
    width:80%; 
    margin-left:15%;
 
}


.menu{
    height:1vh; 
    width:19%; 
    background-color:white;
    position:absolute;      
    border: 2px solid rgba(247, 166, 0, 0.38);
}




.presentationBouton{
    position:absolute;
    top:50vh;
    left:25%;
    width:50%;
}








</style>


