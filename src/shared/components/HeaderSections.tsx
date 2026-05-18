import type React from "react";

interface HeaderSectionProps {
  sectionTitle: string;
  action?: React.ReactNode;
  description?: string;
}

export default function HeaderSections({
  sectionTitle,
  action,
  description,
}: HeaderSectionProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-1">
        <h1 className="text-4xl font-black text-surface-900">
          {sectionTitle}
        </h1>
        {description && <p className="text-sm text-muted">{description}</p>}
      </div>

      {action ? <div>{action}</div> : null}
    </header>
  );
}
