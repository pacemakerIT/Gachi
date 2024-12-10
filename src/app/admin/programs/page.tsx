'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  Button,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import CarouselHeader from '../../../components/carousel-header';
import ProgramCardStatus from '../../../components/program-card-status';

export default function Program() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperRef>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}dashboard/admin_program_api/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch programs');
        }
        const result = await response.json();
        setPrograms(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
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
    );
  }

  if (error) {
    return (
      <Typography
        sx={{
          width: '100%',
          margin: '20px',
          textAlign: 'center',
          color: 'red',
          fontSize: { xxs: '0.87rem', sm: '1.1rem' },
        }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        margin: { xxs: '15px', sm: '30px', md: '30px 80px', lg: '30px 150px' },
      }}
    >
      <CarouselHeader title="Popular Programs" swiperRef={swiperRef} />

      {programs && programs.length > 0 ? (
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
          {programs.map((program, index) => (
            <SwiperSlide
              key={program.programId}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card sx={{ boxShadow: 'none' }}>
                <CardContent sx={{ padding: 0 }}>
                  {program.status && (
                    <ProgramCardStatus status={program.status} />
                  )}
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
                      '& svg': { fontSize: { xxs: 15, sm: 18, md: 24 } },
                      '&:hover svg': { color: theme.palette.info.light },
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
                    }}
                  >
                    <Image
                      src={program.thumbnailUrl}
                      alt={program.title}
                      fill
                      sizes="33vw"
                      style={{ objectFit: 'cover', borderRadius: '6px' }}
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
                      sx={{ flex: 1, overflow: 'hidden', marginRight: '10px' }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xxs: '0.875rem',
                            sm: '1rem',
                            md: '1.05rem',
                          },
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          color:
                            hoveredIndex === index
                              ? theme.palette.primary.main
                              : '',
                        }}
                      >
                        {program.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        fontSize={{ xxs: '0.87rem', sm: '1.25rem' }}
                      >
                        ${program.cost}
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
                        transition: 'background-color 0.3s, color 0.3s',
                        '& svg': {
                          fontSize: { xxs: 15, sm: 24 },
                          color:
                            hoveredIndex === index
                              ? theme.palette.info.light
                              : '',
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
      ) : (
        <Typography
          sx={{
            width: '100%',
            margin: '20px',
            textAlign: 'center',
            fontSize: { xxs: '0.87rem', sm: '1.1rem' },
          }}
        >
          No programs available
        </Typography>
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
