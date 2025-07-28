"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainBottomFormProps {
    isOpen: React.Dispatch<React.SetStateAction<null | 'privacy' | 'terms' | 'compensation'>>;
}

export default function MainBottomForm({ isOpen }: MainBottomFormProps) {

    const pathname = usePathname();
    const isHome = pathname === '/'

    return (
        <div className="footer-fixed">
            <div>
                <button className="pc">
                    <Link href="https://pf.kakao.com/_eKxdxbn">
                        <Image src="/icons/icon_kakao.png" alt="카카오채널 문의" width={30} height={30} />
                    </Link>
                </button>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Image src="/icons/icon_up.png" alt="맨위로 이동" width={22} height={30} />
                </button>
            </div>
            <div style={{ display: isHome ? "block" : "none" }}>
                <div className="display-flex mo">
                    <button className="display-flex">
                        <div>
                            <Image src="/icons/icon_kakao.png" alt="카카오채널 문의" width={20} height={20} />
                        </div>
                        <Link href='https://pf.kakao.com/_eKxdxbn'>카톡상담</Link>
                    </button>
                    <button className="display-flex">
                        <div>
                            <Image src="/icons/icon_phone.png" alt="카카오채널 문의" width={20} height={20} />
                        </div>
                        <Link href='tel:02-508-1098'>전화상담</Link>
                    </button>
                </div>
                <div className={`pc ${isHome ? "" : "isHome"}`}>
                    <form className="display-flex">
                        <h3>간편상담신청</h3>
                        <div className="display-flex">
                            <input type="text" id="name" name="name" placeholder="이름" />
                            <div className="display-flex">
                                <input type="text"
                                    inputMode="numeric" id="phoneFront" name="phoneFront" placeholder="010" />
                                <p>-</p>
                                <input type="text"
                                    inputMode="numeric" id="phoneMiddle" name="phoneMiddle" />
                                <p>-</p>
                                <input type="text"
                                    inputMode="numeric" id="phoneLast" name="phoneLast" />
                            </div>
                            <div className="display-flex">
                                <input type="checkbox" id="privacy" name="privacy" />
                                <label htmlFor="privacy">
                                    개인정보 수집 및 이용 동의(필수)
                                    <span onClick={() => isOpen('privacy')}>
                                        전문보기
                                    </span>
                                </label>
                            </div>
                        </div>
                        <button type="submit">신청하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}