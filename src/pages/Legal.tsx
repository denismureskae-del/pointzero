import CloudBackground from "@/components/CloudBackground";
import GlassNavbar from "@/components/GlassNavbar";
import GlassCard from "@/components/GlassCard";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CloudBackground />
      <GlassNavbar />
      
      <main className="pt-32 pb-24">
        <div className="container">
          <GlassCard className="p-12 md:p-16 max-w-3xl mx-auto" intensity="medium">
            <h1 className="heading-section text-foreground mb-8 text-center">
              Правовые документы
            </h1>
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                На сайте не используется сбор данных, регистрация или обработка информации пользователей.
              </p>
              <p>
                Любые контакты происходят через внешние ресурсы.
              </p>
              <p>
                Ваши данные конфиденциальны и не подлежат разглашению.
              </p>
              <p>
                Гарантирована полная анонимность.
              </p>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
