import { Pokemon } from '~/types';

export default defineEventHandler((event) => {

    const pokemonList: Pokemon[] = 
    [
        //{ id: 1, name: "Pikachu" },
        //{ id: 2, name: "Bulbasaur" }
    ];

    return pokemonList;
})