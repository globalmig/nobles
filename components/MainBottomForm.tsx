"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

interface MainBottomFormProps {
    isOpen: React.Dispatch<React.SetStateAction<null | 'privacy' | 'terms' | 'compensation'>>;
}

export default function MainBottomForm({ isOpen }: MainBottomFormProps) {

    const pathname = usePathname();
    const isHome = pathname === '/'

    const [simpleInquire, setSimpleInquire] = useState({
        name: "",
        phoneFront: "010",
        phoneMiddle: "",
        phoneLast: "",
        category: "",
        privacy2: false,
    });

    const router = useRouter();

    const onChangeInquire = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const newValue =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value;

        setSimpleInquire(prev => ({
            ...prev,
            [name]: newValue,
        }));
    }, []);

    const onSubmitInquire = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, phoneFront, phoneMiddle, phoneLast, privacy2 } = simpleInquire;

        if (!name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }
        if (!phoneFront.trim()) {
            alert("전화번호를 입력해주세요.");
            return;
        }
        if (!phoneMiddle.trim()) {
            alert("전화번호를 입력해주세요.");
            return;
        }
        if (!phoneLast.trim()) {
            alert("전화번호를 입력해주세요.");
            return;
        }
        if (!privacy2) {
            alert("개인정보 수집 및 이용 동의를 해주세요.");
            return
        }

        const res = await fetch("/api/inquire", {
            method: "POST",
            body: JSON.stringify({
                name: simpleInquire.name,
                phoneFront: simpleInquire.phoneFront,
                phoneMiddle: simpleInquire.phoneMiddle,
                phoneLast: simpleInquire.phoneLast,
                category: '간편상담신청',
            }),
        });

        if (res.ok) {
            alert("상담 신청이 완료되었습니다.")
            setSimpleInquire({
                name: "",
                phoneFront: "010",
                phoneMiddle: "",
                phoneLast: "",
                category: "",
                privacy2: false,
            })
            router.push("/");
        } else {
            const err = await res.json();
            console.log(err)
            alert("상담 신청을 실패했습니다. 다시 시도해주세요.");
        }
    }, [simpleInquire, router]);

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
                    <form className="display-flex" onSubmit={onSubmitInquire}>
                        <h3>간편상담신청</h3>
                        <div className="display-flex">
                            <input type="hidden" id="category" name="category" value="간편상담신청" />
                            <input type="text" id="name" name="name" placeholder="이름" value={simpleInquire.name} onChange={onChangeInquire} />
                            <div className="display-flex">
                                <input type="text"
                                    inputMode="numeric" id="phoneFront" name="phoneFront" placeholder="010" value={simpleInquire.phoneFront} onChange={onChangeInquire} />
                                <p>-</p>
                                <input type="text"
                                    inputMode="numeric" id="phoneMiddle" name="phoneMiddle" value={simpleInquire.phoneMiddle} onChange={onChangeInquire} />
                                <p>-</p>
                                <input type="text"
                                    inputMode="numeric" id="phoneLast" name="phoneLast" value={simpleInquire.phoneLast} onChange={onChangeInquire} />
                            </div>
                            <div className="display-flex">
                                <input type="checkbox" id="privacy2" name="privacy2" checked={simpleInquire.privacy2} onChange={onChangeInquire} />
                                <label htmlFor="privacy2"> </label>
                                <p>
                                    개인정보 수집 및 이용 동의(필수)
                                    <span onClick={() => isOpen('privacy')}>
                                        전문보기
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button type="submit">신청하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}