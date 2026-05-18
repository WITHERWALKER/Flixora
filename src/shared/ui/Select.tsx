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
        <label htmlFor={id} className="text-sm font-bold text-surface-900">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`h-12 rounded-md border-2 border-surface-900 bg-surface-50 px-4 text-sm outline-none transition-all duration-200 focus:shadow-[4px_4px_0_#d1d1e9] focus:ring-4 focus:ring-brand-100 ${className}`}
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
