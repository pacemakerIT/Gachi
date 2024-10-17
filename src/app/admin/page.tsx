'use client';

import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
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
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import Logo from '../../components/logo';

const drawerWidth = 240;

const pieData = [
  { name: 'IT', value: 30 },
  { name: '어드민', value: 25 },
  { name: '디자인', value: 20 },
  { name: '마케팅', value: 15 },
  { name: '논프로핏', value: 10 },
];

const mentorData = [
  { rank: 1, mentor: 'John Doe', program: 'IT Mentoring', match: '5/5', reviews: '4.8' },
  { rank: 2, mentor: 'Jane Smith', program: 'Design Mentoring', match: '4/5', reviews: '4.6' },
  // Add more data
];

const programData = [
  { rank: 1, program: 'Web Development', mentor: 'John Doe', price: '$200', sales: 150, totalSales: '$30,000' },
  { rank: 2, program: 'Graphic Design', mentor: 'Jane Smith', price: '$150', sales: 120, totalSales: '$18,000' },
  // Add more data
];

const salesData = [
  { month: 'Jan', 매출: 300, 경비: 200, 순이익: 100, 무료: 50 },
  { month: 'Feb', 매출: 400, 경비: 250, 순이익: 150, 무료: 60 },
  // Add more data
];

const inflowData = [
  { month: 'Jan', 구글검색: 100, 도메인: 200, 소셜미디어: 150, 친구추천: 100, 카카오톡: 50 },
  { month: 'Feb', 구글검색: 120, 도메인: 220, 소셜미디어: 160, 친구추천: 110, 카카오톡: 60 },
  // Add more data
];

const AdminDashboard: React.FC = () => {
  const theme = useTheme();
  const colors = [
    theme.palette.graph.color1,
    theme.palette.graph.color2,
    theme.palette.graph.color3,
    theme.palette.graph.color4,
    theme.palette.graph.color5,
  ];

  const menuItems = [
    { text: 'Dashboard', icon: <SpaceDashboardOutlinedIcon /> },
    { text: '뉴스레터', icon: <MarkEmailUnreadOutlinedIcon /> },
    { text: '회원 관리', icon: <PersonIcon /> },
    { text: '멘토관리', icon: <GroupOutlinedIcon /> },
    { text: '프로그램 관리', icon: <PendingActionsOutlinedIcon /> },
    { text: '결제 현황', icon: <CreditCardOutlinedIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: '로그아웃', icon: <LogoutOutlinedIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'white', border: 'none' },
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
                border: 'none',
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

          {/* 1st Row: 서비스 사용자 현황 & 매출 현황 */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Card sx={{ flex: 1, minHeight: 250 }}>
              <CardContent>
                <Typography variant="h6">서비스 사용자 현황</Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Card sx={{ flex: 1, background: `linear-gradient(${theme.palette.graph.gradient1})`, minHeight: 150 }}>
                    <CardContent>
                      <Typography variant="body1">주간 신규 회원 수</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1, background: `linear-gradient(${theme.palette.graph.gradient2})`, minHeight: 150 }}>
                    <CardContent>
                      <Typography variant="body1">월간 신규 회원 수</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1, background: `linear-gradient(${theme.palette.graph.gradient5})`, minHeight: 150 }}>
                    <CardContent>
                      <Typography variant="body1">회원 수 증감율</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ flex: 1, background: `linear-gradient(${theme.palette.graph.gradient3})`, minHeight: 150 }}>
                    <CardContent>
                      <Typography variant="body1">총 회원 수</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, minHeight: 250 }}>
              <CardContent>
                <Typography variant="h6">매출 현황</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="매출" stroke={colors[0]} strokeWidth={2} />
                    <Line type="monotone" dataKey="경비" stroke={colors[1]} strokeWidth={2} />
                    <Line type="monotone" dataKey="순이익" stroke={colors[2]} strokeWidth={2} />
                    <Line type="monotone" dataKey="무료" stroke={colors[3]} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>

          {/* 2nd Row: 인기 멘토 & 인기 프로그램 */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">인기 멘토</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>멘토</TableCell>
                      <TableCell>프로그램</TableCell>
                      <TableCell>매칭 현황</TableCell>
                      <TableCell>리뷰</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mentorData.map((mentor) => (
                      <TableRow key={mentor.rank}>
                        <TableCell>{mentor.rank}</TableCell>
                        <TableCell>{mentor.mentor}</TableCell>
                        <TableCell>{mentor.program}</TableCell>
                        <TableCell>{mentor.match}</TableCell>
                        <TableCell>{mentor.reviews}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">인기 프로그램</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>프로그램</TableCell>
                      <TableCell>멘토</TableCell>
                      <TableCell>가격</TableCell>
                      <TableCell>누적 판매수</TableCell>
                      <TableCell>누적 판매액</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {programData.map((program) => (
                      <TableRow key={program.rank}>
                        <TableCell>{program.rank}</TableCell>
                        <TableCell>{program.program}</TableCell>
                        <TableCell>{program.mentor}</TableCell>
                        <TableCell>{program.price}</TableCell>
                        <TableCell>{program.sales}</TableCell>
                        <TableCell>{program.totalSales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Box>

          {/* 3rd Row: 프로그램별 신청비율, 분야별 신청 비율, 사용자 유입 현황 */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">프로그램별 신청비율</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">분야별 신청 비율</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6">사용자 유입 현황</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={inflowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="구글검색" stroke={colors[0]} strokeWidth={2} />
                    <Line type="monotone" dataKey="도메인" stroke={colors[1]} strokeWidth={2} />
                    <Line type="monotone" dataKey="소셜미디어" stroke={colors[2]} strokeWidth={2} />
                    <Line type="monotone" dataKey="친구추천" stroke={colors[3]} strokeWidth={2} />
                    <Line type="monotone" dataKey="카카오톡" stroke={colors[4]} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
