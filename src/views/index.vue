<script>

</script>

<template> 


    <div class="row acceuil contenaire" style="text-align:center;">
    
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo" >
            <img class="logo" src="../assets/MijotoLogo__logo-blue.png">
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadrecadreAcceuil" >
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:2vh;">
                <h1 style="font-size:5vh;"> Apprenez <br> à cuisiner </h1>
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 lien1">
                <h2> En 4 étapes</h2>
            </div>
              <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink">
                <router-link  class="btn1" to="/presentation" > Commencer ! </router-link>
            </div>
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <router-link  class="lien2" to="/inscriptionConnection"> Je passe les étapes ></router-link> 
        </div>
        
    </div>

</template>


<style>


.acceuil{
    background-image:url("../assets/img-background.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}

.cadrecadreAcceuil{
    background-image:url("../assets/Bullevague-pres.png");
      background-repeat:no-repeat;
    background-size: cover;

  height:50vh;
    width:85%;

    margin-left:10%;
    padding-top:3vh;
}





</style>
