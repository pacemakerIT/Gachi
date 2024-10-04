import React, { RefObject, useRef } from 'react';
import { Button, Box, useTheme, Typography } from '@mui/material';
import { SwiperRef } from 'swiper/react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

interface CarouselHeaderProps {
  title: string;
  swiperRef: RefObject<SwiperRef>;
  styles?: React.CSSProperties;
}

export default function CarouselHeader({
  title,
  swiperRef,
  styles,
}: CarouselHeaderProps) {
  const theme = useTheme();
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const clickPrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };
  const clickNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        ...styles,
      }}
    >
      <Typography
        variant="h2"
        fontSize={{ xxs: '1.4rem', xs: '1.5rem', sm: '1.7rem', md: '1.9rem' }}
        fontWeight={'bold'}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: '106px',
          display: { xxs: 'none', md: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          ref={prevButtonRef}
          onClick={clickPrev}
          sx={{
            backgroundColor: theme.palette.info.dark,
            borderRadius: '50%',
            minWidth: '44px',
            height: '44px',
            '&:active, &:hover': {
              backgroundColor: theme.palette.primary.main,
              '& svg': {
                color: `${theme.palette.background.default} !important`,
              },
            },
          }}
        >
          <FaArrowLeftLong style={{ color: theme.palette.secondary.main }} />
        </Button>
        <Button
          ref={nextButtonRef}
          onClick={clickNext}
          sx={{
            backgroundColor: theme.palette.info.dark,
            borderRadius: '50%',
            minWidth: '44px',
            height: '44px',
            '&:active, &:hover': {
              backgroundColor: theme.palette.primary.main,
              '& svg': {
                color: `${theme.palette.background.default} !important`,
              },
            },
          }}
        >
          <FaArrowRightLong style={{ color: theme.palette.secondary.main }} />
        </Button>
      </Box>
    </Box>
  );
}
