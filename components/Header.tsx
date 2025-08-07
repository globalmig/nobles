'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const headerStyle = {
    white: {
        background: "white",
        borderBottom: "1px solid #ccc",
    },
    transparent: {
        background: "transparent",
    },
    blur: {
        background: "transparent",
        backdropFilter: "blur(10px)",
    }
}

export default function Header() {

    const pathname = usePathname();
    const isHome = pathname === '/'
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isHover, setIsHover] = useState<boolean>(false);
    const [headerMode, setHeaderMode] = useState<"transparent" | "white" | "blur">("transparent");

    useEffect(() => {
        const fullpage = document.getElementById("fullpage");
        if (!fullpage) return;

        const sections = Array.from(fullpage.querySelectorAll("section"));

        const onScroll = () => {
            const scrollY = fullpage.scrollTop + fullpage.clientHeight / 2;

            for (const section of sections) {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollY >= top && scrollY < bottom) {
                    switch (section.id) {
                        case "section1":
                            setHeaderMode("transparent");
                            break;
                        case "section2":
                            setHeaderMode("blur");
                            break;
                        case "section3":
                        case "section4":
                            setHeaderMode("white");
                            break;
                        case "section5":
                        case "section6":
                        case "section7":
                            setHeaderMode("blur");
                            break;
                        default:
                            setHeaderMode("transparent");
                    }
                    break;

                }
            }
        };

        fullpage.addEventListener("scroll", onScroll);
        onScroll(); // 초기화용

        return () => fullpage.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <header className={`${isHome ? "home-header" : "inner-header"}`} style={ isHome ? {...headerStyle[headerMode] }: headerStyle.white}>
            <div className="display-flex">
                <Link href="/">
                    <div>
                        <Image src="/logo.svg" alt="로고" width={120} height={30} />
                    </div>
                </Link>
                <nav className={`${isOpen ? 'nav-open' : 'nav-close'}`}>
                    <div className="mo" onClick={() => setIsOpen(false)}>
                        <Image src="/icons/icon_close.webp" alt="닫기" width={20} height={20} />
                    </div>
                    <ul>
                        <li><Link href="/about" onClick={() => setIsOpen(false)} style={{color: headerMode === "white" ? "black" : ""}}>회사소개</Link></li>
                        <li><Link href="/story" onClick={() => setIsOpen(false)} style={{color: headerMode === "white" ? "black" : ""}}>성혼스토리</Link></li>
                        <li><Link href="/inquire" onClick={() => setIsOpen(false)} style={{color: headerMode === "white" ? "black" : ""}}>가입신청</Link></li>
                        <li><Link href="/fee" onClick={() => setIsOpen(false)} style={{color: headerMode === "white" ? "black" : ""}}>회원 가입비</Link></li>
                    </ul>
                </nav>
                <div className={`black-bg ${isOpen ? 'open-pop' : ''}`}></div>
                <div className="display-flex pc">
                    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        <Image src="/icons/icon_kakao_link.png" alt="카카오 채널" width={120} height={35} style={{ display: isHover ? "block" : "none", filter: headerMode === "white" ? "invert(1)" : ""}} />
                        <Link href="https://pf.kakao.com/_eKxdxbn">
                            <Image src="/icons/icon_kakao.png" alt="카카오 채널 문의하기"
                                width={30} height={30} style={{filter: headerMode === "white" ? "invert(0)" : ""}}/>
                        </Link>
                    </div>
                    <Link href="tel:02-508-1098" className="display-flex" >
                        <div>
                            <Image src="/icons/icon_phone.png" alt="전화 문의 아이콘" width={20} height={20} style={{filter: headerMode === "white" ? "invert(1)" : ""}}/>
                        </div>
                        <p style={{filter: headerMode === "white" ? "invert(1)" : ""}}>02-508-1098</p>
                    </Link>
                </div>
                <div className="mo" onClick={() => setIsOpen(true)}>
                    <Image src="/icons/icon_nav.webp" alt="메뉴 열기" width={30} height={30} style={{
                        filter: isHome && headerMode !== "white" ? undefined : "invert(1)",
                    }} />
                </div>
            </div>
        </header>
    )
}