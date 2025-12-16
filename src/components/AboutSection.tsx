import GlassCard from "@/components/GlassCard";
import { Check } from "lucide-react";

const idealClient = [
  "чувствуешь, что переросла текущую жизнь или роль",
  "много понимаешь, но не знаешь, куда именно идти дальше",
  "устала «разбираться с собой» без движения",
  "хочешь решений без насилия над собой",
  "готова к честному взгляду и реальным шагам",
];

const results = [
  "внутренняя тишина",
  "один ясный вектор вместо хаоса",
  "ощущение «я знаю, что делать дальше»",
];

const AboutSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="container">
        {/* Who I Am - Role */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="heading-section text-foreground mb-6">
            Моя роль
          </h2>
          <p className="text-body text-muted-foreground mb-4">
            Я не коуч. Не психолог в классическом смысле. 
            Не мотивационный спикер и не гуру.
          </p>
          <p className="text-body text-foreground mb-4">
            Моя ниша — <span className="text-primary font-medium">навигация жизненных и профессиональных переходов</span> 
            {" "}на стыке мышления, смысла и реальности.
          </p>
          <p className="text-body text-muted-foreground">
            Я работаю там, где старые ответы больше не работают, 
            а новые ещё не найдены.
          </p>
        </div>

        {/* Who it's for */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8" intensity="strong">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
              Кому это подходит
            </h3>
            <p className="text-muted-foreground mb-6">Если ты:</p>
            <ul className="space-y-4">
              {idealClient.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground mt-6 font-medium">— мы можем работать.</p>
          </GlassCard>

          <GlassCard className="p-8" intensity="medium">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              После работы со мной появляется
            </h3>
            <ul className="space-y-4">
              {results.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-foreground text-xs">✓</span>
                  </div>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Value Statement */}
        <GlassCard className="max-w-3xl mx-auto p-10 text-center" intensity="strong" hover={false}>
          <p className="text-body text-foreground">
            Это не про «исправить себя». 
            <br />
            <span className="text-primary font-medium">Это про перейти в следующую точку.</span>
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default AboutSection;