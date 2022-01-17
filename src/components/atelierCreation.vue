
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
            
        },
        publier( numero){
            console.log(numero)
            this.atelier={ nom: this.nom, date: '25 jan.21', restaurant:'Italia', chef:'Chef Robert',tarif:this.prix+'euros/p',duree:this.duree+'h',nombrePersonne:this.nbPersonne, index: numero ,descriptif: this.descriptif, img: "../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg" }
            this.$store.commit('ajoutsAteleirRestaurant', this.atelier)
            this.$router.push('/acceuilRestaurateurs') 
            
            
        }
    },
	data(){
        return {
           nom: "",
           date:"date",
           prix:"",
           duree:"",
           nbPersonne:"",
           descriptif:"",
           atelier:{ nom: 'Atelier pasta', date: '25 jan.21', restaurant:'Italia', chef:'Chef Robert',tarif:'15 euros/p',duree:'1h',nombrePersonne:'3', index: 3, descriptif: "descriptif" ,img: "../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg" }

        }
    }

}



</script>

<template> 
    

     

    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 " id="cadreCreationEvenement"> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="height:10vh;width:100%;position:absolute;top:0;left:0;text-align:center;justify-content:center; background-color:white;filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));">
            <a style="position: absolute; top:4vh; left:5%; z-index:25;color: #016590; font-size:2vh;background-color: white; "  v-on:click.once="retour('restaurateur')">  Retour </a> 
            <p style="  line-height: 16px; text-align: center; color: #016590; padding-top:4vh;margin-left:12%; ">  Ajouter un atelier   </p>
        </div> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t" src='../assets/goutsCulinaires/pexels-los-muertos-crew-7613555.jpg'>
          
        </div> 


        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t2"   src='../assets/atelier/Vector8.png'>
        </div> 

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
            <img  class="t3" src='../assets/atelier/Vector9.png'>
            <input style="z-index:15; text-align: center; width:20%;font-size:12px; position:absolute;top:42vh;left:41%;" @click="date=''"  v-model="date" placeholder="date">        
            <p style="position:absolute; top:55vh;left:10%;font-size: 16.275px; color: #016590;"> Restaurant La crêperie </p> 

       
            <p style="position:absolute; top:62vh;left:5%;font-size: 14px; color: #016590;">  <Strong> € </Strong> <input style=" width:25%;font-size:12px; " @click="prix=''"  v-model="prix" placeholder="prix">    | 
            <img  style="height:15px;width:15px;" src='../assets/icons/contour-circulaire-de-lhorloge.png'>  <input style=" width:25%;font-size:12px; " @click="duree=''"  v-model="duree" placeholder="duree">   |  
            <img  style="height:15px;width:15px;" src='../assets/icons/silhouette-dutilisateurs-multiples.png'>  <input style=" width:25%;font-size:12px; " @click="nbPersonne=''"  v-model="nbPersonne" placeholder="nbPersonne">   </p> 
        </div> 


       
          <p style="position:absolute; bottom:24vh;left:10%; color: #F7A600; ">  Description de l'atelier  </p>
        <input style="position:absolute; bottom:15vh;right:10%;font-size:2vh;text-align:left;margin-left:5%;height:10vh;width:80%;" @click="descriptif=''"  v-model="descriptif" placeholder="descriptif">  

     
        <button class="btn1" style="width:auto;position:absolute;bottom:5vh;padding:4px;left:32%;font-size:2.5vh;" @click="publier($store.state.atelierRestaurateur.length)" >  Publier l'atelier </button> 

  
 
      
     

  


    </div>

  

    


</template>



<style>



#cadreCreationEvenement{
    padding-top:10vh;
    text-align:left;
    padding-left:10%;
    
    height:100vh; background: #FFF7EA; width:100%;
    overflow: scroll;   overflow-x: hidden; scrollbar-width: none;      
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
