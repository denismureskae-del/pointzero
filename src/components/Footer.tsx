import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-foreground font-bold text-sm tracking-wider uppercase">
            Точка Ноль
          </span>

          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              О методе
            </a>
            <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Услуги
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Запись
            </a>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground/60">
              © 2025–2027 Точка Ноль. Все права защищены.
            </p>
            <Link 
              to="/legal" 
              className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Правовые документы
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
