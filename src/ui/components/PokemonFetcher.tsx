import React, {useReducer} from 'react';

import pokemonReducer from '../../hooks/pokemonFetcherReducer';

import { PokemonDisplay } from './PokemonDisplay';
import { PokemonForm } from './PokemonForm';
import { PokemonFetcherContainer } from './PokemonFetcherContainer';

export const PokemonFetcher = () => {

    const [state, dispatch] = useReducer(pokemonReducer, 
        {
            pokemon: null,
            pokemonName: '',
            isLoading: false,
            errorMessage: null
        });
    
    return (
        <PokemonFetcherContainer>
            <PokemonForm state={state} dispatch={dispatch}/>
            <PokemonDisplay pokemon={state.pokemon?.sprites.front_default} error={state.errorMessage} loading={state.isLoading}/>
        </PokemonFetcherContainer>
    )
}
