import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData?: FormData;
}

const ContactModal = ({ open, onOpenChange, formData }: ContactModalProps) => {
  const buildMessage = () => {
    if (formData && (formData.name || formData.contact || formData.message)) {
      return `Здравствуйте, Меня зовут ${formData.name || "—"}, Мой контакт ${formData.contact || "—"}, С чем хотите поработать? ${formData.message || "—"}`;
    }
    return "Здравствуйте! Хочу записаться на консультацию.";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/79680601602?text=${message}`, "_blank");
    onOpenChange(false);
  };

  const handleTelegram = () => {
    const message = encodeURIComponent(buildMessage());
    window.open(`https://t.me/mureskae?text=${message}`, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md backdrop-blur-2xl bg-white/60 border-white/50">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-2xl">Выберите способ связи</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 py-6">
          <Button
            variant="glass"
            size="xl"
            className="w-full justify-start gap-4"
            onClick={handleWhatsApp}
          >
            <div className="w-12 h-12 rounded-md bg-green-500/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+7 968 060-16-02</p>
            </div>
          </Button>

          <Button
            variant="glass"
            size="xl"
            className="w-full justify-start gap-4"
            onClick={handleTelegram}
          >
            <div className="w-12 h-12 rounded-md bg-blue-500/20 flex items-center justify-center">
              <Send className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-left">
              <p className="font-medium">Telegram</p>
              <p className="text-sm text-muted-foreground">@mureskae</p>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
