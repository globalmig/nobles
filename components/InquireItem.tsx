interface InquireItemProps {
    data: {
        _id: string,
        name: string,
        gender?: string,
        year?: string,
        phoneFront: string,
        phoneMiddle: string,
        phoneLast: string,
        createdAt: string,
    },
    index: number,
    category: string,
}

export default function InquireItem({ data, index, category }: InquireItemProps) {

    const { name, gender, year, phoneFront, phoneMiddle, phoneLast, createdAt } = data

    const isToday = (dateString: string): boolean => {
        const targetDate = new Date(dateString);
        const today = new Date();

        return (
            targetDate.getFullYear() === today.getFullYear() &&
            targetDate.getMonth() === today.getMonth() &&
            targetDate.getDate() === today.getDate()
        );
    };

    return (
        <li className="display-flex">
            <p>{index}</p>
            <p>{name}</p>
            {category === "무료상담신청" ? (
                <>
                    <p className="list-gender">{gender}</p>
                    <p className="list-year">{year}</p>
                </>
            ) : category === "전체" ? (
                <>
                    <p>{gender || "-"}</p>
                    <p>{year || "-"}</p>
                </>
            ) : null}
            <p>{phoneFront}-{phoneMiddle}-{phoneLast}</p>
            <p style={isToday(createdAt) ? { color: "#5C3329", fontWeight: "bold" } : {}}>
                {`${String(new Date(createdAt).getFullYear()).slice(2)}.${String(new Date(createdAt).getMonth() + 1).padStart(2, '0')}.${String(new Date(createdAt).getDate()).padStart(2, '0')}`}
            </p>
        </li>
    )
}