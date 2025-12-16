import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-[0.98] rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "relative overflow-hidden backdrop-blur-xl border border-white/30 bg-white/20 text-foreground shadow-lg hover:bg-white/30 hover:border-white/40 hover:shadow-xl active:scale-[0.98] rounded-md before:absolute before:inset-0 before:bg-[url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")] before:opacity-[0.03] before:pointer-events-none",
        "glass-primary":
          "relative overflow-hidden backdrop-blur-xl border border-primary/30 bg-primary/20 text-foreground shadow-lg hover:bg-primary/30 hover:border-primary/40 hover:shadow-xl active:scale-[0.98] rounded-md before:absolute before:inset-0 before:bg-[url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")] before:opacity-[0.03] before:pointer-events-none",
        "glass-solid":
          "relative overflow-hidden backdrop-blur-xl border border-primary/50 bg-primary/80 text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-[0.98] rounded-md before:absolute before:inset-0 before:bg-[url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")] before:opacity-[0.05] before:pointer-events-none",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-lg rounded-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
