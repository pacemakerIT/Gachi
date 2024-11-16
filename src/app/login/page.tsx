'use client';

import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  useTheme,
} from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

export default function LoginPage() {
  const theme = useTheme(); // Access theme here

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        mt: 4,
        p: 3, // Padding inside the box
        borderRadius: '8px', // Rounded corners for the main box
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
        backgroundColor: theme.palette.background.default, // Background from theme
        border: 'none', // Remove the border
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        로그인
      </Typography>

      {/* Email Input */}
      <Box sx={{ mb: 1 }}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="이메일"
          variant="outlined"
          InputProps={{
            sx: {
              height: '40px',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          sx={{
            // Original TextField styling
            height: '40px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Keep the shadow
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px', // Keep the original padding
            },
            // Autofill-specific styles to make the overlay transparent
            '& input:-webkit-autofill': {
              backgroundColor: 'transparent !important', // Remove autofill's blue background
              WebkitBoxShadow: '0 0 0px 1000px transparent inset', // Transparent autofill background
              WebkitTextFillColor: (theme) => theme.palette.text.primary, // Keep text color consistent
              borderRadius: '10px', // Preserve the border-radius
            },
          }}
        />
      </Box>

      {/* Password Input */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="비밀번호"
          variant="outlined"
          type="password"
          InputProps={{
            sx: {
              height: '40px',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          sx={{
            // Original TextField styling
            height: '40px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Keep the shadow
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px', // Keep the original padding
            },
            // Autofill-specific styles to make the overlay transparent
            '& input:-webkit-autofill': {
              backgroundColor: 'transparent !important', // Remove autofill's blue background
              WebkitBoxShadow: '0 0 0px 1000px transparent inset', // Transparent autofill background
              WebkitTextFillColor: (theme) => theme.palette.text.primary, // Keep text color consistent
              borderRadius: '10px', // Preserve the border-radius
            },
          }}
        />
      </Box>

      {/* Auto Login and Lost Password */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="자동 로그인"
          sx={{ color: theme.palette.text.primary }} // Text color from theme
        />
        <Link
          href="/lost-password"
          sx={{ textDecoration: 'none', color: theme.palette.primary.main }}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </Box>

      {/* Login Button */}
      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        로그인
      </Button>

      {/* Sign up link */}
      <Typography align="center" sx={{ mt: 2 }}>
        계정이 없으신가요?{' '}
        <Link
          href="/signup"
          sx={{ textDecoration: 'none', color: theme.palette.primary.main }}
        >
          회원가입
        </Link>
      </Typography>

      {/* Or Divider */}
      <Divider sx={{ my: 3 }}>or</Divider>

      {/* Google Sign Up Button */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{
          mb: 2,
          color: theme.palette.text.primary, // Text color from theme
          mx: 'auto', // Center the button
          borderColor: theme.palette.text.primary, // Outline color from theme
          backgroundColor: theme.palette.background.default, // Background from theme
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>Google로 가입하기</Typography>
      </Button>
    </Box>
  );
}
