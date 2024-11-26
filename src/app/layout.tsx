// root-layout.tsx
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import { AuthProvider } from 'context/AuthContext';

import { GoogleOAuthProvider } from '@react-oauth/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GoogleOAuthProvider clientId="439153763946-ee3hcfab8js8pt535tk93ptdqmakrm15.apps.googleusercontent.com">
              <AuthProvider>
                <NavBar />
                {children}
                <Footer />
              </AuthProvider>
            </GoogleOAuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
