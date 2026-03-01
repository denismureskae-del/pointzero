import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const cases = [
  {
    name: "Александр, 41 год",
    role: "владелец агентства",
    request: "«Потерял интерес к делу, все валится из рук, нет сил»",
    process: "В разговоре вскрылась базовая конструкция «я должен доказывать, что достоин». Через 2 часа схема разрушилась.",
    result: "Через 3 недели запустил новый проект без выгорания. Впервые за 5 лет без чувства «надо».",
  },
  {
    name: "Елена, 35 лет",
    role: "в отношениях 10 лет",
    request: "«Не могу уйти, хотя все плохо. Чувствую себя парализованной»",
    process: "Обнаружили, что идентичность построена вокруг «спасения партнера». Сняли эту форму.",
    result: "Приняла решение за 3 дня. Отношения либо трансформировались, либо завершились — но выбор стал её, а не вынужденным.",
  },
];

const CasesSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-16">
            Результаты, которые нельзя отменить
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="border border-border p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-4">
                <span className="text-foreground font-bold">{c.name}</span>
                <span className="text-muted-foreground text-sm">— {c.role}</span>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">Запрос</span>
                  <p className="text-foreground/80 mt-1 italic">{c.request}</p>
                </div>
                <div>
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">Что произошло</span>
                  <p className="text-foreground/80 mt-1">{c.process}</p>
                </div>
                <div>
                  <span className="text-primary uppercase tracking-wider text-xs font-medium">Результат</span>
                  <p className="text-foreground mt-1 font-medium">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-xs text-muted-foreground/50 text-center mt-8 italic">
            Имена изменены. Результаты индивидуальны.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSection;
