import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center pt-32 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div 
              className="space-y-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-lg border border-white/40">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">
                  Навигация к себе настоящей
                </span>
              </div>

              <h1 className="heading-display text-foreground">
                Ты не сломана. 
                <br />
                <span className="text-primary">
                  Ты просто живёшь не из своего места.
                </span>
              </h1>

              <p className="text-body text-muted-foreground max-w-xl">
                Я помогаю вернуть ясность, опору и направление — без насилия над собой, 
                иллюзий и чужих сценариев. Путь от точки ноль к новой форме.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="glass-solid" 
                  size="lg" 
                  className="group"
                  onClick={() => setIsModalOpen(true)}
                >
                  Записаться на встречу
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>

            {/* Image/Visual */}
            <div 
              className="relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/10 animate-pulse-slow" />
                <div className="absolute inset-4 rounded-3xl border border-primary/20" />
                
                {/* Glass frame */}
                <div className="absolute inset-8 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl">
                  <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                  />
                  <img
                    src="https://cdn.poehali.dev/files/photo_2025-11-11_16-02-37.jpeg"
                    alt="Персональный навигатор"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 px-6 py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl animate-float-slow">
                  <p className="text-sm font-medium text-foreground">Глубинная работа</p>
                  <p className="text-xs text-muted-foreground">Индивидуально</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default HeroSection;
