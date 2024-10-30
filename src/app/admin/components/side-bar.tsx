import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography, // Import Typography for text
} from '@mui/material';
import Image from 'next/image'; // Import the Image component
import Logo from '../../../../public/images/logo.png'; // Import the logo image
import {
  SpaceDashboardOutlined,
  MarkEmailUnreadOutlined,
  Person,
  GroupOutlined,
  PendingActionsOutlined,
  CreditCardOutlined,
  Settings,
  LogoutOutlined,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <SpaceDashboardOutlined /> },
  { text: '뉴스레터', icon: <MarkEmailUnreadOutlined /> },
  { text: '회원 관리', icon: <Person /> },
  { text: '멘토관리', icon: <GroupOutlined /> },
  { text: '프로그램 관리', icon: <PendingActionsOutlined /> },
  { text: '결제 현황', icon: <CreditCardOutlined /> },
  { text: 'Settings', icon: <Settings /> },
  { text: '로그아웃', icon: <LogoutOutlined /> },
];

const Sidebar: React.FC = () => {
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
          justifyContent: 'center', // Center the container
        }}
      >
        {/* Logo and text container */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Use Image component for the logo */}
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
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            component="button"
            key={index}
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              mb: index === 0 ? 2 : 1,
              border: 'none',
              marginX: 'auto',
              paddingY: '10px',
              width: '90%',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
