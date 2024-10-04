"use client";
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import HeroFeature from './hero-feature';

export default function HeroComponent(): JSX.Element {

  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: {xxs:'100%', md:'95vw'},
          height: { xxs: '60vh', sm: '70vh', lg: '75vh' },
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.customBackground.overlay,
          borderRadius: { xxs: '0px', md: '10px' },
          left: { xxs:0,md:'50%'},
          ml: {xxs:0, md:'-47.5vw'},
          mt: { xxs: 0, md: '20px' } ,
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

          }}
        >
          <source src="/videos/climbing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Container
          sx={{
            color: theme.palette.primary.main,
            zIndex: 1,
            textAlign: { xxs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xxs: 'center', md: 'flex-start' },
            ml: { xxs: 'none', md: '10%' }
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xxs: '2rem', xs:'2.2rem', sm: '2.3rem', md:'2.4rem', lg: '2.8rem', xl:'3rem' },
              color: theme.palette.info.main,
              mb: 3,
              fontWeight: 'bold'
            }}
          >
            가치 있는 삶을 같이
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              fontSize: { xxs: '0.8rem', xs:'0.9rem', sm: '1rem',md:'1.1rem', lg: '1.2rem',xl:'1.5rem' },
              color: theme.palette.info.main,
              fontWeight: 'bold'
            }}
          >
            해외에 거주하는 한인들이 함께 어려운 일들을 <br />
            해결하고, 가치 있는 삶을 살도록 지원하는 플랫폼
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 8,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.info.main,
              padding: { xxs: '8px 16px', sm: '10px 20px',md:'12px 24px' },
              fontSize: { xxs: '0.75rem',xs:'0.8rem', sm: '1rem',md:'1rem'},
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
            endIcon={<ArrowForwardIcon />}
          >
            프로그램 바로 가기
          </Button>
        </Container>
      </Box>

      {/* Feature Section */}
      <HeroFeature />

    </>
  );
}

