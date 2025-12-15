import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const GlassCard = ({ 
  children, 
  className, 
  hover = true,
  intensity = "medium" 
}: GlassCardProps) => {
  const intensityClasses = {
    light: "bg-white/10 border-white/20 backdrop-blur-lg",
    medium: "bg-white/25 border-white/35 backdrop-blur-xl",
    strong: "bg-white/40 border-white/50 backdrop-blur-2xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500",
        intensityClasses[intensity],
        hover && "hover:bg-white/35 hover:border-white/45 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
