"use client";
import React from 'react'
import { Box, Typography, Paper, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

interface AboutItemProps {
  numericalization: string;
  element: string;
}

const AboutItem: React.FC<AboutItemProps> = ({ numericalization, element }) => {
  const theme = useTheme();

  return (
    <Grid
      size={{ xxs: 3.7, xs: 3.6, sm: 3.4, md: 3.3, lg: 3.2, xl: 3.8 }}
      display='flex'
      justifyContent='center'
    >
      <Paper
        elevation={3}
        sx={{
          width: { xxs: '25vw', xs: '24vw', sm: '23vw', md: '22vw', lg: '21vw', xl: '19vw' },
          height: 'auto',
          aspectRatio: '1',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.info.main,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: { xxs: '1.3rem', xs: '1.8rem', sm: '2.3rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
            mb: 1.3
          }}
        >
          {numericalization}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontSize: { xxs: '0.6rem', xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.8rem', xl: '2rem' },
          }}
        >
          {element}
        </Typography>
      </Paper>
    </Grid>

  );
};




export default function About(): JSX.Element {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  let gridSpacing = 6;

  if (isSmall) {
    gridSpacing = 2;
  } else if (isMedium) {
    gridSpacing = 4;
  } else if (isLarge) {
    gridSpacing = 7;
  }

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 5,
      }}
    >
      {/* Top title and description */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          mb: 2,
          fontSize: { xxs: '0.9rem', xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '3rem', xl: '3.5rem' }
        }}
      >
        낯선 해외살이, 든든한 길잡이가 될 수 있도록
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          color: theme.palette.secondary.main,
          mb: 4,
          fontSize: { xxs: '0.55rem', xs: '0.65rem', sm: '1rem', md: '1.15rem', lg: '1.5rem', xl: '1.8rem' }
        }}
      >
        새로운 땅, 새로운 사람들, 그리고 새로운 꿈. <br />
        낯선 곳에서의 시작이 빛날 수 있도록 저희가 당신의 길잡이가 되어 함께 하겠습니다.
      </Typography>

      {/* Bottom statistics information */}
      <Grid container spacing={gridSpacing} justifyContent='center' alignItems='center' >
        <AboutItem
          numericalization="10+"
          element="Year Experience" />
        <AboutItem
          numericalization="300+"
          element="Members" />
        <AboutItem
          numericalization="50+"
          element="Mentors" />
      </Grid>
    </Box>
  );
}


