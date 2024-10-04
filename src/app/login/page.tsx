"use client";

import { Box, Button, Divider, TextField, Typography, Link, Checkbox, FormControlLabel } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

export default function LoginPage() {
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
                backgroundColor: '#ffffff', // White background color
                border: 'none', // Remove the border
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>로그인</Typography>
            
            {/* Email Input */}
            <Box sx={{ mb: 1 }}>
                <TextField 
                    fullWidth 
                    margin="normal" 
                    placeholder="이메일"
                    variant="outlined" 
                    sx={{ 
                        border: 'none', 
                        borderRadius: '4px', // Subtle rounded edges
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
            
            {/* Password Input */}
            <Box sx={{ mb: 3 }}>
                <TextField 
                    fullWidth 
                    margin="normal" 
                    placeholder="비밀번호"
                    variant="outlined" 
                    type="password" 
                    sx={{ 
                        border: 'none', 
                        borderRadius: '4px', // Subtle rounded edges
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

            {/* Auto Login and Lost Password */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <FormControlLabel 
                    control={<Checkbox />} 
                    label="자동 로그인" 
                    sx={{ color: '#101010' }} 
                />
                <Link href="/lost-password" sx={{ textDecoration: 'none', color: '#2986FE' }}>비밀번호를 잊으셨나요?</Link>
            </Box>
            
            {/* Login Button */}
            <Button fullWidth variant="contained" sx={{ mt: 2 }}>로그인</Button>
            
            {/* Sign up link */}
            <Typography align="center" sx={{ mt: 2 }}>
                계정이 없으신가요? <Link href="/signup" sx={{ textDecoration: 'none', color: '#2986FE' }}>회원가입</Link>
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
                    color: 'black', // Text color
                    mx: 'auto', // Center the button
                    borderColor: 'black', // Outline color
                    backgroundColor: 'white' // Background color
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
                    color: 'white', // Text color
                    mx: 'auto', // Center the button
                    backgroundColor: '#3B5998', // Facebook's color
                    '&:hover': {
                        backgroundColor: '#365899' // Darker shade for hover
                    }
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>Facebook으로 가입하기</Typography>
            </Button>
        </Box>
    );
}
