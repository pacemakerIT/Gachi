import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { validateEmail } from '../utils/email-validation'; 

export default function Newsletter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobile
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); // 구독 상태 관리

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setIsSubscribed(true); // Status update when subscription is successful
  };

  return (
    <Grid size={{ xxs: 12, md: 4 }}
      sx={{
        textAlign: isMobile ? 'center' : 'left',
        margin: isMobile ? '1rem' : '0',
        ml: !isMobile ? '4rem' : '0',
      }}
    >
      {!isMobile && (
        <Typography
          variant='subtitle1'
          sx={{ color: theme.palette.customColor?.gray, mb: '1rem' }}
        >
          NEWSLETTER
        </Typography>
      )}

      {isSubscribed ? ( // Display thank you message when subscription is successful
        <Typography
          variant='h6'
          sx={{
            color: theme.palette.primary.main,
            mb: '1rem',
            mt: isMobile ? '-1rem' : '1rem',
          }}
        >
          뉴스레터를 신청해 주셔서 감사합니다. <br /> 매주 새로운 소식을 이메일로 만나보세요!
        </Typography>
      ) : (
        <>
          {isMobile && (
            <Typography
              variant='h6'
              sx={{
                color: theme.palette.text.secondary,
                mb: '1rem',
                mt: '-1rem'
              }}
            >
              뉴스레터를 통해 <br /> 매주 새로운 소식을 만나보세요!
            </Typography>
          )}

          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%',
              maxWidth: isMobile ? '100%' : '500px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              margin: isMobile ? '0 auto' : '0',
              alignItems: {xxs:'center', md:'flex-start'},
            }}
          >
            <TextField
              variant="outlined"
              label="Your email"
              size="small"
              fullWidth={isMobile}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? '유효한 이메일을 입력해 주세요.' : ''}
              sx={{
                flex: 1,
                maxWidth: isMobile ? '90%' : '300px',
                mb: { xxs: '0.5rem', md: 0 },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: theme.palette.primary.main,
                whiteSpace: 'nowrap',
                width: isMobile ? '90%' : 'auto',
                flexShrink: { md: 0 },
                borderRadius: '8px',
              }}
            >
              Subscribe
            </Button>
          </Box>

          {!isMobile && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.customColor?.gray,
                mt: '0.5rem',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </Typography>
          )}
        </>
      )}
    </Grid>
  );
}
