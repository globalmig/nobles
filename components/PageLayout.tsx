"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface PageLayoutProps {
    title: string,
    backgroundImg: string,
    children: ReactNode
}

export default function PageLayout ({title, backgroundImg, children} : PageLayoutProps) {

    const pathname = usePathname();
    const isInquirePage = pathname === "/inquire";

    return(
        <article className="page-layout" style={{background: isInquirePage ? "#fff9ef" : ""}}>
            <div>
                <h1>{title}</h1>
                <Image src={backgroundImg} alt={title} fill/>
            </div>
            <div>
                {children}
            </div>
        </article>
    )
}