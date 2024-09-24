'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselHeader from './carousel-header';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { useTheme } from '@mui/material/styles';

export default function Program() {
    const theme = useTheme();
    const cardData = [
        { imgUrl: '/img/program-img1.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
        { imgUrl: '/img/program-img2.png', title: 'ChatGPT랑 배우는 인공지능 언어', description: '20' },
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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 현재 호버 중인 카드의 인덱스 저장

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CarouselHeader title={'Popular Programs'} swiperRef={swiperRef} />
            </Box>
            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={24}
                modules={[Navigation]}
                style={{ padding: '20px 0' }}
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
                                <Image
                                    src={card.imgUrl}
                                    alt=''
                                    width={280}
                                    height={280}
                                    style={{ borderRadius: 6 }} />
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{ overflow: 'hidden' }}>
                                        <Typography sx={{
                                            padding: '5px 0',
                                            fontSize: 16,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            color: hoveredIndex === index ? theme.palette.text.secondary : '',
                                        }}>
                                            {index + 1}-{card.title}
                                        </Typography>
                                        <Typography variant="h6" fontWeight={600}>${card.description}</Typography>
                                    </Box>
                                    <Box sx={{
                                        width: 44,
                                        height: 44,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '8px',
                                        backgroundColor: hoveredIndex === index ? theme.palette.text.secondary : '#F9F9FB',
                                        transition: hoveredIndex === index ? 'background-color 0.3s' : '',
                                        '& svg': {
                                            color: hoveredIndex === index ? '#fff' : '',
                                        }
                                    }}>
                                        <FiShoppingCart size={24} />
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}
