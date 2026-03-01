import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMethod = () => {
    document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      {/* Subtle gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Life Form Engineering
        </motion.p>

        <motion.h1 
          className="heading-display text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Вы не сломаны.
          <br />
          <span className="text-muted-foreground font-light">
            Ваша старая форма просто устарела.
          </span>
        </motion.h1>

        <motion.p 
          className="text-body text-muted-foreground max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Точка Ноль — это один разговор, после которого старые проблемы теряют власть. 
          Никакой «поддержки» и «сопровождения». Только инженерная очистка личности.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-foreground/80 text-foreground font-semibold text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
          >
            → Проверить, сработает ли это на мне
          </button>
          <button
            onClick={scrollToMethod}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
          >
            Узнать, как это работает
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
