import GlassCard from "@/components/GlassCard";
import { Eye, MapPin, Compass, Play } from "lucide-react";

const methods = [
  {
    icon: Eye,
    title: "Точно отражаю",
    description: "твою реальную конфигурацию",
  },
  {
    icon: MapPin,
    title: "Помогаю увидеть",
    description: "где ты застряла и почему",
  },
  {
    icon: Compass,
    title: "Собираю направление",
    description: "которое тебе действительно подходит",
  },
  {
    icon: Play,
    title: "Помогаю начать движение",
    description: "без давления и самообмана",
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
              Как я работаю
            </h2>
            
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                Я не веду за руку и не предлагаю универсальных решений.
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