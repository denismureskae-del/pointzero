import GlassCard from "@/components/GlassCard";

const ResonanceSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard className="p-10 md:p-12" intensity="medium" hover={false}>
            <h2 className="heading-section text-foreground mb-6">
              Если откликается
            </h2>
            <p className="text-body text-muted-foreground mb-4">
              Ты можешь продолжать ждать, а можешь сделать шаг в сторону своей следующей формы.
            </p>
            <p className="text-body text-foreground">
              Первый разговор — <span className="text-primary font-medium">не обязательство</span>, 
              а точка ясности.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ResonanceSection;