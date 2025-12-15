import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Palette, Route } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Индивидуальная работа 1-на-1",
    description: "Глубинный диалог, прояснение жизненного и профессионального направления, сборка мышления и решений.",
    intensity: "strong" as const,
  },
  {
    icon: Palette,
    title: "Эстетическое и смысловое консультирование",
    description: "Работа с образом себя, внутренний конфликт и самореализация, выбор, который «чувствуется правильным».",
    intensity: "medium" as const,
  },
  {
    icon: Route,
    title: "Стратегия жизни и переходов",
    description: "Выход из тупика, смена этапа, решения без давления и насилия над собой.",
    intensity: "medium" as const,
  },
];

const formatItems = [
  "Индивидуально",
  "Онлайн / офлайн",
  "Конфиденциально",
  "Без записи и трансляций",
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Каждый формат подбирается индивидуально под твой запрос и текущую ситуацию.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <GlassCard 
              key={index} 
              className="p-8 flex flex-col"
              intensity={service.intensity}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Button variant="glass" size="sm" className="w-fit">
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* Format Info */}
        <GlassCard className="p-8" intensity="light" hover={false}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {formatItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ServicesSection;
