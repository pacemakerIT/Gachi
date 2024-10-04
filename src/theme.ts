'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: {
      darkWhite: string;
      gray: string;
    };
    customBackground: {
      overlay: string;
    };
  }

  interface PaletteOptions {
    customColor?: {
      darkWhite?: string;
      gray?: string;
    };
    customBackground?: {
      overlay?: string;
    };
  }

  interface TypographyVariants {
    title: {
      fontSize: string;
      fontWeight: number;
    };
    caption: {
      fontSize: string;
      fontWeight: number;
      textAlign: string; // Keep textAlign for center alignment
      color: string; // Add color to caption variant
    };
  }

  interface TypographyVariantsOptions {
    title?: {
      fontSize?: string;
      fontWeight?: number;
    };
    caption?: {
      fontSize?: string;
      fontWeight?: number;
      textAlign?: string; // Keep textAlign for center alignment
      color?: string; // Add color to caption variant
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2986FE',
    },
    secondary: {
      main: '#101010', // Dark text
    },
    info: {
      main: '#F9F9FB', // Light background
      light: '#FFFFFF', // White text
      dark: '#F0F2F3', // Background for button
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
    customColor: {
      darkWhite: '#F0F2F3',
      gray: '#999999',
    },
    customBackground: {
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR, Arial, sans-serif',
    title: {
      fontSize: '1.25rem', // Adjust font size as needed
      fontWeight: 600, // Adjust weight as needed
    },
    h6: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#101010', // Ensure "Gachi.live" text is black
    },
    caption: {
      fontSize: '0.875rem', // Adjust font size as needed
      fontWeight: 400,
      color: '#808080', // Gray color for caption text
      textAlign: 'center', // Center text
    },
    body1: {
      fontSize: '14px', // Text size for nav links
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color:'#999999'
        }

      }
    }
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export default theme;