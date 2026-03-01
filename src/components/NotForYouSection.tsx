import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const items = [
  { title: "Быстрых советов или инструкций", desc: "Это не про «как сделать за 15 минут»" },
  { title: "Объяснений или утешения", desc: "Я работаю с реальностью, а не с эмоциональными анестезиями" },
  { title: "«Вести за руку»", desc: "Я не беру ответственность за чужую жизнь" },
  { title: "Утвердить старые убеждения", desc: "Если цель — доказать себе, что «всё плохо» — это не ко мне" },
  { title: "Подтвердить жалость к себе", desc: "Моя работа — про честный взгляд на себя" },
];

const NotForYouSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-16">
            Точка Ноль не для тех, кто хочет
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="border border-border p-6 group hover:border-muted-foreground/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-muted-foreground/50 text-sm">✕</span>
                <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed pl-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotForYouSection;
