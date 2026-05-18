import NotFoundImage from "@/assets/NotFound.png";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <section className="surface-card flex w-full flex-col items-center justify-center gap-4 rounded-md p-6 text-center sm:flex-row sm:text-left">
      <img
        src={NotFoundImage}
        alt=""
        aria-hidden="true"
        className="w-32 shrink-0 sm:w-44"
      />

      <div className="space-y-2">
        <h2 className="text-xl font-black text-surface-900">{title}</h2>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </section>
  );
}
