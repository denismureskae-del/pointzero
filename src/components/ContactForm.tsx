import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { MessageCircle, Send } from "lucide-react";

const ContactForm = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/79680601602", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/mureskae", "_blank");
  };

  return (
    <GlassCard className="p-8 md:p-12" intensity="strong" hover={false}>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 text-center">
        Начать навигацию
      </h3>
      <p className="text-center text-muted-foreground mb-8">
        Выберите удобный способ связи
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
  );
};

export default ContactForm;
