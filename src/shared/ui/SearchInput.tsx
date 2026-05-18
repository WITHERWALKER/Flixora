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
        <label htmlFor={id} className="text-sm font-medium text-surface-800">
          {label}
        </label>
      )}

      <div className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white/90 px-4 py-3 transition-all duration-200 focus-within:border-brand-400 focus-within:bg-white focus-within:shadow-[0_18px_48px_-24px_rgba(109,91,208,0.42)] focus-within:ring-4 focus-within:ring-brand-200/60">
        <Search size={18} className="text-support-600" />

        <input
          id={id}
          type="text"
          className={`w-full bg-transparent text-sm outline-none placeholder:text-surface-800/45 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
