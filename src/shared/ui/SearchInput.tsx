import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export default function SearchInput({
  id,
  label,
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-surface-900">
          {label}
        </label>
      )}

      <div className="flex items-center gap-3 rounded-md border-2 border-surface-900 bg-surface-50 px-4 py-3 transition-all duration-200 focus-within:shadow-[4px_4px_0_#d1d1e9] focus-within:ring-4 focus-within:ring-brand-100">
        <Search size={18} className="text-brand-500" />

        <input
          id={id}
          type="text"
          className={`w-full bg-transparent text-sm outline-none placeholder:text-surface-900/45 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
