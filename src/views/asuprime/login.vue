
<script>


import axios from 'axios';


export default {
    methods: {
        async pressed(){
            
            console.log(this.email);


       axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
                

       // Liste Users
       // axios.get('http://localhost:8080/listUser').then(response => (console.log( response.data[0]) ))

   

        }
    },
	data(){
        return {
            email:"ii ",
            password: ""
        }
    }

}



</script>

<template>

	<a href="/"> Connection </a> 

    <form @submit.prevent="pressed"> 
    Register
    <div class="email">
        <input type="email" v-model="email" placeholder ="email"> 
    </div>
      <div class="password">
        <input type="password" v-model="password" placeholder ="password"> 
    </div>
    <button type="submit"> Register</button>

    </form>
	  


</template>

<style>


</style>

