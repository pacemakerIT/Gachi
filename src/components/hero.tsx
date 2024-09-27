"use client";
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import HeroFeature from './hero-feature';
import { useTheme } from '@mui/material/styles';


export default function HeroComponent(): JSX.Element {

  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', sm: '70vh', lg: '75vh' }, // Adjust height for different screen sizes
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.customBackground.overlay,
          borderRadius: '10px'
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
            objectFit: 'cover',
            zIndex: -1,
            borderRadius: '10px'
          }}
        >
          <source src="/videos/climbing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Container
          sx={{
            color: theme.palette.text.secondary,
            zIndex: 1,
            textAlign: { xs: 'center', lg: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            ml: {xs: 'none', md:'10%' }
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', lg: '3.5rem' },
              color: theme.palette.text.secondary,
              mb: 3,
              fontWeight:'bold'
            }}
          >
            가치 있는 삶을 같이
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            gutterBottom 
            sx={{
              fontSize: { xs: '0.99rem', sm: '1.25rem',lg: '1.4rem' },
              color: theme.palette.text.secondary,
            }}
          >
            해외에 거주하는 한인들이 함께 어려운 일들을 <br/>
            해결하고, 가치 있는 삶을 살도록 지원하는 플랫폼
          </Typography>
          <Button 
          variant="contained" 
          sx={{
            mt: 5,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary, 
            padding: { xs: '8px 16px', lg: '10px 18px' }, 
            fontWeight: 'bold',
          }} 
          endIcon={<ArrowForwardIcon />}
        >
          프로그램 바로 가기
        </Button>
        </Container>
      </Box>

      {/* Feature Section */}
      <HeroFeature/>
      
    </>
  );
}
