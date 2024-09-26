import React, { useEffect, useRef } from 'react'
import { Button, Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Props {
    title: string;
    swiperRef: any;
}

export default function CarouselHeader({ title, swiperRef }: Props) {
    const theme = useTheme();
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.params.navigation.prevEl = prevButtonRef.current;
            swiperInstance.params.navigation.nextEl = nextButtonRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperRef]);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px 0'
        }}>
            <Typography
                variant="h2"
                fontSize={{ xs: '1.15rem', sm: '1.3rem', md: '1.5rem' }}
                fontWeight={'bold'}>
                {title}
            </Typography>
            <Box sx={{
                width: '106px',
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Button
                    ref={prevButtonRef}
                    sx={{
                        backgroundColor: '#F0F2F3',
                        borderRadius: '50%',
                        minWidth: '44px',
                        height: '44px',
                        '&:active, &:hover': {
                            backgroundColor: theme.palette.text.secondary,
                            '& svg': {
                                color: '#fff !important'
                            }
                        }
                    }}>
                    <FaArrowLeftLong
                        style={{ color: '#101010' }} />
                </Button>
                <Button ref={nextButtonRef}
                    sx={{
                        backgroundColor: '#F0F2F3',
                        borderRadius: '50%',
                        minWidth: '44px',
                        height: '44px',
                        '&:active, &:hover': {
                            backgroundColor: '#2986FE',
                            '& svg': {
                                color: '#fff !important'
                            }
                        }
                    }}>
                    <FaArrowRightLong
                        style={{ color: '#101010' }} />
                </Button>
            </Box>
        </Box>
    )
}
