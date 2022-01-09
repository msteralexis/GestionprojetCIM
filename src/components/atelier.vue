
<script> 


export default {
    methods: {
        ajoutsUsers(titi ){
            this.counter = titi
          this.$router.push('/') 

                // code a rentrer  
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
    
    
    <div class="row contenaire" id="fondAcceuilClient" > 
        <img  src="../assets/accueilClient/Ellipse 32.png">   
    </div>
<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>    

     <div>Item: {{ $route.params.toto }} </div>


    <br><br> <br> <br> <br> <br> <br> <br>       

  <button class="btn1" @click="ajoutsUsers($store.state.users[0].label)"  > click me !!  </button> 



     <div style="position:absolute;top:60vh;
     left:30%;" >         
{{ counter }} </div>


{{$store.state.users[0].label}}


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







</style>
