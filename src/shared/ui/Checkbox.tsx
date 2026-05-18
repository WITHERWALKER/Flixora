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
    <label className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-surface-900 transition-colors hover:bg-brand-50">
      <input
        type="checkbox"
        className={`size-4 rounded border-2 border-surface-900 accent-brand-500 ${className}`}
        {...props}
      />

      <span>{label}</span>
    </label>
  );
}
