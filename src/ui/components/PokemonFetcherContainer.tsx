import React, { PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

export const PokemonFetcherContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4rem'
        }}
    >
        <Typography variant='h1'>
            PokemonFetcher
        </Typography>
        {children}
    </Box>
  )
}
