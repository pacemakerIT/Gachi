'use client';

import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import axios from 'axios';
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
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useAuth } from 'context/AuthContext';

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await axios.post(`${baseUrl}/user/auth/google/`, {
          tokenResponse,
        });

        setIsLoggedIn(true);
        router.push('/about');
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert('Failed to login with Google');
        }
      }
    },
    flow: 'auth-code',
  });

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/user/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();
      setIsLoggedIn(true);

      if (data.user.userTypeId === '8c1355cf-b334-40fd-9076-890c52be159b')
        router.push('/admin/dashboard');
      else router.push('/');

      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Failed to login');
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={login}
      sx={{
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        mt: 4,
        p: 3,
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.background.default,
        border: 'none',
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            sx: {
              height: '40px',
              display: 'flex',
              alignItems: 'center',
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
        {/* Error Message */}
        {error && (
          <Typography color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
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
          sx={{ color: theme.palette.text.primary }}
        />
        <Link
          href="/lost-password"
          sx={{ textDecoration: 'none', color: theme.palette.primary.main }}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </Box>

      {/* Login Button */}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
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
        onClick={handleGoogleLogin}
        sx={{
          mb: 2,
          color: theme.palette.text.primary,
          mx: 'auto',
          borderColor: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>Google로 가입하기</Typography>
      </Button>
    </Box>
  );
}
