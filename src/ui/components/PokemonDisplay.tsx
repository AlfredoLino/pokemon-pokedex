import React from 'react'
import {Typography} from '@mui/material'
type Props = {
    error: string | null
    pokemon: string | null,
    loading: boolean
}
export const PokemonDisplay: React.FC<Props> = ({error, pokemon, loading}) => {

    if (loading) {
        return <Typography>
        Cargando pokemon...
    </Typography>
    }

    if(error){
        return <Typography>
            No hay tal pokemon
        </Typography>
    }
    if (pokemon) {
        return <img src={pokemon} alt='pokemon'/>    
    }
  return (
    <Typography>
        Busque un pokemon
    </Typography>
  )
}
