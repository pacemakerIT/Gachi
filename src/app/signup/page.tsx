"use client";

import { useState } from 'react';
import { Box, Button, Divider, TextField, Typography, Link, InputAdornment, IconButton } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Visibility, VisibilityOff } from '@mui/icons-material';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

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
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                backgroundColor: '#ffffff', 
                border: 'none', 
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>회원가입</Typography>
            <Box 
                sx={{ 
                    mb: 2, 
                    width: '100%', 
                    display: 'flex',        
                    justifyContent: 'center', 
                    alignItems: 'center'     
                }} 
            >
                <Typography 
                    variant="caption" 
                    sx={{ 
                        color: '#808080', 
                        textAlign: 'center', 
                        width: '100%' 
                    }} 
                >
                    계정을 생성하려면 정보를 입력해주세요.
                </Typography>
            </Box>
            
            {/* Input Fields */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, mr: 1 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, fontWeight: 'bold', color: '#101010' }}>이름</Typography>
                    <TextField 
                        margin="normal" 
                        placeholder="e.g. John"
                        variant="outlined" 
                        fullWidth 
                        sx={{ 
                            border: 'none', 
                            borderRadius: '16px', 
                            backgroundColor: '#F0F2F3', 
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                            height: '40px', 
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', 
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none', 
                            },
                        }}
                    />
                </Box>
                <Box sx={{ flex: 1, ml: 1 }}>
                    <Typography variant="body1" sx={{ mb: 0.5, fontWeight: 'bold', color: '#101010' }}>성</Typography>
                    <TextField 
                        margin="normal" 
                        placeholder="e.g. Doe"
                        variant="outlined" 
                        fullWidth 
                        sx={{ 
                            border: 'none', 
                            borderRadius: '16px', 
                            backgroundColor: '#F0F2F3', 
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                            height: '40px', 
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', 
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none', 
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 0.5, fontWeight: 'bold', color: '#101010' }}>이메일</Typography>
                <TextField 
                    fullWidth 
                    margin="normal" 
                    placeholder="e.g. email@gmail.com"
                    variant="outlined" 
                    sx={{ 
                        border: 'none', 
                        borderRadius: '16px', 
                        backgroundColor: '#F0F2F3', 
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                        height: '40px', 
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                    }}
                />
            </Box>
            
            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 0.5, fontWeight: 'bold', color: '#101010' }}>비번</Typography>
                <TextField 
                    fullWidth 
                    margin="normal" 
                    placeholder="e.g. 123456789"
                    variant="outlined" 
                    type={showPassword ? 'text' : 'password'}
                    sx={{ 
                        border: 'none', 
                        borderRadius: '16px', 
                        backgroundColor: '#F0F2F3', 
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                        height: '40px', 
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography 
                    variant="caption" 
                    sx={{ mt: 1, mb: 2, color: '#808080', textAlign: 'center' }} 
                >
                    비밀번호는 8자리 이상이며, 대소문자와 숫자를 포함해야 합니다.
                </Typography>
            </Box>

            <Button fullWidth variant="contained" sx={{ mt: 2 }}>회원가입</Button>

            {/* Login Link */}
            <Typography align="center" sx={{ mt: 2 }}>
                이미 계정이 있으신가요? <Link href="/login" sx={{ textDecoration: 'none', color: '#2986FE' }}>로그인</Link>
            </Typography>
            
            <Divider sx={{ my: 3 }}>or</Divider>

            {/* Google Sign Up Button */}
            <Button 
                fullWidth
                variant="outlined" 
                startIcon={<GoogleIcon />} 
                sx={{ 
                    mb: 2, 
                    color: 'black', 
                    mx: 'auto', 
                    borderColor: 'black', 
                    backgroundColor: 'white' 
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>Google로 가입하기</Typography>
            </Button>
            
            {/* Facebook Sign Up Button */}
            <Button 
                fullWidth
                variant="contained" 
                startIcon={<FacebookIcon />} 
                sx={{ 
                    color: 'white', 
                    mx: 'auto', 
                    backgroundColor: '#3B5998', 
                    '&:hover': {
                        backgroundColor: '#365899' 
                    }
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>Facebook으로 가입하기</Typography>
            </Button>
        </Box>
    );
}