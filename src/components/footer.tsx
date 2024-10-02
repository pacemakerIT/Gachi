"use client";
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import FooterMobile from './footer-mobile';
import FooterDesktop from './footer-desktop';

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

    return (
        <Box component="footer" sx={{ padding: '3rem 0', mb:0 }}>
            {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </Box>
    );
}
