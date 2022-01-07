
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
    
      <div class="row contenaire fondInscription">

     

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadreInscription" style="padding-top:3vh;"> 

        
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position: absolute; width: 207px; height: 46px; left: 59px; top:30vh ;" >
                <h2> Bienvenue !</h2>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
              
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                    <router-link  class="btn1"  style="position: absolute; width: 256px;height: 52.6px;left: 59px;top: 40vh;" to="/inscriptionRestaurateur"> Je suis restaurateur  </router-link>     
                </div>
               
            
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink"  > 
                    <router-link  class="btn2"   style="position: absolute; text-align:center;width: 256px;height: 52.6px;left: 59px;top: 50vh;" to="/inscriptionClient"> Je veux apprendre à cuisiner </router-link>     
                </div>
               
            </div>
        </div>

  

        
    </div>


</template>



<style>

.fondInscription{
    background-image:url("../assets/inscription/img-background.jpg");
    background-repeat:no-repeat;
    background-size: cover;
width:100%;


}



.cadreInscription{
     background-image:url("../assets/inscription/Vector 6forme-vague.png");
    text-align:left;
    padding-left:25%;

    position:absolute;
    bottom:0;
    left:0;
    height:80vh;
    width:97%;    background-repeat:no-repeat;
    background-size: cover;

    
}
.cadreInscription h2{
    text-align:left;
   
}

</style>
