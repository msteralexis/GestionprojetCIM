
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
    

     

    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 cadreInscription"> 

            <div class="row contenaire" id="fondAcceuilClient" > 
                <img style="width:60%;height:30vh;position:absolute;top:5vh;left:20%;" src="../assets/accueilClient/Ellipse32.png">   
                <h2 style=" z-index:10;position:absolute;top:10vh;left:0%;font-size:31px; "> Mon <br> espace </h2>  

            </div>


        <div class="row" > 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <p style=" text-align:left;width:80%;
               z-index:10;font-size: 14px; line-height: 22px; color: #F7A600; border: 0.4px solid #F7A600; "> mes ateliers à venir</p>  
           
              
                <div class="listeAtelier" >

                    <article>
                        <router-link :to="{ name: 'atelier', params: { index: 0, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg">    
                        </router-link> 
                        <p> Atelier Crêpes </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 

                     <article>
                        <router-link :to="{ name: 'atelier', params: { index: 1, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/sushi.jpg">   
                        </router-link> 
                        <p> Atelier sushi </p>
                        <p style="color: #F7A600;"> a 0.8 km km de chez vous</p>
                    </article> 

                     <article>
                        <router-link :to="{ name: 'atelier', params: { index: 2, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pasta.jpg">  
                        </router-link>  
                        <p> Atelier Pasta</p>
                        <p style="color: #F7A600;"> a 1.9 km de chez vous</p>
                    </article> 

                     <article>
                         <router-link :to="{ name: 'atelier', params: { index: 3, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pexels-tioroshi-lazaro-2874989.jpg">   
                        </router-link> 
                        <p> Atelier burger </p>
                        <p style="color: #F7A600;"> a 0.5 km de chez vous</p>
                    </article>  
                

                </div>
              
            
            </div>
        </div>



         <div class="row" > 

            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-bottom:10vh;" >
                <p style=" text-align:left;width:80%;
               z-index:10;font-size: 14px; line-height: 22px; color: #F7A600; border: 0.4px solid #F7A600; "> Ateliers passés </p>  
              
              
                <div class="listeAtelier" >

                     <article>
                        <router-link :to="{ name: 'atelier', params: { index: 0, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg">    
                        </router-link> 
                        <p> Atelier Crêpes </p>
                        <p style="color: #F7A600;"> a 2.5 km de chez vous</p>
                    </article> 

                     <article>
                        <router-link :to="{ name: 'atelier', params: { index: 1, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/sushi.jpg">   
                        </router-link> 
                        <p> Atelier sushi </p>
                        <p style="color: #F7A600;"> a 0.8 km km de chez vous</p>
                    </article> 

                     <article>
                         <router-link :to="{ name: 'atelier', params: { index: 2, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pasta.jpg">  
                        </router-link>  
                        <p> Atelier Pasta</p>
                        <p style="color: #F7A600;"> a 1.9 km de chez vous</p>
                    </article> 

                     <article>
                        <router-link :to="{ name: 'atelier', params: { index: 3, numeroUsers: 'restaurateur' }}"> 
                            <img  src="../assets/goutsCulinaires/pexels-tioroshi-lazaro-2874989.jpg">   
                        </router-link> 
                        <p> Atelier burger </p>
                        <p style="color: #F7A600;"> a 0.5 km de chez vous</p>
                    </article>  
                

                </div>
              
            
            </div>
        </div>


        <div id="menu">

            <ul>     
                <li>
                    <img  style="margin-top:1vh;margin-left:10%;height:4vh;width:70%;" src='../assets/icons/contour-circulaire-de-lhorloge.png'> <br> 
                    <a style="color: #016590;font-size:1.4vh;"> Accueil</a>
                </li>

                   
                <li>
                    <img  style="margin-top:1vh;margin-left:10%;height:4vh;width:70%;" src='../assets/icons/1.png'> <br> 
                    <a style="color: #016590;font-size:1.4vh;"> Recherche </a>
                </li>

                   
                <li>
                    <img  style="margin-top:1vh;margin-left:10%;height:4vh;width:70%;" src='../assets/icons/2.png'> <br> 
                    <a style="color: #016590;font-size:1.4vh;"> Evenement </a>
                </li>

                   
                <li>
                    <img  style="margin-top:1vh;margin-left:10%;height:4vh;width:70%;" src='../assets/icons/zz.png'> <br> 
                    <a style="color: #016590;font-size:1.4vh;"> Mon compte </a>
                </li>
            </ul>

        </div>



        
    
    </div>

  

        



</template>



<style>


#menu{
    position:fixed;bottom:0;left:0;width:100%;height:8vh;background-color:white;
      list-style-type:none;  
}


#menu ul {
    padding:0;
    margin:0;
    list-style-type:none;      
}

#menu li {
    margin-left:10%;;
    float:left; 
}

#fondAcceuilClient{
    background-image:url("../assets/accueilClient/img.png");
    background-repeat:no-repeat;
    background-size: cover;
    width:103%;
    height:40vh;
    position:absolute;
    top:0;
    left:0;
    width:100%;

    z-index:2;

}
.cadreInscription{
    padding-top:45vh;
    text-align:left;
    padding-left:5%;
        overflow: scroll;   overflow-x: hidden; 
           scrollbar-width: none;
       

    position:absolute;
    bottom:0;
    left:0;
    height:100vh;
    background: #FFF7EA;
    width:100%;
    
    
}


article {
    margin-left:5%;
}
article p{
    font-size:12px;
    text-align:left;
}
article img{
    width:150px;height:15vh;

}


.listeAtelier{
    padding-top:2vh;
    width:auto;
    height:auto;
    
    
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-top: 20px;

    scrollbar-width: none;

    

}


</style>
