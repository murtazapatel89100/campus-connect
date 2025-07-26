import FaqSection from "@/components/landing/FaqSection";
import FindYourCircle from "@/components/landing/FindYourCircle";
import GreenSection from "@/components/landing/GreenSection";
import Hero from "@/components/landing/Hero";
import OrangeSection from "@/components/landing/OrangeSection";
import TeamSection from "@/components/landing/TeamSection";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GreenSection />
      <FindYourCircle />
      <OrangeSection />
      <TeamSection />
      <FaqSection />
    </div>
  );
}

export default Home;
