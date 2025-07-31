import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export default function AboutPage() {
    return (
        <PageLayout title="회사소개" backgroundImg="/images/about_head_bg.webp">
            <div className="about">
                <div className="display-flex-flow">
                    <div>
                        <h1>노블스 결혼정보회사를<br />선택해야 하는 이유</h1>
                        <div>
                            <Image src="/images/about/about_img.webp" alt="결혼 이미지" width={600} height={602} className="pc" />
                            <Image src="/images/about/about_img_mo.webp" alt="결혼 이미지" width={260} height={362} className="mo" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>20년 경력의 전문성</h2>
                            <p>20년차 성혼 전문가의 많은 쌍의 성혼사례 경험을 바탕으로 계약 기간 내 만남의 횟수 제한 없이 매칭을 진행해드리는 성혼 서비스를 제공하여 결혼이 될 수 있도록 확률을 높였습니다. 의대 출신 대표가 설립하여 전문직 및 품격 있는 회원의 맞춤 만남을 매칭 시스템을 통해 제공합니다.</p>
                        </div>
                        <div>
                            <section>
                                <div>
                                    <Image src="/icons/icon_목표.webp" alt="성혼중심의 목표 아이콘" width={50} height={50} />
                                </div>
                                <div>
                                    <h3>성혼 중심의 목표</h3>
                                    <p>심층 상담을 통해 성혼이라는 명확한 목표를 향해 나아갑니다.</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/icon_매칭.webp" alt="회수 제한 없는 매칭 아이콘" width={50} height={50} />
                                </div>
                                <div>
                                    <h3>회수 제한 없는 매칭</h3>
                                    <p>성혼의 확률을 높이며 원하는 이상형과의 특별한 만남을 추구합니다.</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/icon_노하우.webp" alt="전문가의 노하우 공유 아이콘" width={50} height={50} />
                                </div>
                                <div>
                                    <h3>전문가의 노하우 공유</h3>
                                    <p>매칭, 교제, 성혼 단계에서 발생할 수 있는 다양한 문제에 대해 전문적인 코칭을 제공합니다.</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/icon_목표.webp" alt="성혼중심의 목표 아이콘" width={50} height={50} />
                                </div>
                                <div>
                                    <h3>철저한 신원 인증 시스템</h3>
                                    <p>서류 검증을 통해 고객님께 안전하고 진실된 만남을 제공합니다.</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <Image src="/icons/icon_시스템.webp" alt="성혼중심의 목표 아이콘" width={50} height={50} />
                                </div>
                                <div>
                                    <h3>데이터 기반 매칭</h3>
                                    <p>과학과 감성의 융합으로 회원 개개인의 감성을 동시에 반영하여 이상적인 결혼을 설계합니다.</p>
                                </div>
                            </section>
                        </div>
                        <div>
                            <p>노블스 멤버십의 만남은 고객님의 성혼을 이루기 위해 최선을 다합니다. 엄선된 품격있는 고객만을 위한 서비스로, 단순한 만남을 넘어 진정한 연결을 만들어 갑니다.고객님의 성공적인 만남과 행복을 위해 언제나 최선을 다하는 노블스 만남입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about2">
                <div>
                    <div>
                        <h1>정직함이 만든 품격있는 인연,<br />고객님의 만족을 약속합니다</h1>
                        <p>정직한 결혼정보 서비스와 전문직, 의료계, 고소득, 대기업, 엘리트, 자산가 회원의 품격 있는 만남을 통해 고객님께 신뢰와 만족을 드립니다.</p>
                    </div>
                    <div>
                        <section>
                            <div>
                                <button>직업</button>
                            </div>
                            <div className="display-flex-flow">
                                <div>
                                    <h3>남성</h3>
                                    <Image src="/images/about/남성직업그래프_pc.webp" alt="남성 직업 그래프" width={596} height={563} />
                                </div>
                                <div>
                                    <h3>여성</h3>
                                    <Image src="/images/about/여성직업그래프_pc.webp" alt="여성 직업 그래프" width={596} height={563}  />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <button>연소득</button>
                            </div>
                            <div className="display-flex-flow">
                                <div>
                                    <h3>남성</h3>
                                    <Image src="/images/about/남성연소득그래프_pc.webp" alt="남성 연소득 그래프" width={596} height={418} />
                                </div>
                                <div>
                                    <h3>여성</h3>
                                    <Image src="/images/about/여성연소득그래프_pc.webp" alt="여성 연소득 그래프" width={596} height={418}  />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <button>자산</button>
                            </div>
                            <div className="display-flex-flow">
                                <div>
                                    <h3>남성</h3>
                                    <Image src="/images/about/남성자산그래프_pc.webp" alt="남성 자산 그래프" width={596} height={274}  />
                                </div>
                                <div>
                                    <h3>여성</h3>
                                    <Image src="/images/about/여성자산그래프_pc.webp" alt="여성 자산 그래프" width={596} height={274}  />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}