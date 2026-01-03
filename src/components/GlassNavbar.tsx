import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "method", label: "Что это" },
  { href: "about", label: "Для кого" },
  { href: "contact", label: "Записаться" },
];

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "backdrop-blur-2xl bg-white/40 border-white/50 shadow-lg"
              : "backdrop-blur-xl bg-white/20 border-white/30"
          }`}
        >
          {/* Grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          
          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <button onClick={handleLogoClick} className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Точка Ноль" 
                className="w-10 h-10 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 object-cover"
              />
              <span className="font-serif text-xl font-medium text-foreground">
                Точка Ноль
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="glass-solid" size="sm" onClick={() => handleNavClick('contact')}>
                Начать сдвиг
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-2 space-y-4 border-t border-white/20">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="block text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2 w-full text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                variant="glass-solid" 
                className="w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleNavClick('contact');
                }}
              >
                Начать сдвиг
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GlassNavbar;
