import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Знакомство",
    tag: "бесплатно",
    desc: "Вы выбираете удобный мессенджер ниже. Мы созваниваемся на 15–20 минут. Я слушаю вашу конфигурацию, вы слушаете — готовы ли к такому формату. Никаких обязательств.",
  },
  {
    num: "2",
    title: "Точка сдвига",
    tag: "основная работа",
    desc: "Основной разговор (60–90 минут). Я не веду за руку — я подсвечиваю то, что вы и так знаете, но боитесь себе признаться. Старые схемы становятся видны и перестают работать прямо в процессе.",
  },
  {
    num: "3",
    title: "Чистая форма",
    tag: "результат",
    desc: "Разговор заканчивается. Вы остаётесь один. Но теперь вы — это просто вы. Без груза долженствований и иллюзий. Именно в этой точке начинаются реальные действия.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" id="services">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-16">
            Как происходит сдвиг за 3 шага
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="grid md:grid-cols-[60px_1fr] gap-6 py-10 border-b border-border last:border-b-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="text-4xl font-black text-primary/30">{step.num}</div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-foreground font-bold text-lg">{step.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-primary/70 border border-primary/20 px-2 py-0.5">
                    {step.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-body-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
