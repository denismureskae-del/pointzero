import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Точка Ноль" 
              className="w-10 h-10 rounded-xl shadow-lg object-cover"
            />
            <span className="font-serif text-xl font-medium text-foreground">
              Точка Ноль
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
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Все права защищены. © 2025-2027
            </p>
            <Link 
              to="/legal" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Правовые документы
            </Link>
            <p className="text-xs text-muted-foreground mt-1">
              Ваши данные конфиденциальны и не подлежат разглашению. Гарантирована полная анонимность.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
