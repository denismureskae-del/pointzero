import GlassCard from "@/components/GlassCard";
import { Search, MessageCircle, Puzzle, Heart } from "lucide-react";

const methods = [
  {
    icon: Search,
    title: "Диагностика",
    description: "Глубокий разбор мышления, паттернов и реальных блоков.",
  },
  {
    icon: MessageCircle,
    title: "Отражение",
    description: "Я называю то, что ты чувствуешь, но не формулируешь.",
  },
  {
    icon: Puzzle,
    title: "Сборка",
    description: "Мы соединяем смысл, деньги, реализацию и образ жизни.",
  },
  {
    icon: Heart,
    title: "Поддержка",
    description: "Без давления. Без игры в «гуру». Чётко и по-человечески.",
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
              Моя работа — не мотивация. 
              <span className="text-primary"> Это навигация.</span>
            </h2>
            
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                Я не даю универсальных советов. Я помогаю увидеть твою реальную 
                конфигурацию: мышление, эмоции, стиль решений, ограничения и точки роста.
              </p>
              <p>
                После этого появляется: ясность, внутренняя тишина, конкретные шаги, 
                ощущение «я на своём месте».
              </p>
            </div>

            <GlassCard className="p-6" intensity="light" hover={false}>
              <p className="text-foreground italic font-serif text-lg">
                «Я не "веду за руку". Я ставлю зеркало, от которого невозможно отвернуться.»
              </p>
            </GlassCard>
          </div>

          {/* Method Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {methods.map((method, index) => (
              <GlassCard 
                key={index} 
                className="p-6"
                intensity={index % 2 === 0 ? "medium" : "light"}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
