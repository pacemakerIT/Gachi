import * as React from 'react';
import Container from '@mui/material/Container';
import Hero from '@/components/hero';
import Program from '@/components/program';
import Mentor from '@/components/mentor';
import About from '@/components/about';
import Review from '@/components/review';

export default function Home() {
  return (
    <>
      {/* <Container maxWidth="lg"> */}
      <Hero />
      <Program />
      <Mentor />
      <About />
      <Review />
      {/* </Container> */}
    </>
  );
}
