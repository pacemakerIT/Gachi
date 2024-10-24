'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import CarouselHeader from './carousel-header';
import ProgramCardStatus from './program-card-status';

interface Program {
  programId: string;
  title: string;
  coast: number;
  status: 'New' | 'Sales';
  hostName: string;
  thumbnailUrl: string;
}

export default function Program() {
  const theme = useTheme();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperRef>(null);
  
  useEffect(() => {
    const getPrograms = async () => {
      try {
        const res = await fetch('/api/programs');
        const data = await res.json();
        setPrograms(data);  
        setLoading(false);  
      } catch (error) {
        console.error('Failed to fetch programs:', error);
        setLoading(false);  
      }
    };
    getPrograms();
  }, []);

  return (
    <Box
      sx={{
        margin: { xxs: '15px', sm: '30px', md: '30px 80px', lg: '30px 150px' },
      }}
    >
      <CarouselHeader title={'Popular Programs'} swiperRef={swiperRef} />

      {loading ? (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: { xs: 10, md: 20 },
        }}
        >
        <CircularProgress />
        </Box>
   
      ) : ( 
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
        {programs.map((card, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
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
                    width: { xxs: 25, sm: 32, md: 44 },
                    height: { xxs: 25, sm: 32, md: 44 },
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
                      fontSize: { xxs: 15, sm: 18, md: 24 },
                    },
                  }}
                >
                  <AiOutlineHeart />
                </Button>

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '100%',
                    marginBottom: '5px',
                  }}
                >
                  <Image
                    src={card.thumbnailUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    style={{
                      aspectRatio: '1/1',
                      borderRadius: '6px',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { sm: 'unset', md: 'center' },
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      overflow: 'hidden',
                      marginRight: '10px',
                      maxWidth: { md: '150px', lg: '220px' },
                    }}
                  >
                    <Typography
                      sx={{
                        padding: { lg: '5px 0' },
                        fontSize: {
                          xxs: '0.875rem',
                          sm: '1rem',
                          md: '1.05rem',
                          lg: '1.15rem',
                        },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        lineHeight: { xxs: 1, sm: 1.5 },
                        color:
                          hoveredIndex === index
                            ? theme.palette.primary.main
                            : '',
                      }}
                    >
                      {index + 1}-{card.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      fontSize={{ xxs: '0.87rem', sm: '1.25rem' }}
                    >
                      ${card.coast}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xxs: 25, sm: 44 },
                      height: { xxs: 25, sm: 44 },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '8px',
                      backgroundColor:
                        hoveredIndex === index
                          ? theme.palette.primary.main
                          : theme.palette.info.dark,
                      transition: 'background-color 0.3s',
                      '& svg': {
                        color:
                          hoveredIndex === index
                            ? theme.palette.info.light
                            : '',
                        fontSize: { xxs: 15, sm: 24 },
                      },
                    }}
                  >
                    <FiShoppingCart />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      )}

      <Button
        sx={{
          width: '100%',
          display: { sm: 'block', md: 'none' },
          backgroundColor: theme.palette.primary.main,
          borderRadius: '8px',
          color: theme.palette.info.light,
          fontSize: { xs: '0.87rem', sm: '1.1rem' },
          fontWeight: 600,
        }}
      >
        더 많은 프로그램 보기
      </Button>
    </Box>
  );
}


