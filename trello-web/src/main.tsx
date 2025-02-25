import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'


import theme from './theme.tsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <CssVarsProvider  theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </CssVarsProvider >
  </StrictMode>,
)
