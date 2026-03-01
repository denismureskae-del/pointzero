import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const nots = [
  "Не про «помочь жить лучше»",
  "Не про поддержку и сопровождение",
  "Не про психологические советы",
  "Не про поиск «пути»",
];

const yeses = [
  "Это системная инженерная операция над формой личности",
  "Мы удаляем неработающие структуры",
  "Оставляем только то, что реально ты",
  "Результат необратим",
];

const AntiPositionSection = () => {
  return (
    <section className="py-24 md:py-32" id="what-is">
      <div className="container">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-16">
            Это не то, что вы думаете
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              {nots.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-muted-foreground/60 text-lg mt-0.5">✕</span>
                  <span className="text-muted-foreground text-body-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              {yeses.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span className="text-foreground/90 text-body-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-sm text-muted-foreground/70 text-center max-w-lg mx-auto">
            Всё, что затрагивается, проговаривается и осознаётся в процессе разговора. 
            Никаких скрытых техник и манипуляций.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AntiPositionSection;
