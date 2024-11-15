'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://127.0.0.1:8000/accounts/google/login/';
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      const data = await response.json();

      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      setIsLoggedIn(true);
      router.push('/');

      return data;
    } catch (error) {
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
            border: 'none',
            borderRadius: '4px',
            backgroundColor: theme.palette.info.main,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
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
            border: 'none',
            borderRadius: '4px',
            backgroundColor: theme.palette.info.main,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
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
