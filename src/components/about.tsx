"use client";
import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

interface AboutItemProps {
    numericalization: string;
    element: string;
}



const AboutItem: React.FC<AboutItemProps> = ({numericalization, element}) => {
  const theme = useTheme();
  return(
    <Grid
    size={{xs:3.8, sm:3.4, md:2.5, lg:2, xl: 1.8}}
    display='flex'
    justifyContent='center'
    >
      <Paper
          elevation={3}
          sx={{
              width: { xs: '30vw', sm: '25vw', md: '20vw', lg: '18vw', xl:'10vw'}, 
              height: 'auto',
              aspectRatio: '1',
              borderRadius: '10px', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.customColor.darkWhite,
              textAlign: 'center',
          }}
      >
        <Typography 
            variant="h3" 
            sx={{ 
                color: theme.palette.primary.main, 
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.75rem' },
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
                fontSize: { xs: '0.6rem', sm: '1rem', md: '1rem', lg: '1.125rem' } 
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
            fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }
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
            fontSize: { xs: '0.6rem', sm: '0.8rem', md:'1.2rem', lg: '1.35rem' }
            }}
        >
        새로운 땅, 새로운 사람들, 그리고 새로운 꿈. <br />
        낯선 곳에서의 시작이 빛날 수 있도록 저희가 당신의 길잡이가 되어 함께 하겠습니다.
      </Typography>

      {/* Bottom statistics information */}
      <Grid container spacing={1.5} justifyContent='center' alignItems='center'>
        <AboutItem
            numericalization="10+"
            element="Year Experience"/>
        <AboutItem
            numericalization="300+"
            element="Members"/>
        <AboutItem
            numericalization="50+"
            element="Mentors"/>
    
      </Grid>

      
    </Box>
  );
}


