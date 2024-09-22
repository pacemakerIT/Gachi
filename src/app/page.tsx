// page.tsx
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import Container from '@mui/material/Container';
import Hero from '@/components/hero';
import Program from '@/components/program';
import Mentor from '@/components/mentor';
import About from '@/components/about';
import Review from '@/components/review';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <Program />
      <Mentor />
      <About />
      <Review />
    </Container>
  );
}
