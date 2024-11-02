import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/side-bar';
import Header from './components/header';
import UserStatsCard from './components/user-stats-card';
import SalesChart from './components/sales-chart';
import MentorTable from './components/mentor-table';
import ProgramTable from './components/program-table';
import {
  PieChartCard,
  programData,
  fieldData,
} from './components/pie-chart-card';
import InflowChart from './components/inflow-chart';

const AdminDashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box
          sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, minHeight: '100vh' }}
        >
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <UserStatsCard />
            <SalesChart />
          </Box>
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <MentorTable />
            <ProgramTable />
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <PieChartCard title="프로그램별 신청비율" data={programData} />
            <PieChartCard title="분야별 신청 비율" data={fieldData} />
            <InflowChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
