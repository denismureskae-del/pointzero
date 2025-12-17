import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Route, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Индивидуальная навигация 1-на-1",
    description: "Разбор текущей точки, выход из тупика, сборка направления.",
    intensity: "strong" as const,
    buttonText: "Запросить",
  },
  {
    icon: Route,
    title: "Стратегия перехода",
    description: "Для смены этапа жизни, роли, профессии или формата бизнеса.",
    intensity: "medium" as const,
    buttonText: "Начать",
  },
  {
    icon: Lightbulb,
    title: "Смысл и реализация",
    description: "Когда важно соединить деньги, внутреннее ощущение правильности и реальную жизнь.",
    intensity: "medium" as const,
    buttonText: "Войти в точку ясности",
  },
];

const formatItems = [
  "Формат подбирается индивидуально",
  "Конфиденциально",
  "Живая работа",
  "Без записи и шоу",
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Форматы работы
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <GlassCard 
              key={index} 
              className="p-8 flex flex-col h-full"
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
              <Button 
                variant="glass" 
                size="lg"
                className="w-full mt-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {service.buttonText}
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