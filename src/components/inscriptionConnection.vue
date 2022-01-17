
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
            <img style=" height:148px;" class="logo" src="../assets/MijotoLogo__logo-blue.png">
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                    <router-link   style="position:absolute;width:256px;height:52.6px;left:59px;top:343px;" class="btn1" to="/connection"> Se connecter </router-link>     
                </div>
            </div>

             <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" >
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 margeRouterLink" > 
                    <router-link style="position:absolute;width:256px;height:52.6px;left:59px;top:411px;" class="btn2"  to="/inscription"> S'inscrire   </router-link>     
                </div>
            </div>
        </div>

    </div>

</template>



<style>


.inscriptionConnection{
    background-image:url("../assets/inscriptionConnection/img-background.jpg");
    background-repeat:no-repeat;
    background-size: cover;
}






</style>

