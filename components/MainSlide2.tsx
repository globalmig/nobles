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

const MainSlide2 = forwardRef<MainSlideHandle, MainSlideProps>(
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
    fade: true
  };

  return (
    <Slider {...settings} ref={sliderRef} className='main-slide-wrapper'>
      <div className='main-slider'>
        <div>
          <h1>성혼 중심의 올바른<br/>결혼정보문화를 선도합니다</h1>
          <p>노블스는 올바른 성혼중심 결혼정보문화를 선도하며, 고객님의 행복한 결혼과 가치있는 삶을 실현하기 위해 횟수 제한없는 매칭으로 함께합니다. 저희는 결혼이라는 특별한 여정에서 고객님의 인생을 행복하고 아름답게 연결하는 것을 목표로 하고 있습니다.</p>
        </div>
        <Image src="/images/home4-bg1.webp" alt='메인배너1' fill />
      </div>
      <div className='main-slider'>
        <div>
          <h1>차별화된 맞춤형<br/>서비스를 제공합니다</h1>
          <p>고객님의 다양한 니즈를 반영하여 데이터 기반의 이상형 맞춤 서비스를 제공합니다.<br/>고객 한분 한분에게 최적화된 솔루션을 제안하며, 최고의 매칭을 실현하기 위해 노력합니다.<br/>높은 성혼율을 추구하는 저희의 시스템은 단순한 만남을 넘어 만족스러운<br/>성혼이 이어질 수 있도록 설계되어있습니다.</p>
        </div>
        <Image src="/images/home4-bg2.webp" alt='메인배너2' fill />
      </div>
      <div className='main-slider'>
        <div>
          <h1>노블스 결혼만의<br/>철저한 신원 인증과 안전한 매칭</h1>
          <p>철저한 신원 인증을 바탕으로, 고객님께 안전하고 진실된 만남을 제공합니다.<br/>노블스는 고객님의 프라이버시를 보호하며, 수준 높은 서비스를 통해 신뢰받는<br/>파트너로 자리매김하고 있습니다.</p>
        </div>
        <Image src="/images/home4-bg3.webp" alt='메인배너3' fill />
      </div>
    </Slider>
  );
})

MainSlide2.displayName = 'MainSlide2';
export default MainSlide2;