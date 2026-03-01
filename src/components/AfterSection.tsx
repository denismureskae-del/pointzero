import AnimatedSection from "@/components/AnimatedSection";

const AfterSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="heading-section text-foreground mb-8">
            Что происходит после
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-body text-muted-foreground mb-10">
            После разговора человек не возвращается к прежней форме — не потому что «что-то сделано», 
            а потому что старая конструкция больше не выдерживает реальность.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-4 text-left max-w-md mx-auto mb-12">
            {[
              "Исчезает груз неработающих схем",
              "Остаётся чистая конфигурация",
              "Появляются реальные выборы, без фантазий и иллюзий",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/85 text-body-sm">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Ты остаёшься с собой,{" "}
            <span className="text-primary">но без лишних форм.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AfterSection;
