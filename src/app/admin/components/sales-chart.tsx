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

const SalesChart: React.FC = () => {
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
  );
};

export default SalesChart;
