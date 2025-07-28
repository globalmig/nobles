import InquireForm from "@/components/InquireForm";
import PageLayout from "@/components/PageLayout";

export default function InquirePage() {

    return (
        <PageLayout title="가입신청" backgroundImg="/images/inquire_head_bg.webp">
            <div className="inquire">
                <div>
                    <h1>당신의 소중한 인연을 위한 첫걸음<br />지금, 노블스와 상담하세요</h1>
                    <p>행복한 결혼 준비를 노블스와 함께하세요.<br />맞춤 상담으로, 20년의 경험이 당신의 인연을 설계합니다.</p>
                </div>
                <div>
                    <h2>무료 상담 신청하기</h2>
                    <InquireForm/>
                </div>
            </div>
        </PageLayout>
    )
}