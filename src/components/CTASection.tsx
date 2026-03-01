import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" id="contact">
      <div className="container max-w-2xl text-center">
        <AnimatedSection>
          <h2 className="heading-section text-foreground mb-6">
            Начать необратимые изменения
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-body text-muted-foreground mb-4">
            Первый разговор — не обязательство.
          </p>
          <p className="text-body text-foreground mb-12 font-medium">
            Он — точка сдвига, которую можно пройти прямо сейчас.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="https://wa.me/79680601602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground/80 text-foreground font-semibold text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </motion.a>

            <motion.a
              href="https://t.me/mureskae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-muted-foreground text-sm tracking-wide hover:border-foreground/50 hover:text-foreground transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Написать в Telegram
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xs text-muted-foreground/50">
            Отвечаю в течение нескольких часов. Не спамлю, не навязываю.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
