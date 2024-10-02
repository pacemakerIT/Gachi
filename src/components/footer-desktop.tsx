"use client";
import React from 'react';
import { Box, Typography, TextField, Button, IconButton, Container, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Twitter, Instagram, Pinterest, YouTube, Category } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const logoUrl = '/images/logo.png';

export default function FooterDesktop() {
    const theme = useTheme();

    const categories = [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Mentors', href: '/mentors' },
        { name: 'About', href: '/about' }
    ];

    const accountLinks = [
        { name: 'My Schedules', href: '/my-schedules' },
        { name: 'Log out', href: '/logout' },
        { name: 'Help', href: '/help' }
    ];

    const socialMediaLinks = [
        { href: 'https://www.facebook.com', icon: <Facebook /> },
        { href: 'https://www.twitter.com', icon: <Twitter /> },
        { href: 'https://www.instagram.com', icon: <Instagram /> },
        { href: 'https://www.pinterest.com', icon: <Pinterest /> },
        { href: 'https://www.youtube.com', icon: <YouTube /> },
    ];

    return (
        <Box component="footer" sx={{ padding: '2rem 0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start" justifyContent="center">

                    <Grid size={{md: 4}} sx={{ textAlign: 'left' }}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                                <img src={logoUrl} alt="Gachi.live Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                <Typography variant="h6" gutterBottom>
                                    Gachi.live
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.customColor.gray, mb: '1rem' }}
                            >
                                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
                            {socialMediaLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <IconButton>
                                        {link.icon}
                                    </IconButton>
                                
                                </Link>
                            ))}
                        
                        </Box>
                    </Grid>

                    {/*Categories and User Accounts Section */}
                    <Grid size={{ md: 3 }} sx={{ textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                            <Box>
                                <Typography variant="subtitle1" sx={{ mb: '1rem', color: theme.palette.customColor.gray }}>
                                    CATEGORY
                                </Typography>
                                {categories.map((category) => (
                                    <Link key={category.name} href={category.href} underline='hover' color='inherit'>
                                        <Typography variant="body2" gutterBottom>
                                            {category.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ mb: '1rem', color: theme.palette.customColor.gray }}>
                                    YOUR ACCOUNT
                                </Typography>
                                {accountLinks.map((account) => (
                                    <Link key={account.name} href={account.href} underline='hover' color='inherit'>
                                        <Typography variant="body2" gutterBottom>
                                            {account.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Newsletter Section */}
                    <Grid size={{ md: 4 }} sx={{ textAlign: 'left', ml:'4rem'}}>
                        <Typography variant="subtitle1" sx={{color:theme.palette.customColor.gray}} gutterBottom>
                            NEWSLETTER
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '500px' }}>
                            <TextField
                                variant="outlined"
                                label="Your email"
                                size="small"
                                sx={{
                                    flex: 1,
                                }}
                            />
                            <Button variant="contained" sx={{ 
                                                            backgroundColor: theme.palette.primary.main ,
                                                            whiteSpace: 'nowrap' }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.customColor.gray, mt: '1rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
