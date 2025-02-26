  // import { createTheme } from '@mui/material/styles'
  // import { red } from '@mui/material/colors'
  import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
  import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
  // Create a theme instance.

  declare module '@mui/material/styles' {
  export interface Theme {
      trello: {
        appBarHeight: string;
        boardBarHeight : string;
      };
    }

    interface ThemeOptions {
      trello?: {
        appBarHeight?: string;
        boardBarHeight ?: string;
      };
    }
  }
  const theme = extendTheme({
    trello:{
      appBarHeight: '48px', 
      boardBarHeight  :'58px'
    
    },
    colorSchemes: {
      light: {
        palette: {
          primary:teal,
          secondary: deepOrange
      
          }
          
      },
      dark: {
        palette: {
          primary:cyan,
          secondary: orange
      
          }
      }
    }
    // ...other properties
  })

  export default theme