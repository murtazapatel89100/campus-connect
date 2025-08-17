import FaqSection from "@/components/landing/FaqSection";
import FindYourCircle from "@/components/landing/FindYourCircle";
import GreenSection from "@/components/landing/GreenSection";
import Hero from "@/components/landing/Hero";
import OrangeSection from "@/components/landing/OrangeSection";
import TeamSection from "@/components/landing/TeamSection";
import Feature from "@/components/landing/feature";
import Scroll from "@/components/landing/GSAPScrollExpand";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="w-full overflow-hidden pointer-events-none select-none">
        <img
          src="/waves/wave_green.svg"
          alt="greenWave"
          className="w-full h-auto"
          draggable="false"
        />
      </div>
      <GreenSection />
      <FindYourCircle />
      <OrangeSection />
      <Feature />
      <TeamSection />
      <FaqSection />
    </div>
  );
}

export default Home;
