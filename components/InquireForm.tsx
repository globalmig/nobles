'use client';
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Popup from "./Popup";
import Privacy from "./policies/Privacy";

export default function InquireForm() {

    const [isOpen, setIsOpen] = useState<null | 'privacy'>(null);

    const pathname = usePathname();
    const isHome = pathname === "/";

    const [inquire, setInquire] = useState({
        name: "",
        gender: "",
        year: "",
        phoneFront: "010",
        phoneMiddle: "",
        phoneLast: "",
        category: "",
        privacy: false,
    });

    const router = useRouter();

    const onChangeInquire = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const newValue =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value;

        setInquire(prev => ({
            ...prev,
            [name]: newValue,
        }));
    }, []);

    const onClickGender = (gender: string) => {
        setInquire(prev => ({
            ...prev,
            gender,
        }))
    }

    const onSubmitInquire = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, year, gender, phoneFront, phoneMiddle, phoneLast, privacy } = inquire;

        if (!name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }
        if (!year.trim()) {
            alert("출생년도를 선택해주세요.");
            return;
        }
        if (!gender.trim()) {
            alert("성별을 선택해주세요.");
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
        if (!privacy) {
            alert("개인정보 수집 및 이용 동의를 해주세요.");
            return
        }

        const res = await fetch("/api/inquire", {
            method: "POST",
            body: JSON.stringify({
                name: inquire.name,
                gender: inquire.gender,
                year: inquire.year,
                phoneFront: inquire.phoneFront,
                phoneMiddle: inquire.phoneMiddle,
                phoneLast: inquire.phoneLast,
                category: '무료상담신청',
            }),
        });

        if (res.ok) {
            alert("상담 신청이 완료되었습니다.");
             if (typeof window !== 'undefined' && window.wcs) {
                if (!window.wcs_add) window.wcs_add = {};
                window.wcs_add['wa'] = 's_20e6c014d57c';
                const _conv = { type: 'lead' };
                window.wcs.trans?.(_conv);
            }

            if (typeof window !== 'undefined' && window.wsa) {
                window.wsa.cnv('4', 1000, 'UQVHsFC');
            }
            
            setInquire({
                name: "",
                gender: "",
                year: "",
                phoneFront: "010",
                phoneMiddle: "",
                phoneLast: "",
                category: "",
                privacy: false,
            })
            router.push("/");
        } else {
            const err = await res.json();
            console.log(err)
            alert("상담 신청을 실패했습니다. 다시 시도해주세요.");
        }
    }, [inquire, router]);

    const yearOptions = Array.from({ length: 2005 - 1951 + 1 }, (_, i) => 1951 + i);

    return (
        <>
            <form className="inquire-form" onSubmit={onSubmitInquire}>
                {isHome ? <h2>무료상담 신청하기</h2> : <></>}
                <input type="hidden" id="category" name="category" value="무료상담신청" />
                <div className="display-flex">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" name="name" placeholder="이름을 입력해주세요." onChange={onChangeInquire} value={inquire.name} />
                </div>
                <div className="display-flex">
                    <label htmlFor="gender">성별</label>
                    <div className="display-flex">
                        <button type="button" onClick={() => onClickGender('남성')} className={inquire.gender === '남성' ? 'selected' : ''}>남성</button>
                        <button type="button" onClick={() => onClickGender('여성')} className={inquire.gender === '여성' ? 'selected' : ''}>여성</button>
                    </div>
                </div>
                <div className="display-flex">
                    <label htmlFor="year">출생년도</label>
                    <select id="year" name="year" onChange={onChangeInquire}>
                        <option value={inquire.year}>선택</option>
                        {yearOptions.map(year => (
                            <option key={year} value={year}>{year} 년생</option>
                        ))}
                    </select>
                </div>
                <fieldset>
                    <div className="display-flex">
                        <div>
                            <legend>연락처</legend>
                        </div>
                        <div className="display-flex">
                            <input type="text"
                                inputMode="numeric" id="phoneFront" name="phoneFront" placeholder="010" onChange={onChangeInquire} value={inquire.phoneFront} />
                            <p>-</p>
                            <input type="text"
                                inputMode="numeric" id="phoneMiddle" name="phoneMiddle" onChange={onChangeInquire} value={inquire.phoneMiddle} />
                            <p>-</p>
                            <input type="text"
                                inputMode="numeric" id="phoneLast" name="phoneLast" onChange={onChangeInquire} value={inquire.phoneLast} />
                        </div>
                    </div>
                </fieldset>
                <div className="display-flex">
                    <input type="checkbox" id="privacy" name="privacy" checked={inquire.privacy} onChange={onChangeInquire} />
                    <label htmlFor="privacy"></label>
                    <p>
                        개인정보 수집 및 이용 동의(필수)
                        <span onClick={() => setIsOpen('privacy')}>
                            전문보기
                        </span>
                    </p>
                </div>
                <div>
                    <button type="submit">신청 완료하기</button>
                </div>
            </form>
            <Popup title="개인정보취급방침" isOpen={isOpen === 'privacy'} onClose={() => setIsOpen(null)}>
                <Privacy />
            </Popup>
            <div className={`black-bg ${isOpen ? 'open-pop' : ''}`}></div>
        </>

    )
}