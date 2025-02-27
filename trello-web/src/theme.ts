// import { createTheme } from '@mui/material/styles'
// import { red } from '@mui/material/colors'

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.

declare module "@mui/material/styles" {
  export interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }

  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }
}
const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: {
  //         main: "#fff",
  //       },
  //       secondary: orange,
  //       text: {
  //         primary: "black", // Màu chữ cho chế độ sáng
  //       },
  //     },
  //   },
  //   dark: {
  //     palette: {
  //       primary: {
  //         main: "#162B50",
  //       },
  //       secondary: orange,
  //       text: {
  //         primary: "white", // Màu chữ cho chế độ sáng
  //       },
  //     },
  //   },
  // },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#95afc0",
            boderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#535c68",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary, // Đặt màu chữ tự động theo theme
          textTransform: "none",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          fontSize: "0.875rem", // Đặt màu chữ tự động theo theme
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.dark,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          "@:fieldset": {
            boderWidth: "1px !important",
          },
        }),
      },
    },
  },
  // ...other properties
});

export default theme;
