
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
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                    <router-link  class="btn1" to="/connection"> Connection </router-link>     
                </div>
            </div>

             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                    <router-link  class="btn2"  to="/inscription"> Inscription </router-link>     
                </div>
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

