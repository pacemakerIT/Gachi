import React from 'react'

import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface AboutItemProps {
    numericalization: string;
    element: string;
}



const AboutItem: React.FC<AboutItemProps> = ({numericalization, element}) => (
    <Grid
        size={{xs:3.8, sm:3.4, md:3, lg:2.4, xl: 2}}
        display='flex'
        justifyContent='center'
        
    >
    <Paper
        elevation={3}
        sx={{
            width: { xs: '100px', sm: '180px', md: '200px', lg: '220px'}, 
            height:{ xs: '100px', sm: '180px', md: '200px', lg: '220px'}, 
            borderRadius: '16px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F9F9FB',
            textAlign: 'center',
        }}
    >
    <Typography 
        variant="h3" 
        sx={{ 
            color: '#2986FE', 
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.75rem' },
            mb: 0.2
            }}
    >
      {numericalization}
    </Typography>

    <Typography 
        variant="body1" 
        sx={{ 
            color: '#101010',
            fontSize: { xs: '0.6rem', sm: '1rem', md: '1rem', lg: '1.125rem' } 
            }}
    >
      {element}
    </Typography>
    </Paper>
</Grid>    
);

export default function About(): JSX.Element {
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
            color: '#2986FE', 
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
            color: '#101010', 
            mb: 4,
            fontSize: { xs: '0.6rem', sm: '0.8rem', md:'1.2rem', lg: '1.35rem' }
            }}
        >
        새로운 땅, 새로운 사람들, 그리고 새로운 꿈. <br />
        낯선 곳에서의 시작이 빛날 수 있도록 저희가 당신의 길잡이가 되어 함께 하겠습니다.
      </Typography>

      {/* Bottom statistics information */}
      <Grid container spacing={0} justifyContent='center' alignItems='center'>
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


