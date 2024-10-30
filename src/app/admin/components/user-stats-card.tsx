import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  PersonAddAltOutlined,
  PieChartOutlineOutlined,
  LegendToggleOutlined,
  EqualizerOutlined,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const userStatsData = {
  weeklyNewMembers: 50,
  monthlyNewMembers: 200,
  memberGrowthRate: '25%',
  totalMembers: 1200,
};

const UserStatsCard: React.FC = () => {
  const theme = useTheme();

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
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'left', mb: 1 }}>
          서비스 사용자 현황
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          {[
            {
              icon: (
                <PersonAddAltOutlined sx={{ color: 'white', fontSize: 20 }} />
              ),
              value: userStatsData.weeklyNewMembers,
              label: '주간 신규 회원 수',
              gradient: theme.palette.graph.gradient1,
              opacity: 1, // Fully opaque background
            },
            {
              icon: (
                <PieChartOutlineOutlined
                  sx={{ color: 'white', fontSize: 20 }}
                />
              ),
              value: userStatsData.monthlyNewMembers,
              label: '월간 신규 회원 수',
              gradient: theme.palette.graph.gradient2,
              opacity: 0.3,
            },
            {
              icon: (
                <LegendToggleOutlined sx={{ color: 'white', fontSize: 20 }} />
              ),
              value: userStatsData.memberGrowthRate,
              label: '회원 수 증감율',
              gradient: theme.palette.graph.gradient5,
              opacity: 0.3,
            },
            {
              icon: <EqualizerOutlined sx={{ color: 'white', fontSize: 20 }} />,
              value: userStatsData.totalMembers,
              label: '총 회원 수',
              gradient: theme.palette.graph.gradient1,
              opacity: 1,
            },
          ].map(({ icon, value, label, gradient, opacity }, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                height: 150,
                width: 150,
                position: 'relative',
                padding: 1,
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
                  opacity,
                  background: `linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
                  zIndex: 0,
                  borderRadius: 'inherit',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 0.5,
                  zIndex: 1,
                  position: 'relative',
                  pt: 0.5,
                  justifyContent: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    mb: 0.5,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  {value !== undefined ? value : 'N/A'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', mt: 0.5 }}>
                  {label}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserStatsCard;
