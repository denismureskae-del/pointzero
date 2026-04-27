import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <GlassNavbar />

      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <header className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Правовые документы
            </p>
            <h1 className="heading-section text-foreground mb-6">
              Политика конфиденциальности
            </h1>
            <p className="text-sm text-muted-foreground">
              Редакция от 27 апреля 2026 г. · Соответствие ФЗ-152 «О персональных данных»
            </p>
          </header>

          <article className="space-y-12 text-body text-muted-foreground leading-relaxed">
            <section id="general">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика») разработана в соответствии
                с Федеральным законом РФ № 152-ФЗ от 27.07.2006 «О персональных данных» и определяет
                порядок обработки персональных данных и меры по обеспечению их безопасности на сайте{" "}
                <a href="https://pointnow.ru/" className="text-foreground underline">pointnow.ru</a>{" "}
                (далее — «Сайт»).
              </p>
            </section>

            <section id="operator">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                2. Оператор и ответственный за обработку
              </h2>
              <p>
                Владельцем Сайта и лицом, ответственным за обработку персональных данных, является{" "}
                <span className="text-foreground font-medium">Denis Mureskae</span>.
              </p>
              <p className="mt-3">
                Связь с ответственным: через мессенджеры WhatsApp и Telegram, указанные в разделе
                «Связаться» на главной странице Сайта.
              </p>
            </section>

            <section id="data-collection">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                3. Сбор персональных данных
              </h2>
              <p>
                На Сайте <span className="text-foreground font-medium">не используются формы сбора
                персональных данных</span>: отсутствует регистрация, отсутствуют формы обратной связи,
                отсутствуют поля ввода имени, телефона, email или иной информации.
              </p>
              <p className="mt-3">
                Сайт не осуществляет автоматизированный сбор, хранение, систематизацию, уточнение,
                извлечение, использование, передачу, обезличивание, блокирование, удаление или
                уничтожение персональных данных пользователей.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                4. Cookies и метрики
              </h2>
              <p>
                Сайт не использует файлы cookies для идентификации пользователей, не подключает
                сторонние системы аналитики и трекинга, не передаёт пользовательские данные третьим лицам.
              </p>
            </section>

            <section id="external-contacts">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                5. Внешние коммуникации
              </h2>
              <p>
                Все обращения происходят через внешние ресурсы — мессенджеры WhatsApp и Telegram.
                Обработка сообщений в этих сервисах регулируется их собственными политиками
                конфиденциальности. Переходя по ссылке на внешний мессенджер, пользователь принимает
                условия соответствующего сервиса.
              </p>
            </section>

            <section id="cross-border">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                6. Трансграничная передача
              </h2>
              <p>
                Поскольку Сайт не собирает персональные данные, трансграничная передача персональных
                данных не осуществляется.
              </p>
            </section>

            <section id="storage">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                7. Срок хранения
              </h2>
              <p>
                Персональные данные на Сайте не хранятся, поскольку их сбор не производится.
                Переписка в мессенджерах хранится у оператора связи в соответствии с правилами
                соответствующего сервиса.
              </p>
            </section>

            <section id="security">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                8. Меры безопасности
              </h2>
              <p>
                Сайт работает по защищённому протоколу HTTPS с действующим SSL-сертификатом.
                Гарантируется конфиденциальность и анонимность взаимодействия в рамках применимых
                технических средств.
              </p>
            </section>

            <section id="rights">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                9. Права субъекта персональных данных
              </h2>
              <p>
                Пользователь вправе обратиться к ответственному за обработку через указанные
                мессенджеры с любым вопросом, касающимся обработки данных, а также направить
                жалобу в Роскомнадзор.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
                10. Изменения Политики
              </h2>
              <p>
                Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция
                публикуется на данной странице с указанием даты обновления.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
