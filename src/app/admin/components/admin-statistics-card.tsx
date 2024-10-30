'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface AdminStatisticsCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  gradient: string[];
  opacity: number;
}

const AdminStatisticsCard: React.FC<AdminStatisticsCardProps> = ({
  icon,
  value,
  label,
  gradient,
  opacity,
}) => {
  return (
    <Card
      sx={{
        flex: 1,
        height: 150,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
          opacity,
          zIndex: 0,
          borderRadius: 'inherit',
        }}
      />
      <CardContent sx={{ padding: 2, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            width: 40,
            height: 40,
            mb: 1,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          {value !== undefined ? value : 'N/A'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black', mt: 0.5 }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdminStatisticsCard;
