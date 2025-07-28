'use client'
import Image from "next/image";
import React from "react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string,
    children: React.ReactNode
}

export default function Popup({isOpen, onClose, title, children} : PopupProps) {

    if(!isOpen) return null

    return (
        <>
        <div className={`popup ${isOpen ? 'open-pop' : ''}`}>
            <div>
                <div className="display-flex">
                    <h3>{title}</h3>
                <button onClick={onClose}>
                    <Image src="/icons/icon_close.webp" alt="닫기" width={15} height={15}/>
                </button>
                </div>
            </div>
            <section className="popup-box">
                {children}
            </section>
        </div>
        </>
    )
}