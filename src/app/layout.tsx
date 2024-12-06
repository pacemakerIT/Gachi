'use client'; // Add this line to make the component a Client Component

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import { AuthProvider } from 'context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current path is an admin page
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GoogleOAuthProvider clientId="439153763946-ee3hcfab8js8pt535tk93ptdqmakrm15.apps.googleusercontent.com">
              <AuthProvider>
                {/* Conditionally render NavBar and Footer */}
                {!isAdminPage && <NavBar />}
                {children}
                {!isAdminPage && <Footer />}
                <ToastContainer />
              </AuthProvider>
            </GoogleOAuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
