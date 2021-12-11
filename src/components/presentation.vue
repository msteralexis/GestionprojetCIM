
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
    <div> 
        <h1>{{ toto }} Veut connaitree l'application</h1> 
        <ul> 
          
            
        </ul> 
    </div> 
</template>



<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
