"use client";
import React from 'react';
import { Box, Typography, TextField, Button, IconButton, Container, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Twitter, Instagram, Pinterest, YouTube } from '@mui/icons-material';

const logoUrl = '/images/logo.png';

export default function FooterMobile() {
    return (
        <Box component="footer" sx={{ padding: '2rem 0' , width:'100%' }}>
            <Container maxWidth="sm">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    
                    {/* Newsletter Subscription Section */}
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', margin: '1rem' }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: '#2986FE',
                                fontWeight: 'bold',
                                mb: '1rem',
                            }}
                        >
                            뉴스레터를 통해 <br />매주 새로운 소식을 만나보세요!
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'gray', mb: '1rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                        </Typography>

                        {/*Email input box and subscription button */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                flexDirection: 'column',
                                width: { xs: '100%', sm: '75%' },
                                margin: '0 auto',
                            }}
                            >
                            <TextField
                                variant="outlined"
                                label="Your email"
                                size="small"
                                sx={{
                                    flex: 1,
                                    maxWidth: { xs: '100%' },
                                    width: '100%',
                                    mb: '1rem',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#e6e6e6',
                                            borderRadius: '8px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#101010',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#2986FE',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#808080',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#2986FE',
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    maxWidth: { xs: '100%' },
                                    whiteSpace: 'nowrap',
                                    backgroundColor: '#2986FE',
                                    color: '#FFFFFF',
                                    width: '100%',
                                    flex: 1,
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid container 
                        justifyContent= 'space-evenly'
                        alignItems='center' 
                        sx={{ 
                            textAlign: 'justify', 
                            mt: '1rem', 
                            minWidth: '100%',
                
                            }}
                    >

                        <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                mb: 3,
                                paddingLeft: '-1rem',
                                }}
                        >

                            <Link href='/'>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <img src={logoUrl} alt="Gachi.live Logo" 
                                            style={{ 
                                                width: '40px',
                                                 height: '40px', 
                                                 marginRight: '10px' }} />

                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Gachi.live
                                        </Typography>
                                </Box>

                            </Link>
                            <Link href="#" underline="hover" color="inherit" sx={{ fontSize: '12px', color: 'gray' }}>
                                Help
                            </Link>
                        </Box>

                        <Box sx={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(3, 1fr)', 
                                gap: '1rem', 
                                justifyItems: 'center' ,
                                }}
                            >

                            <Box sx={{ gridColumn: 'span 2' }}>
                                <IconButton>
                                    <Facebook />
                                </IconButton>
                                <IconButton>
                                    <Twitter />
                                </IconButton>
                            </Box>

                            <Box sx={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <IconButton>
                                    <Instagram />
                                </IconButton>
                                <IconButton>
                                    <YouTube />
                                </IconButton>
                                <IconButton>
                                    <Pinterest />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
