'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Card, CardContent, Typography, Box, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import CarouselHeader from './carousel-header';
import ProgramCardStatus from './program-card-status';

interface ProgramCard {
    imgUrl: string;
    title: string;
    description: string;
    status?: 'New' | 'Sales';
};

export default function Program() {
    const theme = useTheme();
    const cardData: ProgramCard[] = [
        { imgUrl: '/img/program-img1.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20', status: 'New' },
        { imgUrl: '/img/program-img2.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20', status: 'Sales' },
        { imgUrl: '/img/program-img1.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img2.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img1.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img2.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img1.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img2.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
    ];

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const swiperRef = useRef<SwiperRef>(null);
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
            <CarouselHeader title={'Popular Programs'} swiperRef={swiperRef} />

            {isLoaded ? (
                <Swiper
                    ref={swiperRef}
                    slidesPerView={isMobile ? 2.5 : isTablet ? 3.5 : 4}
                    slidesPerGroup={isTablet ? 1 : 4}
                    spaceBetween={isTablet ? 10 : 14}
                    modules={[Navigation]}
                    style={{
                        padding: isTablet ? 0 : '20px 0',
                    }}
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide
                            key={index}
                            onMouseEnter={() => { setHoveredIndex(index) }}
                            onMouseLeave={() => { setHoveredIndex(null) }}
                        >
                            <Card sx={{
                                boxShadow: 'none',
                            }}>
                                <CardContent sx={{ padding: 0 }}>
                                    {card.status ? (
                                        <ProgramCardStatus status={card.status} />
                                    ) : null}
                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            width: { xs: 25, sm: 32, md: 44 },
                                            height: { xs: 25, sm: 32, md: 44 },
                                            minWidth: 25,
                                            padding: 0,
                                            display: hoveredIndex === index ? 'flex' : 'none',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: theme.palette.secondary.main,
                                            backgroundColor: 'rgba(255,255,255,0.8)',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            zIndex: 1,
                                            '& svg': {
                                                fontSize: { xs: 15, sm: 18, md: 24 },
                                            },
                                        }}>
                                        <AiOutlineHeart />
                                    </Button>

                                    <Box sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 0,
                                        paddingBottom: '100%',
                                        marginBottom: '5px'
                                    }}>
                                        <Image
                                            src={card.imgUrl}
                                            alt=''
                                            layout='fill'
                                            objectFit='cover'
                                            style={{
                                                aspectRatio: '1/1',
                                                borderRadius: '6px',
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: { sm: 'unset', md: 'center' }
                                    }}>
                                        <Box sx={{
                                            flex: 1,
                                            overflow: 'hidden',
                                            marginRight: '10px',
                                            maxWidth: { md: '150px', lg: '220px' }
                                        }}>
                                            <Typography sx={{
                                                padding: { lg: '5px 0' },
                                                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.05rem', lg: '1.15rem' },
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                lineHeight: { xs: 1, sm: 1.5 },
                                                color: hoveredIndex === index ? theme.palette.primary.main : '',
                                            }}>
                                                {index + 1}-{card.title}
                                            </Typography>
                                            <Typography variant="h6" fontWeight={600}
                                                fontSize={{ xs: '0.87rem', sm: '1.25rem' }}>
                                                ${card.description}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            width: { xs: 25, sm: 44 },
                                            height: { xs: 25, sm: 44 },
                                            minWidth: 20,
                                            minHeight: 20,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '8px',
                                            backgroundColor: hoveredIndex === index ? theme.palette.primary.main : theme.palette.info.dark,
                                            transition: 'background-color 0.3s',
                                            '& svg': {
                                                color: hoveredIndex === index ? theme.palette.info.light : '',
                                                fontSize: { xs: 15, sm: 24 },
                                            },
                                        }}>
                                            <FiShoppingCart />
                                        </Box>
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
                borderRadius: '8px',
                fontSize: { xs: '0.87rem', sm: '1.1rem' },
                fontWeight: 600
            }}>더 많은 프로그램 보기</Button>
        </Box>
    )
}
