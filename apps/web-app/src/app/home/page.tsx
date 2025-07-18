import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/landing/Banner";

function Home() {
  return (
    <div className="bg-[#F4ECE8] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;