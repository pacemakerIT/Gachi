'use client';

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Typography, AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useTheme } from '@mui/material/styles'; // To use theme values
import Logo from '../../components/logo'; // Import the Logo component

const drawerWidth = 240;

const AdminDashboard: React.FC = () => {
  const theme = useTheme(); // Get theme values

  const menuItems = [
    { text: 'Dashboard', icon: <DonutLargeOutlinedIcon /> },
    { text: 'Leaderboard', icon: <BarChartIcon /> },
    { text: '뉴스레터', icon: <GroupOutlinedIcon /> },
    { text: '회원 관리', icon: <PersonIcon /> },
    { text: '멘토관리', icon: <GroupOutlinedIcon /> },
    { text: '프로그램 관리', icon: <ShoppingCartOutlinedIcon /> },
    { text: '결제 현황', icon: <TimelineOutlinedIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: '로그아웃', icon: <LogoutOutlinedIcon /> }
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            backgroundColor: 'white',
            border: 'none' // Remove border from Drawer paper
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Sidebar Logo */}
          <Logo isMobile={false} />
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              component="button"
              key={index}
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px', // Adjusted rounded corners
                mb: 1,
                outline: 'none', // Remove outline
                border: 'none', // Remove border from ListItem
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Use the primary color from theme
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white', // Change icon color on hover
                  },
                },
                '& .MuiListItemIcon-root': {
                  color: 'black', // Icon color when not hovered
                },
                transition: 'background-color 0.3s ease', // Smooth hover transition
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Left Section: Logo and Title */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: 'black', ml: 2 }}>
                Dashboard
              </Typography>
            </Box>

            {/* Middle Section: Search Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', backgroundColor: '#f1f1f1', borderRadius: 1, px: 2 }}>
              <SearchIcon sx={{ color: '#999' }} />
              <InputBase
                placeholder="Search…"
                sx={{ ml: 1, flex: 1, color: 'black' }}
              />
            </Box>

            {/* Right Section: Notifications & Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <NotificationsIcon sx={{ color: 'black' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>

          {/* Dashboard Widgets */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {/* Weekly New Users */}
            <Box sx={{ flex: '1 1 300px' }}>
              <Card sx={{ boxShadow: 'none', outline: 'none' }}> {/* Remove shadow and outline */}
                <CardContent>
                  <Typography variant="h6">주간 신규 회원 수</Typography>
                  <Typography variant="h3" color="primary">100</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Monthly New Users */}
            <Box sx={{ flex: '1 1 300px' }}>
              <Card sx={{ boxShadow: 'none', outline: 'none' }}> {/* Remove shadow and outline */}
                <CardContent>
                  <Typography variant="h6">월간 신규 회원 수</Typography>
                  <Typography variant="h3" color="primary">300</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Retention Rate */}
            <Box sx={{ flex: '1 1 300px' }}>
              <Card sx={{ boxShadow: 'none', outline: 'none' }}> {/* Remove shadow and outline */}
                <CardContent>
                  <Typography variant="h6">회원 수 증감률</Typography>
                  <Typography variant="h3" color="primary">10%</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Additional dashboard components like charts */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4 }}>
            {/* Example chart area */}
            <Box sx={{ flex: '1 1 600px' }}>
              <Card sx={{ boxShadow: 'none', outline: 'none' }}> {/* Remove shadow and outline */}
                <CardContent>
                  <Typography variant="h6">매출 현황</Typography>
                  {/* Insert chart component here */}
                </CardContent>
              </Card>
            </Box>

            {/* Popular programs */}
            <Box sx={{ flex: '1 1 300px' }}>
              <Card sx={{ boxShadow: 'none', outline: 'none' }}> {/* Remove shadow and outline */}
                <CardContent>
                  <Typography variant="h6">인기 프로그램</Typography>
                  <Typography variant="body1">프로그램 A (20 리뷰)</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
