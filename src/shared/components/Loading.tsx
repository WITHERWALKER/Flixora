interface LoadingProps {
  message?: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <section
      className="mx-auto flex w-full flex-col items-center justify-center gap-4"
      aria-live="polite"
    >
      <div className="loader"></div>
      <p className="text-surface-950">{message}</p>
    </section>
  );
}
