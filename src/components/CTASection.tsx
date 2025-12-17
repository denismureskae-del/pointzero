import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { MessageCircle, Send } from "lucide-react";

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/79680601602", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/mureskae", "_blank");
  };

  return (
    <section className="py-24" id="contact">
      <div className="container">
        <GlassCard className="p-12 md:p-16 text-center" intensity="strong" hover={false}>
          <h2 className="heading-section text-foreground mb-6">
            Начать навигацию
          </h2>
          
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
            Первый разговор — не обязательство, а точка ясности.
          </p>

          <p className="text-foreground font-medium mb-6">
            Выберите удобный способ связи
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              variant="glass"
              size="xl"
              className="flex-1 justify-center gap-3"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              WhatsApp
            </Button>

            <Button
              variant="glass"
              size="xl"
              className="flex-1 justify-center gap-3"
              onClick={handleTelegram}
            >
              <Send className="w-5 h-5 text-blue-500" />
              Telegram
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CTASection;