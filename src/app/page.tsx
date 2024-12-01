import * as React from 'react';
import { Container, Box } from '@mui/material';
import Hero from '@/components/hero';
import Program from '@/components/program';
import Mentor from '@/components/mentor';
import About from '@/components/about';
import Review from '@/components/review';
import { maxContainerWidth } from '../constants';
import { fetchLandingPageData } from '@/utils/api';
import { LandingPageDataResponse } from '@/utils/types';

export default async function Home() {
  let data: LandingPageDataResponse | null = null;

  data = await fetchLandingPageData();

  return (
    <Container sx={{ maxWidth: maxContainerWidth }} disableGutters>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, md: 4, lg: 6 }, // Adjust gap between components for different screen sizes
          padding: 0, // Padding is completely removed for all screen sizes
          width: '100%', // Ensure full width usage across all screen sizes
          margin: 0, // Remove any default margin
        }}
      >
        <Hero />
        <Program programs={data?.programs} />
        <Mentor mentors={data?.mentors} />
        <About />

        {/* Review Section - Full Width */}
        <Box
          sx={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            ml: '-50vw',
            backgroundColor: '#F9F9FB',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Review reviews={data?.reviews} />
        </Box>
      </Box>
    </Container>
  );
}
