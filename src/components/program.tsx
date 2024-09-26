'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, Typography, Box, useMediaQuery, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselHeader from './carousel-header';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { useTheme } from '@mui/material/styles';
import { AiOutlineHeart } from "react-icons/ai";
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
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <Box sx={{
            margin: { xs: '0 15px', sm: '0 30px', md: '0 80px', lg: '0 150px' },
        }}>
            <CarouselHeader title={'Popular Programs'} swiperRef={swiperRef} />
            <Swiper
                ref={swiperRef}
                slidesPerView={isMobile ? 2.5 : isTablet ? 3.5 : 4}
                slidesPerGroup={isTablet ? 1 : 4}
                spaceBetween={isTablet ? 10 : 14}
                modules={[Navigation]}
                style={isTablet ? { padding: 0 } : { padding: '20px 0' }}
            >
                {cardData.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        onMouseEnter={() => { setHoveredIndex(index) }}
                        onMouseLeave={() => { setHoveredIndex(null) }}
                        style={{
                            marginRight: '24px',
                        }}
                    >
                        <Card
                            sx={{
                                boxShadow: 'none',
                            }}
                        >
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
                                        color: theme.palette.text.primary,
                                        backgroundColor: 'rgba(255,255,255,0.8)',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        '& svg': {
                                            fontSize: { xs: 15, sm: 18, md: 24 },
                                        },
                                    }}>
                                    <AiOutlineHeart />
                                </Button>
                                <Image
                                    src={card.imgUrl}
                                    alt=''
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: '1/1',
                                        borderRadius: '6px',
                                    }}
                                />
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
                                            color: hoveredIndex === index ? theme.palette.text.secondary : '',
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
                                        backgroundColor: hoveredIndex === index ? theme.palette.text.secondary : '#F9F9FB',
                                        transition: 'background-color 0.3s',
                                        '& svg': {
                                            color: hoveredIndex === index ? '#fff' : '',
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
            <Button sx={{
                width: '100%',
                display: { sm: 'block', md: 'none' },
                backgroundColor: theme.palette.text.secondary,
                borderRadius: '8px',
                color: '#fff',
                fontSize: { xs: '0.87rem', sm: '1.1rem' },
                fontWeight: 600
            }}>더 많은 프로그램 보기</Button>
        </Box>
    )
}
