// src/app/admin/layout.tsx
'use client';

import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/side-bar';
import Header from './components/header';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Function to determine the title based on the current path
  const getTitle = () => {
    switch (pathname) {
      case '/admin/dashboard':
        return 'Dashboard';
      case '/admin/newsletter':
        return '뉴스레터';
      case '/admin/users':
        return '회원 관리';
      case '/admin/mentors':
        return '멘토 관리';
      case '/admin/programs':
        return '프로그램 관리';
      case '/admin/transactions':
        return '거래 관리';
      case '/admin/settings':
        return '설정';
      default:
        return 'Admin';
    }
  };

  const title = getTitle();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header title={title} />
        <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
