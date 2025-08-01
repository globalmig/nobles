import InquireItem from "./InquireItem";

interface DataProps {
    _id: string,
    name: string,
    gender?: string,
    year?: string,
    phoneFront: string,
    phoneMiddle: string,
    phoneLast: string,
    createdAt: string,
}

interface InquireListProps {
    inquireData: DataProps[],
    dataCount: number,
    dataPerPage: number;
    startPage: number;
    category: string
}

export default function InquireList({ inquireData, dataCount, dataPerPage, startPage, category }: InquireListProps) {

    return (
        <ul>
            <li className="display-flex">
                <p>번호</p>
                <p>이름</p>
                {["무료상담신청", "전체"].includes(category) && (
                    <>
                        <p className="list-gender">성별</p>
                        <p className="list-year">출생년도</p>
                    </>
                )}
                <p>연락처</p>
                <p>신청날짜</p>
            </li>
            {inquireData.length > 0 ? (
                inquireData.map((data, idx) =>
                    <InquireItem key={data._id} data={data} category={category} index={dataCount - ((startPage - 1) * dataPerPage + idx)} />
                )
            ) : (
                <li className="no-inquire"><p>문의가 존재하지 않습니다.</p></li>
            )}
        </ul>
    )
}