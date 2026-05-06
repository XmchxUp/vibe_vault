import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-cyan/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-vault-cyan/60 bg-vault-cyan px-5 py-2.5 text-vault-void shadow-glow hover:bg-white hover:shadow-[0_0_64px_rgba(0,229,255,0.42)]",
        ghost:
          "border border-white/12 bg-white/[0.04] px-5 py-2.5 text-vault-text backdrop-blur-xl hover:border-vault-pink/50 hover:bg-white/[0.08] hover:text-white",
        icon:
          "size-10 border border-white/12 bg-white/[0.04] text-vault-text backdrop-blur-xl hover:border-vault-cyan/50 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button };
