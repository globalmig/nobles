'use client';
import Image from "next/image";
import Popup from "./Popup";
import CompensationPolicy from "./policies/CompensationPolicy";
import Privacy from "./policies/Privacy";
import TermsOfUse from "./policies/TermsOfUse";
import { useState } from "react";
import MainBottomForm from "./MainBottomForm";
import Script from "next/script";
import Link from "next/link";

export default function Footer() {

    const [isOpen, setIsOpen] = useState<null | 'privacy' | 'terms' | 'compensation'>(null);

    return (
        <>
            <footer>
                <ul className="display-flex-flow">
                    <li onClick={() => setIsOpen('privacy')}>개인정보취급방침</li>
                    <li onClick={() => setIsOpen('terms')}>이용약관</li>
                    <li onClick={() => setIsOpen('compensation')}>보증보험에 의한 손해배상 청구 절차</li>
                    <li><Link href="/admin">관리자페이지</Link></li>
                </ul>
                <div></div>
                <div>
                    <ul className="display-flex-flow">
                        <li>노블스 결혼정보회사</li>
                        <li>대표 : 이민걸</li>
                        <li>주소 : 서울특별시 강남구 테헤란로 2길 27, 13층 (역삼동, 패스트파이브빌딩)</li>
                        <li>사업자등록번호 : 587-57-00781</li>
                        <li>전화번호 : 02-508-1098</li>
                        <li>국내결혼중개업번호 : 서울-강남-국내-25-0002호</li>
                        <li>©노블스 결혼정보회사.All Rights Reserved</li>
                    </ul>
                    <ul className="display-flex-flow">
                        <li>※ 본 번호로의 광고·영업 전화는 <br />업무방해 및 정보통신망법 위반으로 <br /><span>네이버/카카오 본사 및 관계기관에 <br />즉시 신고합니다.</span></li>
                        <li>
                            <Image src="/logo.svg" alt="노블스 로고 이미지" width={100} height={50} />
                        </li>
                    </ul>
                </div>
                <MainBottomForm isOpen={setIsOpen} />
                <Popup title="개인정보취급방침" isOpen={isOpen === 'privacy'} onClose={() => setIsOpen(null)}>
                    <Privacy />
                </Popup>
                <Popup title="이용약관" isOpen={isOpen === 'terms'} onClose={() => setIsOpen(null)}>
                    <TermsOfUse />
                </Popup>
                <Popup title="보증보험에 의한 손해배상 청구 절차" isOpen={isOpen === 'compensation'} onClose={() => setIsOpen(null)}>
                    <CompensationPolicy />
                </Popup>
                <div className={`black-bg ${isOpen ? 'open-pop' : ''}`}></div>
                <Script
                    src="//wsa.mig-log.com/wsalog.js"
                    type="text/javascript"
                    strategy="beforeInteractive"
                />
                <Script
                    id="wsa-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
      if (typeof wsa !== 'undefined') {
        wsa.inflow("nobleswed.kr");
        wsa_do(wsa);
      }
    `,
                    }}
                />
            </footer>
        </>
    )
}