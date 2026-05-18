import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  fullWidth?: boolean;
}

const variants = {
  primary:
    "border-2 border-surface-900 bg-brand-500 text-white shadow-[4px_4px_0_#2b2c34] hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[6px_6px_0_#2b2c34] active:translate-y-0 active:bg-brand-700 active:shadow-[2px_2px_0_#2b2c34]",
  secondary:
    "border-2 border-surface-900 bg-support-300 text-surface-900 shadow-[3px_3px_0_#2b2c34] hover:-translate-y-0.5 hover:bg-support-400 active:translate-y-0 active:shadow-[1px_1px_0_#2b2c34]",
  ghost:
    "border-2 border-transparent bg-transparent text-surface-900 hover:border-surface-900 hover:bg-surface-50 active:bg-support-300",
  danger:
    "border-2 border-surface-900 bg-accent-500 text-white shadow-[4px_4px_0_#2b2c34] hover:-translate-y-0.5 hover:bg-accent-600 active:translate-y-0 active:shadow-[2px_2px_0_#2b2c34]",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-md
        font-medium
        transition-all duration-200
        ring-brand
        disabled:opacity-50 disabled:pointer-events-none
        
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}

      {children}
    </button>
  );
}
