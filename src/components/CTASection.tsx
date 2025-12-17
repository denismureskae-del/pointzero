import { useState } from "react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import ContactForm from "@/components/ContactForm";
import ContactModal from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24" id="contact">
      <div className="container space-y-12">
        <GlassCard className="p-12 md:p-16 text-center" intensity="strong" hover={false}>
          <h2 className="heading-section text-foreground mb-6">
            Начать навигацию
          </h2>
          
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-10">
            Первый разговор — не обязательство, а точка ясности.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="glass-solid" 
              size="xl" 
              className="group"
              onClick={() => setIsModalOpen(true)}
            >
              Связаться
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </GlassCard>

        <ContactForm />
      </div>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default CTASection;