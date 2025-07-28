'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {

    const pathname = usePathname();
    const isHome = pathname === '/'
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <header className={`${isHome ? "home-header" : "inner-header"}`} style={{background: isOpen ? "white" : ""}}>
            <div className="display-flex">
                <Link href="/">
                    <div>
                        <Image src="/logo.svg" alt="로고" width={120} height={30} />
                    </div>
                </Link>
                <nav className={`${isOpen ? 'nav-open' : 'nav-close'}`}>
                    <div className="mo" onClick={() => setIsOpen(false)}>
                        <Image src="/icons/icon_close.webp" alt="닫기" width={20} height={20}/>
                    </div>
                    <ul>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>회사소개</Link></li>
                        <li><Link href="/story" onClick={() => setIsOpen(false)}>성혼스토리</Link></li>
                        <li><Link href="/inquire" onClick={() => setIsOpen(false)}>가입신청</Link></li>
                        <li><Link href="/fee" onClick={() => setIsOpen(false)}>회원 가입비</Link></li>
                    </ul>
                </nav>
                <div className={`black-bg ${isOpen ? 'open-pop' : ''}`}></div>
                <div className="display-flex pc">
                    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        <Image src="/icons/icon_kakao.png" alt="카카오 채널" width={30} height={30} />
                        <Link href="https://pf.kakao.com/_eKxdxbn">
                            <Image src="/icons/icon_kakao.png" alt="카카오 채널 문의하기" className={`${isHover ? 'ishover' : ''}`} width={70} height={30} />
                        </Link>
                    </div>
                    <Link href="tel:02-508-1098" className="display-flex">
                        <div>
                            <Image src="/icons/icon_phone.png" alt="전화 문의 아이콘" width={20} height={20} />
                        </div>
                        <p>02-508-1098</p>
                    </Link>
                </div>
                <div className="mo" onClick={() => setIsOpen(true)}>
                    <Image src="/icons/icon_nav.webp" alt="메뉴 열기" width={30} height={30} style={{
    filter: isHome ? undefined : "invert(1)",
  }}/>
                </div>
            </div>
        </header>
    )
}