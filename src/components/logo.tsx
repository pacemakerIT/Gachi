import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

const Logo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src="/images/logo.png" alt="Gachi.live logo" width={40} height={40} />
      <Box
        component="h6"
        sx={{
          fontSize: theme.typography.h6.fontSize,
          marginLeft: '10px',
          fontFamily: theme.typography.h6.fontFamily,
        }}
      >
        Gachi.live
      </Box>
    </Box>
  );
};

export default Logo;
