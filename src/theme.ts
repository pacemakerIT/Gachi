'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2986FE',
    },
    secondary: {
      main: '#101010',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#101010',
      secondary: '#2986FE',
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR, Arial, sans-serif',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;