'use client'
import InquireList from "@/components/InquireList";
import Pagination from "@/components/Pagination";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"

interface InquireData {
    _id: string,
    name: string,
    gender?: string,
    year?: string,
    phoneFront: string,
    phoneMiddle: string,
    phoneLast: string,
    createdAt: string
}

export default function AdminPage() {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [inquireData, setInquireData] = useState<InquireData[]>([]);
    const [dataCount, setDataCount] = useState(0);
    const [startPage, setStartPage] = useState(1);
    const [category, setCategory] = useState<string>("전체");

    const dataPerPage = 10;

    const fetchData = useCallback(async () => {
        try {
            const query = category && category !== '전체'
                ? `/api/inquire?category=${category}&page=${startPage}&limit=${dataPerPage}`
                : `/api/inquire?page=${startPage}&limit=${dataPerPage}`;
            const res = await fetch(query);

            if (!res.ok) {
                const errText = await res.text();
                console.error('API 응답 실패:', res.status, errText);
                setInquireData([]);
                setDataCount(0);
                return;
            }

            const json = await res.json();
            setInquireData(json.data);
            setDataCount(json.totalCount ?? json.data.length);
        } catch (err) {
            console.log(err);
            setInquireData([]);
            setDataCount(0);
        }
    }, [category, startPage, dataPerPage]);

    useEffect(() => {
        fetchData();
    }, [startPage, category]);

    const onSubmitPassword = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password: password })
        });

        if (res.ok) {
            setIsAuth(true);
            alert("관리자페이지 접속에 성공했습니다.")
        } else {
            alert("비밀번호가 틀렸습니다.")
        }
    }, [password]);

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    return (
        <article className="admin">
            <div>
                <h2>{isAuth ? "상담 문의 목록" : "관리자 인증 확인"}</h2>
                {isAuth ?
                    <>
                        <ul className="display-flex">
                            <li onClick={() => {setCategory("전체"); setStartPage(1);}} className={category === "전체" ? "selected": ""}>전체</li>
                            <li onClick={() => {setCategory("무료상담신청"); setStartPage(1);}} className={category === "무료상담신청" ? "selected": ""}>무료상담신청</li>
                            <li onClick={() => {setCategory("간편상담신청"); setStartPage(1);}} className={category === "간편상담신청" ? "selected": ""}>간편상담신청</li>
                        </ul>
                        <InquireList inquireData={inquireData} dataCount={dataCount}
                            dataPerPage={dataPerPage} startPage={startPage} category={category} />
                        <Pagination dataCount={dataCount}
                            dataPerPage={dataPerPage}
                            setStartPage={setStartPage}
                            currentPage={startPage} />
                    </>
                    :
                    <form onSubmit={onSubmitPassword}>
                        <h3>비밀번호 입력</h3>
                        <div>
                            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요." onChange={onChangePassword} value={password} />
                        </div>
                        <button type="submit">인증하기</button>
                    </form>
                }
            </div>
        </article>
    )
}