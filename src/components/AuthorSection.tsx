import AnimatedSection from "@/components/AnimatedSection";

const AuthorSection = () => {
  return (
    <section className="py-24 md:py-32" id="about">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="heading-section text-foreground text-center mb-16">
            Автор метода «Точка Ноль»
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
            {/* Photo */}
            <div className="mx-auto md:mx-0">
              <div className="w-64 h-80 md:w-full md:h-[360px] overflow-hidden grayscale">
                <img
                  src="https://cdn.poehali.dev/files/photo_2025-11-11_16-02-37.jpeg"
                  alt="Denis Mureskae — автор метода Точка Ноль, инженер формы личности"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-foreground font-bold text-lg mt-4">Denis Mureskae</p>
              <p className="text-muted-foreground text-sm">Инженер формы личности</p>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <ul className="space-y-3 text-body-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/40">—</span>
                  Не психолог, не коуч, не наставник
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/40">—</span>
                  Инженер формы личности
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/40">—</span>
                  10+ лет практики прямой работы с людьми без посредников
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/40">—</span>
                  Создатель методологии Life Form Engineering
                </li>
              </ul>

              <blockquote className="border-l-2 border-primary/40 pl-6 py-2">
                <p className="text-foreground italic text-body-sm">
                  «Я не лечу. Я не учу жить. Я просто делаю так, чтобы вы перестали мешать сами себе. Остальное происходит само.»
                </p>
              </blockquote>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AuthorSection;
