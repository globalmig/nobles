'use client'
import Slider from 'react-slick';
import Image from 'next/image';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

// function PrevArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <button onClick={onClick} className='main-arrow-prev'>
//       <Image src="/icons/arrow_prev.webp" alt="이전" width={30} height={20} />
//     </button>
//   );
// }

// function NextArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <button onClick={onClick} className='main-arrow-next'>
//       <Image src="/icons/arrow_next.webp" alt="다음" width={30} height={20} />
//     </button>
//   );
// }

function MainSlide (props: any, ref: any) {

 const sliderRef = useRef<Slider>(null);

 useImperativeHandle(ref, () => ({
    next: () => sliderRef.current?.slickNext(),
    prev: () => sliderRef.current?.slickPrev()
  }));

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    afterChange: (current: number) => {
      handleFocusOnSlide(current);
    },
    // prevArrow: <PrevArrow/>,
    // nextArrow: <NextArrow/>
  };

  const handleFocusOnSlide = (currentIndex: number) => {
    if (!sliderRef.current) return;

    const slides = document.querySelectorAll('.slick-slide');

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        (slide as HTMLElement).removeAttribute('tabindex');
      } else {
        (slide as HTMLElement).setAttribute('tabindex', '-1');
      }
    });
  };

  useEffect(() => {
    handleFocusOnSlide(0);
  }, []);

  return (
    <Slider {...settings} ref={sliderRef} className='main-slide-wrapper'>
      <div className='main-slider'>
        <Image src="/images/intro-bg1.webp" alt='메인배너1' fill/>
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg2.webp" alt='메인배너2' fill/>
      </div>
      <div className='main-slider'>
        <Image src="/images/intro-bg3.webp" alt='메인배너3' fill/>
      </div>
    </Slider>
  );
};

export default forwardRef(MainSlide);