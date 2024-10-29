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
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import LegendToggleOutlinedIcon from '@mui/icons-material/LegendToggleOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
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
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
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
  {
    rank: 1,
    mentor: 'John Doe',
    program: 'IT Mentoring',
    match: '5/5',
    reviews: '4.8',
  },
  {
    rank: 2,
    mentor: 'Jane Smith',
    program: 'Design Mentoring',
    match: '4/5',
    reviews: '4.6',
  },
  // Add more data
];

const programData = [
  {
    rank: 1,
    program: 'Web Development',
    mentor: 'John Doe',
    price: '$200',
    sales: 150,
    totalSales: '$30,000',
  },
  {
    rank: 2,
    program: 'Graphic Design',
    mentor: 'Jane Smith',
    price: '$150',
    sales: 120,
    totalSales: '$18,000',
  },
  // Add more data
];

const salesData = [
  { month: 'Jan', 매출: 300, 경비: 200, 순이익: 100, 무료: 50 },
  { month: 'Feb', 매출: 400, 경비: 250, 순이익: 150, 무료: 60 },
  { month: 'Mar', 매출: 350, 경비: 230, 순이익: 120, 무료: 70 },
  { month: 'Apr', 매출: 320, 경비: 210, 순이익: 110, 무료: 55 },
  { month: 'May', 매출: 390, 경비: 260, 순이익: 130, 무료: 65 },
  { month: 'Jun', 매출: 340, 경비: 230, 순이익: 115, 무료: 60 },
  { month: 'Jul', 매출: 370, 경비: 240, 순이익: 125, 무료: 50 },
  { month: 'Aug', 매출: 360, 경비: 240, 순이익: 120, 무료: 55 },
  { month: 'Sep', 매출: 380, 경비: 250, 순이익: 130, 무료: 60 },
  { month: 'Oct', 매출: 400, 경비: 270, 순이익: 140, 무료: 65 },
  { month: 'Nov', 매출: 390, 경비: 260, 순이익: 130, 무료: 60 },
  { month: 'Dec', 매출: 350, 경비: 240, 순이익: 120, 무료: 55 },
];

