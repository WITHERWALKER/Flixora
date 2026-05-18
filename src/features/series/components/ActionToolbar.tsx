import type { ReactNode } from "react";

interface ActionToolbarProps {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export default function ActionToolbar({
  leftSection,
  rightSection,
}: ActionToolbarProps) {
  return (
    <section className="surface-card flex flex-col gap-4 rounded-md p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">{leftSection}</div>

      <div className="flex flex-wrap items-center gap-3">{rightSection}</div>
    </section>
  );
}
