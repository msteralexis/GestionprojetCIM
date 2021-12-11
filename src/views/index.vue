<script>

</script>

<template> 


    <div class="row acceuil contenaire" style="text-align:center;">
    
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo" >
            <img class="logo" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png">
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre" style="width:60%; margin-left:20%;padding-top:3vh;">
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="margin-left:10%;">
                <h1> Apprenez à cuisiner </h1>
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
    background-image:url("https://media.istockphoto.com/photos/homemade-chocolate-chip-cookie-on-white-overhead-xxxl-picture-id157511634?s=170667a");
    background-repeat:no-repeat;
    background-size: cover;
}






h1{
    height: auto;
    width:80%; 
    padding-top:5vh;
    padding-bottom:5vh;
    font-size: 6vh;

/*  ++ */
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    line-height: 99.5%;
    text-align: center;
    color: #016590;
    border: 0.244493px solid #016590;
}


.lien1{
    height: auto;
    width:80%;
    padding-top:3vh;

/*  ++ */
    color: #F7A600;
    font-size: 3vh;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;  
}


.lien2{
    position: absolute;
    width: auto;
    height: 10%;
    left: 60%;
    top:80vh;

/*  ++ */
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 3vh;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    color: #FFF7EA;
    text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.56), 0px 1px 14px rgba(0, 0, 0, 0.49);
}

</style>
