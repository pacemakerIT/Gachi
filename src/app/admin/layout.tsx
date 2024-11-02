// src/app/admin/layout.tsx
'use client';

import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/side-bar';
import Header from './components/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
