'use client'

import Slider from 'react-slick';
import Image from 'next/image';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export interface MainSlideHandle {
  next: () => void;
  prev: () => void;
}

interface MainSlideProps {
  setSlideIndex? : (index: number) => void;
}

const MainSlide = forwardRef<MainSlideHandle, MainSlideProps>(
  ({ setSlideIndex }, ref) => {
  const sliderRef = useRef<Slider>(null);

  useImperativeHandle(ref, () => ({
    next: () => sliderRef.current?.slickNext(),
    prev: () => sliderRef.current?.slickPrev(),
  }));

  const handleFocusOnSlide = (currentIndex: number) => {
    if (!sliderRef.current) return;

    if (setSlideIndex) {
        setSlideIndex(currentIndex);
      }

    const slides = document.querySelectorAll('.slick-slide');
    slides.forEach((slide, index) => {
      (slide as HTMLElement).setAttribute(
        'tabindex',
        index === currentIndex ? '0' : '-1'
      );
    });
  };

  useEffect(() => {
    handleFocusOnSlide(0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    afterChange: (current: number) => handleFocusOnSlide(current),
    fade: true,
    arrows: false
  };

  return (
    <Slider {...settings} ref={sliderRef} className='main-slide-wrapper'>
      <div className='main-slider'>
        <Image src="/images/intro-bg1.webp" alt='메인배너1' fill />
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg2.webp" alt='메인배너2' fill />
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg3.webp" alt='메인배너3' fill />
      </div>
    </Slider>
  );
})

MainSlide.displayName = 'MainSlide';
export default MainSlide;