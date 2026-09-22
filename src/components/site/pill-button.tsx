"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "outline-light" | "outline-dark" | "purple" | "ghost";

interface PillButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-light shadow-sm shadow-brand/30",
  "outline-light":
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-brand",
  "outline-dark":
    "bg-transparent text-brand border border-brand hover:bg-brand hover:text-white",
  purple: "bg-[#605be5] text-white hover:bg-[#4a45d1] shadow-sm shadow-[#605be5]/30",
  ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur",
};

export const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-[42px] px-7 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 h-auto",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
PillButton.displayName = "PillButton";
