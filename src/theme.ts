"use client"
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

// 타입 확장
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
}

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
      default: '#F9F9FB',
    },
    text: {
      primary: '#101010',
      secondary: '#F9F9FB',
    },
    customColor: {
      darkWhite: '#F0F2F3', 
      gray: '#999999',  
    },
    customBackground: {
      overlay: 'rgba(0, 0, 0, 0.5)', 
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR, Arial, sans-serif',
  },
});

export default theme;
