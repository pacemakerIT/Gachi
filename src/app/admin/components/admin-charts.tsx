'use client';
import React, { useState } from 'react'; // Import useState
import { Box, Button, useTheme } from '@mui/material';
import AdminStatisticsCard from './admin-statistics-card';
import { userStatsData } from './mock-data';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import LegendToggleOutlinedIcon from '@mui/icons-material/LegendToggleOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

const AdminCharts: React.FC = () => {
  const theme = useTheme();
  const [showCharts, setShowCharts] = useState(true); // State to manage visibility of charts

  const statistics = [
    {
      icon: <PersonAddAltOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />,
      value: userStatsData.weeklyNewMembers,
      label: '주간 신규 회원 수',
      gradient: theme.palette.graph.gradient1,
      opacity: 1,
    },
    {
      icon: (
        <PieChartOutlineOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />
      ),
      value: userStatsData.monthlyNewMembers,
      label: '월간 신규 회원 수',
      gradient: theme.palette.graph.gradient2,
      opacity: 0.3,
    },
    {
      icon: <LegendToggleOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />,
      value: userStatsData.memberGrowthRate,
      label: '회원 수 증감율',
      gradient: theme.palette.graph.gradient5,
      opacity: 0.3,
    },
    {
      icon: <EqualizerOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />,
      value: userStatsData.totalMembers,
      label: '총 회원 수',
      gradient: theme.palette.graph.gradient3,
      opacity: 0.3,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, minHeight: '100vh' }}>
      <Button onClick={() => setShowCharts((prev) => !prev)}>
        {showCharts ? 'Hide Charts' : 'Show Charts'}
      </Button>
      {showCharts && ( // Conditional rendering based on state
        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
          {statistics.map((statistic, index) => (
            <AdminStatisticsCard key={index} {...statistic} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AdminCharts;
