import GlassCard from "@/components/GlassCard";

const painPoints = [
  "Ты многое чувствуешь, но не понимаешь, куда это применить",
  "Деньги не соответствуют твоему уровню глубины",
  "Ты устала «разбираться с собой» без результата",
  "Вокруг шум, а внутри — ощущение тупика",
  "Ты не хочешь быть «удобной», но не знаешь, кем быть вместо этого",
  "Ты чувствуешь, что готова к переменам, но не знаешь, с чего начать",
];

const ResonanceSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Если откликается — ты по адресу
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Это не про «проблемы». Это про состояние, когда всё вроде есть, 
            но что-то главное — ускользает.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <GlassCard 
              key={index} 
              className="p-6"
              intensity={index === 0 ? "strong" : "medium"}
            >
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm font-medium">•</span>
                </div>
                <p className="text-body text-foreground leading-relaxed">
                  {point}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResonanceSection;
