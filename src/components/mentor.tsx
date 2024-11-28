'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CarouselHeader from './carousel-header';

interface MentorProps {
  mentors?: {
    firstName: string;
    lastName: string;
    photoUrl: string | null;
    industryTitle: string;
  }[];
}

export default function Mentor({ mentors }: MentorProps) {
  const theme = useTheme();
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
    <Box
      sx={{
        margin: { xxs: '15px', sm: '30px', md: '30px 80px', lg: '30px 150px' },
      }}
    >
      <CarouselHeader title={'Our Mentors'} swiperRef={swiperRef} />

      {mentors == null ? (
        <Typography
          sx={{
            width: '100%',
            margin: '20px',
            textAlign: 'center',
            color: 'red',
            fontSize: { xxs: '0.87rem', sm: '1.1rem' },
          }}
        >
          Failed to fetch mentor data from the database
        </Typography>
      ) : mentors.length > 0 && isLoaded ? (
        <Swiper
          ref={swiperRef}
          slidesPerView={isMobile ? 2.5 : 3}
          spaceBetween={24}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            padding: isTablet ? 0 : '20px 0',
            marginBottom: isTablet ? '24px' : 0,
          }}
        >
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardContent
                  sx={{
                    position: 'relative',
                    width: 'auto',
                    height: '100%',
                    boxShadow: 'none',
                    aspectRatio: '1/1',
                    borderRadius: '6px',
                  }}
                >
                  <Image
                    src={mentor.photoUrl || '/img/mentor-img1.png'}
                    alt={`${mentor.firstName} ${mentor.lastName}`}
                    fill
                    sizes="33vw"
                    priority={true}
                    style={{
                      objectFit: 'cover',
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: '100%',
                      backgroundColor: 'rgba(16,16,16,0.7)',
                      color: theme.palette.info.light,
                      padding: { xxs: '10px 10px', sm: '10px 20px' },
                      boxSizing: 'border-box',
                      zIndex: 1,
                      display: { xxs: 'flex', md: 'block' },
                      alignItems: { xxs: 'center' },
                      justifyContent: { xxs: 'space-between' },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xxs: '0.875rem',
                          sm: '1.05rem',
                          md: '1.1rem',
                          lg: '1.2rem',
                        },
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {mentor.firstName} {mentor.lastName}
                    </Typography>
                    <Typography
                      sx={{
                        display: { xxs: 'none', sm: 'inherit' },
                        fontSize: {
                          xxs: '0.87rem',
                          sm: '1rem',
                          md: '1.05rem',
                          lg: '1.15rem',
                        },
                        opacity: 0.7,
                      }}
                    >
                      {mentor.industryTitle}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
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
      )}

      <Button
        sx={{
          width: '100%',
          display: { sm: 'block', md: 'none' },
          backgroundColor: theme.palette.primary.main,
          borderRadius: '8px',
          color: theme.palette.info.light,
          fontSize: { xxs: '0.87rem', sm: '1.1rem' },
          fontWeight: 600,
        }}
      >
        더 많은 멘토 보기
      </Button>
    </Box>
  );
}
