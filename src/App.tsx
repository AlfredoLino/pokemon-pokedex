import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from './ui/theme';

import { PokemonFetcher } from './ui/components';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <PokemonFetcher />
      </div>

    </ThemeProvider>
  );
}

export default App;
