
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


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadreInscription"> 

        
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:2vh;padding-left:10%;">
                <h2> Heureux de vous revoir !</h2>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 " style="padding-top:2vh;padding-left:10%;">
                    <button class="btn1">  
                         <router-link  to="/inscriptionRestaurateur" > Je suis restaurateur  </router-link> 
                    </button> 
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:2vh;padding-left:10%;" >
                    <button class="btn2"> 
                        <router-link  to="/inscriptionClient" > Je veux apprendre à cuisiner </router-link> 
                    </button>
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
   
    height:60vh;
    width:100%;
    position:absolute;
    top:0;
    left:0;

    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 77%); clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 77%);
}



.cadreInscription{
    text-align:left;
    height:40vh;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    
}
.cadreInscription h2{
    text-align:left;
}

</style>
