"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
    fontSize: { xs: '2.2rem', sm: '2.5rem', md: '2.8rem', lg: '3rem' } 
  };
  
  const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {

    const theme = useTheme();

    return(

      <Grid 
        size={{ xs: 6, md:3}} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: 'auto', md: '100%' }, 
          flexDirection: 'row', 
          gap: { xs: 2, md: 2 }, 
          
        }}>

      <Box display="flex" alignItems="center" justifyContent="flex-start" >
      {icon}
        <Box sx={{ ml: { xs: 1.5, sm: 2, md: 2.5 }, mb: 1 }}> 
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
               fontSize: 'clamp(0.875rem, 2vw, 1.15rem)',
               textAlign: 'left', 
               mb: 0.5
          
            }}
          >
            {title}
          </Typography>
          <Box></Box>
          <Typography 
            variant="caption" 
            
            sx={{
              color: theme.palette.customColor.gray,
              fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
              whiteSpace: 'nowrap', 
              overflow: 'hidden',
              textOverflow: 'ellipsis', 
              textAlign: 'left', 
              fontWeight: 'bold'
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
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    const features: FeatureItemProps[] = [
      {
        icon: <CalendarMonthOutlinedIcon sx={iconSizeSx} />,
        title: '프로그램',
        description: isMobile ? '다양한 분야의 이벤트' : '교육, 모임, 네트워킹 등의 다양한 이벤트' 
      },
      {
        icon: <MenuBookOutlinedIcon sx={iconSizeSx} />,
        title: '멘토링',
        description: isMobile ? '1:1 맞춤 멘토링' : '당신을 위한 1:1 맞춤 멘토링'  
      },
      {
        icon: <ChatOutlinedIcon sx={iconSizeSx} />,
        title: '피드백',
        description: isMobile ? '당신의 소중한 피드백' : '소중한 피드백을 들려주세요.'
      },
      {
        icon: <SecurityOutlinedIcon sx={iconSizeSx} />,
        title: '안전 결제',
        description: '100% 안전한 결제'
      }
    ];
  
    return (
        <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.customColor.darkWhite,
          boxShadow: { xs: 'none', sm: 'none', md: '0 4px 8px rgba(0, 0, 0, 0.1)' },  
          borderRadius: { xs: 'none', md: '10px',lg:'16px' },  
          padding: { xs: '1rem', md: '1.6rem', lg: '2.5rem' },
          mt: { xs: '-2vh', sm: '-4vh', md: '-9.6vh',lg:'-13vh'},
          zIndex: 2,
          position: 'relative',
          maxWidth: { xs: '100%', md: '95%', lg: '85%' },
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px', 
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center'}}> 
          <Grid 
            container  
            spacing={{ xs: 2, sm: 6, md: 8, lg: 12 }} 
            justifyContent={{ xs: 'center', md: 'space-between' }} >


                {features.map((feature, index) => (             //  Refactoring FeatureItem into an array function 
                    <FeatureItem 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    />
                ))}
          </Grid>
        </Container>
      </Box>
    )
}