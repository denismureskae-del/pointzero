import GlassCard from "@/components/GlassCard";
import { Check, X } from "lucide-react";

const idealClient = [
  "Женщины 28–45, умные, чувствующие, уставшие «тащить»",
  "Те, у кого всё вроде есть, но внутри пусто или застряло",
  "Те, кто слишком долго был сильным, удобным или «правильным»",
  "Те, кто чувствует, что жизнь проходит мимо",
];

const notForYou = [
  "Быстрых лайфхаков",
  "Волшебных таблеток",
  "Чтобы тебя пожалели или погладили по голове",
];

const results = [
  "Становится тихо в голове",
  "Появляется один честный вектор, а не десять желаний",
  "Уходит самообман",
  "Возвращается ощущение «я на своём месте»",
];

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        {/* Who I Am */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="heading-section text-foreground mb-6">
            Кто я
          </h2>
          <p className="text-body text-muted-foreground mb-4">
            Я не коуч, не мотивационный спикер, не эзотерик, не психолог в классическом смысле 
            и не инфоговорун.
          </p>
          <p className="text-body text-foreground">
            Моя ниша — работа с мышлением и восприятием на стыке 
            <span className="text-primary font-medium"> смысла, эстетики и реальности</span>.
          </p>
        </div>

        {/* What I Do */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <GlassCard className="p-8" intensity="strong">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              С кем я работаю
            </h3>
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
          </GlassCard>

          <GlassCard className="p-8" intensity="light">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              Это не для тех, кто хочет
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8" intensity="medium">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              После разговора со мной
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
          <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
            Моя ценность — ясность
          </h3>
          <p className="text-body text-muted-foreground">
            Я не обещаю лёгкий путь. Я помогаю перестать идти ложным. 
            Работаю с людьми, которые готовы перестать врать себе и хотят жить свою жизнь, 
            а не чью-то версию успеха.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default AboutSection;
