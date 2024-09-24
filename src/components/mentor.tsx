'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CarouselHeader from './carousel-header';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

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
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);


    return (
        <Box sx={{ margin: '0 150px' }}>
            <CarouselHeader title={'Our Mentors'} swiperRef={swiperRef} />
            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={24}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                style={{ padding: '20px 0' }}
            >
                {cardData.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            marginRight: '24px',
                        }}
                    >
                        <Card
                            sx={{
                                boxShadow: 'none',
                                width: 270,
                                height: 270,
                            }}
                        >
                            <CardContent sx={{
                                padding: 0,
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '6px',
                            }}>
                                <Image
                                    src={card.imgUrl}
                                    alt=''
                                    width={270}
                                    height={270}
                                    style={{
                                        width: '100%',
                                        display: 'block'
                                    }} />
                                <Box sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    top: '68%',
                                    left: 0,
                                    overflow: 'hidden',
                                    backgroundColor: 'rgba(16,16,16,0.7)',
                                    color: '#fff',
                                    padding: '10px 20px',
                                    zIndex: 1
                                }}>
                                    <Typography sx={{
                                        fontSize: 20,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {index + 1}-{card.title}
                                    </Typography>
                                    <Typography fontSize={14}>{card.description}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}
