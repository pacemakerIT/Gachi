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
];

const InflowChart: React.FC = () => {
  const theme = useTheme();
  const colors = [
    theme.palette.graph.color1,
    theme.palette.graph.color2,
    theme.palette.graph.color3,
    theme.palette.graph.color4,
    theme.palette.graph.color5,
  ];
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
          <LineChart data={inflowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="구글검색"
              stroke={colors[5]}
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
  );
};

export default InflowChart;
