// page.tsx
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { Container, Box } from '@mui/material';
import Hero from '@/components/hero';
import Program from '@/components/program';
import Mentor from '@/components/mentor';
import About from '@/components/about';
import Review from '@/components/review';
import { maxContainerWidth } from '../constants';


export default function Home() {
  return (
    <Container sx={{ maxWidth: maxContainerWidth }} disableGutters >
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

        {/* Review Section - Full Width */}
        <Box sx={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          ml: '-50vw',
          backgroundColor: '#F9F9FB',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Review />
        </Box>

      </Box>
    </Container>
  );
}