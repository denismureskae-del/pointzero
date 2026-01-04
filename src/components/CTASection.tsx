import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

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
        <AnimatedSection>
          <GlassCard className="p-12 md:p-16 text-center" intensity="strong" hover={false}>
            <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
              Я не принимаю решений за человека и не задаю направление его жизни.
              Моя работа заканчивается там, где появляется ясность.
            </p>
            
            <h2 className="heading-section text-foreground mb-6">
              Как записаться
            </h2>
            
            <p className="text-body text-muted-foreground max-w-xl mx-auto mb-4">
              Первый разговор — не обязательство.
            </p>
            
            <p className="text-body text-foreground max-w-xl mx-auto mb-8">
              Он — точка сдвига, которую можно пройти прямо сейчас.
            </p>

            <p className="text-foreground font-medium mb-6">
              Выберите удобный способ связи:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  variant="glass"
                  size="xl"
                  className="w-full justify-center gap-3"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  WhatsApp
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  variant="glass"
                  size="xl"
                  className="w-full justify-center gap-3"
                  onClick={handleTelegram}
                >
                  <Send className="w-5 h-5 text-blue-500" />
                  Telegram
                </Button>
              </motion.div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
