import { Pokedex } from "../types/pokemon"

export interface PokemonFetcherState {
    pokemon: Pokedex | null,
    pokemonName: string,
    isLoading: boolean,
    errorMessage: string | null
}

type ActionIsLoading = {
    type: 'IsLoading'
    payload: {
        isLoading: true,
    }
}

type ActionIsNotLoading = {
    type: 'NotLoading'
    payload: {
        isLoading: false,
    }
}

type ActionSetPokemon = {
    type: 'SetPokemon'
    payload: {
        pokemon: Pokedex,
    }
}

type ActionSetPokemonName = {
    type: 'SetPokemonName'
    payload: {
        pokemonName: string,
    }
}

type ActionSetError = {
    type: 'SetError',
    payload: {
        errorMessage: string
    }
}
type ActionSetNoError = {
    type: 'SetNoError',
    payload: {
        errorMessage: null
    }
}


export type PokemonReducerAction = 
    ActionIsLoading | ActionIsNotLoading | ActionSetPokemon | ActionSetPokemonName | ActionSetError | ActionSetNoError;

const pokemonReducer 
    = (state: PokemonFetcherState, action: PokemonReducerAction ): PokemonFetcherState => {
    switch (action.type) {
        case 'IsLoading':
            return {
                ...state,
                isLoading: true
            }
            
        case 'NotLoading':
            return {
                ...state,
                isLoading: false
            }

        case 'SetPokemon': 
            return {
                ...state,
                pokemon: action.payload.pokemon,
                errorMessage: null
            }

        case 'SetPokemonName':
            return {
                ...state,
                pokemonName: action.payload.pokemonName
            }

        case 'SetNoError': 
            return {
                ...state,
                errorMessage: null
            }

        case 'SetError': 
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                pokemon: null
            }
    
        default:
            return state;
    }
}

export default pokemonReducer;