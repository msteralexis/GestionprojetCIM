
<script> 

export default {
    methods: {
        suivant(){  

                
            if(this.counter == 3){
                this.text = "Rencontrez du monde <br> Partagez"
                this.counter =  this.counter + 1
            }  

             if(this.counter == 2){
                this.text = "Savouez le plat <br> Préparez avec le chef"
                this.counter =  this.counter + 1
            }  
              
            
           
            if(this.counter == 1){
                this.text = "Inscrivez-vous <br> à un ateleir cuisine"
                this.counter = this.counter + 1
            }    
            
           
           
        }
    },
	data(){
        return {
           counter: 1,
           text: " Trouver <br> un atelier de cuisine <br>  <strong> Près de cher vous </strong> " ,
           boutonText : " Prochain Etape "
        }
    }

}





</script>

<template> 
   
   
    <div class="row presentation contenaire" style="text-align:center;">
    
   
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadrePresentation" style="width:60%; margin-left:20%;">
        



            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo"  style="padding-top:5vh;" >
                <img class="logo" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png">
            </div>


             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:20vh;">
           
                <p  v-html="text" ></p> 
          
            </div>



             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position:absolute;top:60vh;">
                <p   ></p> 
                <button class="btn1" v-on:click="suivant()" >
                    <p v-html="boutonText" style="width:auto; color:white;">  </p> 
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
    background-image:url("../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}


.cadrePresentation{
    background: #FFF7EA;
    box-shadow: 0px 3.30351px 11.5623px rgba(0, 0, 0, 0.25);
    border-radius: 33.0351px;
    transform: rotate(0.16deg);
    height:80vh;
}



.menu{
    height:2vh; 
    width:19%; 
    background-color:white;
    position:absolute;      
    border: 2px solid rgba(247, 166, 0, 0.38);
}



p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 3vh;
    line-height: 121%;

    /* or 23px */
    text-align: center;

    color: #016590;

}















</style>


