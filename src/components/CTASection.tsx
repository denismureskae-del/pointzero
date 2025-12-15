import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24" id="contact">
      <div className="container">
        <GlassCard className="p-12 md:p-16 text-center" intensity="strong" hover={false}>
          <h2 className="heading-section text-foreground mb-6">
            Ты можешь продолжать ждать,
            <br />
            <span className="text-primary">а можешь начать слышать себя по-настоящему.</span>
          </h2>
          
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-10">
            Первый шаг — это не обязательство. Это возможность понять, 
            подходит ли тебе мой подход.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass-solid" size="xl" className="group">
              Начать работу
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              Задать вопрос
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CTASection;
