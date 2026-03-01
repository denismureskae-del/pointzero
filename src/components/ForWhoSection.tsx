import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const items = [
  "Ощущает внутреннее сопротивление, которое нельзя обойти",
  "Понимает: прежние стратегии и роли больше не работают",
  "Не ищет «путь», а нуждается в точном сдвиге формы",
  "Готов принять результат как необратимый сдвиг, а не «урок»",
];

const ForWhoSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <h2 className="heading-section text-foreground mb-12">
            Это для тех, кто:
          </h2>
        </AnimatedSection>

        <div className="space-y-6 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span className="text-body text-foreground/85">{item}</span>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-body-sm text-primary/80 italic border-l-2 border-primary/30 pl-6">
            Это работа только с теми, кто готов видеть себя честно и брать ответственность за последствия ясности.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ForWhoSection;
