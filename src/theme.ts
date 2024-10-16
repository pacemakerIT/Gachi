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
    customColor: {
      darkWhite: string;
      gray: string;
    };
    customBackground: {
      overlay: string;
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
    customColor?: {
      darkWhite?: string;
      gray?: string;
    };
    customBackground?: {
      overlay?: string;
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
      main: '#2986FE', // Main blue color
    },
    secondary: {
      main: '#101010', // Main dark color
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
      primary: '#101010', // Main text color
      secondary: '#999999', // Gray color
    },
    action: {
      hover: '#2986FE', // Slight hover effect for icon buttons
    },
    customColor: {
      darkWhite: '#F0F2F3',
      gray: '#999999',
    },
    customBackground: {
      overlay: 'rgba(0, 0, 0, 0.5)', // Overlay background
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
    fontFamily: 'IBM Plex Sans KR, sans-serif',
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      textAlign: 'center',
      color: '#666',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default theme;
