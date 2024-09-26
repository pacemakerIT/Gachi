import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '@/components/hero';
import Program from '@/components/program';
import Mentor from '@/components/mentor';
import About from '@/components/about';
import Review from '@/components/review';

export default function Home() {
  return (
    <Container maxWidth='xl' disableGutters >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, md: 4, lg: 6 }, // Adjust gap between components for different screen sizes
          padding: 0,  // Padding is completely removed for all screen sizes
          width: '100%', // Ensure full width usage across all screen sizes
          margin: 0, // Remove any default margin
          
        }}
      >
        <Hero />
        <Program />
        <Mentor />
        <About />
        <Review />
      </Box>
    </Container>
  );
}
