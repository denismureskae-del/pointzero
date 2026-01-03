import GlassCard from "@/components/GlassCard";
import { Check, X } from "lucide-react";

const idealClient = [
  "ощущаешь внутреннее сопротивление, которое нельзя обойти",
  "понимаешь, что прежние формы личности устарели",
  "не ищешь «путь», а нуждаешься в точном сдвиге формы",
  "готов принять результат как необратимый сдвиг, а не «урок»",
];

const notForYou = [
  {
    title: "Быстрых советов или инструкций",
    description: "Это не про «как сделать за 15 минут»"
  },
  {
    title: "Объяснений или утешения",
    description: "Я работаю с реальностью, а не с эмоциональными анестезиями"
  },
  {
    title: "«Вести за руку»",
    description: "Я не беру ответственность за чужую жизнь"
  },
  {
    title: "Утвердить старые убеждения",
    description: "Если цель — доказать себе, что «всё плохо» — это не ко мне"
  },
  {
    title: "Подтвердить жалость к себе",
    description: "Моя работа — про честный взгляд на себя"
  },
];

const afterResults = [
  "исчезает груз неработающих схем",
  "остаётся чистая конфигурация",
  "появляются реальные выборы, без фантазий и иллюзий",
];

const AboutSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="container">
        {/* Who it's for / not for */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-8" intensity="strong">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
              Для кого это
            </h3>
            <p className="text-muted-foreground mb-6">Это для тех, кто:</p>
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
            <p className="text-foreground mt-6 font-medium">
              Это работа только с теми, кто готов видеть себя честно и брать ответственность за последствия ясности.
            </p>
          </GlassCard>

          <GlassCard className="p-8" intensity="medium">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
              Точка Ноль не для тех, кто хочет
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-foreground/90 font-medium">{item.title}</span>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* What happens after */}
        <GlassCard className="max-w-3xl mx-auto p-10" intensity="strong" hover={false}>
          <h3 className="font-serif text-2xl font-medium text-foreground mb-4 text-center">
            Что происходит после
          </h3>
          <p className="text-body text-muted-foreground text-center mb-6">
            После разговора человек не возвращается к прежней форме — не потому что «что-то сделано», а потому что старая конструкция больше не выдерживает реальность. Потому что:
          </p>
          <ul className="space-y-3 max-w-md mx-auto mb-6">
            {afterResults.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-body text-center">
            <span className="text-primary font-medium">Ты остаёшься с собой, но без лишних форм.</span>
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default AboutSection;
