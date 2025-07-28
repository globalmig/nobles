'use client'
import MainSlide from "@/components/MainSlide";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const slideRef = useRef<{ next: () => void; prev: () => void }>(null);

  return (
    <>
      <div className="home">
        <MainSlide ref={slideRef}/>
        <div>
          <h1>품격있는 만남, <br />행복한 결혼의 시작</h1>
          <p>단순한 소개가 아닌, 진정한 인연을 찾는 여정.<br />
            이상적인 배우자와의 만남을 위해 세심한 매칭과 전문적인 컨설팅을 제공합니다.</p>
          <div className="display-flex">
            <button onClick={() => slideRef.current?.prev()} className='main-arrow-prev'>
              <Image src="/icons/arrow_prev.webp" alt="이전" width={30} height={20} />
            </button>
            <button onClick={() => slideRef.current?.prev()} className='main-arrow-next'>
              <Image src="/icons/arrow_next.webp" alt="다음" width={30} height={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
