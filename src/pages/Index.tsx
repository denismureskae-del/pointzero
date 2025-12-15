import CloudBackground from "@/components/CloudBackground";
import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "@/components/HeroSection";
import ResonanceSection from "@/components/ResonanceSection";
import MethodSection from "@/components/MethodSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CloudBackground />
      <GlassNavbar />
      
      <main>
        <HeroSection />
        <ResonanceSection />
        <MethodSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
