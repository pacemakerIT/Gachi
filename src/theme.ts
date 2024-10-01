'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F9F9FB', // Light background for the AppBar
      dark: '#2986FE', // For buttons
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
    action: {
      hover: '#f1f1f1', // Slight hover effect for icon buttons
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
      fontSize: '14px', // Text size for nav links
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.profileIcon': {
            backgroundColor: 'transparent',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            padding: '4px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#f1f1f1',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#2986FE', // Default background color
          color: 'white', // Default text color
          boxShadow: 'none', // Remove default shadow
          borderRadius: '4px', // Set border radius
          '&:hover': {
            backgroundColor: '#2986FE', // Maintain background color on hover
          },
          '&:active': {
            backgroundColor: 'white', // White background when clicked
            color: '#2986FE', // Change text color to primary dark
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F9F9FB', // Drawer background color
          padding: '20px', // Padding for drawer items
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F9F9FB', // Menu background color
          borderRadius: '8px', // Round off the edges
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f1f1f1', // Background color on hover
          },
        },
      },
    },
  },
});

export default theme;
