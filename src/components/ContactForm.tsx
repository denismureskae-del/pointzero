import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import ContactModal from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <GlassCard className="p-8 md:p-12" intensity="strong" hover={false}>
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 text-center">
          Запись на консультацию
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-white/30 backdrop-blur-lg border-white/40 placeholder:text-foreground/50"
            />
          </div>
          
          <div>
            <Input
              placeholder="Телефон или Telegram"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="h-12 bg-white/30 backdrop-blur-lg border-white/40 placeholder:text-foreground/50"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="С чем хотите поработать?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[120px] bg-white/30 backdrop-blur-lg border-white/40 placeholder:text-foreground/50 resize-none"
            />
          </div>
          
          <Button type="submit" variant="glass-solid" size="xl" className="w-full group">
            Связаться
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </GlassCard>

      <ContactModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        formData={formData}
      />
    </>
  );
};

export default ContactForm;
