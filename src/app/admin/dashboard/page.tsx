// src/app/admin/dashboard/page.tsx
import React from 'react';
import { Box } from '@mui/material';
import UserStatsCard from '../components/user-stats-card';
import SalesChart from '../components/sales-chart';
import MentorTable from '../components/mentor-table';
import ProgramTable from '../components/program-table';
import {
  PieChartCard,
  programData,
  fieldData,
} from '../components/pie-chart-card';
import InflowChart from '../components/inflow-chart';

// Note: No need to import AdminLayout here

const DashboardPage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default DashboardPage;
