'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Popup from "./Popup";
import Privacy from "./policies/Privacy";

export default function InquireForm() {

    const [isOpen, setIsOpen] = useState<null | 'privacy'>(null);

    const [inquire, setInquire] = useState({
        name: "",
        gender: "",
        year: "",
        phoneFront: "010",
        phoneMiddle: "",
        phoneLast: "",
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

    const onSubmitInquire = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("상담 신청이 완료되었습니다.");
        router.push("/");
    }, [inquire, router]);

    const yearOptions = Array.from({ length: 2005 - 1951 + 1 }, (_, i) => 1951 + i);

    return (
        <>
            <form className="inquire-form" onSubmit={onSubmitInquire}>
                <div className="display-flex">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" name="name" placeholder="이름을 입력해주세요." onChange={onChangeInquire} />
                </div>
                <div className="display-flex">
                    <label htmlFor="gender">성별</label>
                    <div className="display-flex">
                        <button type="button" onClick={() => onClickGender('남성')}>남성</button>
                        <button type="button" onClick={() => onClickGender('여성')}>여성</button>
                    </div>
                </div>
                <div className="display-flex">
                    <label htmlFor="year">출생년도</label>
                    <select id="birthYear" name="birthYear" onChange={onChangeInquire}>
                        <option value="">선택</option>
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
                                inputMode="numeric" id="phoneFront" name="phoneFront" placeholder="010" onChange={onChangeInquire} />
                            <p>-</p>
                            <input type="text"
                                inputMode="numeric" id="phoneMiddle" name="phoneMiddle" onChange={onChangeInquire} />
                            <p>-</p>
                            <input type="text"
                                inputMode="numeric" id="phoneLast" name="phoneLast" onChange={onChangeInquire} />
                        </div>
                    </div>
                </fieldset>
                <div className="display-flex">
                    <input type="checkbox" id="privacy" name="privacy" checked={inquire.privacy} onChange={onChangeInquire} />
                    <label htmlFor="privacy">
                        개인정보 수집 및 이용 동의(필수) 
                        <span onClick={() => setIsOpen('privacy')}>
                            전문보기
                        </span>
                    </label>
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