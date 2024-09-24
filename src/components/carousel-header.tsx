import React, { useEffect, useRef } from 'react'
import { Button, Box } from '@mui/material';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Props {
    title: string;
    swiperRef: any;
}

export default function CarouselHeader({ title, swiperRef }: Props) {
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>{title}</h2>
            <Box sx={{
                width: '106px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button
                    ref={prevButtonRef}
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