'use client';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

import { useTheme } from '@mui/material/styles';
import { MonthlySalesData } from '@/utils/types';

interface SalesChartProps {
  monthlySalesData?: MonthlySalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ monthlySalesData = [] }) => {
  const theme = useTheme();
  const colors = [
    theme.palette.graph.color1,
    theme.palette.graph.color2,
    theme.palette.graph.color3,
    theme.palette.graph.color4,
    theme.palette.graph.color5,
  ];

  // 리차트에서 사용할 데이터 구조 변환 (예: 그래프에서 사용하는 키 이름 매핑)
  // Use default data if `stats` is not provided
  const chartData = monthlySalesData.map((item) => ({
    month: item.month,
    매출: item.totalSales,
    순이익: item.companyProfit,
    무료: item.freeParticipationCount,
  }));

  return (
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
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="매출"
              stroke={colors[4]}
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
  );
};

export default SalesChart;
