'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const iconSizeSx = {
  fontSize: {
    xxs: '1.5rem',
    sm: '1.8rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.2rem',
  },
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  const theme = useTheme();

  return (
    <Grid
      size={{ xxs: 6, md: 3 }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xxs: 'auto', md: '100%' },
        flexDirection: { xxs: 'column', md: 'row' },
        gap: 1,
        textAlign: 'center',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        {icon}
        <Box sx={{ ml: { xxs: 1.5 }, mb: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xxs: '0.8rem',
                xs: '1rem',
                sm: '1.2rem',
                md: '1.1rem',
                lg: '1.15rem',
                xl: '1.2rem',
              },
              textAlign: 'left',
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: {
                xxs: '0.65rem',
                xs: '0.83rem',
                sm: '0.9rem',
                md: '0.7rem',
                lg: '0.78rem',
                xl: '0.9rem',
              },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default function HeroFeature() {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features: FeatureItemProps[] = [
    {
      icon: <CalendarMonthOutlinedIcon sx={iconSizeSx} />,
      title: '프로그램',
      description: isMobile
        ? '다양한 분야의 이벤트'
        : '교육, 모임, 네트워킹 등의 다양한 이벤트',
    },
    {
      icon: <MenuBookOutlinedIcon sx={iconSizeSx} />,
      title: '멘토링',
      description: isMobile ? '1:1 맞춤 멘토링' : '당신을 위한 1:1 맞춤 멘토링',
    },
    {
      icon: <ChatOutlinedIcon sx={iconSizeSx} />,
      title: '피드백',
      description: isMobile
        ? '당신의 소중한 피드백'
        : '소중한 피드백을 들려주세요',
    },
    {
      icon: <SecurityOutlinedIcon sx={iconSizeSx} />,
      title: '안전 결제',
      description: '100% 안전한 결제',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.default,
        boxShadow: {
          xxs: 'none',
          sm: 'none',
          md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        borderRadius: { xxs: 'none', sm: 'none', md: '10px', lg: 'none' },
        padding: { xxs: '1rem', md: '1.6rem', lg: '2.5rem' },
        mt: { xxs: '1rem', sm: '2rem', md: '-5rem', lg: '-8rem', xl: '-7rem' },
        zIndex: 2,
        position: 'relative',
        maxWidth: { xxs: '100%', md: '85%', lg: '90%', xl: '100%' },
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          px: { xxs: 2, md: 7 },
        }}
      >
        <Grid
          container
          rowSpacing={{ xxs: 3.5, sm: 3, md: 8, lg: 12 }}
          columnSpacing={{ xxs: 4, sm: 0.5, md: 7 }}
          justifyContent={{ xxs: 'center', md: 'center' }}
        >
          {features.map(
            (
              feature,
              index //  Refactoring FeatureItem into an array function
            ) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}
