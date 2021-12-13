<script>

</script>

<template> 


    <div class="row acceuil contenaire" style="text-align:center;">
    
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo" >
            <img class="logo" src="../assets/MijotoLogo__logo-blue.png">
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadrecadreAcceuil" >
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-left:10%;">
                <h1 style="font-size:5vh;"> Apprenez <br> à cuisiner </h1>
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 lien1">
                <router-link  to="/presentation" style=" color: #F7A600;"> En 4 Etapes</router-link> <br>
            </div>
        </div>

      
        


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <router-link  class="lien2" to="/inscriptionConnection"> Je passe les Etapes ></router-link> 
        </div>
        
    </div>




</template>


<style>


.acceuil{
    background-image:url("../assets/tijana-drndarski-7cXfIm5x7Fk-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}

.cadrecadreAcceuil{
  background: #FFF7EA;
  box-shadow: 0px 3.30351px 11.5623px rgba(0, 0, 0, 0.25);
  border-radius: 33.0351px;
  transform: rotate(0.16deg);
  clip-path: polygon(100% 0, 100% 86%, 100% 89%, 63% 91%, 41% 93%, 21% 95%, 0 100%, 0 0);

  height:50vh;

  width:60%; 
  margin-left:20%;
  padding-top:3vh;
}





</style>
