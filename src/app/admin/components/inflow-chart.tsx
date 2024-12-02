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
import { MonthlyInflowData } from '@/utils/types';

interface InflowChartProps {
  monthlyInflowData: MonthlyInflowData[];
}

const InflowChart: React.FC<InflowChartProps> = ({ monthlyInflowData }) => {
  const theme = useTheme();
  const colors = [
    theme.palette.graph.color1,
    theme.palette.graph.color2,
    theme.palette.graph.color3,
    theme.palette.graph.color4,
    theme.palette.graph.color5,
  ];
  const chartData = monthlyInflowData.map((item) => ({
    month: new Date(item.month).toLocaleString('default', { month: 'short' }), // Jan, Feb 형식으로 변환
    신규회원: item.new_users,
    신규프로그램: item.new_programs,
    신규세션: item.new_sessions,
  }));
  return (
    <Card
      sx={{
        flex: 1,
        minHeight: 150,
        width: 250,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h6">사용자 유입 현황</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 10]} ticks={[0, 5, 6, 8, 10]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="신규회원"
              stroke={colors[4]}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="신규프로그램"
              stroke={colors[1]}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="신규세션"
              stroke={colors[3]}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default InflowChart;
