'use client';

import React from 'react';
import { Box, Drawer, List, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png';
import {
  SpaceDashboardOutlined,
  MarkEmailUnreadOutlined,
  Person,
  PendingActionsOutlined,
  CreditCardOutlined,
  Settings,
  LogoutOutlined,
} from '@mui/icons-material';
import Link from 'next/link';

const drawerWidth = 240;

const menuItems = [
  {
    text: 'Dashboard',
    icon: <SpaceDashboardOutlined />,
    path: '/admin/dashboard',
  },
  {
    text: '뉴스레터',
    icon: <MarkEmailUnreadOutlined />,
    path: '/admin/newsletter',
  },
  { text: '회원 관리', icon: <Person />, path: '/admin/users' },
  // Removed the mentor management item
  {
    text: '프로그램 관리',
    icon: <PendingActionsOutlined />,
    path: '/admin/programs',
  },
  {
    text: '결제 현황',
    icon: <CreditCardOutlined />,
    path: '/admin/transactions',
  },
  { text: 'Settings', icon: <Settings />, path: '/admin/settings' },
  { text: '로그아웃', icon: <LogoutOutlined />, path: '#' }, // Placeholder for logout
];

const Sidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'white',
          border: 'none',
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
          <Typography variant="h6" sx={{ ml: 1, textAlign: 'center' }}>
            Gachi.Live
          </Typography>
        </Box>
      </Box>
      <List
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {menuItems.map((item, index) => (
          <Link href={item.path} key={index} passHref>
            <Button
              startIcon={item.icon}
              variant="text" // or "contained" based on your design choice
              sx={{
                width: '154.42px', // Set consistent width
                height: '48.5px', // Set consistent height
                justifyContent: 'flex-start',
                textAlign: 'left',
                padding: '0 10px', // Adjust padding as needed
                margin: index === 1 ? '16px 0' : '8px 0', // Add extra margin for the "뉴스레터" button
                color: theme.palette.text.primary,
                borderRadius: '8px', // Set rounded corners
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Use theme's primary color for hover
                  color: theme.palette.background.default, // Change text color if needed
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark, // Optional: Darker shade on active
                },
                '& .MuiButton-startIcon': {
                  marginRight: '16px', // Increase gap between icon and text
                  paddingLeft: '4px',
                },
              }}
            >
              {item.text}
            </Button>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
