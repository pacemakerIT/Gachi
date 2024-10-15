'use client';

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Typography, AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useTheme } from '@mui/material/styles';
import Logo from '../../components/logo';

const drawerWidth = 240;

const AdminDashboard: React.FC = () => {
  const theme = useTheme();

  const menuItems = [
    { text: 'Dashboard', icon: <SpaceDashboardOutlinedIcon /> },
    { text: '뉴스레터', icon: <MarkEmailUnreadOutlinedIcon /> },
    { text: '회원 관리', icon: <PersonIcon /> },
    { text: '멘토관리', icon: <GroupOutlinedIcon /> },
    { text: '프로그램 관리', icon: <PendingActionsOutlinedIcon /> },
    { text: '결제 현황', icon: <CreditCardOutlinedIcon /> },
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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'white', border: 'none' },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Logo isMobile={false} />
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
            component="button"
            key={index}
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              mb: 1,
              border: 'none', // Ensures there is no border
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                '& .MuiListItemIcon-root': { color: 'white' },
              },
              '& .MuiListItemIcon-root': { color: 'black' },
              transition: 'background-color 0.3s ease',
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
            <Typography variant="h6" sx={{ color: 'black', ml: 2 }}>Dashboard</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', backgroundColor: '#f1f1f1', borderRadius: 1, px: 2 }}>
              <SearchIcon sx={{ color: '#999' }} />
              <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1, color: 'black' }} />
            </Box>
            <IconButton>
              <NotificationsIcon sx={{ color: 'black' }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

          {/* 서비스 사용자 현황 & 매출 현황 */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">서비스 사용자 현황</Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Card sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography variant="body1">주간 신규 회원 수</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography variant="body1">월간 신규 회원 수</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography variant="body1">회원 수 증감율</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography variant="body1">총 회원 수</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">매출 현황</Typography>
                {/* Add wavy graph component here */}
              </CardContent>
            </Card>
          </Box>

          {/* 멘토 리스트 & 인기 프로그램 */}
          <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">인기 멘토</Typography>
                {/* Add leaderboard table for 멘토 */}
                <Typography variant="body1"># | 멘토 | 프로그램 | 매칭 현황 | 리뷰</Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">인기 프로그램</Typography>
                {/* Add leaderboard table for 프로그램 */}
                <Typography variant="body1"># | 프로그램 | 멘토 | 가격 | 누적 판매수 | 누적 판매액</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Pie charts & 사용자 유입 현황 */}
          <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">프로그램별 신청비율</Typography>
                {/* Add Pie Chart component here */}
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">분야별 신청 비율</Typography>
                {/* Add Pie Chart component here */}
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">사용자 유입 현황</Typography>
                {/* Add wavy graph component here */}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
