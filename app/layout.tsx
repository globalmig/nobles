import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nobles",
  description: "노블스 결혼 정보 회사",
  openGraph: {
    title: 'Nobles',
    description: '품격있는 만남, 행복한 결혼의 시작. 단순한 소개가 아닌, 진정한 인연을 찾는 여정. 이상적인 배우자와의 만남을 위해 세심한 매칭과 전문적인 컨설팅을 제공합니다.',
    url: 'https://nobleswed.kr/',
    siteName: 'Nobles',
    images: [
      {
        url: 'https://nobleswed.kr/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '노블스 결혼 정보 회사',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '979cbcf752f36b8bc38702cce8341bf8c2233a1c',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="ko">
      <body>
        <Header />
        <Script
          src="//wcs.naver.net/wcslog.js"
          strategy="afterInteractive"
        />
        <Script id="wcs-analytics" strategy="afterInteractive">
          {`
          if (!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "s_20e6c014d57c";
          if (!_nasa) var _nasa = {};
          if (window.wcs) {
            wcs.inflow();
            wcs_do();
          }
        `}
        </Script>
        <Script
          src="//wsa.mig-log.com/wsalog.js"
          strategy="afterInteractive"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
