import { Box, TextField, Button } from '@mui/material'
import React, {FormEvent} from 'react'
import { pokemonClient } from '../../api/client';
import { PokemonFetcherState, PokemonReducerAction } from '../../hooks/pokemonFetcherReducer';
import { Pokedex } from '../../types/pokemon';


type Props = {
    state: PokemonFetcherState,
    dispatch: React.Dispatch<PokemonReducerAction>
    
}

export const PokemonForm: React.FC<Props> = ({state, dispatch}) => {

    const fetchPokemon = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: 'IsLoading', payload: {isLoading: true}})
        try {
            
            const pokemonData = await pokemonClient.get<Pokedex>(`/${state.pokemonName.toLowerCase()}`)
            dispatch(
                {
                    type: 'SetPokemon',
                    payload: {
                        pokemon: pokemonData.data
                    }
                } 
            )
            dispatch({type: 'NotLoading', payload: {isLoading: false}})

        } catch (error) {
            dispatch(
                {
                    type: 'SetError',
                    payload: {
                        errorMessage: error.message as string
                    }
                }
            )
            dispatch({type: 'NotLoading', payload: {isLoading: false}})
        }
    }
    return (
        <Box component={'form'}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem'
        }}
        onSubmit = {fetchPokemon}
        >
            <TextField 
            value={state.pokemonName}
            onChange={e => {
                    dispatch({type: 'SetPokemonName', payload: {pokemonName: e.target.value}})
                }
            }
            id="pokemon-name-field" label="Pokemon name" variant="outlined" />
            <Button disabled= {state.isLoading} type='submit' variant='outlined' size='large'>
                Buscar
            </Button>

        </Box>
    )
}
