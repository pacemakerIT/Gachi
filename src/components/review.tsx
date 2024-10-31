'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselHeader from './carousel-header';
import { ReviewType } from '@/utils/types';

interface ReviewProps {
  reviews: ReviewType[];
}

export default function Review({ reviews }: ReviewProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const swiperRef = useRef<SwiperRef>(null);
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
        width: '100%',
        maxWidth: '1200px',
        padding: {
          xxs: '30px 0 30px 30px',
          md: '30px 60px',
          lg: '30px 130px',
        },
      }}
    >
      <CarouselHeader
        title={'Reviews'}
        swiperRef={swiperRef}
        styles={{ padding: '0 20px' }}
      />

      {reviews.length > 0 && isLoaded ? (
        <Swiper
          ref={swiperRef}
          slidesPerView={isTablet ? 1.5 : 2}
          slidesPerGroup={1}
          spaceBetween={30}
          modules={[Navigation]}
          loop={true}
          style={{
            padding: isTablet ? 0 : '20px',
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={review.reviewId}
              style={{
                boxShadow: '0 0 40px' + theme.palette.info.dark,
              }}
            >
              <Card
                sx={{
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ padding: 0 + '!important' }}>
                  <Box
                    sx={{
                      padding: '30px',
                      borderRadius: '12px',
                    }}
                  >
                    <Box
                      sx={{
                        height: { xxs: '42px', md: '90px' },
                      }}
                    >
                      <Box
                        sx={{
                          paddingLeft: '20px',
                          borderLeft: '2px solid #039fae',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xxs: '0.87rem', sm: '1.25rem' },
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: { xxs: 2, md: 3 },
                          }}
                        >
                          {index + 1}-{review.content}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        mt: '40px',
                        alignItems: 'center',
                        flexDirection: { xxs: 'column', xs: 'row' },
                      }}
                    >
                      <Image
                        src={review.photoUrl || '/images/reviewer-photo.png'}
                        alt=""
                        width={isMobile ? 50 : 60}
                        height={isMobile ? 50 : 60}
                        style={{
                          borderRadius: '50%',
                        }}
                      />
                      <Box
                        sx={{
                          width: '100%',
                          textAlign: { xxs: 'center', xs: 'left' },
                          margin: { xxs: '10px 0 0 0', xs: '0 0 0 12px' },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xxs: '0.87rem', sm: '1.25rem' },
                            fontWeight: '600',
                          }}
                        >
                          {review.firstName} {review.lastName}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: '0.87rem',
                              sm: '1rem',
                              md: '1.05rem',
                              lg: '1.1rem',
                            },
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {review.industryTitle}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: { xxs: 'none', sm: 'block' },
                          '& svg': {
                            width: '90px',
                            height: '90px',
                            color: theme.palette.info.dark,
                          },
                        }}
                      >
                        <RiDoubleQuotesR />
                      </Box>
                    </Box>
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
            margin: { xxs: 10, md: 20 },
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
