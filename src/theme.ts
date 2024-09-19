'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

const theme = createTheme({
  palette: {
    mode: 'light',
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
