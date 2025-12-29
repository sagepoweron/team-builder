<script setup lang="ts">
    import type { Pokemon } from '~/types';
    import { GetPokemon } from '~~/server/api/test';
    //import { SpinningImages } from '#components'

    const message = ref('Welcome to Team Builder!')

    function formSubmitted(e: Event) {
        e.preventDefault()
        alert(`Form submitted with message: ${message.value}`)
    }
    //const pokemon2 = ref({name: "Test",} as Pokemon);

    const pokemon: Pokemon = await GetPokemon();
    console.log(pokemon.name);
    //const pokemon= ref(await GetPokemon()) ;
    //console.log(pokemon.value.name);
</script>

<template>
    <h1>Home</h1>
    <h2>{{ message }}</h2>

    <form @submit.prevent="formSubmitted">
        <input v-model="message"/>
        <button>Submit</button>
    </form>

    <div>
        <h2>Pokémon Data</h2>
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>

    <!--<SpinningImages :url="pokemon.sprites.front_default" />-->

    <!--<div>{{ pokemon?.name }}</div>-->
</template>


