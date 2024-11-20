// src/app/admin/dashboard/page.tsx
import React from 'react';
import { Box } from '@mui/material';
import UserStatsCard from '../components/user-stats-card';
import SalesChart from '../components/sales-chart';
import MentorTable from '../components/mentor-table';
import ProgramTable from '../components/program-table';
import { PieChartCard } from '../components/pie-chart-card';
import InflowChart from '../components/inflow-chart';
import { fetchDashboardData } from '@/utils/api';
import { DashboardDataResponse } from '@/utils/types';

const DashboardPage = async () => {
  // Fetch dashboard data
  const dashboardData: DashboardDataResponse | null =
    await fetchDashboardData();
  if (!dashboardData) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <h2>데이터를 가져오는데 실패했습니다.</h2>
      </Box>
    );
  }
  const topicParticipationData =
    dashboardData?.topicParticipation.map((item) => ({
      name: item.topic,
      value: item.participation_count,
    })) || [];

  const industryParticipationData =
    dashboardData?.industryParticipation.map((item) => ({
      name: item.industry,
      value: item.participation_count,
    })) || [];

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
        {/* User Stats */}
        <UserStatsCard stats={dashboardData.stats} />
        {/* Sales Chart */}
        <SalesChart monthlySalesData={dashboardData.monthlySalesData} />;
      </Box>

      <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
        {/* Mentor Table */}
        <MentorTable mentorData={dashboardData.popularMentors} />

        {/* Program Table */}
        <ProgramTable programData={dashboardData.popularPrograms} />
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Pie Charts */}
        <PieChartCard
          title="프로그램별 신청비율"
          data={topicParticipationData}
        />
        <PieChartCard
          title="분야별 신청 비율"
          data={industryParticipationData}
        />
        {/* Inflow Chart */}
        <InflowChart monthlyInflowData={dashboardData.monthlyInflowData} />
      </Box>
    </>
  );
};

export default DashboardPage;
