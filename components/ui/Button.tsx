import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary via-primary to-secondary bg-[length:200%_auto] bg-left text-background shadow-[0_0_30px_-6px_var(--color-primary)] hover:bg-right hover:shadow-[0_0_45px_-6px_var(--color-primary)]",
  outline:
    "border border-border bg-white/5 text-foreground hover:border-primary/50 hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-foreground hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base sm:text-lg",
};

/** Reusable call-to-action button with gradient, outline, and ghost variants. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
