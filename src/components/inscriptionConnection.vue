
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




   <div class="row contenaire inscriptionConnection">
    

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 logo" >
            <img class="logo" src="../assets/MijotoLogo__logo-blue.png">
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                <button class="btn1">
                    <router-link to="/connection"> connection </router-link> 
                </button> 
            </div>

             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="padding-top:5vh;">
                <button class="btn2">
                    <router-link to="/inscription"> Inscription </router-link>
                </button>
            </div>
        </div>

  
        
    </div>




</template>



<style>


.inscriptionConnection{
    background-image:url("../assets/farhad-ibrahimzade-MWJYKPZjXMk-unsplash.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}






</style>



<!-- ***




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




   <div class="row contenaire inscriptionConnection">
    

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
            <button class="btn1">
                <router-link to="/connection"> connection </router-link> 
            </button> 
              <button class="btn2">
                <router-link to="/inscription"> Inscription </router-link>
            </button>
      
        </div>
    
        
    </div>




</template>



<style>


.inscriptionConnection{
    background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxICJ_CrYMLUkMsOSms_I15Uh8cuPTicJVIg&usqp=CAU");
    background-repeat:no-repeat;
    background-size: cover;
}

.btn1{
    position:absolute;
    width: 20%;
    height: 8vh;
    top: 50vh;
    left:40%;
    

    background: #006281;
    border: 0.800337px solid #006281;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 5.60236px;
}

.btn1 router-link{
    position:absolute;
    width: 15%;
    height: 6vh;
    left:40%;
    font-size: 4vh;
    top: 50vh;

    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #FFF7EA;
    border: 0.2px solid #FFF7EA;
}


.btn2 { 
  
    width: 256px;
    height: 52.6px;
    top: 60vh;
 
    background: #FFF7EA;
    border: 1px solid #FFF7EA;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 5.60236px;
}

.btn2 router-link{

    width: 178.85px;
    height: 18.41px;
  
    top: 60vh;

    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 14.4061px;
    line-height: 121%;

    /* or 17px */
    text-align: center;

    color: #016590;

    border: 0.2px solid #016590;
}


</style>




-->