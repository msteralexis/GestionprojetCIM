
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
    
    <div class="row contenaire" id="fondAcceuilClient" > 
        <img style="width:60%;height:30vh;position:absolute;top:5vh;left:20%;" src="../assets/accueilClient/Ellipse 32.png">   
        <h2 style=" z-index:10;position:absolute;top:10vh;left:0%;font-size:31px; "> Bonjour </h2>  
        <p style="z-index:10;position:absolute;top:21vh;left:0%;font-size:31px; ">  {{ $route.params.nom }} ! </p>     



    </div>

     

    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadreInscription"> 
        <div class="row" > 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                <p style="position:absolute; top:45vh;
                left:10%;z-index:10;font-family: Montserrat; font-size: 18px; line-height: 22px; color: #F7A600; border: 0.4px solid #F7A600; "> Proche de chez vous </p>  
              
              
                <div class="listeAtelier" >

                    <article>
                        <img  src="../assets/accueilClient/img.png">   
                        <p> Atelier végétarien La poma </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 
                     <article>
                        <img  src="../assets/accueilClient/img.png">   
                        <p> Atelier végétarien La poma </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 
                     <article>
                        <img  src="../assets/accueilClient/img.png">   
                        <p> Atelier végétarien La poma </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 
                     <article>
                        <img  src="../assets/accueilClient/img.png">   
                        <p> Atelier végétarien La poma </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article>  
                    <article>
                        <img  src="../assets/accueilClient/img.png">   
                        <p> Atelier végétarien La poma </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 

                </div>
              
            
            </div>
        </div>

        
    
    </div>

  

        



</template>



<style>

#fondAcceuilClient{
    background-image:url("../assets/accueilClient/img.png");
    background-repeat:no-repeat;
    background-size: cover;
    width:103%;
    height:40vh;
    top:0;
    left:0;
    position:absolute;
    z-index:2;
 


}
.cadreInscription{
    text-align:left;
    padding-left:15%;

    position:absolute;
    bottom:0;
    left:0;
    height:100vh;
    background: #FFF7EA;
    width:100%;
}


article {
    padding-left:5%;
}
article p{
    font-size:12px;
    text-align:left;
}
article img{
    width:150px;height:15vh;

}


.listeAtelier{
    position:absolute;
    top:50vh;
    left:10%;
    width:auto;
    height:auto;
    
    
    display: flex;
flex-wrap: nowrap;
overflow-x: auto;
margin-top: 20px;
padding-bottom: 20px;
scrollbar-width: none;

}


</style>
