// src/app/admin/components/header.tsx

'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import IosShareOutlined from '@mui/icons-material/IosShareOutlined';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

const Header: React.FC = () => {
  const pathname = usePathname();

  // Determine the title based on the current path
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black', ml: 2 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '50%',
            backgroundColor: '#f1f1f1',
            borderRadius: 1,
            px: 2,
          }}
        >
          <SearchIcon sx={{ color: '#999' }} />
          <InputBase
            placeholder="Search…"
            sx={{ ml: 1, flex: 1, color: 'black' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <NotificationsIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton>
            <IosShareOutlined sx={{ color: 'black ' }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Avatar
              src="https://example.com/avatar.jpg"
              alt="User Avatar"
              sx={{ width: 32, height: 32 }}
            />
            <IconButton onClick={handleMenuOpen}>
              <ArrowDropDown sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Back to Home Page</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
