
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
    <div class="inscriptionConnection"> 
        <h2>{{ toto }} Veut s'inscrire ou se conencter</h2> 
         
          
            <button class="favorite" type="button">
            <router-link to="/connection"> connection </router-link> 
            </button>

            <button class="favorite" type="button">
                <router-link to="/inscription"> Inscription </router-link>
            </button>


        <ul> 
          
            
        </ul> 
    </div> 
</template>



<style>
.inscriptionConnection{ 
   
    display: flex;
    align-items: center;
    text-align:center;
    padding:0;
    margin:0;

    background-image:url("https://www.google.com/search?q=image+feu&client=ubuntu&hs=eFj&channel=fs&sxsrf=AOaemvLgzypHgsh9RCaBvJboVEon2xO_Jw:1639061518888&tbm=isch&source=iu&ictx=1&fir=4TmAC48uLvbB6M%252CHKLjqC9yDN7dpM%252C_%253BmFv1TxGNN_5KZM%252CaLOTMbmSrV7uTM%252C_%253BPV_-4-_jUZF8zM%252CSEpdw8297F81aM%252C_%253BMtcjoveF4jYFxM%252CP3JKCvsFvcQyuM%252C_%253BQLsAPwc41-eRWM%252C4BLfSoAKo_IdoM%252C_%253BAOyzOpHMOwwYFM%252CttS9acdWFpPbeM%252C_%253BpRm7Hp1CvFc-EM%252C-KddrTh4jjgSSM%252C_%253Bin5LYqCu2827fM%252CGLaKdm2WLL3S6M%252C_%253B7DICD6b8VHgduM%252Cw7w5oHt_G8mbqM%252C_%253Bo8OB1R7c-ITFTM%252CP3JKCvsFvcQyuM%252C_%253BM1cEnhirupyU_M%252Ce8CtCGLgjK05hM%252C_%253BLUYgx6WtW_Ly3M%252CF5rcmvbGxHn4vM%252C_%253BqB7nPJv19GkhvM%252CTypDXOh3rFdJVM%252C_%253BAI7eZvzQYTtCAM%252CRMHWBYxFL7gwOM%252C_&vet=1&usg=AI4_-kSnOx_Lu1KMWrOvkIF4GfeziAFalg&sa=X&ved=2ahUKEwiLvOP8-9b0AhUF6RoKHQ7NAkoQ9QF6BAghEAE#imgrc=PV_-4-_jUZF8zM");
    background-repeat:no-repeat;
    background-size: cover;

    height:100vh;
    width:100%;
  
}

</style>
