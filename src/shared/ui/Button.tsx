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
    "bg-brand-500 text-white shadow-[0_18px_48px_-24px_rgba(109,91,208,0.42)] hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "border border-surface-300 bg-white text-surface-900 hover:border-support-300 hover:bg-support-50 hover:text-support-800 active:bg-support-100",
  ghost:
    "bg-transparent text-surface-900 hover:bg-support-50 hover:text-support-800 active:bg-support-100",
  danger:
    "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
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
        rounded-xl
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
