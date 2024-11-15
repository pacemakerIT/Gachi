'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFormData(formData)) {
      signUpUser(formData);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://127.0.0.1:8000/accounts/google/login/';
  };

  const signUpUser = async (formData: FormData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/');
      } else {
        alert('Failed to Signup');
      }
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  const validateFormData = (formData: FormData) => {
    const namePattern = /^[^\d]+$/;
    if (
      !namePattern.test(formData.firstName) ||
      !namePattern.test(formData.lastName)
    ) {
      alert('이름 필드에는 숫자 없이 문자만 포함되어야 합니다.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return false;
    }

    if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password)
    ) {
      alert('비밀번호는 8자리 이상이며, 대소문자와 숫자를 포함해야 합니다.');
      return false;
    }
    return true;
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '676px',
        mx: 'auto',
        mt: 4,
        p: 3,
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
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
        회원가입
      </Typography>
      <Box
        sx={{
          mb: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            width: '100%',
          }}
        >
          계정을 생성하려면 정보를 입력해주세요.
        </Typography>
      </Box>

      {/* Input Fields */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flex: 1, mr: 1 }}>
          <Typography
            variant="body1"
            sx={{
              mb: 0.5,
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            이름
          </Typography>
          <TextField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            placeholder="e.g. John"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                height: '40px',
                display: 'flex',
                alignItems: 'center', // Align text vertically
              },
            }}
            sx={{
              border: 'none',
              borderRadius: '10px',
              backgroundColor: theme.palette.info.main,
              boxShadow: theme.shadows[3],
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
        </Box>
        <Box sx={{ flex: 1, ml: 1 }}>
          <Typography
            variant="body1"
            sx={{
              mb: 0.5,
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            성
          </Typography>
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            placeholder="e.g. Doe"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                height: '40px',
                display: 'flex',
                alignItems: 'center',
              },
            }}
            sx={{
              border: 'none',
              borderRadius: '10px',
              backgroundColor: theme.palette.info.main,
              boxShadow: theme.shadows[3],
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 0.5,
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          이메일
        </Typography>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="e.g. email@gmail.com"
          variant="outlined"
          InputProps={{
            sx: {
              height: '40px',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          sx={{
            border: 'none',
            borderRadius: '10px',
            backgroundColor: theme.palette.info.main,
            boxShadow: theme.shadows[3],
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 0.5,
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          비밀번호
        </Typography>
        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="비밀번호를 입력하세요"
          variant="outlined"
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
            borderRadius: '10px',
            backgroundColor: theme.palette.info.main,
            boxShadow: theme.shadows[3],
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            mb: 2,
            color: theme.palette.text.secondary,
            textAlign: 'center',
          }}
        >
          비밀번호는 8자리 이상이며, 대소문자와 숫자를 포함해야 합니다.
        </Typography>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        회원가입
      </Button>

      {/* Login Link */}
      <Typography align="center" sx={{ mt: 2 }}>
        이미 계정이 있으신가요?{' '}
        <Link
          href="/login"
          sx={{ textDecoration: 'none', color: theme.palette.primary.main }}
        >
          로그인
        </Link>
      </Typography>

      <Divider sx={{ my: 3 }}>or</Divider>

      {/* Google Sign Up Button */}
      <Button
        fullWidth
        variant="outlined"
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
