import FaqSection from "@/Pages/landing/FaqSection";
import FindYourCircle from "@/Pages/landing/FindYourCircle";
import GreenSection from "@/Pages/landing/GreenSection";
import Hero from "@/Pages/landing/Hero";
import OrangeSection from "@/Pages/landing/OrangeSection";
import TeamSection from "@/Pages/landing/TeamSection";

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
