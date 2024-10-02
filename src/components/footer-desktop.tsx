"use client";
import React from 'react';
import { Box, Typography, TextField, Button, IconButton, Container, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Twitter, Instagram, Pinterest, YouTube } from '@mui/icons-material';

const logoUrl = '/images/logo.png';

export default function FooterDesktop() {
    return (
        <Box component="footer" sx={{ padding: '2rem 0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {/* 로고 및 설명 */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'left' }}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.5rem' }}>
                                <img src={logoUrl} alt="Gachi.live Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                <Typography variant="h6" gutterBottom>
                                    Gachi.live
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ color: 'gray', mb: '1rem' }}
                            >
                                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
                            <IconButton>
                                <Facebook />
                            </IconButton>
                            <IconButton>
                                <Twitter />
                            </IconButton>
                            <IconButton>
                                <Instagram />
                            </IconButton>
                            <IconButton>
                                <Pinterest />
                            </IconButton>
                            <IconButton>
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* 카테고리 및 사용자 계정 섹션 */}
                    <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                            <Box>
                                <Typography variant="subtitle1" sx={{ mb: '1rem', color: 'gray' }}>
                                    CATEGORY
                                </Typography>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>Home</Typography>
                                </Link>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>Events</Typography>
                                </Link>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>Mentors</Typography>
                                </Link>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>About</Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ mb: '1rem', color: 'gray' }}>
                                    YOUR ACCOUNT
                                </Typography>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>My Schedules</Typography>
                                </Link>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>Log out</Typography>
                                </Link>
                                <Link href="#" underline="hover" color="inherit">
                                    <Typography variant="body2" gutterBottom>Help</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 뉴스레터 섹션 */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="subtitle1" gutterBottom>
                            NEWSLETTER
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '500px' }}>
                            <TextField
                                variant="outlined"
                                label="Your email"
                                size="small"
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#e6e6e6',
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
                            <Button variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                                Subscribe
                            </Button>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'gray', mt: '1rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