const inflowData = [
  {
    month: 'Jan',
    구글검색: 100,
    도메인: 200,
    소셜미디어: 150,
    친구추천: 100,
    카카오톡: 50,
  },
  {
    month: 'Feb',
    구글검색: 120,
    도메인: 220,
    소셜미디어: 160,
    친구추천: 110,
    카카오톡: 60,
  },
  {
    month: 'Mar',
    구글검색: 130,
    도메인: 210,
    소셜미디어: 170,
    친구추천: 120,
    카카오톡: 70,
  },
  {
    month: 'Apr',
    구글검색: 140,
    도메인: 230,
    소셜미디어: 180,
    친구추천: 130,
    카카오톡: 75,
  },
  {
    month: 'May',
    구글검색: 150,
    도메인: 240,
    소셜미디어: 190,
    친구추천: 140,
    카카오톡: 80,
  },
  {
    month: 'Jun',
    구글검색: 160,
    도메인: 250,
    소셜미디어: 200,
    친구추천: 150,
    카카오톡: 85,
  },
  {
    month: 'Jul',
    구글검색: 170,
    도메인: 260,
    소셜미디어: 210,
    친구추천: 160,
    카카오톡: 90,
  },
  {
    month: 'Aug',
    구글검색: 180,
    도메인: 270,
    소셜미디어: 220,
    친구추천: 170,
    카카오톡: 95,
  },
  {
    month: 'Sep',
    구글검색: 190,
    도메인: 280,
    소셜미디어: 230,
    친구추천: 180,
    카카오톡: 100,
  },
  {
    month: 'Oct',
    구글검색: 200,
    도메인: 290,
    소셜미디어: 240,
    친구추천: 190,
    카카오톡: 105,
  },
  {
    month: 'Nov',
    구글검색: 210,
    도메인: 300,
    소셜미디어: 250,
    친구추천: 200,
    카카오톡: 110,
  },
  {
    month: 'Dec',
    구글검색: 220,
    도메인: 310,
    소셜미디어: 260,
    친구추천: 210,
    카카오톡: 115,
  },
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
  const userStatsData = {
    weeklyNewMembers: 50,
    monthlyNewMembers: 200,
    memberGrowthRate: '25%',
    totalMembers: 1200,
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
                mb: index === 0 ? 2 : 1,
                border: 'none',
                marginX: 'auto', // Center items horizontally in the drawer
                paddingY: '10px',
                width: '90%', // Set a consistent width
                maxWidth: '200px', // Optional: max width for larger screens
                textAlign: 'center', // Center the text
                display: 'flex',
                justifyContent: 'center', // Center icon and text
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  '& .MuiListItemIcon-root': { color: 'white' },
                },
                '& .MuiListItemIcon-root': { color: 'black', minWidth: '30px' }, // Consistent icon spacing
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
              Dashboard
            </Typography>
            {/* Search bar */}
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
            {/* Dashboard Text Moved Next to Search Bar */}
            {/* Notifications */}
            <IconButton>
              <NotificationsIcon sx={{ color: 'black' }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box
          sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, minHeight: '100vh' }}
        >
          {/* 1st Row: 서비스 사용자 현황 & 매출 현황 */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 150,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <CardContent sx={{ padding: 2 }}>
                {/* Reduced padding */}
                <Typography variant="h6" sx={{ textAlign: 'left', mb: 1 }}>
                  서비스 사용자 현황
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  {[
                    {
                      icon: (
                        <PersonAddAltOutlinedIcon
                          sx={{ color: 'white', fontSize: 20 }}
                        />
                      ),
                      value: userStatsData.weeklyNewMembers,
                      label: '주간 신규 회원 수',
                      gradient: theme.palette.graph.gradient1,
                      opacity: 1, // Fully opaque background
                    },
                    {
                      icon: (
                        <PieChartOutlineOutlinedIcon
                          sx={{ color: 'white', fontSize: 20 }}
                        />
                      ),
                      value: userStatsData.monthlyNewMembers,
                      label: '월간 신규 회원 수',
                      gradient: theme.palette.graph.gradient2,
                      opacity: 0.3, // 30% opacity for the background
                    },
                    {
                      icon: (
                        <LegendToggleOutlinedIcon
                          sx={{ color: 'white', fontSize: 20 }}
                        />
                      ),
                      value: userStatsData.memberGrowthRate,
                      label: '회원 수 증감율',
                      gradient: theme.palette.graph.gradient5,
                      opacity: 0.3,
                    },
                    {
                      icon: (
                        <EqualizerOutlinedIcon
                          sx={{ color: 'white', fontSize: 20 }}
                        />
                      ),
                      value: userStatsData.totalMembers,
                      label: '총 회원 수',
                      gradient: theme.palette.graph.gradient3,
                      opacity: 0.3,
                    },
                  ].map(({ icon, value, label, gradient, opacity }, index) => (
                    <Card
                      key={index}
                      sx={{
                        flex: 1,
                        height: 150, // Ensure square shape
                        width: 150, // Ensure square shape
                        position: 'relative',
                        padding: 1, // Reduced padding
                        overflow: 'hidden', // Hide overflow for rounded corners
                        borderRadius: '16px', // Ensure rounded edges
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Custom shadow for consistency
                      }}
                    >
                      {/* Background Box */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
                          opacity, // Background opacity only
                          zIndex: 0, // Ensure background is behind the content
                          borderRadius: 'inherit', // Match the parent card's rounded corners
                        }}
                      />
                      {/* Icon and Text Container */}
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column', // Stack icon above text
                          alignItems: 'flex-start', // Align items to the left
                          gap: 0.5, // Reduced gap between items
                          zIndex: 1, // Content above background
                          position: 'relative',
                          pt: 0.5, // Reduced top padding for closer alignment
                          justifyContent: 'flex-start', // Align everything to the top
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '50%', // Make it a circle
                            width: 40,
                            height: 40,
                            mb: 0.5, // Small margin below the icon
                          }}
                        >
                          {icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                          }}
                        >
                          {value !== undefined ? value : 'N/A'}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'black',
                            mt: 0.5,
                          }}
                        >
                          {label}
                        </Typography>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 150,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <CardContent>
                <Typography variant="h6">매출 현황</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="매출"
                      stroke={colors[0]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="경비"
                      stroke={colors[1]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="순이익"
                      stroke={colors[2]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="무료"
                      stroke={colors[3]}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>

          {/* 2nd Row: 인기 멘토 & 인기 프로그램 */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 150,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
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

            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 150,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
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
            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 70, // Shrunk width for 프로그램별 신청비율
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <CardContent>
                <Typography variant="h6">프로그램별 신청비율</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius="40%"
                      outerRadius="80%"
                      dataKey="value"
                      isAnimationActive={false}
                      fill="#8884d8"
                      label={false} // Disable labels
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* Horizontal List for the items below the chart */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  {pieData.map((item, index) => (
                    <Box
                      key={item.name}
                      sx={{ display: 'flex', alignItems: 'center', mr: 1 }} // Adjusted margin-right to reduce gaps
                    >
                      {/* Dot with corresponding color */}
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          backgroundColor: colors[index],
                          borderRadius: '50%',
                          mr: 0.5, // Adjusted margin to reduce space between dot and text
                        }}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 70, // Shrunk width for 분야별 신청 비율
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <CardContent>
                <Typography variant="h6">분야별 신청 비율</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius="40%"
                      outerRadius="80%"
                      dataKey="value"
                      isAnimationActive={false}
                      fill="#8884d8"
                      label={false} // Disable labels
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {/* Horizontal List for the items below the chart */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  {pieData.map((item, index) => (
                    <Box
                      key={item.name}
                      sx={{ display: 'flex', alignItems: 'center', mr: 1 }} // Adjusted margin-right to reduce gaps
                    >
                      {/* Dot with corresponding color */}
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          backgroundColor: colors[index],
                          borderRadius: '50%',
                          mr: 0.5, // Adjusted margin to reduce space between dot and text
                        }}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                flex: 1,
                minHeight: 150,
                width: 250, // Increased width for 사용자 유입 현황
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <CardContent>
                <Typography variant="h6">사용자 유입 현황</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={inflowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="구글검색"
                      stroke={colors[0]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="도메인"
                      stroke={colors[1]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="소셜미디어"
                      stroke={colors[2]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="친구추천"
                      stroke={colors[3]}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="카카오톡"
                      stroke={colors[4]}
                      strokeWidth={2}
                    />
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
