import axios from 'axios';


export const pokemonClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})
