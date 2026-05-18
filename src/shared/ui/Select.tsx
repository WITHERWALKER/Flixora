import type { SelectHTMLAttributes } from "react";

import type SelectOption from "@/shared/types/select.types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  options: SelectOption[];
}

export default function Select({
  id,
  label,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-surface-800">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`h-12 rounded-xl border border-surface-200 bg-white/90 px-4 text-sm outline-none transition-all duration-200 focus:border-brand-400 focus:bg-white focus:shadow-[0_18px_48px_-24px_rgba(109,91,208,0.42)] focus:ring-4 focus:ring-brand-200/60 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
