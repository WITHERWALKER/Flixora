import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({
  label,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm text-surface-800 transition-colors hover:bg-support-50">
      <input
        type="checkbox"
        className={`size-4 rounded border-surface-300 accent-brand-500 ${className}`}
        {...props}
      />

      <span>{label}</span>
    </label>
  );
}
