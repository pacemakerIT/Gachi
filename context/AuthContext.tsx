'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const checkAuth = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/verify/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsLoggedIn(response.ok);
    } catch (error) {
      console.error('Auth check error:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/logout/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setIsLoggedIn(false);
        setMessage('Successfully logged out');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setMessage(null);
    }
  }, [message]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, setIsLoggedIn, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
