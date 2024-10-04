import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'; // Import Link

interface LogoProps {
  isMobile: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMobile }) => {
  const theme = useTheme();

  return (
    <Link href="/" passHref style={{ textDecoration: 'none', color: 'black' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {isMobile ? (
          <>
            <Box
              component="h6"
              sx={{
                fontSize: theme.typography.h6.fontSize,
                marginRight: '10px',
                fontFamily: theme.typography.h6.fontFamily,
                color: 'black', // Set color to black
              }}
            >
              Gachi
            </Box>
            <Image
              src="/images/logo.png"
              alt="Gachi.live logo"
              width={isMobile ? 20 : 40} // Set width to 20px if in mobile view, else 40px
              height={isMobile ? 20 : 40} // Keep height consistent
            />
            <Box
              component="h6"
              sx={{
                fontSize: theme.typography.h6.fontSize,
                marginLeft: '10px',
                fontFamily: theme.typography.h6.fontFamily,
                color: 'black', // Set color to black
              }}
            >
              live
            </Box>
          </>
        ) : (
          <>
            <Image
              src="/images/logo.png"
              alt="Gachi.live logo"
              width={40}
              height={40}
            />
            <Box
              component="h6"
              sx={{
                fontSize: theme.typography.h6.fontSize,
                marginLeft: '10px',
                fontFamily: theme.typography.h6.fontFamily,
                color: 'black', // Set color to black
              }}
            >
              Gachi.live
            </Box>
          </>
        )}
      </Box>
    </Link>
  );
};

export default Logo;
