import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Вскрываем смысловые модели",
    desc: "Анализируем текущую конфигурацию мышления — то, как вы принимаете решения и почему застреваете.",
  },
  {
    num: "02",
    icon: "🗑",
    title: "Выявляем устаревшее",
    desc: "Находим конфигурации, которые больше не служат, но продолжают занимать ресурс.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Снимаем лишние формы",
    desc: "Оставляем ядро мышления и выбора. То, что реально вы, без наносного.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32" id="method">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-6">
            Что происходит в разговоре
          </h2>
          <div className="section-divider mb-16" />
        </AnimatedSection>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="grid md:grid-cols-[80px_1fr] gap-6 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="text-5xl font-black text-border">{step.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="text-foreground font-bold text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-body-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-foreground font-bold text-center mt-16 text-lg">
            Сдвиг точки зрения — не процесс, а <span className="text-primary">необратимое изменение</span>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProcessSection;
