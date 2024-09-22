// theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F9F9FB', // Light background for the AppBar
    },
    secondary: {
      main: '#101010', // Dark text
    },
    background: {
      default: '#FFFFFF', // Default background
    },
    text: {
      primary: '#101010', // Text color
      secondary: '#2986FE', // Hover color
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR, Arial, sans-serif',
    h6: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#101010', // Ensure "Gachi.live" text is black
    },
    body1: {
      fontSize: '16px',
      color: '#101010', // Text color for nav links
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9FB', // NavBar background color
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '64px', // Adjust height if needed
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // Remove underline from links
          color: '#101010',
          '&:hover': {
            color: '#2986FE', // Hover effect
          },
          marginRight: '10px', // Space between links
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#2986FE', // Button background color
          color: '#FFFFFF',
          borderRadius: '4px',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#1A65D8', // Hover color for buttons
          },
        },
      },
    },
  },
});

export default theme;
