"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ShieldIcon from '@mui/icons-material/Shield';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 


interface FeatureItemProps {
  icon: ReactNode;   
  title: string;     
  description: string;
}

const iconSizeSx = {
  fontSize: { xs: '1.875rem', sm: '1.9rem', md: '2.1rem', lg: '2.5rem' }
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <Grid size={{ xs: 6, sm: 6, md: 3 }} display="flex" justifyContent="flex-start">
    <Box display="flex" alignItems="center" justifyContent="flex-start">
    {icon}
      <Box sx={{ml:{xs: 0.8, sm: 1, md: 2, lg: 3 }}}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.05rem', lg: '1.15rem' } 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="caption" 
          color="#999999"
          sx={{
            fontSize: { xs: '0.55', sm: '0.6', md: '0.65', lg: '0.7rem' }
            
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export default function HeroComponent(): JSX.Element {

  const theme = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', sm: '70vh', md: '75vh' }, // Adjust height for different screen sizes
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/videos/climbing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Container
          sx={{
            color: '#fff',
            zIndex: 1,
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              color: '#FFFFFF',
              mb: 3,
            }}
          >
            가치 있는 삶을 같이
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            gutterBottom 
            sx={{
              fontSize: { xs: '0.99rem', sm: '1.25rem', md: '1.4rem' },
              color: '#FFFFFF',
            }}
          >
            해외에 거주하는 한인들이 함께 어려운 일들을 <br/>
            해결하고, 가치 있는 삶을 살도록 지원하는 플랫폼
          </Typography>
          <Button 
          variant="contained" 
          sx={{
            mt: 5,
            backgroundColor: '#2986FE',
            color: '#FFFFFF', 
            padding: { xs: '8px 16px', md: '10px 18px' }, 
            fontWeight: 'bold',
          }} 
          endIcon={<ArrowForwardIcon />}
        >
          프로그램 바로 가기
        </Button>
        </Container>
      </Box>

      {/* Feature Section */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: { xs: 'none', sm: 'none', md: '0 4px 8px rgba(0, 0, 0, 0.1)' },  
          borderRadius: { xs: 'none', sm: 'none', md: '16px' },  
          p: { xs: 2, md: 4 },  
          mt: { xs: '-10px', sm: '-60px', md: '-80px' }, 
          zIndex: 2,
          position: 'relative',
          maxWidth: { xs: '100%', md: '80%', lg: '75%' }, 
          mx: 'auto',
        }}
      >
        <Container>
          <Grid 
            container  
            spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} 
            justifyContent={{ xs: 'center', md: 'space-between', lg: 'flex-start' }} >
            {/* 프로그램 */}
            <FeatureItem 
              icon={<CalendarTodayIcon sx={iconSizeSx}  />} 
              title="프로그램" 
              description={isClient ? (isMobile ? "다양한 분야의 이벤트" : "교육, 모임, 네트워킹 등의 다양한 이벤트") : ""}
            />
            
            {/* 멘토링 */}
            <FeatureItem 
              icon={<SchoolIcon sx={iconSizeSx}  />} 
              title="멘토링" 
              description={isClient ? (isMobile ? "1:1 맞춤 멘토링" : "당신만을 위한 1:1 맞춤 멘토링") : ""} 
            />
            
            {/* 피드백 */}
            <FeatureItem 
              icon={<FeedbackIcon sx={iconSizeSx}  />} 
              title="피드백" 
              description={isClient ? (isMobile ? "당신의 소중한 피드백" : "소중한 피드백을 들려주세요.") : ""}
            />
            
            {/* 안전 결제 */}
            <FeatureItem 
              icon={<ShieldIcon sx={iconSizeSx}  />} 
              title="안전 결제" 
              description={isClient ? (isMobile ? "100% 안전한 결제" : "100% 안전한 결제") : ""}
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
}
