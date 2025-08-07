'use client'

import Slider from 'react-slick';
import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef } from 'react';

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
    next: () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      },
      prev: () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      },
  }));

    const onAfterChange = (current: number) => {
      if (setSlideIndex) setSlideIndex(current);

     const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide, index) => {
        const el = slide as HTMLElement;
        if (index === current) {
          el.setAttribute('tabindex', '0');
          el.removeAttribute('inert');
        } else {
          el.setAttribute('tabindex', '-1');
          el.setAttribute('inert', 'true');
        }
      });
    };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    afterChange: onAfterChange,
    fade: true,
    arrows: false,
  };

  return (
    <Slider {...settings} ref={sliderRef} className='main-slide-wrapper'>
      <div className='main-slider'>
        <Image src="/images/intro-bg1.webp" alt='메인배너1' fill priority/>
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg2.webp" alt='메인배너2' fill/>
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg3.webp" alt='메인배너3' fill/>
      </div>
    </Slider>
  );
})

MainSlide.displayName = 'MainSlide';
export default MainSlide;