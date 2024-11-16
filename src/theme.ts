'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/ibm-plex-sans-kr';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    icon: {
      main: string;
      hover: string;
    };
    graph: {
      color1: string;
      gradient1: string[];
      color2: string;
      gradient2: string[];
      color3: string;
      gradient3: string[];
      color4: string;
      gradient4: string[];
      color5: string;
      gradient5: string[];
    };
  }

  interface PaletteOptions {
    icon?: {
      main?: string;
      hover?: string;
    };
    graph?: {
      color1?: string;
      gradient1?: string[];
      color2?: string;
      gradient2?: string[];
      color3?: string;
      gradient3?: string[];
      color4?: string;
      gradient4?: string[];
      color5?: string;
      gradient5?: string[];
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
      textAlign: string;
      color: string;
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
      textAlign?: string;
      color?: string;
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
    info: {
      main: '#F9F9FB',
      light: '#FFFFFF',
      dark: '#F0F2F3',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#101010',
      secondary: '#999999',
    },
    action: {
      hover: '#F1F1F1',
    },
    icon: {
      main: '#6C757D', // Default icon color
      hover: '#495057', // Icon color on hover
    },
    graph: {
      color1: '#E4F0FF',
      gradient1: ['#DAE8FC', '#E4F0FF'],
      color2: '#70AFFF',
      gradient2: ['#B8D7FF', '#70AFFF'],
      color3: '#2986FE',
      gradient3: ['#8BBEFF', '#2986FE'],
      color4: '#23446F',
      gradient4: ['#5D90D2', '#23446F'],
      color5: '#45B6DE',
      gradient5: ['#B0EAFF', '#45B6DE'],
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR, Arial, sans-serif',
    h6: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#101010',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#808080',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 600,
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
});

export default theme;
