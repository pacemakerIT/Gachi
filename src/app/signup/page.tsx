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

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          fullWidth
          margin="normal"
          placeholder="비밀번호를 입력하세요"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
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

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
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
