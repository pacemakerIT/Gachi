'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Card, CardContent, Typography, Box, CircularProgress, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CarouselHeader from './carousel-header';

export default function Mentor() {
    const theme = useTheme();
    const cardData = [
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
        { imgUrl: '/img/mentor-img1.png', title: '크리스', description: '개발자' },
    ];
    const swiperRef = useRef<SwiperRef>(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={{
            margin: { xs: '0 15px', sm: '0 30px', md: '0 80px', lg: '0 150px' },
        }}>
            <CarouselHeader title={'Our Mentors'} swiperRef={swiperRef} />

            {isLoaded ? (
                <Swiper
                    ref={swiperRef}
                    slidesPerView={isMobile ? 2.5 : 3}
                    spaceBetween={24}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    style={{
                        padding: isTablet ? 0 : '20px 0',
                        marginBottom: isTablet ? '24px' : 0,
                    }}
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide
                            key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    boxShadow: 'none',
                                    aspectRatio: '1/1',
                                    borderRadius: '6px',
                                }}
                            >
                                <CardContent>
                                    <Image
                                        src={card.imgUrl}
                                        alt=''
                                        layout='fill'
                                        objectFit='cover'
                                        style={{
                                        }}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        left: 0,
                                        bottom: 0,
                                        width: '100%',
                                        backgroundColor: 'rgba(16,16,16,0.7)',
                                        color: theme.palette.info.light,
                                        padding: { xs: '10px 10px', sm: '10px 20px' },
                                        boxSizing: 'border-box',
                                        zIndex: 1,
                                        display: { xs: 'flex', md: 'block' },
                                        alignItems: { xs: 'center' },
                                        justifyContent: { xs: 'space-between' },
                                    }}>
                                        <Typography sx={{
                                            fontSize: { xs: '0.875rem', sm: '1.05rem', md: '1.1rem', lg: '1.2rem' },
                                            fontWeight: 600,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {index + 1}-{card.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '0.87rem', sm: '1rem', md: '1.05rem', lg: '1.15rem' },
                                        }}>
                                            {card.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: { xs: 10, md: 20 }
                }}>
                    <CircularProgress />
                </Box>
            )}

            <Button sx={{
                width: '100%',
                display: { sm: 'block', md: 'none' },
                backgroundColor: theme.palette.primary.main,
                borderRadius: '8px',
                color: theme.palette.info.light,
                fontSize: { xs: '0.87rem', sm: '1.1rem' },
                fontWeight: 600
            }}>더 많은 프로그램 보기</Button>
        </Box >
    )
}
