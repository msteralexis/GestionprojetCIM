
<script> 

export default {
    methods: {
        suivant(){  
   
        }
    },
	data(){
        return {
            nom: "Nom",
            prenom: "Prenom",
            email: "E-mail",
            mdp: "Mot de passe" 
        }
    }

}

</script>

<template> 



    <div class="row contenaire connection">
        
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadre" > 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <h2 style="font-weight:bold;"> Choisissez au moins </h2>
                <p style="font-size:2.5vh;font-weight:bold;">  3 goûts culinaires </p>
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <p style="font-size:2.5vh;text-align:left;padding-top:5vh;padding-left:10%;">  Cuisine du monde </p>
                <div class="row" >
                
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ligne">
                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Américaine</h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Chinoise </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Italienne </h5>
                        </article>
                    </div>
                  
                </div>

                 <div class="row" >
                
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ligne">
                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Mexicaine </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Francaise </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Espagnol </h5>
                        </article>
                    </div>
                  
                </div>


                 <div class="row" >
                
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ligne">
                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Canadienne </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Anglaise </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Portugaise </h5>
                        </article>
                    </div>
                  
                </div>


                 <div class="row" >
                
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ligne">
                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Japonaise</h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Marocaine </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Russe </h5>
                        </article>
                    </div>
                  
                </div>


                 <div class="row" >
                
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ligne">
                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Indienne </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Allemande </h5>
                        </article>

                        <article>
                            <img  src="../assets/MijotoLogo__logo-blue.png">
                            <h5> Brésilienne </h5>
                        </article>
                    </div>
                  
                </div>

              


               
            </div>

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:2vh;padding-bottom:5vh;">  
                <button class="btn1" style="width:256px;" >   Continuer  </button>  
            </div>
           
        </div>
        
    </div>

</template>



<style>

.connection{
    background-image:url("../assets/dane-deaner-TXHml4xX9A0-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}


.cadre{
    margin-top:9.5vh; 
    height:90vh;
    overflow: scroll;
}



.ligne{
    display:flex;
}
article{
   text-align:center;
  width:30%;
  padding-left:10%;
 

}
article img{
    height:12vh;
}
h5{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;


    color: #016590;

}



</style>
