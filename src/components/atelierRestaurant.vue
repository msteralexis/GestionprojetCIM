
<script> 


export default {
    methods: {
        retour( retour ){
            // si c'est un restaurateur alors page acceuil restaurant 
            if(retour =='restaurateur'){
                this.$router.push('/acceuilRestaurateurs') 

            }else{ // sinon utilsiateurs 
                this.$router.push('/acceuilClients/'+retour) 
            }
            
        }
    },
	data(){
        return {
           counter: "XMLDocument"

        }
    }

}





</script>

<template> 

    <div class="row contenaire" style="background-color: #FFF7EA;"> 

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="height:15vh;width:100%;position:absolute;top:0;left:0;text-align:center;justify-content:center;">
            <a style="position: absolute; top:4vh; left:5%; z-index:25;color: #016590; font-size:2vh;background-color: white; "  v-on:click.once="retour('restaurateur')">  Retour </a> 
            <p style="font-weight: bold;  line-height: 20px; text-align: center; color: #016590; padding-top:4vh; "> {{ $store.state.atelierRestaurateur[$route.params.index].nom }}   </p>
        </div> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t" v-if="$route.params.index==0"  src='../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg'>
            <img  class="t"  v-if="$route.params.index==1"  src='../assets/goutsCulinaires/sushi.jpg'>
            <img  class="t"  v-if="$route.params.index==2"  src='../assets/goutsCulinaires/pasta.jpg'>
            <img  class="t"  v-if="$route.params.index==3"  src='../assets/goutsCulinaires/pexels-tioroshi-lazaro-2874989.jpg'>
        </div> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t2"   src='../assets/atelier/Vector8.png'>
        </div> 

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t3" src='../assets/atelier/Vector9.png'>
            <p style="z-index:15; text-align: center; font-size:16px;color: #FFF7EA; position:absolute;top:40vh;left:41%;"> le <br>{{ $store.state.atelierRestaurateur[$route.params.index].date }} </p>          
            <p style="position:absolute; top:55vh;left:10%;font-size: 16.275px; color: #016590;"> Restaurant <strong>{{ $store.state.atelierRestaurateur[$route.params.index].restaurant }} </strong> </p> 
            <p style="position:absolute; top:58vh;left:10%; font-size: 16.275px; color: #016590;">   {{ $store.state.atelierRestaurateur[$route.params.index].chef }}   </p> 
            <p style="position:absolute; top:62vh;left:10%;font-size: 16.275px; color: #016590;">  <Strong> € </Strong> {{ $store.state.atelierRestaurateur[$route.params.index].tarif }} | <img  style="height:15px;width:15px;" src='../assets/icons/contour-circulaire-de-lhorloge.png'>  {{ $store.state.atelier[$route.params.index].duree }} |  <img  style="height:15px;width:15px;" src='../assets/icons/silhouette-dutilisateurs-multiples.png'>  {{ $store.state.atelier[$route.params.index].nombrePersonne }}   </p> 
        </div> 

           <!-- enregistrement -->


        <p style="position:absolute; bottom:26vh;right:10%; color: #F7A600; ">  Description de l'atelier  </p>
        <p style="position:absolute; bottom:15vh;right:10%;font-size:2vh;text-align:left;margin-left:5%;width:80%;overflow:auto;" >  {{ $store.state.atelierRestaurateur[$route.params.index].descriptif }} </p>  

       
        <button class="btn1" style="width:auto;position:absolute;bottom:10vh;padding:4px;left:25%;font-size:2.5vh;" v-on:click.once="retour('restaurateur')">   Retour Acceuil </button> 

     
 
       








        <div id="menuAtelier">

            <img  style="height:4vh;width:10%;position:fixed;bottom:2vh;left:10%; " src='../assets/icons/plus.png'> 
            <input style="position: fixed;width:50%; bottom:2vh;left:25%; color: #BDBBB8;border-radius:50px;" placeholder="Ecrivez quelque chose ici ..." >  
            <img  style="height:4vh;width:10%; position:fixed;bottom:2vh;right:10%;" src='../assets/icons/zz.png'> 
         
        </div>

  
      
    </div>


 
     
                      

 



</template>



<style>

#menuAtelier{
    position:fixed;bottom:0;left:0;width:100%;height:8vh;background-color:white;
      list-style-type:none;  text-align:center;
}


#menuAtelier ul {
    padding:0;
    margin:0;
    list-style-type:none;      
}

#menuAtelier li {
    margin-left:10%;;
    float:left; 
}


















.t{
    height:100%;
    width:100%;
    height:50vh;width:100%;position:absolute;top:10vh;left:0;
}


.t2{
    height:100%;
    width:100%;
    height:40vh;width:100%;position:absolute;top:40vh;left:0;
}

.t3{
    height:90px;
    width:120px;
    position:absolute;top:38vh;left:35%;
}



</style>


     