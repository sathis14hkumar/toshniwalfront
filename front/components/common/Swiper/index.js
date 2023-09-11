import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import classes from "./swiper.module.scss";

// import required modules
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';

export default function App({
  swipeProps = {},
  children,
  delay = 2000
}) {
  return (
    <>
      <Swiper
        navigation={false}
        autoplay={{ delay }}
        modules={[Navigation, Autoplay, FreeMode]}
        className={classes.mySwiper}
        {...swipeProps}
        >
        {children}
      </Swiper>
    </>
  );
}
