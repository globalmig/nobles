'use client';

import { useEffect, useRef, useState } from 'react';
import MainSlide from './MainSlide';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import { storyData } from '@/data/StoryData';
import MainSlide2 from './MainSlide2';
import InquireForm from './InquireForm';

export default function Fullpage() {

  const slideRef = useRef<{ next: () => void; prev: () => void }>(null);
  const sliderRef2 = useRef<Slider>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const formattedIndex = (slideIndex + 1).toString().padStart(2, '0');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  useEffect(() => {
    const section = document.querySelector('.home4') as HTMLElement;
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionHeight = section.scrollHeight;

      if (sectionHeight < windowHeight) {
        section.style.minHeight = '100vh';
      } else {
        section.style.minHeight = 'auto';
      }
    }
  }, []);

  return (
    <div id="fullpage">
      <section className="home section">
        <MainSlide ref={slideRef} setSlideIndex={setSlideIndex}/>
        <div>
          <h1>품격있는 만남, <br />행복한 결혼의 시작</h1>
          <p>단순한 소개가 아닌, 진정한 인연을 찾는 여정.<br />
            이상적인 배우자와의 만남을 위해 세심한 매칭과 전문적인 컨설팅을 제공합니다.</p>
          <div className="display-flex-flow slide-index">
            <div className="display-flex">
              <button onClick={() => slideRef.current?.prev()} className='main-arrow-prev'>
                <Image src="/icons/arrow_prev.webp" alt="이전" width={30} height={20} />
              </button>
              <button onClick={() => slideRef.current?.next()} className='main-arrow-next'>
                <Image src="/icons/arrow_next.webp" alt="다음" width={30} height={20} />
              </button>
            </div>
            <div className="display-flex">
                <p>{formattedIndex} <span>/ 03</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="home2 section">
        <div>
          <div>
            <h1>노블스 결혼</h1>
            <div></div>
            <h3>품격있는 1:1 프라이빗 매칭</h3>
            <p>높은 성혼율</p>
          </div>
          <div className='display-flex'>
            <section>
              <div></div>
              <p>맞춤형<br />연애 컨설팅</p>
            </section>
            <section>
              <div></div>
              <p>만족감 높은<br />성혼율</p>
            </section>
            <section>
              <div></div>
              <p>노블레스<br />결혼</p>
            </section>
          </div>
        </div>
      </section>
      <section className="home3 section">
        <div className='display-flex'>
          <div>
            <Image src="/images/home3_img.webp" alt='' width={400} height={486} />
          </div>
          <div className='display-flex'>
            <p>Nobles</p>
            <div></div>
          </div>
        </div>
        <div className='display-flex-flow'>
          <div>
            <Image src="/images/home3_img2.png" alt='' width={627} height={824} />
          </div>
          <div>
            <h1>20년 경력의 결혼 전문가와<br />수많은 성혼사례가 증명하는 신뢰</h1>
            <p>결혼은 인생에서 가장 중요한 선택 중 하나입니다.<br />노블스는 고객님의 소중한 순간에 가장 현명한<br />결정을 할 수 있도록 도와드리는 노블레스 결혼정보회사입니다.</p>
            <div className='more-button'>
              <Link href="/about">
                <p>더보기</p>
                <div>
                  <div>
                    <Image src="/icons/arrow_next_black.webp" alt='더보기 버튼' width={30} height={20} />
                  </div>
                  <div></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home4 section">
        <div>
          <h1>노블스만의 특별한 성혼 스토리</h1>
          <p>노블스에서 이어진 수 많은 사랑이야기를 통해서<br />노블스의 특별함을 확인해보세요</p>
        </div>
        <div>
          <div className='more-button pc'>
            <Link href="/story">
              <p>더보기</p>
              <div>
                <div>
                  <Image src="/icons/arrow_next_black.webp" alt='더보기 버튼' width={30} height={20} />
                </div>
                <div></div>
              </div>
            </Link>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef2} className='main-slide-wrapper'>
          {storyData.filter(story => story.id <= 5).map(story =>
            <div className='main-slider' key={story.id}>
              <div>
                <h3>{story.title.split("x").map((part, index) => (
                  <p key={index}>
                    {part.trim()}
                    {index === 0 && <br />}
                    {index === 0 && <span>x</span>}
                  </p>
                ))}</h3>
                <Image src={`/images/story-bg${story.id}.webp`} alt={`성혼스토리${story.id}`} width={400} height={285} />
              </div>
              {isHover ? <div>
                <p>{story.content}</p>
                <Image src={`/images/story-bg${story.id}.webp`} alt={`성혼스토리${story.id}`} width={400} height={285} />
              </div> : <></>}
            </div>
          )}
        </Slider>
        <div className='more-button mo'>
          <Link href="/story">
            <p>더보기</p>
            <div>
              <div>
                <Image src="/icons/arrow_next_black.webp" alt='더보기 버튼' width={30} height={20} />
              </div>
              <div></div>
            </div>
          </Link>
        </div>
      </section>
      <section className="home5 section">
        <div className='display-flex-flow'>
          <div>
            <div>
              <h1>당신과 어울리는 인연,<br />노블스 결혼은 이렇게 함께합니다</h1>
              <p>결혼상담 전문가들이 회원님의 성향과 가치를 존중하며, 이상적인 결혼을 이루기 위한
                완벽한 결혼 매칭 서비스를 제공합니다. 이는 단순히 만남을 넘어 성혼까지 이루도록 돕는,
                진정한 결혼 동반자로서의 차별성을 보여줍니다.</p>
            </div>
            <div className='more-button'>
              <Link href="/about">
                <p>더보기</p>
                <div>
                  <div>
                    <Image src="/icons/arrow_next_black.webp" alt='더보기 버튼' width={30} height={20} />
                  </div>
                  <div></div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <section>
              <h2>남성회원 직업 TOP5</h2>
              <div>
                <Image src="/images/남성회원직업TOP5_mo.png" alt='남성회원 직업 TOP5' className='mo' width={600} height={200} />
                <Image src="/images/남성회원직업TOP5.png" alt='남성회원 직업 TOP5' className='pc' width={600} height={200} />
              </div>
            </section>
            <section>
              <h2>여성회원 직업 TOP5</h2>
              <div>
                <Image src="/images/여성회원직업TOP5_mo.png" alt='남성회원 직업 TOP5' className='mo' width={600} height={200} />
                <Image src="/images/여성회원직업TOP5.png" alt='남성회원 직업 TOP5' className='pc' width={600} height={200} />
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="home6 section">
        <MainSlide2 ref={slideRef} setSlideIndex={setSlideIndex}/>
        <div className="display-flex-flow slide-index">
            <div className="display-flex">
              <button onClick={() => slideRef.current?.prev()} className='main-arrow-prev'>
                <Image src="/icons/arrow_prev.webp" alt="이전" width={30} height={20} />
              </button>
              <button onClick={() => slideRef.current?.next()} className='main-arrow-next'>
                <Image src="/icons/arrow_next.webp" alt="다음" width={30} height={20} />
              </button>
            </div>
            <div className="display-flex">
                <p>{formattedIndex} <span>/ 03</span></p>
            </div>
          </div>
      </section>
      <section className='home7 section'>
        <div className='display-flex-flow'>
          <div>
            <h1>당신의 소중한 인연을 위한 첫걸음<br />지금, 노블스와 상담하세요</h1>
            <p>행복한 결혼준비를 노블스와 함께하세요.<br />맞춤 상담으로, 20년의 경험이 당신의 인연을 설계합니다.</p>
            <div className='pc rep-tel'>
              <div className='display-flex'>
                <div>
                  <Image src="/icons/icon_phone_yellow.png" alt='전화기 아이콘' width={20} height={20} />
                </div>
                <p>대표전화</p>
              </div>
              <h1>02-508-1098</h1>
            </div>
          </div>
          <InquireForm />
          <div className='mo rep-tel'>
            <div className='display-flex'>
              <div>
                <Image src="/icons/icon_phone_yellow.png" alt='전화기 아이콘' width={20} height={20} />
              </div>
              <p>대표전화</p>
            </div>
            <h1>02-508-1098</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
