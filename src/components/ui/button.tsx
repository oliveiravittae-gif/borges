import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light";
  size?: "default" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "default", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
        size === "icon" ? "size-11" : "min-h-11 px-5 py-3 text-sm",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary-hover",
        variant === "secondary" && "bg-accent text-accent-foreground hover:bg-accent-hover",
        variant === "outline" && "border border-border-strong bg-transparent text-foreground hover:bg-muted",
        variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
        variant === "light" && "bg-surface-light text-navy hover:bg-surface-light/90",
        className,
      )}
      {...props}
    />
  );
});
