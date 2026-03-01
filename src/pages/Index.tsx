import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "@/components/HeroSection";
import AntiPositionSection from "@/components/AntiPositionSection";
import ForWhoSection from "@/components/ForWhoSection";
import NotForYouSection from "@/components/NotForYouSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import AuthorSection from "@/components/AuthorSection";
import StepsSection from "@/components/StepsSection";
import AfterSection from "@/components/AfterSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <GlassNavbar />
      
      <main>
        <HeroSection />
        <AntiPositionSection />
        <ForWhoSection />
        <NotForYouSection />
        <ProcessSection />
        <CasesSection />
        <AuthorSection />
        <StepsSection />
        <AfterSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
