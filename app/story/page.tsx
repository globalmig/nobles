'use client';
import PageLayout from "@/components/PageLayout";
import Popup from "@/components/Popup";
import { storyData } from "@/data/StoryData";
import Image from "next/image";
import React, { useState } from "react";

export default function StoryPage() {

    const [isOpen, setIsOpen] = useState<null | number>(null);

    return (
        <PageLayout title="성혼스토리" backgroundImg="/images/story_head_bg.webp">
            <div className="story">
                <div>
                    <h1>노블스와 함께한 고객님의<br />진솔한 후기들을 만나보세요</h1>
                    <p>노블스를 통해 이뤄진 소중한 인연들의 순간들을 확인해보세요.</p>
                </div>
                <div>
                    {storyData.map(data =>
                        <section key={data.id}>
                            <h2>{data.title}</h2>
                            <p>
                                {data.content}
                            </p>
                            <div>
                                <button onClick={() => setIsOpen(data.id)}>
                                    <Image className="mo" src="/icons/arrow_next_black.webp" alt="더보기" width={33} height={22} />
                                </button>
                            </div>
                        </section>
                    )}
                    {storyData.map(data => isOpen === data.id ? (
                        <Popup key={data.id} title={data.title} isOpen={true} onClose={() => setIsOpen(null)}>{data.pop}</Popup>) : null
                    )}
                    <div className={`black-bg ${isOpen !== null ? 'open-pop' : ''}`}></div>
                </div>
                <div>
                    <button type="button">
                        <p>더보기</p>
                        <div>
                            <Image src="/icons/arrow_down.webp" alt="더보기 버튼" width={23} height={33} />
                        </div>
                    </button>
                </div>
            </div>
        </PageLayout>
    )
}