"use client";
import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

type LinkItem = {
    name: string;
    href: string;
};

interface CategoryAccountSectionProps {
    categories: LinkItem[];
    accountLinks: LinkItem[];
}

export default function CategoryAccountSection({ categories, accountLinks }: CategoryAccountSectionProps) {
    const theme = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporarily set login status

    return (
        <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mb: '1rem',
                            color: theme.palette.text.secondary,
                            fontSize: { xs: '0.875rem', md: '1rem' },
                        }}
                    >
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

                {isLoggedIn ? (
                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: '1rem',
                                color: theme.palette.text.secondary,
                                fontSize: { xs: '0.875rem', md: '1rem' }
                            }}
                        >
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
                ) : (
                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: '1rem',
                                color: theme.palette.text.secondary,
                                fontSize: { md: '1rem' }
                            }}
                        >
                            LOGIN
                        </Typography>
                        <Link href="/login" underline='hover' color='inherit'>
                            <Typography variant="body2" sx={{ fontSize: { md: '0.8rem', lg: '1rem' } }} gutterBottom>
                                Click here to log in
                            </Typography>
                        </Link>
                    </Box>
                )}

            </Box>
        </Grid>
    );
}
