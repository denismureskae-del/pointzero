const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-serif text-xl font-semibold">Т</span>
            </div>
            <span className="font-serif text-xl font-medium text-foreground">
              Трансформа
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              О себе
            </a>
            <a href="#method" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Метод
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Запись
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Трансформа
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
