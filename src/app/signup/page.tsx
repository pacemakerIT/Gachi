
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

export default function SignUpPage() {
    return (
        <Box 
            sx={{ 
                width: '100%', 
                maxWidth: '676px', // Increased by 30% from 520px to 676px
                mx: 'auto', 
                mt: 4,
                p: 3, // Padding inside the box
                borderRadius: '8px', // Rounded corners
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
                backgroundColor: '#ffffff', // White background color
                border: 'none', // Remove the border
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
                    type="password" 
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
                <Typography 
                    variant="caption" 
                    sx={{ mt: 1, mb: 2, color: '#808080', textAlign: 'center' }} 
                >
                    비밀번호는 8자리 이상이며, 대소문자와 숫자를 포함해야 합니다.
                </Typography>
            </Box>

            <Button fullWidth variant="contained" sx={{ mt: 2 }}>회원가입</Button>
            
            <Divider sx={{ my: 3 }}>or</Divider>
            
            {/* Google Sign Up Button */}
            <Button 
                fullWidth 
                variant="outlined" 
                startIcon={< GoogleIcon/>} 
                sx={{ 
                    mb: 2, 
                    color: 'black', // Text color
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