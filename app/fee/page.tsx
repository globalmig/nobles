import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export default function FeePage() {
    return (
        <PageLayout title="회원 가입비" backgroundImg="/images/fee_head_bg.webp">
            <div className="fee">
                <div>
                    <h1>회원 가입비</h1>
                </div>
                <div className="display-flex-flow">
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star1.png" alt="에메랄드 회원" width={70} height={70} />
                            </div>
                            <h3>에메랄드</h3>
                        </div>
                        <div>
                            <p>에메랄드</p>
                            <p><span>390</span>만원 ~ <span>490</span>만원</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star2.png" alt="사파이어 회원" width={70} height={70} />
                            </div>
                            <h3>사파이어</h3>
                        </div>
                        <div>
                            <p>사파이어</p>
                            <p><span>590</span>만원 ~ <span>790</span>만원</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star3.png" alt="골드 회원" width={70} height={70} />
                            </div>
                            <h3>골드</h3>
                        </div>
                        <div>
                            <p>골드</p>
                            <p><span>990</span>만원 ~ <span>1,190</span>만원</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star4.png" alt="다이아몬드 회원" width={70} height={70} />
                            </div>
                            <h3>다이아몬드</h3>
                        </div>
                        <div>
                            <p>다이아몬드</p>
                            <p><span>1,490</span>만원 ~ <span>2,090</span>만원</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star5.png" alt="VIP 회원" width={70} height={70} />
                            </div>
                            <h3>VIP</h3>
                        </div>
                        <div>
                            <p>VIP</p>
                            <p><span>2,590</span>만원 ~ <span>3,590</span>만원</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <div>
                                <Image src="/images/fee/fee_star6.png" alt="VIP로얄 회원" width={70} height={70} />
                            </div>
                            <h3>VIP로얄</h3>
                        </div>
                        <div>
                            <p>VIP로얄</p>
                            <p><span>5,000</span>만원 ~</p>
                            <p>(VAT 별도)</p>
                        </div>
                    </section>
                </div>
            </div>
        </PageLayout>
    )
}