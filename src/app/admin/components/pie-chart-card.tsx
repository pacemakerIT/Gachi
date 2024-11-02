'use client';

import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from '@mui/material/styles';

const programData = [
  { name: 'IT', value: 30 },
  { name: '어드민', value: 25 },
  { name: '디자인', value: 20 },
  { name: '마케팅', value: 15 },
  { name: '논프로핏', value: 10 },
];

const fieldData = [
  { name: 'IT', value: 20 },
  { name: '어드민', value: 30 },
  { name: '디자인', value: 25 },
  { name: '마케팅', value: 15 },
  { name: '논프로핏', value: 10 },
];

const PieChartCard: React.FC<{
  title: string;
  data: { name: string; value: number }[];
}> = ({ title, data }) => {
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
        width: 70,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              dataKey="value"
              isAnimationActive={false}
              fill="#8884d8"
              label={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {data.map((item, index) => (
            <Box
              key={item.name}
              sx={{ display: 'flex', alignItems: 'center', mr: 1 }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: colors[index],
                  borderRadius: '50%',
                  mr: 0.5,
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// Exporting the component and the datasets
export { PieChartCard, programData, fieldData };
