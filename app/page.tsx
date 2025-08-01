import Fullpage from "@/components/Fullpage";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {

  return (
    <>
    <Fullpage/>
    <div className="scroll-button">
      <ScrollButton targetId="section1"/>
      <ScrollButton targetId="section2"/>
      <ScrollButton targetId="section3"/>
      <ScrollButton targetId="section4"/>
      <ScrollButton targetId="section5"/>
      <ScrollButton targetId="section6"/>
      <ScrollButton targetId="section7"/>
    </div>
    </>
  );
}
