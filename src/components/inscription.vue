
<script> 


export default { 
    props: {
        toto: {
            type: String,
            default: () => 'Toto pas comptant'
        }
    }
    
} 
</script>

<template> 
    
      <div class="row contenaire ">

          <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 fondInscription"> 

          </div>


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadreInscription" style="padding-top:3vh;"> 

        
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <h2> Bienvenue !</h2>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 " >
                     <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                        <router-link  class="btn1"  to="/inscriptionRestaurateur"> Je suis restaurateur  </router-link>     
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                        <router-link  class="btn2"   to="/inscriptionClient"> Je veux apprendre à cuisiner </router-link>     
                    </div>
                </div>
            </div>
        </div>

  

        
    </div>


</template>



<style>

.fondInscription{
    background-image:url("../assets/jason-briscoe-7MAjXGUmaPw-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
   
    height:70vh;
    width:100%;
    position:absolute;
    top:0;
    left:0;

}



.cadreInscription{
  
    text-align:left;
    padding-left:25%;
    height:50vh;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
      background: #FFF7EA;
      clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    
    
}
.cadreInscription h2{
    text-align:left;
   
}

</style>
