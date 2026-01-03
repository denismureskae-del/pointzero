import GlassCard from "@/components/GlassCard";
import { Target, Layers, Scissors, Eye } from "lucide-react";

const whatHappens = [
  {
    icon: Layers,
    title: "Вскрываем смысловые модели",
    description: "текущую конфигурацию мышления",
  },
  {
    icon: Target,
    title: "Выявляем устаревшее",
    description: "конфигурации, которые больше не служат",
  },
  {
    icon: Scissors,
    title: "Снимаем лишние формы",
    description: "оставляя ядро мышления и выбора",
  },
  {
    icon: Eye,
    title: "Сдвиг точки зрения",
    description: "не процесс, а необратимое изменение. Человек ясно видит, что именно меняется и почему возврат к старой форме больше невозможен",
  },
];

const MethodSection = () => {
  return (
    <section className="py-24" id="method">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="heading-section text-foreground">
              Что это значит
            </h2>
            
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                Это не про «помочь тебе жить лучше».
              </p>
              <p>
                Это не про «поддержку и сопровождение».
              </p>
              <p>
                Это не про психологические советы.
              </p>
              <p className="text-foreground font-medium">
                Это системная инженерная операция над формой личности — чтобы удалить неработающие структуры 
                и оставить только то, что реально ты.
              </p>
              <p>
                Всё, что затрагивается, проговаривается и осознаётся в процессе разговора.
              </p>
            </div>

            <GlassCard className="p-6" intensity="light" hover={false}>
              <p className="text-foreground italic font-serif text-lg">
                «Такой разговор нарушает старую идентичность — и это норма, а не ошибка.»
              </p>
            </GlassCard>
          </div>

          {/* Method Cards */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              Что происходит в разговоре
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {whatHappens.map((method, index) => (
                <GlassCard 
                  key={index} 
                  className="p-6"
                  intensity={index % 2 === 0 ? "medium" : "light"}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-2">
                    {method.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
