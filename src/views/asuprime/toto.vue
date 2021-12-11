
<script>
export default {
	name: 'toto',
	props: ['text'],
	props: ['list', 'title', 'count'] 

}



</script>

<template>
	<a href="/"> toto </a> 
	    <div class="exemple" data-v-f3f3eg9>hello !</div>
		    <button class="button">{{ text }}</button>

		<h1>{{ title }} #{{ count }}</h1> 
        <ul> 
            <li v-for="item in list" :key="item"> {{ item }} 
            </li> 
        </ul> 


</template>

<style>
	a {
		text-decoration: none;
	}

	.button {
    background-color: blue;
    color: white;
    border-radius: 10px;
}



</style>

